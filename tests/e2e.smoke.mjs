// Browser smoke test: drives every view and fails on any page/console error.
// Usage: npm start (in another shell) && npm run test:e2e   — needs Playwright + Chromium.
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';

const require = createRequire(import.meta.url);
const { drillItems } = await import('../src/data/drills.js');
const { chromium } = require('playwright');

const base = process.argv[2] ?? 'http://localhost:8080';
const shots = process.argv[3] ?? 'screenshots';
mkdirSync(shots, { recursive: true });
const browser = await chromium.launch({ args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'] });
const page = await browser.newPage({ viewport: { width: 1100, height: 900 } });
const errors = [];
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => { if (m.type() === 'error') errors.push(`console: ${m.text()}`); });
page.on('dialog', (d) => d.accept());
const step = async (name, fn) => { await fn(); console.log('✓', name); };

await step('home renders tiles', async () => {
  await page.goto(base);
  await page.waitForSelector('.tile');
  if ((await page.locator('.tile').count()) !== 14) throw new Error('expected 14 tiles');
  await page.waitForSelector('.wod [data-say]');
  if (!(await page.textContent('.wod b')).trim()) throw new Error('word of the day missing');
  await page.screenshot({ path: `${shots}/home.png` });
});

await step('backup: download progress JSON, restore it, reject a bad file', async () => {
  await page.goto(`${base}/#/`);
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('#backup-save')]);
  const file = `${shots}/backup.json`;
  await dl.saveAs(file);
  const { readFileSync, writeFileSync } = await import('node:fs');
  const snap = JSON.parse(readFileSync(file, 'utf8'));
  if (snap.format !== 'nge-backup') throw new Error('bad backup format');
  snap.data.profile = { ...(snap.data.profile ?? {}), level: 'B2', xp: 777, days: [] };
  writeFileSync(file, JSON.stringify(snap));
  await page.setInputFiles('#backup-load', file);
  await page.waitForSelector('#backup-msg:has-text("Tiklandi")');
  if (!(await page.textContent('#stats')).includes('777')) throw new Error('restore did not apply');
  writeFileSync(`${shots}/bad.json`, '{"nope":1}');
  await page.setInputFiles('#backup-load', `${shots}/bad.json`);
  await page.waitForSelector('#backup-msg:has-text("zaxira nusxasi emas")');
  await page.evaluate(() => localStorage.clear());
  await page.reload(); // drop the in-memory copy too, so later steps start fresh
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

await step('vocab: new everyday themes (airport, doctor, bank) are listed and open', async () => {
  await page.goto(`${base}/#/vocab`);
  for (const c of ['Aeroportda', 'Shifokorda', 'Bankda', 'Ekologiya va iqlim', 'Jinoyat va qonun', 'Media va reklama', 'Turizm', 'Iqtisodiyot', 'Shahar va uy-joy']) await page.waitForSelector(`a[href="#/vocab?cat=${encodeURIComponent(c)}"]`);
  await page.goto(`${base}/#/vocab?cat=Bankda`);
  await page.waitForSelector('text=1 / 20');
});

await step('vocab writing test: pick a theme, write + listen questions, 100% saved as best', async () => {
  await page.goto(`${base}/#/vocab`);
  await page.selectOption('#vt-cat', 'Bankda');
  await page.click('#vt-go');
  await page.waitForSelector('.question[data-q^="vt-"]');
  const ids = await page.$$eval('.question[data-q^="vt-"]', (els) => els.map((e) => e.dataset.q));
  if (ids.length !== 10) throw new Error(`expected 10 questions, got ${ids.length}`);
  if (!(await page.locator('.question [data-say]').count())) throw new Error('no listening question');
  for (const id of ids) await page.fill(`[data-q="${id}"] .fill`, id.slice(3).replace(/-/g, ' '));
  await page.click('#check');
  if ((await page.textContent('#result')) !== 'Natija: 100%') throw new Error(await page.textContent('#result'));
  await page.goto(`${base}/#/`);
  await page.goto(`${base}/#/vocab`);
  if (!(await page.textContent('.badge.ok')).includes('100%')) throw new Error('best score not shown');
});

await step('articles & prepositions: 10 random questions, all correct → 100%, explanation shown', async () => {
  await page.goto(`${base}/#/`);
  await page.click('a.tile[href="#/drill"]');
  await page.click('a.tile[href="#/drill?t=articles"]');
  await page.click('a[href="#/drill?t=articles&set=prepositions"]');
  await page.waitForFunction(() => { const q = [...document.querySelectorAll('.question')]; return q.length && q.every((e) => e.dataset.q.startsWith('pr')); });
  const ids = await page.$$eval('.question', (els) => els.map((e) => e.dataset.q));
  if (ids.length !== 10 || !ids.every((id) => id.startsWith('pr'))) throw new Error(`bad question set ${ids}`);
  for (const id of ids) await page.locator(`[data-q="${id}"] input[value="${drillItems.find((q) => q.id === id).answer}"]`).check();
  await page.click('#check');
  if ((await page.textContent('#result')) !== 'Natija: 100%') throw new Error(await page.textContent('#result'));
  await page.click('a[href*="r="]');
  await page.waitForSelector('.question');
  await page.locator(`[data-q] input[type=radio]`).first().check();
  await page.click('#check');
  if (!(await page.locator('.fb').first().textContent()).trim()) throw new Error('no feedback/explanation');
  await page.goto(`${base}/#/drill`);
  if (!(await page.textContent('a.tile[href="#/drill?t=articles"]')).includes('100%')) throw new Error('best score missing on hub');
  await page.goto(`${base}/#/articles?set=articles`);
  await page.waitForSelector('.question[data-q^="ar"]');
  await page.goto(`${base}/#/drill?t=spelling`);
  await page.waitForSelector('.question[data-q^="sp-"]');
  const sp = await page.$$eval('.question', (els) => els.map((e) => e.dataset.q));
  for (const id of sp) await page.locator(`[data-q="${id}"] input[value="${drillItems.find((q) => q.id === id).answer}"]`).check();
  await page.click('#check');
  if ((await page.textContent('#result')) !== 'Natija: 100%') throw new Error('spelling: ' + (await page.textContent('#result')));
  await page.goto(`${base}/#/drill?t=linkers`);
  await page.waitForSelector('.question[data-q^="lk"]');
  const lk = await page.$$eval('.question', (els) => els.map((e) => e.dataset.q));
  for (const id of lk) await page.locator(`[data-q="${id}"] input[value="${drillItems.find((q) => q.id === id).answer}"]`).check();
  await page.click('#check');
  if ((await page.textContent('#result')) !== 'Natija: 100%') throw new Error('linkers: ' + (await page.textContent('#result')));
  await page.goto(`${base}/#/drill?t=stress`);
  await page.waitForSelector('.question[data-q^="st-"] [data-say]');
  const st = await page.$$eval('.question', (els) => els.map((e) => e.dataset.q));
  for (const id of st) await page.locator(`[data-q="${id}"] input[value="${drillItems.find((q) => q.id === id).answer}"]`).check();
  await page.click('#check');
  if ((await page.textContent('#result')) !== 'Natija: 100%') throw new Error('stress: ' + (await page.textContent('#result')));
});

await step('writing helper: check button reports words, linkers and Uzbek-speaker mistakes', async () => {
  await page.goto(`${base}/#/ielts?w=bw2-gap-year`);
  await page.fill('#essay', 'i am agree that a gap year is useful. However, many peoples need more informations. In the other hand, it costs money.');
  await page.click('#wcheck');
  const rep = await page.textContent('#wreport');
  for (const t of ['so\'z (kamida 250)', 'however', 'informations', 'on the other hand', 'agree — fe\'l']) if (!rep.includes(t)) throw new Error(`report missing "${t}"`);
  await page.fill('#essay', '');
});

await step('numbers listening: 10 rounds with audio, wrong answer marked and correct one revealed', async () => {
  await page.goto(`${base}/#/drill`);
  await page.click('a.tile[href="#/numbers"]');
  await page.waitForSelector('[data-round="9"] input');
  if ((await page.locator('[data-round] [data-say]').count()) !== 10) throw new Error('each round needs a 🔊 button');
  await page.fill('[data-round="0"] input', 'wrong');
  await page.click('#check');
  if (!(await page.locator('[data-round="0"] .feedback.bad').count())) throw new Error('wrong answer not marked');
  const shown = (await page.textContent('[data-round="0"] .feedback b')).trim();
  await page.goto(`${base}/#/`);
  await page.goto(`${base}/#/numbers`);
  await page.waitForSelector('[data-round="0"] input');
  if (!shown) throw new Error('correct answer not revealed');
});

await step('collocations: phrasal verbs listed; quiz can ask for a particle', async () => {
  await page.goto(`${base}/#/collocations`);
  if (!(await page.textContent('#app')).includes('put up with')) throw new Error('phrasal verbs missing');
  let found = false;
  for (let i = 0; i < 8 && !found; i++) {
    await page.goto(`${base}/#/collocations?mode=test&r=${i}`);
    await page.waitForSelector('.question');
    found = await page.evaluate(() => [...document.querySelectorAll('.question b')].some((b) => /^\d+\. (get|look|put|turn|give|come) ___/.test(b.textContent)));
  }
  if (!found) throw new Error('no particle question in 8 quizzes');
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

await step('grammar C1: inversion topic renders, fill + order graded correct', async () => {
  await page.goto(`${base}/#/grammar?topic=inversion`);
  await page.waitForSelector('[data-q="inv3"]');
  await page.fill('[data-q="inv3"] .fill', 'had we left');
  for (const w of ['Rarely', 'does', 'she', 'complain', 'about', 'work.']) await page.click(`[data-q="inv5"] .order-bank [data-word="${w}"]`);
  await page.click('#check');
  if ((await page.locator('.feedback.ok').count()) !== 2) throw new Error('inversion: expected 2 correct');
});

await step('ielts bank: writing task shows Band 7 model answer', async () => {
  await page.goto(`${base}/#/ielts?w=bw2-gap-year`);
  await page.waitForSelector('details .model', { state: 'attached' });
  await page.click('details:has(.model) summary');
  if (!(await page.locator('details .model').isVisible()) || !(await page.textContent('details .model')).includes('gap year')) throw new Error('model answer missing');
});

await step('ielts guide: strategy page from hub, mini practice scored, best shown on hub', async () => {
  await page.goto(`${base}/#/`);
  await page.goto(`${base}/#/ielts`);
  await page.click('a[href="#/ielts?guide=tfng"]');
  await page.waitForSelector('#guide-check');
  for (const [id, i] of [['gd-tf1', 0], ['gd-tf2', 1], ['gd-tf3', 2], ['gd-tf4', 0]]) await page.check(`[data-q="${id}"] input[value="${i}"]`);
  await page.click('#guide-check');
  if ((await page.textContent('#guide-result')) !== 'Natija: 100%') throw new Error('guide score');
  await page.goto(`${base}/#/`);
  await page.goto(`${base}/#/ielts`);
  if (!(await page.textContent('a[href="#/ielts?guide=tfng"]')).includes('100%')) throw new Error('guide best not on hub');
});

await step('ielts speaking: Part 3 sample answers open under the questions', async () => {
  await page.goto(`${base}/#/`);
  await page.goto(`${base}/#/ielts?s=b-family`);
  await page.waitForSelector('.p3-model');
  if ((await page.$$('.p3-model')).length < 2) throw new Error('part 3 models missing');
  await page.click('.p3-model summary');
  if (!(await page.isVisible('.p3-model p'))) throw new Error('model not shown');
});

await step('ielts mock 4: listed on hub, reading-4 scores answers', async () => {
  await page.goto(`${base}/#/ielts`);
  await page.waitForSelector('a[href="#/ielts?mock=listening-4"]');
  await page.waitForSelector('a[href="#/ielts?mock=reading-5"]');
  await page.goto(`${base}/#/ielts?mock=reading-4`);
  await page.waitForSelector('[data-q="n4r13"]');
  await page.fill('[data-q="n4r13"] .fill', 'saxaul');
  await page.fill('[data-q="n4r12"] .fill', '2005');
  await page.locator('[data-q="n4r1"] input[value="0"]').check();
  await page.click('#mock-finish');
  if (!(await page.textContent('#mock-result')).includes('3 / 40')) throw new Error(await page.textContent('#mock-result'));
});

await step('grammar A1–B1: can, too/enough, plurals topics render and grade', async () => {
  await page.goto(`${base}/#/grammar?topic=can`);
  await page.waitForSelector('[data-q="a1cn4"]');
  for (const w of ['Can', 'you', 'help', 'me?']) await page.click(`[data-q="a1cn4"] .order-bank [data-word="${w}"]`);
  await page.fill('[data-q="a1cn3"] .fill', "can't");
  await page.click('#check');
  if ((await page.locator('.feedback.ok').count()) !== 2) throw new Error('can: expected 2 correct');
  await page.goto(`${base}/#/grammar?topic=too-enough`);
  for (const w of ['The', 'room', "isn't", 'big', 'enough.']) await page.click(`[data-q="b1te5"] .order-bank [data-word="${w}"]`);
  await page.fill('[data-q="b1te4"] .fill', 'to');
  await page.click('#check');
  if ((await page.locator('.feedback.ok').count()) !== 2) throw new Error('too/enough: expected 2 correct');
  await page.goto(`${base}/#/grammar?topic=frequency`);
  for (const w of ['We', 'never', 'eat', 'fast', 'food.']) await page.click(`[data-q="a2fq5"] .order-bank [data-word="${w}"]`);
  await page.locator('[data-q="a2fq2"] input[value="1"]').check();
  await page.click('#check');
  if ((await page.locator('.feedback.ok').count()) !== 2) throw new Error('frequency: expected 2 correct');
  await page.goto(`${base}/#/grammar?topic=reported-questions`);
  for (const w of ['He', 'asked', 'me', 'where', 'I', 'worked.']) await page.click(`[data-q="b2rq5"] .order-bank [data-word="${w}"]`);
  await page.fill('[data-q="b2rq4"] .fill', 'had seen');
  await page.click('#check');
  if ((await page.locator('.feedback.ok').count()) !== 2) throw new Error('reported questions: expected 2 correct');
  await page.goto(`${base}/#/grammar?topic=cleft`);
  for (const w of ['What', 'he', 'did', 'was', 'apologise.']) await page.click(`[data-q="c1cl5"] .order-bank [data-word="${w}"]`);
  await page.fill('[data-q="c1cl3"] .fill', 'What');
  await page.click('#check');
  if ((await page.locator('.feedback.ok').count()) !== 2) throw new Error('cleft: expected 2 correct');
  await page.goto(`${base}/#/grammar?topic=plurals-this`);
  await page.fill('[data-q="a1pl1"] .fill', 'children');
  await page.click('#check');
  if ((await page.locator('.feedback.ok').count()) !== 1) throw new Error('plurals: expected 1 correct');
});

await step('ielts speaking: Part 2 sample answer opens under the cue card', async () => {
  await page.goto(`${base}/#/ielts?s=b-gifts`);
  await page.waitForSelector('.cue details .model', { state: 'attached' });
  await page.click('.cue details summary');
  if (!(await page.textContent('.cue .model')).includes('oil paints')) throw new Error('sample answer missing');
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

await step('reading B1: new texts listed, Registan answers graded', async () => {
  await page.goto(`${base}/#/reading`);
  for (const id of ['registan', 'chorsu', 'teen-sleep', 'food-waste', 'electric-cars', 'job-interview']) await page.waitForSelector(`a[href="#/reading?t=${id}"]`);
  await page.click('a[href="#/reading?t=registan"]');
  await page.waitForSelector('[data-q="b1rg5"]');
  await page.locator('[data-q="b1rg1"] input[value="1"]').check();
  await page.fill('[data-q="b1rg5"] .fill', 'deer');
  await page.click('#check');
  if ((await page.locator('.feedback.ok').count()) !== 2) throw new Error('B1 reading: expected 2 correct');
});

await step('listening: new tasks listed; doctor call script hidden until checked, answers graded', async () => {
  await page.goto(`${base}/#/reading`);
  for (const id of ['train-station', 'pizza-order', 'weather-forecast', 'doctor-call', 'khiva-radio', 'language-podcast', 'lecture-sleep-science', 'debate-tourism', 'seminar-ai-marking', 'tour-silk-factory', 'news-water-saving', 'l-meet-new-friend', 'l-what-time', 'l-at-the-cafe', 'l-my-room']) await page.waitForSelector(`a[href="#/reading?t=${id}"]`);
  await page.click('a[href="#/reading?t=doctor-call"]');
  await page.waitForSelector('#check');
  if (await page.locator('#text').isVisible()) throw new Error('script should start hidden');
  await page.fill('[data-q="l3dr3"] .fill', 'Rakhimov');
  await page.locator('[data-q="l3dr4"] input[value="1"]').check();
  await page.click('#check');
  await page.waitForSelector('#text', { state: 'visible' });
  if ((await page.textContent('#result')) !== 'Natija: 33%') throw new Error(await page.textContent('#result'));
});

await step('reading B2: new texts listed, smart cities answers graded', async () => {
  await page.goto(`${base}/#/reading`);
  for (const id of ['four-day-week', 'laughter', 'microbiome', 'smart-cities']) await page.waitForSelector(`a[href="#/reading?t=${id}"]`);
  await page.click('a[href="#/reading?t=smart-cities"]');
  await page.waitForSelector('[data-q="b2sc5"]');
  await page.fill('[data-q="b2sc5"] .fill', 'divide');
  await page.locator('[data-q="b2sc2"] input[value="2"]').check();
  await page.click('#check');
  if ((await page.locator('.feedback.ok').count()) !== 2) throw new Error('B2 reading: expected 2 correct');
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
  await page.goto(`${base}/#/progress`);
  await page.waitForSelector('.chart circle');
  if (!(await page.textContent('.tbl')).includes('2/40')) throw new Error('mock history missing on progress page');
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

await step('irregular verbs: filter table, test grades answers', async () => {
  await page.goto(`${base}/#/verbs`);
  await page.fill('#vq', 'bought');
  if ((await page.locator('#verbs tbody tr:not([hidden])').count()) !== 1) throw new Error('verb filter');
  await page.click('a[href="#/verbs?mode=test"]');
  await page.waitForSelector('.question');
  const first = page.locator('.question').first();
  const prompt = await first.locator('b').textContent();
  const v1 = prompt.split(' (')[0];
  const ans = await page.evaluate(async (v) => (await import('./src/data/irregular-verbs.js')).irregularVerbs.find((x) => x[0] === v)[1].split('/')[0], v1);
  await first.locator('.fill').fill(ans);
  await page.click('#check');
  if (!(await first.locator('.feedback.ok').count())) throw new Error('correct V2 not accepted');
  if (!(await page.textContent('#result')).startsWith('Natija: ')) throw new Error('verbs result');
});

await step('daily plan: four tasks, grammar task ticks after checking', async () => {
  await page.goto(`${base}/#/`);
  await page.waitForSelector('.plan .row');
  if ((await page.locator('.plan .row').count()) !== 4) throw new Error('plan size');
  const href = await page.locator('.plan .row').nth(1).getAttribute('href');
  await page.click(`.plan a[href="${href}"]`);
  await page.waitForSelector('#check');
  await page.click('#check');
  await page.goto(`${base}/#/verbs`);
  await page.goto(`${base}/#/`);
  await page.waitForSelector('.plan .row');
  if (!(await page.locator('.plan .row').nth(1).getAttribute('class')).includes('done')) throw new Error('grammar task not ticked');
});

await step('minimal pairs: 10 rounds, correct picks are scored', async () => {
  await page.goto(`${base}/#/sounds`);
  await page.click('a[href="#/sounds?set=w-v"]');
  for (let i = 0; i < 10; i++) {
    await page.waitForSelector('#listen');
    const word = await page.getAttribute('#listen', 'data-word');
    await page.click(`.pick-word[data-w="${word}"]`);
    await page.click('#next');
  }
  if ((await page.textContent('#game .score')).trim() !== '10 / 10') throw new Error('sounds score');
});

await step('speaking recorder: record with fake mic, recording appears with audio', async () => {
  await page.goto(`${base}/#/ielts?s=b-family`);
  await page.click('#rec-start');
  await page.waitForSelector('#rec-time:has-text("⏺")');
  await page.waitForTimeout(1200);
  await page.click('#rec-stop');
  await page.waitForSelector('#rec-list audio');
  if (!(await page.getAttribute('#rec-list audio', 'src')).startsWith('blob:')) throw new Error('no recording blob');
  await page.evaluate(() => { navigator.mediaDevices.getUserMedia = () => Promise.reject(new Error('denied')); });
  await page.click('#rec-start');
  await page.waitForSelector('#rec-msg:has-text("ruxsat berilmadi")');
});

await step('collocations: table and a graded 10-question quiz', async () => {
  await page.goto(`${base}/#/collocations`);
  await page.waitForSelector('.tbl');
  await page.click('a[href="#/collocations?mode=test"]');
  await page.waitForSelector('.question');
  if ((await page.locator('.question').count()) !== 10) throw new Error('10 questions expected');
  await page.click('#check');
  if (!(await page.textContent('#result')).startsWith('Natija: 0%')) throw new Error(await page.textContent('#result'));
});

await step('global search: finds words, grammar, texts and IELTS tasks; links work', async () => {
  await page.goto(`${base}/#/search`);
  await page.fill('#sq', 'present perfect');
  await page.waitForSelector('#sres .row');
  if (!(await page.textContent('#sres')).includes('Grammatika')) throw new Error('grammar topic not found');
  await page.fill('#sq', "o'zbek");
  await page.waitForSelector('#sres .row');
  await page.fill('#sq', 'caravanserai');
  await page.waitForSelector('#sres a[href="#/reading?t=ir-21"]');
  await page.click('#sres a[href="#/reading?t=ir-21"]');
  await page.waitForSelector('#check');
  await page.goto(`${base}/#/search?q=zzzzqqq`);
  await page.waitForSelector('#sres:has-text("topilmadi")');
});

await step('dictation: text blurred until an attempt is scored', async () => {
  await page.goto(`${base}/#/speech?s=complaint`);
  await page.check('#dict');
  const blur = () => page.locator('.line').first().locator('.say .t').evaluate((el) => getComputedStyle(el).filter);
  if (!(await blur()).includes('blur')) throw new Error('text not hidden in dictation mode');
  const box = page.locator('.line').first();
  await box.locator('.typed').fill("Excuse me, the air conditioning in my room isn't working.");
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

await step('exam picker: choosing the B2 and C1 tests loads them', async () => {
  await page.goto(`${base}/#/`); // previous step ends on #/exam; same-URL goto would not re-render
  await page.goto(`${base}/#/exam`);
  await page.click('#picker [data-exam="3"]');
  await page.waitForFunction(() => document.querySelector('.card h3')?.textContent.includes('(B2)'));
  await page.click('#start');
  await page.waitForSelector('.qnav');
  if ((await page.locator('.qnav button').count()) !== 10) throw new Error('B2 test should have 10 questions');
  await page.goto(`${base}/#/`);
  await page.goto(`${base}/#/exam`);
  await page.click('#picker [data-exam="5"]');
  await page.waitForFunction(() => document.querySelector('.card h3')?.textContent.includes('(C1)'));
  await page.click('#start');
  await page.waitForSelector('.qnav');
  if ((await page.locator('.qnav button').count()) !== 25) throw new Error('C1 test should have 25 questions');
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

await step('progress: achievements section shows earned badges from earlier steps', async () => {
  await page.goto(`${base}/#/`);
  await page.goto(`${base}/#/progress`);
  await page.waitForSelector('.badges .bdg');
  if ((await page.locator('.bdg').count()) < 12) throw new Error('expected ≥12 badges');
  for (const id of ['first-step', 'first-mock', 'drill-100']) if (!(await page.getAttribute(`[data-badge="${id}"]`, 'class')).includes('earned')) throw new Error(`${id} should be earned`);
  if ((await page.getAttribute('[data-badge="band-7"]', 'class')).includes('earned')) throw new Error('band-7 must not be earned');
});

await step('vocab print sheet: theme list as a table, quiz mode blanks Uzbek, print media hides chrome', async () => {
  await page.goto(`${base}/#/`);
  await page.goto(`${base}/#/vocab`);
  await page.selectOption('#vt-cat', 'Shifokorda');
  await page.click('#vp-go');
  await page.waitForSelector('#vp-table');
  const rows = await page.$$eval('#vp-table tbody tr', (r) => r.length);
  if (rows < 10) throw new Error(`only ${rows} rows`);
  await page.check('#vp-quiz');
  if (await page.$eval('.uz-col', (el) => getComputedStyle(el).color) !== 'rgba(0, 0, 0, 0)') throw new Error('quiz mode');
  await page.emulateMedia({ media: 'print' });
  const hidden = await page.$$eval('.top, .nav, .no-print', (els) => els.every((e) => getComputedStyle(e).display === 'none'));
  await page.emulateMedia({ media: 'screen' });
  if (!hidden) throw new Error('chrome visible in print');
});

await step('daily goal: ring shows today\'s XP, goal choice persists, week has 7 days', async () => {
  await page.goto(`${base}/#/verbs`);
  await page.goto(`${base}/#/`);
  await page.click('[data-goal="20"]');
  await page.waitForSelector('[data-goal="20"][aria-pressed="true"]');
  const xp = await page.evaluate(() => JSON.parse(localStorage.getItem('nge:xpDays'))[new Date().toISOString().slice(0, 10)]);
  if (!(xp > 0)) throw new Error('xpDays not recorded by earlier steps');
  const label = await page.getAttribute('.ring', 'aria-label');
  if (label !== `Bugun ${xp} / 20 XP`) throw new Error(`ring label ${label}`);
  if ((await page.$$('.week .day')).length !== 7) throw new Error('week');
  await page.goto(`${base}/#/verbs`);
  await page.goto(`${base}/#/`);
  if (!(await page.isVisible('[data-goal="20"][aria-pressed="true"]'))) throw new Error('goal not persisted');
});

const ROUTES = ['', 'creator', 'vocab', 'vocab?mode=test', 'vocab?cat=Shifokorda', 'vocab?cat=Fan va tadqiqot', 'vocab?cat=Koinot va texnologiya', 'vocab?mode=test&cat=Jinoyat va qonun', 'grammar?topic=conditionals', 'grammar?topic=participle-clauses', 'grammar?topic=possessives', 'grammar?topic=question-tags', 'grammar?topic=must-have-to', 'grammar?topic=verb-patterns', 'grammar?topic=subjunctive', 'grammar?topic=past-perfect', 'grammar?topic=wish', 'exam', 'verbs', 'ielts', 'ielts?w=bw1-energy', 'ielts?w=bw2-uniform', 'ielts?w=bw2-zoos', 'ielts?w=bw1-commute', 'ielts?w=bw1-museum-visits', 'ielts?w=bw1-household-waste', 'ielts?w=bw2-ai-jobs', 'ielts?s=b-tradition', 'ielts?s=b-books', 'ielts?s=b-internet', 'ielts?guide=listening', 'ielts?guide=task2', 'ielts?mock=reading', 'reading?t=il-1', 'reading?t=chorsu', 'reading?t=l-at-the-cafe', 'reading?t=placebo', 'reading?t=space-debris', 'reading?t=trust-experts', 'reading?t=language-podcast', 'reading?t=debate-tourism', 'reading?t=l-library-intro', 'reading?t=l-interview-nudges', 'mistakes', 'sounds', 'sounds?set=th-s', 'sounds?set=ou-or', 'speech?s=lost', 'vocab?mode=print&cat=Shifokorda', 'progress', 'collocations', 'collocations?mode=test', 'drill', 'drill?t=articles', 'drill?t=spelling', 'drill?t=linkers', 'drill?t=stress', 'drill?t=task1', 'drill?t=synonyms', 'drill?t=forms', 'drill?t=deps', 'numbers', 'articles?set=articles', 'ielts?mock=listening-3', 'ielts?mock=reading-3', 'ielts?mock=listening-4', 'ielts?mock=reading-4', 'ielts?mock=listening-5', 'ielts?mock=reading-5', 'ielts?mock=listening-6', 'ielts?mock=reading-6', 'ielts?mock=listening-7', 'ielts?mock=reading-7', 'ielts?mock=listening-8', 'ielts?mock=reading-8', 'search?q=present'];

await step('mobile layout has no horizontal scroll', async () => {
  await page.setViewportSize({ width: 375, height: 800 });
  for (const r of ROUTES) {
    await page.goto(`${base}/#/${r}`);
    await page.waitForTimeout(150);
    const over = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    if (over) throw new Error(`horizontal overflow on #/${r}`);
  }
  await page.screenshot({ path: `${shots}/mobile.png` });
});

await step('a11y audit: every control has a name, unique ids, lang set, visible keyboard focus', async () => {
  const problems = [];
  for (const r of ROUTES) {
    await page.goto(`${base}/#/${r}`);
    await page.waitForTimeout(150);
    problems.push(...(await page.evaluate((route) => {
      const out = [];
      const named = (el) => (el.getAttribute('aria-label') ?? el.getAttribute('title') ?? '').trim()
        || (el.getAttribute('aria-labelledby') && document.getElementById(el.getAttribute('aria-labelledby'))?.textContent.trim())
        || (el.labels && [...el.labels].some((l) => l.textContent.trim()))
        || (!['INPUT', 'SELECT', 'TEXTAREA'].includes(el.tagName) && (el.textContent.trim() || el.querySelector('img[alt]:not([alt=""])')));
      for (const el of document.querySelectorAll('button, a[href], input:not([type=hidden]), select, textarea')) {
        if (el.closest('[hidden]') || (el.type === 'file' && el.closest('label'))) continue;
        if (!named(el)) out.push(`#/${route}: unnamed <${el.tagName.toLowerCase()} ${el.id ? `id=${el.id}` : el.className}>`);
      }
      const ids = [...document.querySelectorAll('[id]')].map((e) => e.id);
      for (const d of new Set(ids.filter((x, k) => ids.indexOf(x) !== k))) out.push(`#/${route}: duplicate id ${d}`);
      for (const img of document.querySelectorAll('img:not([alt])')) out.push(`#/${route}: img without alt`);
      return out;
    }, r)));
  }
  if (await page.getAttribute('html', 'lang') !== 'uz') problems.push('html lang');
  for (const [r, sel] of [['reading?t=chorsu', '#text'], ['ielts?mock=reading-7', '.reading-text'], ['speech?s=cafe', '.say .t']]) {
    await page.goto(`${base}/#/${r}`);
    await page.waitForSelector(sel);
    if (await page.getAttribute(sel, 'lang') !== 'en') problems.push(`#/${r}: English text without lang="en"`);
  }
  await page.goto(`${base}/#/`);
  await page.keyboard.press('Tab');
  const outline = await page.evaluate(() => getComputedStyle(document.activeElement).outlineStyle);
  if (outline === 'none') problems.push('no visible focus outline');
  if (problems.length) throw new Error(`${problems.length} a11y problems:\n${[...new Set(problems)].slice(0, 40).join('\n')}`);
});

await step('display prefs: night mode + font size persist, readable contrast, no mobile overflow at A+ max', async () => {
  await page.goto(`${base}/#/`);
  await page.waitForSelector('#theme');
  const contrast = () => page.evaluate(() => {
    const lum = (c) => { const [r, g, b] = c.match(/\d+(\.\d+)?/g).slice(0, 3).map(Number).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
    const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
    const cs = (el) => getComputedStyle(el);
    const card = document.querySelector('.card, .tile') ?? document.body;
    return { text: ratio(cs(document.body).color, cs(document.body).backgroundColor), muted: ratio(cs(document.querySelector('.muted') ?? document.body).color, cs(card).backgroundColor) };
  });
  const start = await page.evaluate(() => document.documentElement.dataset.theme ?? '');
  await page.click('#theme');
  const theme = await page.evaluate(() => document.documentElement.dataset.theme);
  if (!theme || theme === start) throw new Error('theme did not toggle');
  const c1 = await contrast();
  await page.click('#theme');
  const c2 = await contrast();
  for (const c of [c1, c2]) if (c.text < 7 || c.muted < 4.5) throw new Error(`low contrast ${JSON.stringify(c)}`);
  await page.click('#theme');
  await page.click('#fs-up');
  await page.reload();
  await page.waitForSelector('#theme');
  if ((await page.evaluate(() => document.documentElement.dataset.theme)) !== theme) throw new Error('theme not saved');
  if ((await page.evaluate(() => getComputedStyle(document.documentElement).fontSize)) !== '18px') throw new Error('font size not saved');
  for (let i = 0; i < 5; i++) if (!(await page.isDisabled('#fs-up'))) await page.click('#fs-up');
  if (!(await page.isDisabled('#fs-up'))) throw new Error('A+ should stop at the maximum');
  await page.setViewportSize({ width: 375, height: 800 });
  for (const r of ['', 'ielts', 'grammar?topic=inversion', 'reading?t=my-day', 'verbs']) {
    await page.goto(`${base}/#/${r}`);
    await page.waitForTimeout(150);
    if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)) throw new Error(`overflow at max font on #/${r}`);
  }
  await page.evaluate(() => { const k = Object.keys(localStorage).find((x) => x.endsWith('prefs')); if (k) localStorage.removeItem(k); });
  await page.setViewportSize({ width: 1100, height: 900 });
});

await step('offline: after one online visit the app reloads with no network (service worker)', async () => {
  const ctx = await browser.newContext({ viewport: { width: 1100, height: 900 } });
  const p = await ctx.newPage();
  p.on('pageerror', (e) => errors.push(`offline pageerror: ${e.message}`));
  await p.goto(`${base}/#/`);
  await p.evaluate(() => navigator.serviceWorker.ready);
  await p.reload(); // now controlled by the worker, which caches every module it serves
  await p.waitForSelector('.tile');
  for (const r of ['ielts', 'verbs', 'dictionary?q=run']) { await p.goto(`${base}/#/${r}`); await p.waitForTimeout(300); }
  await ctx.setOffline(true);
  await p.goto(`${base}/#/verbs`);
  await p.waitForSelector('#verbs tbody tr');
  await p.goto(`${base}/#/`);
  await p.reload();
  await p.waitForSelector('.tile');
  await ctx.close();
});

await browser.close();
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('ALL E2E STEPS PASSED, no console errors');
