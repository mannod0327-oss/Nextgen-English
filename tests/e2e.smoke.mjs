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
  if ((await page.locator('.tile').count()) !== 10) throw new Error('expected 10 tiles');
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

await step('grammar guide: section opens and unit page loads with practice', async () => {
  await page.goto(`${base}/#/grammar`);
  await page.locator('.guide summary').first().click();
  await page.click('.guide a[href$="unit-001.html"]');
  await page.waitForSelector('.practice .px-bar');
  if (!(await page.title()).startsWith('Unit 1')) throw new Error(`title ${await page.title()}`);
  await page.screenshot({ path: `${shots}/guide-unit.png` });
});

await step('reading: answer questions, hide text, score stored', async () => {
  await page.goto(`${base}/#/reading`);
  await page.click('a[href="#/reading?t=my-family"]');
  await page.waitForSelector('#text');
  await page.locator('[data-q="mf1"] input[value="2"]').check();
  await page.fill('[data-q="mf3"] .fill', 'five');
  await page.click('#hide');
  if (await page.locator('#text').isVisible()) throw new Error('text should be hidden');
  await page.click('#check');
  if ((await page.locator('.feedback.ok').count()) !== 2) throw new Error('expected 2 correct');
  if ((await page.textContent('#result')) !== 'Natija: 40%') throw new Error(await page.textContent('#result'));
  await page.screenshot({ path: `${shots}/reading.png`, fullPage: true });
});

await step('reading gloss + dictionary definitions (lazy-loaded WordNet)', async () => {
  await page.goto(`${base}/#/`); // same-URL goto would keep the previous step's hidden text
  await page.goto(`${base}/#/reading?t=my-family`);
  await page.locator('#text .tw', { hasText: /^fifteen$/ }).first().click();
  await page.waitForSelector('#gloss:not([hidden]) .senses');
  await page.locator('#text').evaluate((el) => { const r = document.createRange(); r.selectNodeContents(el.querySelector('.tw')); getSelection().removeAllRanges(); getSelection().addRange(r); });
  await page.click('#mark');
  if ((await page.evaluate(() => CSS.highlights.get('nge-mark').size)) !== 1) throw new Error('highlight not added');
  await page.goto(`${base}/#/dictionary?q=shrinks`);
  await page.waitForSelector('#defs .entry');
  if (!(await page.textContent('#defs')).includes('wither')) throw new Error('definition-only entry missing');
  if (await page.locator('#nf').isVisible()) throw new Error('not-found card should hide');
  await page.goto(`${base}/#/dictionary?q=deadlines`);
  await page.waitForSelector('.entry #defs .senses');
  await page.screenshot({ path: `${shots}/definitions.png` });
});

await step('listening task: script hidden until checked', async () => {
  await page.goto(`${base}/#/reading?t=hotel-booking`);
  await page.waitForSelector('#check');
  if (await page.locator('#text').isVisible()) throw new Error('script should start hidden');
  await page.fill('[data-q="hl4"] .fill', 'karimov');
  await page.click('#check');
  await page.waitForSelector('#text', { state: 'visible' });
  if ((await page.textContent('#result')) !== 'Natija: 20%') throw new Error(await page.textContent('#result'));
});

await step('ielts: hub band calculator, writing word count, speaking cue card', async () => {
  await page.goto(`${base}/#/ielts`);
  await page.fill('#raw-l', '35');
  if (!(await page.textContent('#band')).includes('Listening ≈ 8')) throw new Error(await page.textContent('#band'));
  await page.waitForSelector('a[href^="#/vocab?cat=Akademik"]');
  await page.click('a[href="#/ielts?bank=listening"]');
  await page.waitForSelector('a[href="#/reading?t=il-40"]');
  if ((await page.locator('a[href^="#/reading?t=il-"]').count()) < 40) throw new Error('listening bank');
  await page.click('a[href="#/reading?t=il-1"]');
  await page.fill('[data-q="il1-1"] .fill', 'Spanish');
  await page.click('#check');
  if ((await page.textContent('#result')) !== 'Natija: 20%') throw new Error('bank listening score');
  await page.goto(`${base}/#/ielts?bank=writing`);
  await page.waitForSelector('a[href="#/ielts?w=bw2-homework"]');
  if ((await page.locator('a[href^="#/ielts?w="]').count()) < 60) throw new Error('writing bank');
  await page.click('a[href="#/ielts?w=bw2-homework"]');
  await page.waitForSelector('#essay');
  await page.goto(`${base}/#/ielts?bank=writing`);
  await page.click('a[href="#/ielts?w=w2-cities"]');
  await page.fill('#essay', 'one two three');
  if (!(await page.textContent('#wc')).startsWith('3 / 250')) throw new Error('word count');
  await page.goto(`${base}/#/ielts?mock=reading`);
  await page.waitForSelector('[data-q="mr8"]');
  await page.fill('[data-q="mr8"] .fill', 'bundles');
  await page.locator('[data-q="mr1"] input[value="1"]').check();
  await page.click('#mock-finish');
  if (!(await page.textContent('#mock-result')).includes('2 / 40')) throw new Error(await page.textContent('#mock-result'));
  await page.goto(`${base}/#/mistakes`);
  await page.waitForSelector('[data-q="mr2"]');
  if (await page.locator('[data-q="mr8"]').count()) throw new Error('correct answer must not be in mistakes');
  await page.locator('[data-q="mr2"] input[value="1"]').check();
  await page.click('#retry');
  await page.waitForSelector('#retry-result:has-text("tuzatildi")');
  await page.goto(`${base}/#/`);
  await page.goto(`${base}/#/mistakes`);
  await page.waitForSelector('[data-q="mr3"]');
  if (await page.locator('[data-q="mr2"]').count()) throw new Error('fixed mistake should be removed');
  await page.goto(`${base}/#/ielts?s=s-learning`);
  await page.click('#cue-start');
  await page.waitForFunction(() => document.querySelector('#cue-timer').textContent === '0:59');
  await page.screenshot({ path: `${shots}/ielts.png`, fullPage: true });
});

await step('dictation: text blurred until an attempt is scored', async () => {
  await page.goto(`${base}/#/speech?s=taxi`);
  await page.check('#dict');
  const blur = () => page.locator('.line').first().locator('.say .t').evaluate((el) => getComputedStyle(el).filter);
  if (!(await blur()).includes('blur')) throw new Error('text not hidden in dictation mode');
  const box = page.locator('.line').first();
  await box.locator('.typed').fill('could you take me to the railway station please');
  await box.locator('.typed').press('Enter');
  if ((await blur()) !== 'none') throw new Error('text not revealed after attempt');
  if (!(await box.locator('.score').textContent()).startsWith('100')) throw new Error('dictation score');
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
  if (!(await page.textContent('#finish')).includes('8 ta savol javobsiz')) throw new Error('no in-page confirm');
  await page.click('#finish');
  await page.waitForSelector('.big');
  if ((await page.textContent('.big')) !== '20%') throw new Error(await page.textContent('.big'));
  if ((await page.locator('.feedback').count()) !== 8) throw new Error('mistake review count');
});

await step('exam picker: choosing the B2 test loads it', async () => {
  await page.goto(`${base}/#/`); // previous step ends on #/exam; same-URL goto would not re-render
  await page.goto(`${base}/#/exam`);
  await page.click('#picker [data-exam="3"]');
  await page.waitForFunction(() => document.querySelector('.card h3')?.textContent.includes('(B2)'));
  await page.click('#start');
  await page.waitForSelector('.qnav');
  if ((await page.locator('.qnav button').count()) !== 10) throw new Error('B2 test should have 10 questions');
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
