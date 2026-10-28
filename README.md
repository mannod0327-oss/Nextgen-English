# 🎓 Nextgen English — EduPlatform Next-Gen

O'zbek tilida so'zlashuvchilar uchun ingliz tilini o'rganish platformasi. 14 ta ta'limiy
dasturning (Rosetta Stone, OALD, CALD, ProfExam, Schoolhouse Test, Jourist va boshqalar)
**ochiq tavsiflangan** eng kuchli mexanizmlari bitta zamonaviy, oflayn ishlaydigan veb-ilovaga
mustaqil ravishda (clean-room) qayta qurilgan.

- **Bog'liqliksiz** — hech qanday `npm install` kerak emas; faqat brauzer va Node.js ≥ 20.
- **Oflayn** — barcha kontent va progress brauzerda (localStorage) saqlanadi.
- **Testlangan** — 18 ta unit/kontent testi + 10 bosqichli brauzer E2E testi.

## Ishga tushirish

```bash
npm start            # http://localhost:8080
npm test             # unit + kontent testlari (node:test)
npm run test:e2e     # brauzer smoke testi (Playwright + Chromium kerak; serverni avval ishga tushiring)
```

`index.html` ni har qanday statik hostingga (GitHub Pages, Netlify) qo'yish ham yetarli.

## Modullar

| Bo'lim                 | Nima qiladi                                                                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 🧭 Daraja testi        | Adaptiv "zinapoya" testi: ketma-ket 2 to'g'ri → daraja oshadi, xato → tushadi. Natija A1–C1.                                              |
| 🖼️ Vizual lug'at       | Rasm + so'z + IPA + o'zbekcha tarjima + misol. SM-2 takrorlash algoritmi, klaviatura (Space, 1–4).                                        |
| 🌊 Immersiya o'yini    | Tarjimasiz: rasmga mos inglizcha so'zni topish.                                                                                           |
| 📐 Grammatika          | Mavzular daraxti → qoida, jadval, ovozli misollar, avtomatik tekshiriladigan mashqlar.                                                    |
| 🎙️ Nutq laboratoriyasi | Real vaziyatlar (mehmonxona, kafe, ofis…). Namuna (TTS, sekin rejim), mikrofon to'lqini, nutqni aniqlash va so'zma-so'z 0–100% baho.      |
| 📖 Lug'at              | Saralangan prefiks indeksida ikkilik qidiruv, so'z shakllarini tanish (`studies → study`, `running → run`), xato yozilganda taklif.       |
| ⏱️ Imtihon simulyatori | Taymer, savollar navigatsiya paneli, javoblarni saqlash, natija va xatolar ustida ishlash. JSON test faylini yuklash.                     |
| 🛠️ Test yaratuvchi     | O'qituvchi uchun: 5 turdagi savol, validatsiya, JSON eksport/import, aralashtirilgan variantlar (A/B/C) va javob kaliti bilan chop etish. |

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

## Ma'lum cheklovlar

- **Talaffuz bahosi** brauzerning nutqni aniqlash (ASR) natijasidagi matnni taqqoslaydi, akustik
  modelni emas. U "nima eshitildi"ni o'lchaydi, intonatsiyani emas. Nutqni aniqlash Chrome/Edge'da
  ishlaydi; boshqa brauzerlarda aytilganni yozib tekshirish mumkin.
- **Progress** bitta brauzerda saqlanadi (sinxronizatsiya yo'q). Ko'p qurilma uchun backend kerak.
- **Kontent hajmi** namunaviy: 9 mavzuda 75 so'z, 11 grammatika mavzusi (36 mashq), 20 ta daraja savoli, 8 vaziyatda 26 ibora.
  Yangi kontent `src/data/` fayllariga qo'shiladi; `npm test` uni avtomatik tekshiradi.
- Lug'at rasmlari — emoji (litsenziyasiz). Haqiqiy rasmlar uchun `emoji` maydonini rasm URL bilan almashtirish kifoya.

## Huquqiy eslatma

Bu loyiha hech qanday tijoriy dasturning kodini, ma'lumotlar bazasini yoki media fayllarini
o'z ichiga olmaydi. Barcha kontent original; mexanizmlar faqat ommaviy tavsiflar asosida qayta yaratilgan.
Pirat saytlardan (masalan, getintopc) yuklangan "crack" dasturlardan foydalanmang — ular litsenziyani
buzadi va ko'pincha zararli dastur saqlaydi.
