// Sentence stress trainer (original): in English the NEW or CONTRASTING information carries the main stress.
// The same sentence changes its stress with the question it answers. Uzbek marks focus with word order and
// particles (-ku, -chi), so learners often stress every word equally. Row: [id, context, reply, stressed word, uz tip].
// Options = the reply's words in their original order (keepOrder), so the learner picks the word to stress.

const rows = [
  ['ss1', 'Did you buy a red car?', 'No, I bought a blue car.', 'blue', "Rang farqi — yangi ma'lumot: BLUE."],
  ['ss2', 'Did Ali buy a blue car?', 'No, Sardor bought a blue car.', 'Sardor', 'Kim — farqli: SARDOR.'],
  ['ss3', 'Did you buy a blue bike?', 'No, I bought a blue car.', 'car', 'Narsa farqli: CAR.'],
  ['ss4', 'Is the meeting on Monday?', "No, it's on Tuesday.", 'Tuesday', 'Kun almashdi: TUESDAY.'],
  ['ss5', 'Do you live in Samarkand?', 'No, I live in Bukhara.', 'Bukhara', 'Joy farqli: BUKHARA.'],
  ['ss6', 'Would you like tea?', "I'd prefer coffee, please.", 'coffee', 'Tanlov: COFFEE.'],
  ['ss7', 'Is it your book?', "No, it's her book.", 'her', 'Egasi farqli: HER.'],
  ['ss8', 'Did you walk to school?', 'No, I ran to school.', 'ran', 'Harakat farqli: RAN.'],
  ['ss9', 'Is the film at six?', 'No, it starts at seven.', 'seven', 'Vaqt farqli: SEVEN.'],
  ['ss10', 'Are you a teacher?', "No, I'm a student.", 'student', 'Kasb farqli: STUDENT.'],
  ['ss11', 'Do you like cats?', 'I love cats!', 'love', "Kuchli his: LOVE (like emas)."],
  ['ss12', 'Did you lose your keys?', 'No, I found them.', 'found', "Qarama-qarshi fe'l: FOUND."],
  ['ss13', 'Is your brother older than you?', "No, he's younger.", 'younger', 'Qarama-qarshi sifat: YOUNGER.'],
  ['ss14', 'Did she call you yesterday?', 'No, she called me today.', 'today', 'Vaqt farqli: TODAY.'],
  ['ss15', 'Is the shop on the left?', "No, it's on the right.", 'right', "Yo'nalish: RIGHT."],
  ['ss16', 'Do you need two tickets?', 'No, I need three tickets.', 'three', 'Son farqli: THREE.'],
  ['ss17', 'Did you say fifteen?', 'No, I said fifty.', 'fifty', '15/50 — IELTS Listening! FIFTY.'],
  ['ss18', "You can't swim, can you?", 'Yes, I can swim!', 'can', "E'tiroz — tasdiqni ta'kidlash: CAN."],
  ['ss19', "You didn't do your homework.", 'I did do my homework!', 'did', "E'tiroz: DID (ta'kidlovchi do)."],
  ['ss20', 'Is it cold outside?', "No, it's warm today.", 'warm', 'Qarama-qarshi: WARM.'],
  ['ss21', 'Are we meeting at the café?', "No, we're meeting at the library.", 'library', 'Joy farqli: LIBRARY.'],
  ['ss22', 'Did your mother cook dinner?', 'No, my father cooked dinner.', 'father', 'Kim — farqli: FATHER.'],
  ['ss23', 'Do you want the big one?', 'I want the small one.', 'small', 'Hajm: SMALL.'],
  ['ss24', 'Is the test easy?', "No, it's really difficult.", 'difficult', 'Qarama-qarshi: DIFFICULT.'],
  ['ss25', 'Did you send an email?', 'No, I sent a letter.', 'letter', 'Narsa farqli: LETTER.'],
  ['ss26', 'Where are you from?', "I'm from Fergana.", 'Fergana', "Javobdagi yangi ma'lumot: FERGANA."],
  ['ss27', 'What do you do?', "I'm an engineer.", 'engineer', "Yangi ma'lumot: ENGINEER."],
  ['ss28', 'When does the train leave?', 'It leaves at noon.', 'noon', "So'ralgan narsa: NOON."],
  ['ss29', 'Who broke the window?', 'Tom broke the window.', 'Tom', "So'ralgan shaxs: TOM."],
  ['ss30', 'How did you get here?', 'I came by metro.', 'metro', "So'ralgan usul: METRO."],
  ['ss31', 'Do you speak Russian?', 'I speak English and Russian.', 'English', "Qo'shimcha yangi ma'lumot: ENGLISH."],
  ['ss32', 'Did you pass the exam?', 'I passed it easily.', 'easily', 'Yangi tafsilot: EASILY.'],
  ['ss33', 'Is he your cousin?', "No, he's my uncle.", 'uncle', 'Qarindoshlik: UNCLE.'],
  ['ss34', 'Did they win the match?', 'No, they lost the match.', 'lost', "Qarama-qarshi fe'l: LOST."],
  ['ss35', 'Is the museum open on Monday?', "No, it's closed on Monday.", 'closed', 'Qarama-qarshi: CLOSED.'],
  ['ss36', 'Do you take a lot of sugar?', 'Just a little sugar, please.', 'little', 'Miqdor: LITTLE.'],
  ['ss37', 'Was the hotel expensive?', 'No, it was quite cheap.', 'cheap', 'Qarama-qarshi: CHEAP.'],
  ['ss38', 'Did you study maths?', 'No, I studied history.', 'history', 'Fan farqli: HISTORY.'],
  ['ss39', 'Is your flat on the first floor?', "No, it's on the ninth floor.", 'ninth', 'Qavat: NINTH.'],
  ['ss40', 'Are you leaving tomorrow?', "No, I'm leaving tonight.", 'tonight', 'Vaqt farqli: TONIGHT.'],
];

const words = (s) => s.replace(/[.,!?]/g, '').split(' ');

export const sentenceStressSets = [
  {
    id: 'sstress', title: "Gap urg'usi", keepOrder: true,
    rules: [
      ["yangi ma'lumot", "javobdagi yangi so'z kuchli aytiladi", "— Where are you from? — I'm from FERGANA."],
      ['qarama-qarshilik', "tuzatilgan so'z urg'uli", '— A red car? — No, a BLUE car.'],
      ["ta'kid", "do/did, can, really — e'tirozda urg'uli", 'I DID do my homework!'],
      ["kuchsiz so'zlar", 'a, the, to, of, is, are, am — odatda urg‘usiz', "I'm from FERgana (from — kuchsiz /frəm/)"],
    ],
    items: rows.map(([id, context, reply, stressed, uz]) => [id, `— ${context}  — ${reply}  Qaysi so'z eng kuchli aytiladi?`, stressed, uz, [...new Set(words(reply))]]),
  },
];
