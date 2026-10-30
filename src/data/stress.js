// Word stress trainer (original). Uzbek tends to stress the last syllable, so English words like
// PHOtograph / phoTOgraphy / photoGRAPHic are often mis-stressed. Row: [syllables "pho-to-graph", stressed index, uz, tip].
// keepOrder: syllables are shown in order (never rotated); speak: the app adds a 🔊 button for the whole word.

const rows = [
  ['pho-to-graph', 0, 'fotosurat', "Ko'p 3 bo'g'inli otlarda urg'u birinchi bo'g'inda."],
  ['pho-to-gra-phy', 1, 'fotografiya', "-graphy, -logy, -nomy oldidan: phoTOgraphy, biOLogy, eCOnomy."],
  ['pho-to-gra-phic', 2, 'fotografik', "-ic qo'shimchasidan oldingi bo'g'in: photoGRAPHic."],
  ['e-co-no-my', 1, 'iqtisodiyot', '-nomy oldidan: eCOnomy.'],
  ['e-co-no-mic', 2, 'iqtisodiy', '-ic oldidan: ecoNOmic.'],
  ['tech-no-lo-gy', 1, 'texnologiya', '-logy oldidan: techNOlogy.'],
  ['tech-no-lo-gi-cal', 2, 'texnologik', '-ical oldidan: technoLOgical.'],
  ['com-for-ta-ble', 0, 'qulay', "COMFtable deb aytiladi — 'for' deyarli eshitilmaydi."],
  ['ve-ge-ta-ble', 0, 'sabzavot', "VEGtable — birinchi bo'g'in."],
  ['in-te-res-ting', 0, 'qiziqarli', "INtresting — birinchi bo'g'in."],
  ['ho-tel', 1, 'mehmonxona', "Istisno: hoTEL — ikkinchi bo'g'in."],
  ['de-ve-lop', 1, 'rivojlantirmoq', "Ko'p 2–3 bo'g'inli fe'llarda urg'u o'zakda: deVElop."],
  ['im-por-tant', 1, 'muhim', 'imPORtant.'],
  ['com-pu-ter', 1, 'kompyuter', 'comPUter.'],
  ['ca-me-ra', 0, 'kamera', 'CAmera.'],
  ['po-lice', 1, 'politsiya', "poLICE — ikkinchi bo'g'in."],
  ['mis-take', 1, 'xato', 'misTAKE.'],
  ['u-ni-ver-si-ty', 2, 'universitet', '-ity oldidan: uniVERsity.'],
  ['a-bi-li-ty', 1, 'qobiliyat', '-ity oldidan: aBIlity.'],
  ['ed-u-ca-tion', 2, "ta'lim", '-tion oldidan: eduCAtion.'],
  ['in-for-ma-tion', 2, "ma'lumot", '-tion oldidan: inforMAtion.'],
  ['com-mu-ni-ca-tion', 3, 'muloqot', '-tion oldidan: communiCAtion.'],
  ['de-ci-sion', 1, 'qaror', '-sion oldidan: deCIsion.'],
  ['Ja-pa-nese', 2, 'yapon', "-ese oxiri urg'uli: JapaNESE."],
  ['en-gi-neer', 2, 'muhandis', "-eer oxiri urg'uli: engiNEER."],
  ['vol-un-teer', 2, "ko'ngilli", "-eer oxiri urg'uli: volunTEER."],
  ['ho-ri-zon', 1, 'ufq', 'hoRIzon.'],
  ['ca-len-dar', 0, 'taqvim', 'CAlendar.'],
  ['choc-o-late', 0, 'shokolad', "CHOClate — birinchi bo'g'in."],
  ['va-ca-tion', 1, "ta'til", '-tion oldidan: vaCAtion.'],
  ['ad-ver-tise-ment', 1, 'reklama', 'Britancha: adVERtisement.'],
  ['ca-ta-stro-phe', 1, 'falokat', 'caTAstrophe.'],
  ['ex-pe-ri-ence', 1, 'tajriba', 'exPErience.'],
  ['po-pu-lar', 0, 'mashhur', 'POpular.'],
  ['re-com-mend', 2, 'tavsiya qilmoq', "recomMEND — oxirgi bo'g'in."],
  ['un-der-stand', 2, 'tushunmoq', "underSTAND — oxirgi bo'g'in."],
  ['fa-mi-ly', 0, 'oila', 'FAmily.'],
  ['ex-er-cise', 0, 'mashq', 'EXercise.'],
  ['ad-van-tage', 1, 'afzallik', 'adVANtage.'],
  ['dis-ad-van-tage', 2, 'kamchilik', 'disadVANtage.'],
  ['de-ve-lop-ment', 1, 'rivojlanish', "-ment urg'uni o'zgartirmaydi: deVElopment."],
  ['ho-li-day', 0, "ta'til, bayram", 'HOliday.'],
];

export const stressSets = [
  {
    id: 'stress', title: "So'z urg'usi", keepOrder: true, speak: true,
    rules: [
      ['-tion / -sion / -ic', "urg'u qo'shimchadan oldingi bo'g'inda", 'eduCAtion, deCIsion, ecoNOmic'],
      ['-ity / -logy / -graphy', "urg'u qo'shimchadan oldingi bo'g'inda", 'uniVERsity, techNOlogy, phoTOgraphy'],
      ['-eer / -ese / -ee', "urg'u oxirgi bo'g'inda", 'engiNEER, JapaNESE, employEE'],
      ["2 bo'g'inli otlar / fe'llar", "otlar ko'pincha 1-bo'g'in, fe'llar 2-bo'g'in", "PREsent (ot) — preSENT (fe'l)"],
    ],
    items: rows.map(([syl, k, uz, tip]) => {
      const parts = syl.split('-');
      return [`st-${parts.join('').toLowerCase()}`, `Urg'u qaysi bo'g'inda? ${parts.join(' · ')} — "${uz}"`, parts[k], tip, parts];
    }),
  },
];
