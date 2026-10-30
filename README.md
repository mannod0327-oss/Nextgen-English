# 🎓 Nextgen English — EduPlatform Next-Gen

**▶️ Ochish: https://mannod0327-oss.github.io/Nextgen-English/**

O'zbek tilida so'zlashuvchilar uchun ingliz tilini o'rganish platformasi. 14 ta ta'limiy
dasturning (Rosetta Stone, OALD, CALD, ProfExam, Schoolhouse Test, Jourist va boshqalar)
**ochiq tavsiflangan** eng kuchli mexanizmlari bitta zamonaviy, oflayn ishlaydigan veb-ilovaga
mustaqil ravishda (clean-room) qayta qurilgan.

- **Bog'liqliksiz** — hech qanday `npm install` kerak emas; faqat brauzer va Node.js ≥ 20.
- **Oflayn (PWA)** — bir marta internet bilan ochilgach, sayt internetsiz ham ishlaydi va telefonga ilova sifatida o'rnatiladi (brauzer menyusi → "Ilova sifatida o'rnatish"). Progress brauzerda saqlanadi.
- **Testlangan** — 35 ta unit/kontent testi + 17 bosqichli brauzer E2E testi.

## Ishga tushirish

```bash
npm start            # http://localhost:8080
npm test             # unit + kontent testlari (node:test)
npm run test:e2e     # brauzer smoke testi (Playwright + Chromium kerak; serverni avval ishga tushiring)
```

`index.html` ni har qanday statik hostingga (GitHub Pages, Netlify) qo'yish ham yetarli.

## Modullar

| Bo'lim                  | Nima qiladi                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 📅 Bugungi reja         | Bosh sahifada har kuni darajangizga mos 4 ta vazifa (kartalar, grammatika, o'qish, tinglash/fe'llar); bajarilganlari avtomatik ✅.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 🌟 Kun so'zi            | Bosh sahifada har kuni darajangizga mos bitta so'z: IPA, o'zbekcha, inglizcha ta'rif (WordNet), misol, 🔊 va mavzuga havola.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 🔎 Qidiruv              | Butun sayt bo'yicha bitta qidiruv: so'zlar, grammatika, qo'llanma, matnlar, IELTS topshiriqlari, fe'llar, iboralar (o'zbekcha yoki inglizcha).                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 🧭 Daraja testi         | Adaptiv "zinapoya" testi: ketma-ket 2 to'g'ri → daraja oshadi, xato → tushadi. Natija A1–C1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 🖼️ Vizual lug'at        | Rasm + so'z + IPA + o'zbekcha tarjima + misol. SM-2 takrorlash algoritmi, klaviatura (Space, 1–4).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 🌊 Immersiya o'yini     | Tarjimasiz: rasmga mos inglizcha so'zni topish.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 📐 Grammatika           | Mavzular daraxti → qoida, jadval, ovozli misollar, avtomatik tekshiriladigan mashqlar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 📰 O'qish va tinglash   | A1–C1 matnlar (O'zbekiston hayotidan), 🔊 tinglash, matnni yashirib tinglash mashqi, tushunish savollari, istalgan so'zni bosib ma'nosini ko'rish, 🖍 IELTS'dagidek matnni belgilash. 🎧 IELTS uslubidagi tinglash mashqlari (matn javobdan keyin ochiladi).                                                                                                                                                                                                                                                                                                                                             |
| 🔁 Noto'g'ri fe'llar    | 112 ta fe'l jadvali (V1/V2/V3, o'zbekcha, daraja), qidiruv, 🔊 tinglash va 10 ta tasodifiy fe'l bo'yicha V2/V3 testi.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 🎯 Mashqlar markazi     | Bitta dvigateldagi trenajyorlar (`#/drill`): 🅰️ artikl va predloglar (66 ta), 🔤 imlo (42 ta: accommodation, necessary…), 🔗 bog'lovchilar (42 ta: although + gap, despite + ot, because of, such as…), 🗣️ so'z urg'usi (42 ta, 🔊 bilan: PHOtograph / phoTOgraphy / photoGRAPHic, -tion, -ity, -eer qoidalari), 📊 IELTS Task 1 tili (42 ta: rise by / to, peak, slightly, twice as many, the vast majority…), 🔁 sinonim va parafraz (54 juft: important → crucial, buy → purchase…); 10 ta tasodifiy savol, o'zbekcha izoh, qoidalar jadvali, har trenajyor uchun eng yaxshi natija, xatolar daftari. |
| 🔢 Raqamlar va sanalar  | IELTS Listening Part 1 uchun: 10 raund, 🔊/🐢 tinglab raqam bilan yozish — 13/30 juftlari, katta sonlar, yillar (nineteen ninety-eight), sanalar (the twenty-first of March), narxlar (£12.50), telefon raqamlari (oh, double four); har safar yangi.                                                                                                                                                                                                                                                                                                                                                    |
| 🧩 Kollokatsiyalar      | 98 ta ibora: make/do/take… + ot, 30 ta frazali fe'l (get over, put up with, come up with…), IELTS sifat+ot birikmalari, idiomalar; o'zbekcha tarjima, misol va 10 savollik test.                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 🎓 IELTS tayyorlov      | Listening (matn yopiq) va Reading (T/F/NG, sarlavhalarni moslash) topshiriqlari, Writing Task 1/2 (taymer, so'z hisoblagich, 4 mezon bo'yicha o'z-o'zini tekshirish, Band 7–8 namunaviy javob), Speaking Part 1–3 (cue card taymeri, ovozni yozib olib qayta tinglash), ball hisoblagich, 6 ta to'liq sinov testi (har biri: Listening 4 qism × 10 savol / 30 daq, Reading 3 matn × 40 savol / 60 daq, yakunda band). Hammasi original.                                                                                                                                                                  |
| 🔍 Writing yordamchisi  | Har bir Writing topshirig'ida "Tekshirish": so'z soni (raqamlar ham sanaladi), bog'lovchi so'zlar, ko'p takrorlangan so'zlar, juda uzun gaplar, qisqartmalar va o'zbeklar ko'p qiladigan 16 xil xato (I am agree, informations, discuss about, said me…) o'zbekcha izoh bilan.                                                                                                                                                                                                                                                                                                                           |
| 📦 IELTS mashqlar banki | 224 ta original topshiriq: 46 Listening (Part 1–4), 47 Reading (T/F/NG, MCQ, gap-fill), 66 Writing (Task 1 jadvallar + Task 2 reja bilan; 24 tasida Band 7 namunaviy javob), 65 Speaking (Part 1–3; 10 ta cue card'da Band 7 namunaviy javob, 🔊 tinglash bilan).                                                                                                                                                                                                                                                                                                                                        |
| 📈 Progress             | Statistika (XP, kunlar, so'zlar, grammatika, o'qish), 🏆 16 ta yutuq nishoni (taraqqiyot chizig'i bilan), IELTS sinov testlari tarixi va band grafigi, 14 kunlik faollik.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 🧾 Xatolar daftari      | Grammatika, O'qish va IELTS testlaridagi har bir noto'g'ri javob avtomatik yig'iladi; qayta javob berib tuzatilganlari o'chadi.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 🌙 Ko'rinish            | Sarlavhada 🌙/☀️ tungi/kunduzgi rejim (standart — qurilma sozlamasi) va A−/A+ shrift o'lchami (87–137%); tanlov qurilmada saqlanadi.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 👂 Qiyin tovushlar      | 10 ta minimal juft to'plami (w/v, θ/s, iː/ɪ, so'z oxiri d/t…), o'zbekcha maslahat, 10 raundli tinglab ajratish o'yini.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 🎙️ Nutq laboratoriyasi  | Real vaziyatlar (mehmonxona, kafe, ofis…). Namuna (TTS, sekin rejim), mikrofon to'lqini, nutqni aniqlash va so'zma-so'z 0–100% baho.                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ✍️ Lug'at testi         | 10 savol: o'zbekchadan inglizchaga yozish va 🔊 eshitib yozish (gapda bo'sh joy), mavzu tanlanadi; xatolar daftariga tushadi, eng yaxshi natija saqlanadi.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 📖 Lug'at               | Saralangan prefiks indeksida ikkilik qidiruv, so'z shakllarini tanish (`studies → study`, `running → run`), xato yozilganda taklif. 3188 so'zga inglizcha ta'rif (Open English WordNet).                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ⏱️ Imtihon simulyatori  | Taymer, savollar navigatsiya paneli, javoblarni saqlash, natija va xatolar ustida ishlash. JSON test faylini yuklash.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 🛠️ Test yaratuvchi      | O'qituvchi uchun: 5 turdagi savol, validatsiya, JSON eksport/import, aralashtirilgan variantlar (A/B/C) va javob kaliti bilan chop etish.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## Arxitektura: qaysi mexanizm qayerdan olingan

| Manba dastur (tahlil)                       | Olingan mexanizm                                                                                                                                     | Fayl                                     |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Learn to Speak English Deluxe               | Diagnostik pre-test, pedagogik logika ↔ kontent ajratilgan (FIS), real hayot ssenariylari                                                            | `src/core/placement.js`, `src/data/*`    |
| Easy English Platinum                       | Immersion sahnalari (Shopping, Dining, Office), Pronunciation Workshop                                                                               | `src/data/dialogues.js`, Speech Lab      |
| English Visual Vocabulary Builder (Jourist) | Tematik rasmli kartochkalar (`words / categories / translations`)                                                                                    | `src/data/vocabulary.js`                 |
| ProfExam Pro (Creator + Simulator)          | Ochiq imtihon formati, ko'p turdagi savollar, taymer, navigatsiya, xatolar tahlili                                                                   | `src/core/exam.js`, Exam view            |
| Schoolhouse Test                            | Qog'ozga chop etish, javob kaliti, takrorlanadigan variantlar                                                                                        | `src/core/printable.js`, `makeVariant()` |
| Ultralingua / OALD (SlovoEd) / CALD         | Prefiks indeks + ikkilik qidiruv, morfologik lemma qidiruvi, noaniq (fuzzy) qidiruv, UK/US talaffuz                                                  | `src/core/dictionary.js`                 |
| Oxford Practice Grammar                     | Grammatika mavzulari daraxti, tushuntirish + mashqlar + natija                                                                                       | `src/data/grammar.js`                    |
| Easy Learning English v6 (Strokes)          | CEFR A1–C1 darajalari, 0–100% nutq bahosi                                                                                                            | `src/core/pronunciation.js`              |
| Rosetta Stone (TruAccent, Audio Companion)  | Tarjimasiz immersiya, talaffuzni foizda baholash, sekin ijro                                                                                         | Immersion + Speech Lab                   |
| NetOp School                                | **Qo'shilmagan** — drayver darajasidagi sinf boshqaruvi veb-ilova doirasidan tashqarida. Test fayllarini tarqatish JSON eksport orqali hal qilinadi. | —                                        |

```
index.html ── src/app.js (UI, hash-router, yagona savol renderer)
                 │
 src/core/     (sof funksiyalar, DOM'siz — Node'da testlanadi)
   srs.js  dictionary.js  pronunciation.js  exam.js  placement.js  printable.js  store.js
                 │
 src/data/     (kontent = ma'lumot; kod o'zgartirmasdan kengaytiriladi)
   vocabulary.js  grammar.js  placement.js  sample-exam.js  dialogues.js
```

Barcha mashqlar (grammatika, daraja testi, imtihon) **bitta** savol sxemasidan foydalanadi, shuning
uchun bitta dvigatel hammasini baholaydi va kontent testlari har bir mashq to'g'riligini tekshiradi.

## Test fayli formati (`nge-exam`, v1)

```json
{
  "format": "nge-exam",
  "version": 1,
  "title": "Unit 3 quiz",
  "passPercent": 70,
  "timeLimitMin": 10,
  "questions": [
    {
      "id": "q1",
      "type": "single",
      "prompt": "She ___ tea.",
      "options": ["drink", "drinks"],
      "answer": 1
    },
    {
      "id": "q2",
      "type": "multiple",
      "prompt": "Irregular verbs?",
      "options": ["go", "play", "eat"],
      "answer": [0, 2]
    },
    {
      "id": "q3",
      "type": "fill",
      "prompt": "Past of 'see':",
      "answer": ["saw"]
    },
    {
      "id": "q4",
      "type": "order",
      "prompt": "Order:",
      "items": ["I", "am", "happy"]
    },
    {
      "id": "q5",
      "type": "match",
      "prompt": "Match:",
      "pairs": [
        ["go", "went"],
        ["eat", "ate"]
      ]
    }
  ]
}
```

Baholash: `multiple` — noto'g'ri tanlov ball kamaytiradi; `order` va `match` — qisman ball;
`fill` — katta-kichik harf, ortiqcha bo'sh joy va oxirgi tinish belgisiga sezgir emas.

## Grammatika qo'llanmasi (145 unit)

`grammar-guide/` — Turbo English · GRAMMAR GUIDE: Raymond Murphy'ning _English Grammar in Use_ kitobi
tartibidagi 145 ta unit uchun original o'zbekcha qo'llanma (rangli jadvallar, xatolar, interaktiv mashqlar).
Nextgen'ning **Grammatika** bo'limida 16 ta bo'lim bo'yicha ro'yxat chiqadi, har bir unit o'z sahifasida ochiladi.

Manba: [`mannod0327-oss/English-grammar-in-use`](https://github.com/mannod0327-oss/English-grammar-in-use),
`docs/` papkasi. Qo'llanma yangilansa, uni qayta ko'chiring va indeksni qayta yarating:

```bash
cp -r ../English-grammar-in-use/docs/. grammar-guide/
node --input-type=module -e 'import fs from "node:fs"; const d=JSON.parse(fs.readFileSync("../English-grammar-in-use/src/units.json","utf8")); fs.writeFileSync("src/data/grammar-guide.js", `export const guideSections = ${JSON.stringify(d.sections.map(({from,to,en,uz})=>({from,to,en,uz})))};\nexport const guideUnits = ${JSON.stringify(d.units)};\n`)'
npm test   # har bir unit sahifasi borligini tekshiradi
```

## Inglizcha ta'riflar

`src/data/definitions.js` — ilovadagi barcha matnlarda uchraydigan 3188 so'z uchun inglizcha ta'rif va misol
([Open English WordNet](https://github.com/globalwordnet/english-wordnet), CC BY 4.0, litsenziya va atribusiya:
[DATA-LICENSES.md](DATA-LICENSES.md)). Fayl faqat Lug'at yoki O'qish ochilganda yuklanadi (~80 KB gzip).
Kontent o'zgarsa, qayta yarating:

```bash
curl -LO https://github.com/CloudBytes-Academy/English-Dictionary-Open-Source/raw/main/v2/dictionary.jsonl.gz
node scripts/build-definitions.mjs dictionary.jsonl.gz
npm test
```

## Rivojlanish rejasi

Keyingi funksiyalar va ularning qabul mezonlari: [docs/SPEC.md](docs/SPEC.md).

## Ma'lum cheklovlar

- **Talaffuz bahosi** brauzerning nutqni aniqlash (ASR) natijasidagi matnni taqqoslaydi, akustik
  modelni emas. U "nima eshitildi"ni o'lchaydi, intonatsiyani emas. Nutqni aniqlash Chrome/Edge'da
  ishlaydi; boshqa brauzerlarda aytilganni yozib tekshirish mumkin.
- **Progress** bitta brauzerda saqlanadi (avtomatik sinxronizatsiya yo'q). Bosh sahifadagi 💾 "Zaxira nusxa" orqali JSON faylga yuklab olib, boshqa qurilmada tiklash mumkin.
- **Kontent hajmi**: 36 mavzuda 459 so'z (aeroport, shifokor, bank vaziyatlari; IELTS: ekologiya, jinoyat va qonun, media va reklama, turizm, iqtisodiyot, shahar va uy-joy; 20 ta frazali fe'l va 24 ta IELTS akademik so'zi bilan), 41 grammatika mavzusi (181 mashq; C1: third conditional, mixed conditionals, inversion, participle clauses, cleft sentences, subjunctive, jumladan "O'zbeklar ko'p qiladigan xatolar", A1–C1) + 145 unitli qo'llanma, 38 ta o'qish matni (A1 7, A2 7, B1 8, B2 8, C1 8) + 21 ta tinglash mashqi A1–C1 (318 savol, IELTS True/False/Not Given va form completion bilan), 60 ta daraja savoli, 6 ta tayyor imtihon (A1, A2–B1, B1, B2, IELTS B2–C1, C1), IELTS: 6 ta Writing (namunaviy javob bilan) va 5 ta Speaking to'plami, 17 vaziyatda 53 ibora (diktant rejimi bilan).
- **Qo'llanma sahifalarida** Nextgen'ga qaytish tugmasi yo'q — brauzerning "orqaga" tugmasidan foydalaning. Qo'llanmadagi mashq natijalari Nextgen XP'siga qo'shilmaydi.
  Yangi kontent `src/data/` fayllariga qo'shiladi; `npm test` uni avtomatik tekshiradi.
- Lug'at rasmlari — emoji (litsenziyasiz). Haqiqiy rasmlar uchun `emoji` maydonini rasm URL bilan almashtirish kifoya.

## Huquqiy eslatma

Bu loyiha hech qanday tijoriy dasturning kodini, ma'lumotlar bazasini yoki media fayllarini
o'z ichiga olmaydi. Barcha kontent original; mexanizmlar faqat ommaviy tavsiflar asosida qayta yaratilgan.
Pirat saytlardan (masalan, getintopc) yuklangan "crack" dasturlardan foydalanmang — ular litsenziyani
buzadi va ko'pincha zararli dastur saqlaydi.
