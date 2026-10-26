// Grammar topics tree (Oxford Practice Grammar idea): rule + table + exercises.
// Exercises use the exam question schema (see core/exam.js) so one engine grades all.

export const grammar = [
  {
    id: 'present-simple', title: 'Present Simple', level: 'A1',
    rule: "Odat, doimiy holat va umumiy haqiqatlar uchun. 3-shaxs birlikda (he/she/it) fe'lga -s/-es qo'shiladi.",
    table: [['I / you / we / they', 'work', "don't work", 'Do … work?'], ['he / she / it', 'works', "doesn't work", 'Does … work?']],
    examples: ['She works in a bank.', 'Water boils at 100°C.', "They don't eat meat."],
    exercises: [
      { id: 'ps1', type: 'fill', prompt: 'My brother ___ (live) in Tashkent.', answer: 'lives' },
      { id: 'ps2', type: 'single', prompt: '___ she speak English?', options: ['Do', 'Does', 'Is', 'Are'], answer: 1 },
      { id: 'ps3', type: 'fill', prompt: 'We ___ (not / like) cold weather.', answer: ["don't like", 'do not like'] },
      { id: 'ps4', type: 'order', prompt: "Gapni to'g'ri tartibda tuzing:", items: ['He', 'usually', 'gets', 'up', 'early'] },
    ],
  },
  {
    id: 'past-simple', title: 'Past Simple', level: 'A2',
    rule: "O'tmishda tugagan harakatlar. To'g'ri fe'llar: -ed; noto'g'ri fe'llar: 2-shakl (go → went).",
    table: [['Barcha shaxslar', 'worked / went', "didn't work", 'Did … work?']],
    examples: ['I visited Samarkand last year.', 'She went home early.', "We didn't see the film."],
    exercises: [
      { id: 'pa1', type: 'fill', prompt: 'Yesterday I ___ (buy) a new phone.', answer: 'bought' },
      { id: 'pa2', type: 'single', prompt: '___ you call her last night?', options: ['Do', 'Were', 'Did', 'Have'], answer: 2 },
      { id: 'pa3', type: 'match', prompt: "Fe'llarni 2-shakli bilan juftlang:", pairs: [['go', 'went'], ['see', 'saw'], ['take', 'took'], ['write', 'wrote']] },
    ],
  },
  {
    id: 'present-perfect', title: 'Present Perfect', level: 'B1',
    rule: "O'tmishdagi harakatning hozirgi natijasi yoki tajriba. have/has + V3. Aniq o'tgan vaqt (yesterday, in 2010) bilan ishlatilmaydi.",
    table: [['I / you / we / they', 'have worked', "haven't worked", 'Have … worked?'], ['he / she / it', 'has worked', "hasn't worked", 'Has … worked?']],
    examples: ["I've lost my keys.", 'Have you ever been to London?', 'She has lived here since 2015.'],
    exercises: [
      { id: 'pp1', type: 'single', prompt: 'I ___ this film three times.', options: ['saw', 'have seen', 'see', 'am seeing'], answer: 1 },
      { id: 'pp2', type: 'single', prompt: 'She has worked here ___ 2019.', options: ['for', 'since', 'ago', 'from'], answer: 1 },
      { id: 'pp3', type: 'fill', prompt: 'They ___ (just / finish) their homework.', answer: ['have just finished', "'ve just finished"] },
      { id: 'pp4', type: 'multiple', prompt: "Qaysi gaplar to'g'ri?", options: ['I have met him yesterday.', 'I have never met him.', 'Have you finished?', 'He has went home.'], answer: [1, 2] },
    ],
  },
  {
    id: 'conditionals', title: 'Conditionals (0, 1, 2)', level: 'B1',
    rule: "0: umumiy haqiqat (If + present, present). 1: real kelajak (If + present, will). 2: xayoliy hozir (If + past, would).",
    table: [['Zero', 'If you heat ice, it melts.'], ['First', 'If it rains, I will stay home.'], ['Second', 'If I had money, I would travel.']],
    examples: ['If you press this button, the machine starts.', 'If I were you, I would study harder.'],
    exercises: [
      { id: 'c1', type: 'single', prompt: 'If it ___ tomorrow, we will cancel the trip.', options: ['rains', 'will rain', 'rained', 'would rain'], answer: 0 },
      { id: 'c2', type: 'single', prompt: 'If I ___ rich, I would buy a house by the sea.', options: ['am', 'was/were', 'will be', 'be'], answer: 1 },
      { id: 'c3', type: 'fill', prompt: 'If you heat water to 100°C, it ___ (boil).', answer: 'boils' },
    ],
  },
  {
    id: 'modals', title: 'Modal verbs', level: 'B2',
    rule: "can/could — qobiliyat; must — majburiyat (gapiruvchi fikri); have to — tashqi majburiyat; should — maslahat; might — ehtimol.",
    table: [['can', 'ability'], ['must', 'strong obligation'], ['should', 'advice'], ['might', 'possibility']],
    examples: ['You should drink more water.', 'I must finish this today.', 'It might rain later.'],
    exercises: [
      { id: 'm1', type: 'single', prompt: 'You look tired. You ___ go to bed.', options: ['should', 'must not', 'can', 'might not'], answer: 0 },
      { id: 'm2', type: 'single', prompt: "Passengers ___ smoke on the plane. It's forbidden.", options: ["don't have to", "mustn't", "shouldn't to", "can't to"], answer: 1 },
      { id: 'm3', type: 'match', prompt: "Modalni ma'nosi bilan juftlang:", pairs: [['can', 'ability'], ['should', 'advice'], ['might', 'possibility']] },
    ],
  },
  {
    id: 'articles', title: 'Articles: a / an / the', level: 'A2',
    rule: "a/an — birinchi marta tilga olingan, sanaladigan birlik ot (an — unli tovush oldidan). the — aniq, ma'lum narsa.",
    table: [['a', 'a book, a university'], ['an', 'an apple, an hour'], ['the', 'the sun, the book I bought']],
    examples: ['I saw a cat. The cat was black.', 'She is an engineer.'],
    exercises: [
      { id: 'a1', type: 'single', prompt: 'He is ___ honest man.', options: ['a', 'an', 'the', '—'], answer: 1 },
      { id: 'a2', type: 'single', prompt: '___ moon goes around the Earth.', options: ['A', 'An', 'The', '—'], answer: 2 },
      { id: 'a3', type: 'fill', prompt: 'I want to become ___ doctor.', answer: 'a' },
    ],
  },
];
