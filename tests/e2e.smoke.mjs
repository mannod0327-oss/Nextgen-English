// Browser smoke test: drives every view and fails on any page/console error.
// Usage: npm start (in another shell) && npm run test:e2e   — needs Playwright + Chromium.
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const base = process.argv[2] ?? 'http://localhost:8080';
const shots = process.argv[3] ?? 'screenshots';
mkdirSync(shots, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1100, height: 900 } });
const errors = [];
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => { if (m.type() === 'error') errors.push(`console: ${m.text()}`); });
page.on('dialog', (d) => d.accept());
const step = async (name, fn) => { await fn(); console.log('✓', name); };

await step('home renders tiles', async () => {
  await page.goto(base);
  await page.waitForSelector('.tile');
  if ((await page.locator('.tile').count()) !== 8) throw new Error('expected 8 tiles');
  await page.screenshot({ path: `${shots}/home.png` });
});

await step('placement: 12 questions → level shown', async () => {
  await page.goto(`${base}/#/placement`);
  for (let i = 0; i < 12; i++) {
    await page.waitForFunction((n) => document.querySelector('.question .muted')?.textContent.startsWith(`Savol ${n} `), i + 1);
    await page.locator('.opt input').first().check();
    await page.click('#next');
  }
  await page.waitForSelector('.big');
  const lvl = (await page.textContent('.big')).trim();
  if (!/^(A1|A2|B1|B2|C1)$/.test(lvl)) throw new Error(`bad level ${lvl}`);
  if (!(await page.textContent('#stats')).includes(lvl)) throw new Error('header not updated');
});

await step('vocab: flip and grade a card persists SRS state', async () => {
  await page.goto(`${base}/#/vocab?cat=Ovqat`);
  await page.waitForSelector('#flip');
  await page.click('#flip');
  await page.click('[data-g="4"]');
  await page.waitForFunction(() => document.querySelector('.muted')?.textContent.startsWith('2 /'));
  const cards = await page.evaluate(() => JSON.parse(localStorage.getItem('nge:cards')));
  if (!cards.apple || cards.apple.interval !== 1) throw new Error(`card not saved: ${JSON.stringify(cards)}`);
  await page.click('#flip');
  await page.screenshot({ path: `${shots}/vocab.png` });
});

await step('immersion: answer 10 rounds then replay', async () => {
  await page.goto(`${base}/#/immersion`);
  for (let i = 0; i < 10; i++) {
    await page.waitForFunction((n) => document.querySelector('.muted')?.textContent.startsWith(`Raund ${n} `), i + 1);
    await page.locator('.opts button').first().click();
  }
  await page.waitForSelector('#again', { timeout: 5000 });
  await page.click('#again');
  await page.waitForSelector('.pic.huge');
});

await step('grammar: answer + check shows feedback and stores %', async () => {
  await page.goto(`${base}/#/grammar?topic=present-simple`);
  await page.fill('[data-q="ps1"] .fill', 'lives');
  await page.locator('[data-q="ps2"] input[value="1"]').check();
  for (const w of ['He', 'usually', 'gets', 'up', 'early']) await page.click(`[data-q="ps4"] .order-bank [data-word="${w}"]`);
  await page.click('#check');
  const ok = await page.locator('.feedback.ok').count();
  if (ok !== 3) throw new Error(`expected 3 correct, got ${ok}`);
  if ((await page.textContent('#result')) !== 'Natija: 75%') throw new Error(await page.textContent('#result'));
  await page.screenshot({ path: `${shots}/grammar.png`, fullPage: true });
});

await step('dictionary: autocomplete + lemma lookup + suggestion', async () => {
  await page.goto(`${base}/#/dictionary`);
  await page.fill('#dq', 'de');
  await page.waitForSelector('#sugg .row');
  await page.goto(`${base}/#/dictionary?q=deadlines`);
  await page.waitForSelector('.entry');
  if (!(await page.textContent('.entry')).includes('muddat')) throw new Error('lemma lookup failed');
  await page.goto(`${base}/#/dictionary?q=aple`);
  await page.waitForSelector('text=Balki');
  await page.screenshot({ path: `${shots}/dictionary.png` });
});

await step('speech: typed attempt is scored', async () => {
  await page.goto(`${base}/#/speech?s=cafe`);
  const box = page.locator('.line').first();
  await box.locator('.typed').fill('can I see the many please');
  await box.locator('.typed').press('Enter');
  const s = await box.locator('.score').textContent();
  if (!(parseInt(s, 10) > 70 && parseInt(s, 10) < 100)) throw new Error(`score ${s}`);
  await page.screenshot({ path: `${shots}/speech.png` });
});

await step('exam: navigate, answer, restore, finish, review mistakes', async () => {
  await page.goto(`${base}/#/exam`);
  await page.uncheck('#shuffle');
  await page.click('#start');
  await page.waitForSelector('.qnav');
  await page.locator('.question input[value="1"]').check(); // q1 correct
  await page.click('#nxt');
  await page.click('.qnav [data-go="3"]');
  await page.fill('.question .fill', 'was'); // q4 correct
  await page.click('.qnav [data-go="0"]');
  if (!(await page.locator('.question input[value="1"]').isChecked())) throw new Error('answer not restored');
  await page.screenshot({ path: `${shots}/exam.png` });
  await page.click('#finish');
  await page.waitForSelector('.big');
  if ((await page.textContent('.big')) !== '20%') throw new Error(await page.textContent('.big'));
  if ((await page.locator('.feedback').count()) !== 8) throw new Error('mistake review count');
});

await step('creator: add question, validate, simulate', async () => {
  await page.goto(`${base}/#/creator`);
  await page.fill('#prompt', 'She ___ to school.');
  await page.fill('#body', 'go\n*goes\ngoing');
  await page.click('#add');
  await page.waitForSelector('#valid .ok');
  const d = await page.evaluate(() => JSON.parse(localStorage.getItem('nge:draftExam')));
  if (d.questions[0].answer !== 1) throw new Error('answer index');
  await page.fill('#prompt', 'broken (no * marked)');
  await page.fill('#body', 'a\nb');
  await page.click('#add');
  await page.waitForSelector('#valid .bad');
  await page.screenshot({ path: `${shots}/creator.png` });
  await page.fill('#body', '*a\nb');
  await page.click('#add');
  await page.click('#simulate');
  await page.waitForSelector('text=Mening testim');
});

await step('mobile layout has no horizontal scroll', async () => {
  await page.setViewportSize({ width: 375, height: 800 });
  for (const r of ['', 'creator', 'vocab', 'grammar?topic=conditionals', 'exam']) {
    await page.goto(`${base}/#/${r}`);
    await page.waitForTimeout(150);
    const over = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    if (over) throw new Error(`horizontal overflow on #/${r}`);
  }
  await page.screenshot({ path: `${shots}/mobile.png` });
});

await browser.close();
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('ALL E2E STEPS PASSED, no console errors');
