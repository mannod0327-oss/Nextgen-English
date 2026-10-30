// IELTS question-type strategies (original, Uzbek explanations): #/ielts?guide=<id>.
// Each guide: steps (what to do), traps (typical mistakes), and a short mini-practice in the shared question schema.

const T = ['TRUE', 'FALSE', 'NOT GIVEN'];

export const guides = [
  {
    id: 'tfng', icon: '✅', skill: 'Reading', title: 'True / False / Not Given',
    intro: "Savol matndagi FAKTni tekshiradi: matn bilan bir xil (TRUE), unga zid (FALSE) yoki matnda bu haqda ma'lumot yo'q (NOT GIVEN).",
    steps: [
      "Avval gapdagi kalit so'zlarni (ism, raqam, sana, aniq ot) belgilang — ular matnda deyarli o'zgarmaydi.",
      "Matndan shu joyni toping: savollar matn tartibida keladi, demak 3-savol javobi 2- va 4-savol orasida.",
      "Savol gapini matndagi gap bilan so'zma-so'z solishtiring: sinonimlar (purchase = buy) — normal holat.",
      "Cheklovchi so'zlarga qarang: all, only, always, never, most, some — bitta so'z javobni o'zgartiradi.",
      "Matn qarama-qarshi narsani aytsa — FALSE; umuman aytmasa — NOT GIVEN.",
    ],
    traps: [
      "O'z bilimingizdan foydalanish: dunyoda to'g'ri bo'lsa ham, matnda yo'q bo'lsa — NOT GIVEN.",
      "Matnda mavzu bor, lekin aynan shu fakt yo'q — bu ham NOT GIVEN (FALSE emas).",
      "Yes/No/Not Given — muallifning FIKRI haqida; True/False/Not Given — FAKT haqida.",
    ],
    text: 'The town library opened in 1998. At first it was used mainly by schoolchildren, but today most visitors are retired people. The library is open every day except Monday, and entry is free for local residents.',
    questions: [
      { id: 'gd-tf1', type: 'single', prompt: 'The library was opened in the 1990s.', options: T, answer: 0, explanation: "1998 → 1990-yillar. Boshqa so'zlar bilan berilgan, lekin ma'no bir xil." },
      { id: 'gd-tf2', type: 'single', prompt: "Most of the library's visitors today are schoolchildren.", options: T, answer: 1, explanation: "Matn: today most visitors are retired people — zid ma'lumot → FALSE." },
      { id: 'gd-tf3', type: 'single', prompt: 'The library has more books than any other library in the region.', options: T, answer: 2, explanation: "Kitoblar soni haqida matnda hech narsa yo'q → NOT GIVEN." },
      { id: 'gd-tf4', type: 'single', prompt: 'Visitors who live in the town do not have to pay.', options: T, answer: 0, explanation: 'entry is free for local residents = do not have to pay.' },
    ],
  },
  {
    id: 'headings', icon: '🧩', skill: 'Reading', title: 'Matching headings',
    intro: "Har bir abzasga uning ASOSIY g'oyasini ifodalovchi sarlavha tanlanadi. Sarlavhalar abzaslardan ko'p bo'ladi.",
    steps: [
      "Abzasning birinchi va oxirgi gapini diqqat bilan o'qing — asosiy g'oya ko'pincha shu yerda.",
      "Abzas nima HAQIDA ekanini o'z so'zingiz bilan 3–5 so'zda ayting, keyin sarlavhalarga qarang.",
      "Sarlavha butun abzasni qamrashi kerak, faqat bitta misol yoki detalni emas.",
      "Ishonchli javoblarni avval qo'ying va ishlatilgan sarlavhalarni o'chirib boring.",
    ],
    traps: [
      "Abzasdagi so'z sarlavhada takrorlanadi — bu ko'pincha TUZOQ (so'z mos, ma'no emas).",
      "Abzasning bir qismiga mos sarlavha — noto'g'ri; butun abzasga mosini tanlang.",
    ],
    text: 'Many cities are now planting trees along their streets. Trees lower summer temperatures by providing shade, they absorb rainwater and reduce flooding, and they make streets more pleasant for walking. Some studies even suggest that people living near trees are less stressed.',
    questions: [
      { id: 'gd-mh1', type: 'single', prompt: 'Choose the best heading for the paragraph.', options: ['The many benefits of urban trees', 'How trees reduce flooding', 'Why people feel stressed in cities', 'The cost of planting trees'], answer: 0, explanation: "Abzas bir nechta foydani sanaydi — butunini qamrovchi sarlavha. Flooding — faqat bitta detal." },
      { id: 'gd-mh2', type: 'single', prompt: 'Which heading is a trap because it matches only one detail?', options: ['How trees reduce flooding', 'The many benefits of urban trees', 'Green cities of the future', 'A history of street design'], answer: 0, explanation: 'Flooding abzasda bor, lekin bu faqat bitta misol.' },
      { id: 'gd-mh3', type: 'single', prompt: 'Where is the main idea of a paragraph most often found?', options: ['In the first (and last) sentence', 'In the longest word', 'In the numbers', 'Only in the middle of the paragraph'], answer: 0, explanation: 'Topic sentence odatda abzas boshida keladi.' },
    ],
  },
  {
    id: 'completion', icon: '✏️', skill: 'Reading / Listening', title: "Gap-fill (bo'sh joyni to'ldirish)",
    intro: "Jumla, jadval yoki xulosadagi bo'sh joyga matndan so'z yoziladi. Ko'rsatmadagi so'z chegarasi juda muhim.",
    steps: [
      "Ko'rsatmani o'qing: ONE WORD ONLY / NO MORE THAN TWO WORDS AND/OR A NUMBER — chegaradan oshsa, javob noto'g'ri.",
      "Bo'sh joyga qaysi so'z turkumi kerakligini taxmin qiling: ot, fe'l, son, sifat? Birlikmi, ko'plikmi?",
      "Matndagi so'zni AYNAN ko'chiring — o'zgartirmang (grammatikasi bo'sh joyga mos keladi).",
      "Imlo va ko'plik -s ni tekshiring: noto'g'ri yozilgan so'z — noto'g'ri javob.",
    ],
    traps: [
      "Ikki so'z chegarasida uch so'z yozish (a big garden → big garden yoki garden).",
      "Matndagi so'zning sinonimini yozish — so'z matndan olinishi kerak.",
      "Raqamlar: 'fifteen' va '15' ikkalasi ham to'g'ri.",
    ],
    text: 'Volunteers meet every Saturday at the community centre. The cleaning work starts at 9 a.m. and finishes at noon. Participants should bring gloves and a water bottle; tools are provided by the organisers.',
    questions: [
      { id: 'gd-gf1', type: 'fill', prompt: 'Volunteers meet at the community ___ . (ONE WORD)', answer: ['centre', 'center'], explanation: 'Matndan aynan: community centre.' },
      { id: 'gd-gf2', type: 'fill', prompt: 'Work finishes at ___ . (ONE WORD)', answer: ['noon', '12'], explanation: 'finishes at noon.' },
      { id: 'gd-gf3', type: 'fill', prompt: 'Participants must bring gloves and a water ___ . (ONE WORD)', answer: ['bottle'], explanation: "a water bottle — faqat bitta so'z kerak." },
      { id: 'gd-gf4', type: 'single', prompt: 'Instruction: NO MORE THAN TWO WORDS. Which answer is NOT allowed?', options: ['a large hall', 'large hall', 'hall'], answer: 0, explanation: "a large hall — 3 so'z, chegaradan oshdi." },
    ],
  },
  {
    id: 'listening', icon: '🎧', skill: 'Listening', title: 'Listening Part 1–4',
    intro: "40 savol, 4 qism, har biri faqat BIR marta eshittiriladi. Qiyinlik Part 1 dan Part 4 gacha oshib boradi.",
    steps: [
      "Part 1 — kundalik suhbat (bron, ro'yxatdan o'tish): ismlar harfma-harf, raqam, sana, telefon. 🔢 Raqamlar trenajyorida mashq qiling.",
      "Part 2 — bitta kishining nutqi (ekskursiya, e'lon): xarita/sxema va MCQ ko'p uchraydi.",
      "Part 3 — 2–4 talaba va o'qituvchi suhbati: fikrlar va kelishuvga e'tibor bering (agree / disagree).",
      "Part 4 — akademik ma'ruza, tanaffussiz: gap-fill; matn tuzilmasi (firstly, however, finally) yo'l ko'rsatadi.",
      "Har qism oldidan berilgan vaqtda savollarni o'qing va kalit so'zlarni belgilang.",
    ],
    traps: [
      "Gapiruvchi fikrini o'zgartiradi: 'Tuesday… no, sorry, Thursday' — oxirgisi javob.",
      "Hamma variant eshitiladi, lekin faqat bittasi savolga javob beradi (MCQ).",
      "Bitta javobga yopishib qolmang — o'tkazib yuborgan bo'lsangiz, keyingi savolga o'ting.",
    ],
    script: "Receptionist: Can I take your name, please? Caller: Yes, it's Laura Benson. That's B-E-N-S-O-N. Receptionist: And when would you like to come? Caller: On Tuesday... actually, no, Thursday would be better. Receptionist: Fine. And a contact number? Caller: It's oh seven seven one, double three, five eight two.",
    questions: [
      { id: 'gd-ls1', type: 'fill', prompt: 'Surname: ___', answer: ['Benson'], explanation: 'Harfma-harf aytildi: B-E-N-S-O-N.' },
      { id: 'gd-ls2', type: 'single', prompt: 'Day of the appointment:', options: ['Tuesday', 'Thursday', 'Monday'], answer: 1, explanation: "Tuesday… actually, no, Thursday — oxirgi aytilgan kun." },
      { id: 'gd-ls3', type: 'fill', prompt: 'Phone number: ___', answer: ['077133582', '0771 33582', '0771 335 82'], explanation: 'oh = 0, double three = 33 → 077133582.' },
    ],
  },
  {
    id: 'task1', icon: '📊', skill: 'Writing', title: 'Writing Task 1 tuzilmasi',
    intro: "20 daqiqa, kamida 150 so'z. Grafik/jadvalni tasvirlaysiz — o'z fikringizni yozmaysiz.",
    steps: [
      "1-abzas (kirish): savolni o'z so'zingiz bilan qayta yozing — shows → illustrates, the number of → how many.",
      "2-abzas (Overview): 2 ta asosiy tendensiya, raqamlarsiz. 'Overall, …' bilan boshlang. Bu abzas eng muhim!",
      "3–4-abzaslar (tafsilot): raqamlar bilan, guruhlab taqqoslang — eng katta/kichik, eng ko'p o'zgargan.",
      "rise to / by, peak at, twice as many — 📊 Task 1 tili trenajyorida mashq qiling.",
    ],
    traps: [
      "Overview yo'q — Task Achievement bali 5 dan oshmaydi.",
      "Har bir raqamni ketma-ket sanash — taqqoslash va guruhlash kerak.",
      "Xulosada o'z fikri yoki sabab yozish (Task 1 da kerak emas).",
    ],
    questions: [
      { id: 'gd-t11', type: 'single', prompt: 'Which sentence is the best overview?', options: ['Overall, sales rose in all regions, with the north growing the fastest.', 'In 2010, sales in the north were 20 units.', 'I think sales grew because of advertising.', 'The graph shows sales in four regions.'], answer: 0, explanation: 'Overview — umumiy tendensiya, raqamsiz va fikrsiz.' },
      { id: 'gd-t12', type: 'single', prompt: 'What should the introduction do?', options: ['Paraphrase the question', 'Give your opinion', 'List every number', 'Explain the causes'], answer: 0, explanation: 'Kirish = savolni qayta ifodalash.' },
      { id: 'gd-t13', type: 'single', prompt: 'Sales went from 40 to 60. Which is correct?', options: ['Sales rose by 20 to 60.', 'Sales rose to 20 by 60.', 'Sales rose at 20.'], answer: 0, explanation: 'by — farq, to — yangi qiymat.' },
    ],
  },
  {
    id: 'task2', icon: '✍️', skill: 'Writing', title: 'Writing Task 2 tuzilmasi',
    intro: "40 daqiqa, kamida 250 so'z; Task 2 Writing balida Task 1 dan ikki baravar ko'p og'irlikka ega.",
    steps: [
      "Savol turini aniqlang: opinion (agree/disagree), discuss both views, advantages/disadvantages, problem/solution.",
      "5 daqiqa reja: har tana abzasi uchun bitta asosiy g'oya + izoh + misol.",
      "Kirish (2–3 gap): mavzuni qayta ifodalang + aniq pozitsiya (thesis).",
      "2–3 tana abzasi: topic sentence → tushuntirish → misol. Bog'lovchilar: however, as a result, for instance.",
      "Xulosa: pozitsiyani qisqa takrorlang, yangi g'oya qo'shmang. Oxirgi 3 daqiqa — xatolarni tekshirish.",
    ],
    traps: [
      "Savolning faqat bir qismiga javob berish (masalan, ikkala fikrni muhokama qilmaslik).",
      "Pozitsiya aniq emas yoki inshoning o'rtasida o'zgaradi.",
      "Yodlangan tayyor iboralar va mavzuga oid bo'lmagan misollar — ball pasayadi.",
    ],
    questions: [
      { id: 'gd-t21', type: 'single', prompt: '"Some people think… Others believe… Discuss both views and give your own opinion." You must:', options: ['Discuss both views AND give your opinion', 'Only give your opinion', 'Only describe the first view'], answer: 0, explanation: 'Savolning har bir qismiga javob kerak.' },
      { id: 'gd-t22', type: 'single', prompt: 'Which is a clear thesis statement?', options: ['I strongly believe that public transport should be free, as it reduces traffic and pollution.', 'There are many opinions about transport.', 'Transport is a very interesting topic nowadays.'], answer: 0, explanation: 'Aniq pozitsiya + 2 sabab = yaxshi thesis.' },
      { id: 'gd-t23', type: 'single', prompt: 'What belongs in the conclusion?', options: ['A summary of your position', 'A completely new argument', 'A list of statistics'], answer: 0, explanation: "Xulosada yangi g'oya kiritilmaydi." },
    ],
  },
];

// Options above are written answer-first; rotate them (stable per question) so the answer position varies.
// TRUE/FALSE/NOT GIVEN keep their fixed order.
guides.flatMap((g) => g.questions).forEach((q, i) => {
  if (q.type !== 'single' || q.options === T) return;
  const k = i % q.options.length;
  const ans = q.options[q.answer];
  q.options = [...q.options.slice(k), ...q.options.slice(0, k)];
  q.answer = q.options.indexOf(ans);
});
