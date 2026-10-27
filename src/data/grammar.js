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
    id: 'present-continuous', title: 'Present Continuous', level: 'A1',
    rule: "Hozir, ayni paytda bo'layotgan harakat yoki vaqtinchalik holat. am/is/are + V-ing.",
    table: [['I', 'am working', "'m not working", 'Am I working?'], ['he / she / it', 'is working', "isn't working", 'Is … working?'], ['you / we / they', 'are working', "aren't working", 'Are … working?']],
    examples: ['Look! It is raining.', "I'm reading a great book this week.", 'They are not watching TV now.'],
    exercises: [
      { id: 'pc1', type: 'fill', prompt: 'Be quiet! The baby ___ (sleep).', answer: ['is sleeping', "'s sleeping"] },
      { id: 'pc2', type: 'single', prompt: 'What ___ you doing right now?', options: ['do', 'are', 'is', 'does'], answer: 1 },
      { id: 'pc3', type: 'single', prompt: 'Choose the correct sentence.', options: ['She is know the answer.', 'She knows the answer.', 'She knowing the answer.', 'She is knows the answer.'], answer: 1, explanation: "know — holat fe'li, odatda continuous'da ishlatilmaydi." },
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
    id: 'future', title: 'Future: will / going to', level: 'A2',
    rule: "will — gapirish paytidagi qaror, bashorat, va'da. be going to — oldindan rejalashtirilgan niyat yoki aniq belgilarga asoslangan bashorat.",
    table: [['will', "I'll help you.", "It will probably rain."], ['be going to', "I'm going to visit Bukhara next month.", "Look at those clouds — it's going to rain."]],
    examples: ["I'll call you later.", 'We are going to buy a new car.', 'I think she will pass the exam.'],
    exercises: [
      { id: 'f1', type: 'single', prompt: '"The phone is ringing." — "OK, I ___ answer it."', options: ['will', 'am going to', 'answer', 'answered'], answer: 0, explanation: "Gapirish paytidagi qaror → will." },
      { id: 'f2', type: 'single', prompt: 'We have bought the tickets. We ___ fly to Istanbul on Monday.', options: ['will', 'are going to', 'go', 'would'], answer: 1, explanation: 'Oldindan reja → be going to.' },
      { id: 'f3', type: 'fill', prompt: "Don't worry, I ___ (not / tell) anyone.", answer: ["won't tell", 'will not tell'] },
    ],
  },
  {
    id: 'comparatives', title: 'Comparatives & Superlatives', level: 'A2',
    rule: "Qisqa sifatlar: -er / the -est (tall → taller → the tallest). Uzun sifatlar: more / the most. Istisnolar: good → better → the best, bad → worse → the worst.",
    table: [['cheap', 'cheaper', 'the cheapest'], ['big', 'bigger', 'the biggest'], ['beautiful', 'more beautiful', 'the most beautiful'], ['good / bad', 'better / worse', 'the best / the worst']],
    examples: ['Tashkent is bigger than Samarkand.', 'This is the best plov in the city.', 'English is more useful than I thought.'],
    exercises: [
      { id: 'cm1', type: 'fill', prompt: 'A plane is ___ (fast) than a train.', answer: 'faster' },
      { id: 'cm2', type: 'single', prompt: 'This is ___ film I have ever seen.', options: ['the worse', 'the worst', 'the baddest', 'worst'], answer: 1 },
      { id: 'cm3', type: 'fill', prompt: 'Her second book was ___ (interesting) than the first.', answer: 'more interesting' },
      { id: 'cm4', type: 'match', prompt: "Sifatni orttirma darajasi bilan juftlang:", pairs: [['good', 'better'], ['bad', 'worse'], ['far', 'further'], ['happy', 'happier']] },
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
    id: 'passive', title: 'Passive voice', level: 'B1',
    rule: "Harakatni bajaruvchi emas, harakatning o'zi muhim bo'lganda. be (kerakli zamonda) + V3. Bajaruvchi kerak bo'lsa: by + …",
    table: [['Present simple', 'English is spoken here.'], ['Past simple', 'The bridge was built in 1990.'], ['Present perfect', 'The letter has been sent.'], ['Future', 'The results will be announced tomorrow.']],
    examples: ['Plov is cooked in a kazan.', 'The windows were cleaned yesterday.', 'This song was written by a young singer.'],
    exercises: [
      { id: 'pv1', type: 'single', prompt: 'Cotton ___ in Uzbekistan.', options: ['grows', 'is grown', 'is growing', 'grew'], answer: 1 },
      { id: 'pv2', type: 'fill', prompt: 'The museum ___ (open) in 2005.', answer: 'was opened' },
      { id: 'pv3', type: 'single', prompt: 'Your order ___ already ___.', options: ['has / sent', 'has / been sent', 'is / sending', 'was / send'], answer: 1 },
    ],
  },
  {
    id: 'reported-speech', title: 'Reported speech', level: 'B2',
    rule: "Birovning gapini o'z so'zimiz bilan yetkazish. O'tgan zamondagi fe'l (said, told) dan keyin zamon bir qadam orqaga suriladi: is → was, will → would, have done → had done.",
    table: [['"I am tired."', 'She said (that) she was tired.'], ['"I will call."', 'He said he would call.'], ['"I have finished."', 'They said they had finished.']],
    examples: ['He told me he lived in Fergana.', 'She asked if I could help her.'],
    exercises: [
      { id: 'rs1', type: 'single', prompt: '"I can swim." → She said she ___ swim.', options: ['can', 'could', 'will', 'has'], answer: 1 },
      { id: 'rs2', type: 'single', prompt: '"We are leaving." → They said they ___ leaving.', options: ['are', 'were', 'have been', 'will be'], answer: 1 },
      { id: 'rs3', type: 'single', prompt: 'He ___ me that the shop was closed.', options: ['said', 'told', 'spoke', 'talked'], answer: 1, explanation: 'tell + kishi (told me); say + gap (said that).' },
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
