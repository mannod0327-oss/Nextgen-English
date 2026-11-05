// Punctuation trainer (original): pick the correctly punctuated sentence. Covers what costs marks in IELTS Writing —
// apostrophes (it's/its, students'), capital letters (days, languages, nationalities), commas after linkers and
// introductory clauses, non-defining relative clauses, question marks in indirect questions, run-on sentences.
// Row: [id, rule hint (prompt), correct sentence, uz explanation, [correct, wrong, wrong]] — options rotate per item.

const rows = [
  ['pu1', "it's / its", "The company changed its logo.", "its — egalik (uning); it's = it is.", ["The company changed its logo.", "The company changed it's logo.", "The company changed its' logo."]],
  ['pu2', "it's / its", "It's raining again.", "It's = It is.", ["It's raining again.", "Its raining again.", "Its' raining again."]],
  ['pu3', 'apostrof (birlik)', "My sister's car is red.", "Birlik egasi: sister's.", ["My sister's car is red.", "My sisters car is red.", "My sisters' car is red."]],
  ['pu4', "apostrof (ko'plik)", "The students' results were excellent.", "Ko'plik (students) egasi: students'.", ["The students' results were excellent.", "The student's results were excellent.", "The students results' were excellent."]],
  ['pu5', "ko'plik — apostrofsiz", 'I bought three apples.', "Oddiy ko'plikda apostrof yo'q.", ['I bought three apples.', "I bought three apple's.", "I bought three apples'."]],
  ['pu6', 'bosh harf', 'We have English on Monday.', 'Tillar va hafta kunlari bosh harf bilan.', ['We have English on Monday.', 'We have english on monday.', 'We have English on monday.']],
  ['pu7', 'bosh harf', 'She is Uzbek and lives in Tashkent.', 'Millat va shahar nomlari bosh harf bilan.', ['She is Uzbek and lives in Tashkent.', 'She is uzbek and lives in tashkent.', 'She is uzbek and lives in Tashkent.']],
  ['pu8', 'bosh harf', 'My birthday is in March.', 'Oylar bosh harf bilan; fasllar (spring) — kichik.', ['My birthday is in March.', 'My birthday is in march.', 'My Birthday is in March.']],
  ['pu9', 'bosh harf: I', 'Yesterday I went to the market.', 'I (men) har doim bosh harf.', ['Yesterday I went to the market.', 'Yesterday i went to the market.', 'yesterday I went to the market.']],
  ['pu10', 'however', 'The plan is expensive. However, it is effective.', 'However gap boshida, keyin vergul.', ['The plan is expensive. However, it is effective.', 'The plan is expensive, however it is effective.', 'The plan is expensive however, it is effective.']],
  ['pu11', 'However (o‘rtada)', 'The plan is expensive; however, it is effective.', 'Nuqtali vergul + however + vergul.', ['The plan is expensive; however, it is effective.', 'The plan is expensive, however, it is effective.', 'The plan is expensive however it is effective.']],
  ['pu12', 'kirish ergash gapi', 'When I arrived, the lesson had started.', 'Ergash gap oldin kelsa — vergul.', ['When I arrived, the lesson had started.', 'When I arrived the lesson, had started.', 'When, I arrived the lesson had started.']],
  ['pu13', 'bosh gap oldin', 'The lesson had started when I arrived.', 'Bosh gap oldin kelsa, odatda vergulsiz.', ['The lesson had started when I arrived.', 'The lesson had started, when I arrived.', 'The lesson, had started when I arrived.']],
  ['pu14', "ro'yxat", 'I bought apples, bread and milk.', "Ro'yxatda vergul; and oldidan ixtiyoriy.", ['I bought apples, bread and milk.', 'I bought apples bread and milk.', 'I bought, apples, bread, and, milk.']],
  ['pu15', 'non-defining (which)', 'Samarkand, which is very old, attracts many tourists.', "Qo'shimcha ma'lumot (which) — ikki tomonda vergul.", ['Samarkand, which is very old, attracts many tourists.', 'Samarkand which is very old attracts many tourists.', 'Samarkand, which is very old attracts many tourists.']],
  ['pu16', 'defining (who)', 'Students who work hard usually pass.', "Aniqlovchi ergash gap — vergulsiz (qaysi talabalar?).", ['Students who work hard usually pass.', 'Students, who work hard, usually pass.', 'Students who work hard, usually pass.']],
  ['pu17', 'that — vergulsiz', 'This is the book that I told you about.', 'that dan oldin vergul qo‘yilmaydi.', ['This is the book that I told you about.', 'This is the book, that I told you about.', 'This is the book that, I told you about.']],
  ['pu18', "bilvosita so'roq", 'I wonder where she lives.', "Bilvosita so'roq — so'roq belgisisiz, to'g'ri tartib.", ['I wonder where she lives.', 'I wonder where does she live?', 'I wonder, where she lives?']],
  ['pu19', "to'g'ri so'roq", 'Could you tell me where the bank is?', "Could you…? — so'roq belgisi; ichida to'g'ri tartib.", ['Could you tell me where the bank is?', 'Could you tell me where is the bank?', 'Could you tell me where the bank is.']],
  ['pu20', 'run-on (vergul bilan ulash)', 'It was late. We went home.', "Ikki to'liq gapni faqat vergul bilan ulab bo'lmaydi: nuqta, ; yoki and/so.", ['It was late. We went home.', 'It was late, we went home.', 'It was late we went home.']],
  ['pu21', 'so / and oldidan', 'It was raining, so we stayed inside.', "so bilan ikki gap — vergul + so.", ['It was raining, so we stayed inside.', 'It was raining so, we stayed inside.', 'It was raining so we, stayed inside.']],
  ['pu22', 'for example', 'Some sports, for example tennis, are expensive.', 'for example qo‘shimcha bo‘lsa — vergullar ichida.', ['Some sports, for example tennis, are expensive.', 'Some sports for example, tennis are expensive.', 'Some sports, for example tennis are expensive.']],
  ['pu23', 'qisqartma', "They don't live here.", "don't = do not: apostrof o yerida.", ["They don't live here.", "They dont live here.", "They do'nt live here."]],
  ['pu24', 'qisqartma', "I can't swim.", "can't = cannot.", ["I can't swim.", "I cant swim.", "I ca'nt swim."]],
  ['pu25', "they're / their / there", 'Their house is over there.', 'their — egalik; there — u yerda; they’re = they are.', ['Their house is over there.', "They're house is over their.", 'There house is over their.']],
  ['pu26', "you're / your", "You're right about your plan.", "you're = you are; your — sizning.", ["You're right about your plan.", 'Your right about you’re plan.', "Your right about your plan."]],
  ['pu27', 'raqamlar', 'The population grew from 2,500 to 10,000.', "Ingliz tilida minglik — vergul, kasr — nuqta (2.5).", ['The population grew from 2,500 to 10,000.', 'The population grew from 2.500 to 10.000.', 'The population grew from 2 500, to 10 000.']],
  ['pu28', 'kasr', 'Prices rose by 2.5% last year.', "O'nli kasr — nuqta: 2.5 (2,5 emas).", ['Prices rose by 2.5% last year.', 'Prices rose by 2,5% last year.', 'Prices rose by 2;5% last year.']],
  ['pu29', 'iqtibos', 'She said, "I am tired."', "Iqtibos oldidan vergul, nuqta qo'shtirnoq ichida.", ['She said, "I am tired."', 'She said "I am tired".', 'She said: "i am tired."']],
  ['pu30', 'murojaat', 'Ali, can you help me?', "Murojaatdan keyin vergul.", ['Ali, can you help me?', 'Ali can you help me?', 'Ali can you, help me?']],
  ['pu31', 'kirish so‘zlari', 'In my opinion, schools should start later.', 'In my opinion / Firstly / In conclusion — keyin vergul.', ['In my opinion, schools should start later.', 'In my opinion schools, should start later.', 'In, my opinion schools should start later.']],
  ['pu32', 'In conclusion', 'In conclusion, both views have merit.', 'Xulosa iborasidan keyin vergul.', ['In conclusion, both views have merit.', 'In conclusion both views, have merit.', 'In conclusion: both views have merit,']],
  ['pu33', 'because — vergulsiz', 'I stayed at home because I was ill.', 'because bosh gapdan keyin kelsa — odatda vergulsiz.', ['I stayed at home because I was ill.', 'I stayed at home, because, I was ill.', 'I stayed at home. Because I was ill.']],
  ['pu34', 'Because — gap emas', 'Because I was ill, I stayed at home.', "Because… yolg'iz gap bo'la olmaydi; boshida bo'lsa — vergul.", ['Because I was ill, I stayed at home.', 'Because I was ill. I stayed at home.', 'Because I was ill I, stayed at home.']],
  ['pu35', "apostrof: vaqt", "We need two weeks' holiday.", "Vaqt + egalik: a week's / two weeks'.", ["We need two weeks' holiday.", "We need two week's holiday.", 'We need two weeks holiday’s.']],
  ['pu36', "apostrof: children", "The children's toys are everywhere.", "-s siz ko'plik (children, people) → 's.", ["The children's toys are everywhere.", "The childrens' toys are everywhere.", "The childrens toys are everywhere."]],
  ['pu37', 'sarlavha', 'I am reading "War and Peace".', "Asar nomida asosiy so'zlar bosh harf bilan.", ['I am reading "War and Peace".', 'I am reading "war and peace".', 'I am reading "War And peace".']],
  ['pu38', 'undov', 'What a beautiful city!', "What a…! — undov belgisi.", ['What a beautiful city!', 'What a beautiful city?', 'What, a beautiful city.']],
  ['pu39', 'which (butun gap)', 'He passed the exam, which surprised everyone.', 'which butun gapga ishora qilsa — oldidan vergul.', ['He passed the exam, which surprised everyone.', 'He passed the exam which, surprised everyone.', 'He passed the exam. Which surprised everyone.']],
  ['pu40', 'Firstly / Secondly', 'Firstly, it saves time. Secondly, it is cheap.', 'Sanash so‘zlaridan keyin vergul.', ['Firstly, it saves time. Secondly, it is cheap.', 'Firstly it saves time, secondly it is cheap.', 'Firstly, it saves time, Secondly, it is cheap.']],
  ['pu41', 'such as', 'Cities such as Bukhara and Khiva are popular.', "Aniqlovchi such as — vergulsiz.", ['Cities such as Bukhara and Khiva are popular.', 'Cities, such as, Bukhara and Khiva are popular.', 'Cities such as: Bukhara, and Khiva are popular.']],
  ['pu42', 'sana', 'The exam is on 12 May 2026.', "Britancha sana: 12 May 2026 (yoki May 12, 2026).", ['The exam is on 12 May 2026.', 'The exam is on 12 may 2026.', 'The exam is on 12, May, 2026.']],
];

export const punctuationSets = [
  {
    id: 'punct', title: 'Tinish belgilari',
    rules: [
      ['apostrof', "egalik ('s / s') va qisqartma (don't); oddiy ko'plikda yo'q", "my sister's car · the students' results · it's = it is"],
      ['bosh harf', 'kunlar, oylar, tillar, millatlar, shaharlar, I', 'English on Monday in March'],
      ['vergul', "linker va kirish iboralaridan keyin; which (qo'shimcha ma'lumot) atrofida", 'However, … · In my opinion, … · Samarkand, which…,'],
      ['vergul kerak emas', "that, aniqlovchi who, because (o'rtada) oldidan", 'the book that… · Students who work hard…'],
    ],
    items: rows.map(([id, hint, answer, uz, options]) => [id, `To'g'ri yozilgan gapni tanlang (${hint}):`, answer, uz, options]),
  },
];
