// Spelling trainer (original selection of words learners and IELTS candidates most often misspell —
// in IELTS Listening/Reading a misspelt answer scores zero). Row: [word, two wrong spellings, Uzbek meaning, tip].
// The correct option is rotated through positions so it is not always first.

const rows = [
  ['accommodation', ['accomodation', 'acommodation'], 'turar joy', 'Ikkita c va ikkita m: a-cc-o-mm-odation.'],
  ['necessary', ['neccessary', 'necesary'], 'zarur', 'Bitta c, ikkita s: ne-c-e-ss-ary ("one collar, two sleeves").'],
  ['government', ['goverment', 'govermant'], 'hukumat', 'govern + ment — n tushib qolmaydi.'],
  ['environment', ['enviroment', 'environmant'], 'atrof-muhit', 'environ + ment — n tushib qolmaydi.'],
  ['definitely', ['definately', 'definitly'], 'albatta', 'finite so\'zi ichida: de-finite-ly.'],
  ['separate', ['seperate', 'separete'], 'alohida', '"a rat" ichida: sep-a-rat-e.'],
  ['receive', ['recieve', 'receeve'], 'olmoq', 'c dan keyin ei: rec-ei-ve.'],
  ['believe', ['beleive', 'belive'], 'ishonmoq', 'c dan keyin emas → ie: bel-ie-ve.'],
  ['beginning', ['begining', 'beggining'], 'boshlanish', 'begin + n + ing: ikkita n.'],
  ['occurred', ['occured', 'ocurred'], "sodir bo'ldi", 'Ikkita c va ikkita r.'],
  ['recommend', ['reccommend', 'recomend'], 'tavsiya qilmoq', 'Bitta c, ikkita m.'],
  ['address', ['adress', 'addres'], 'manzil', 'Ikkita d va ikkita s.'],
  ['tomorrow', ['tommorow', 'tomorow'], 'ertaga', 'Bitta m, ikkita r.'],
  ['February', ['Febuary', 'Februery'], 'fevral', 'Feb-ru-ary — r ni unutmang; oylar bosh harf bilan.'],
  ['Wednesday', ['Wensday', 'Wednsday'], 'chorshanba', "Wed-nes-day — d yoziladi, lekin o'qilmaydi."],
  ['library', ['libary', 'librery'], 'kutubxona', 'lib-r-ary — birinchi r tushib qolmaydi.'],
  ['restaurant', ['restaurent', 'resturant'], 'restoran', 'rest-au-rant.'],
  ['business', ['buisness', 'bussiness'], 'biznes', 'busi + ness: u dan keyin s.'],
  ['successful', ['succesful', 'successfull'], 'muvaffaqiyatli', 'Ikkita c, ikkita s, oxirida bitta l.'],
  ['until', ['untill', 'untile'], 'gacha', 'until — bitta l (lekin till — ikkita).'],
  ['really', ['realy', 'reallly'], 'haqiqatan', 'real + ly → ikkita l.'],
  ['which', ['wich', 'whitch'], 'qaysi', 'w-h-i-c-h.'],
  ['friend', ['freind', 'frend'], "do'st", 'fr-ie-nd: "fri-end — oxiri end".'],
  ['different', ['diffrent', 'diferent'], 'har xil', 'Ikkita f; differ + ent.'],
  ['interesting', ['intresting', 'interisting'], 'qiziqarli', 'inter-est-ing.'],
  ['knowledge', ['knowlege', 'nowledge'], 'bilim', 'know + ledge — k va d unutilmaydi.'],
  ['opportunity', ['oppurtunity', 'oportunity'], 'imkoniyat', 'Ikkita p: op-por-tun-ity.'],
  ['achieve', ['acheive', 'achive'], 'erishmoq', 'ach-ie-ve.'],
  ['embarrassed', ['embarassed', 'embarrased'], 'xijolat', 'Ikkita r va ikkita s.'],
  ['occasion', ['ocasion', 'occassion'], 'voqea, holat', 'Ikkita c, bitta s.'],
  ['professional', ['proffesional', 'profesional'], 'professional', 'Bitta f, ikkita s.'],
  ['questionnaire', ['questionaire', 'questionnare'], "so'rovnoma", 'Ikkita n: question-n-aire.'],
  ['temperature', ['temprature', 'temperture'], 'harorat', 'tem-per-a-ture — 4 bo\'g\'in.'],
  ['vegetable', ['vegtable', 'vegatable'], 'sabzavot', 'veg-e-table.'],
  ['medicine', ['medecine', 'medcine'], 'dori', 'med-i-cine.'],
  ['quiet', ['quite', 'queit'], 'sokin', "quiet (sokin) ≠ quite (ancha) — ko'p chalkashadi."],
  ['advertisement', ['advertisment', 'advertisemant'], 'reklama', 'advertise + ment — e saqlanadi.'],
  ['twelfth', ['twelth', 'twelfeth'], "o'n ikkinchi", 'twel-f-th — f tushib qolmaydi.'],
  ['height', ['hight', 'heigth'], "bo'y, balandlik", 'h-ei-ght (lekin high).'],
  ['foreign', ['foriegn', 'forein'], 'xorijiy', 'for-ei-gn — g yoziladi, o\'qilmaydi.'],
  ['neighbour', ['neighbor', 'neihgbour'], "qo'shni", 'Britancha: neighbour (amerikacha neighbor) — IELTS ikkalasini qabul qiladi, lekin bir xil yozing.'],
  ['schedule', ['shedule', 'scedule'], 'jadval', 's-ch-edule.'],
];

// neighbour: the British/American pair would be ambiguous as a "wrong" option — keep only the misspelling.
const wrongFor = (word, wrong) => (word === 'neighbour' ? ['neihgbour', 'naighbour'] : wrong);

export const spellingSets = [
  {
    id: 'spelling', title: "Imlo: ko'p xato qilinadigan so'zlar",
    rules: [
      ['ie / ei', "odatda i e dan oldin, lekin c dan keyin — ei", 'believe, receive'],
      ['qo\'sh undosh', 'begin → beginning, occur → occurred (urg\'uli oxirgi bo\'g\'in)', 'stopped, travelled'],
      ['-ment', "fe'l + ment: oxirgi harf tushib qolmaydi", 'government, environment, advertisement'],
    ],
    items: rows.map(([word, wrong, uz, tip], i) => {
      const opts = [word, ...wrongFor(word, wrong)];
      const k = i % 3;
      return [`sp-${word.toLowerCase()}`, `Qaysi biri to'g'ri yozilgan? — "${uz}"`, word, tip, [...opts.slice(3 - k), ...opts.slice(0, 3 - k)]];
    }),
  },
];
