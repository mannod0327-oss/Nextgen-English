// Synonyms & paraphrase for IELTS (original selection). IELTS Reading questions paraphrase the text and
// Writing rewards "a wide range of vocabulary", so learners need the academic equivalent of common words.
// Row: [common word, academic synonym, Uzbek meaning]. Distractors are other synonyms from the list.

const pairs = [
  ['important', 'crucial', 'muhim'], ['big', 'substantial', 'katta'], ['show', 'demonstrate', "ko'rsatmoq"],
  ['help', 'assist', 'yordam bermoq'], ['get', 'obtain', 'olmoq'], ['need', 'require', 'talab qilmoq'],
  ['enough', 'sufficient', 'yetarli'], ['about', 'approximately', 'taxminan'], ['start', 'commence', 'boshlamoq'],
  ['end', 'conclude', 'tugatmoq'], ['buy', 'purchase', 'sotib olmoq'], ['use', 'utilise', 'foydalanmoq'],
  ['try', 'attempt', 'urinmoq'], ['find out', 'discover', 'aniqlamoq'], ['make better', 'improve', 'yaxshilamoq'],
  ['go up', 'increase', 'oshmoq'], ['go down', 'decrease', 'kamaymoq'], ['look at', 'examine', "ko'rib chiqmoq"],
  ['think about', 'consider', "o'ylab ko'rmoq"], ['main', 'primary', 'asosiy'], ['very bad', 'severe', "og'ir, jiddiy"],
  ['old', 'elderly', 'keksa (inson)'], ['rich', 'wealthy', 'boy'], ['poor', 'disadvantaged', 'kambag‘al, imkoniyati cheklangan'],
  ['job', 'occupation', 'kasb'], ['money', 'funding', 'mablag‘'], ['problem', 'issue', 'muammo'],
  ['answer', 'solution', 'yechim'], ['idea', 'concept', 'tushuncha'], ['way', 'method', 'usul'],
  ['part', 'component', 'qism'], ['chance', 'opportunity', 'imkoniyat'], ['place', 'location', 'joy'],
  ['town', 'urban area', 'shahar hududi'], ['people', 'individuals', 'odamlar'], ['children', 'youngsters', 'bolalar'],
  ['hard', 'challenging', 'qiyin'], ['easy', 'straightforward', 'oson'], ['many', 'numerous', "ko'p"],
  ['clear', 'evident', 'aniq'], ['usual', 'typical', 'odatiy'], ['dangerous', 'hazardous', 'xavfli'],
  ['cheap', 'affordable', 'arzon'], ['quick', 'rapid', 'tez'], ['strange', 'unusual', "g'alati"],
  ['say', 'state', "bayon qilmoq"], ['allow', 'permit', 'ruxsat bermoq'], ['stop', 'prevent', 'oldini olmoq'],
  ['keep', 'maintain', 'saqlamoq'], ['change', 'modify', "o'zgartirmoq"], ['choose', 'select', 'tanlamoq'],
  ['area', 'region', 'hudud'], ['because of', 'due to', 'sababli'], ['also', 'furthermore', 'shuningdek'],
];

export const synonymSets = [
  {
    id: 'synonyms', title: 'Sinonim va parafraz',
    rules: [
      ['Reading', "Savolda matndagi so'z emas, uning sinonimi bo'ladi: matnda \"purchase\" → savolda \"buy\"", 'The number of elderly people… ← old people'],
      ['Writing', "Bir so'zni takrorlamang — sinonim bilan almashtiring (Lexical resource)", 'important → crucial, significant'],
      ['Ehtiyot', "Sinonim har doim 100% bir xil emas: elderly — faqat odamlar uchun", 'an elderly man ✓ · an elderly car ✗'],
    ],
    items: pairs.map(([w, syn, uz], i) => {
      const others = [7, 19, 31].map((d) => pairs[(i + d) % pairs.length][1]);
      return [`sy-${w.replace(/\s+/g, '-')}`, `"${w}" so'zining akademik sinonimi (${uz})?`, syn, `${w} → ${syn}. IELTS Writing va Reading'da tez-tez uchraydi.`, [syn, ...others]];
    }),
  },
];
