# Nextgen English — rivojlanish spec'i (spec-driven loop)

Har bir iteratsiya: **backlog'dan eng yuqori ⬜ punktni oladi → amalga oshiradi → testlar (unit + kontent + E2E) → commit/push → Pages deploy tekshiriladi → shu faylda ✅ qilib belgilanadi.**
Qoidalar: bog'liqliksiz (vanilla JS), oflayn ishlaydi, barcha kontent original yoki ochiq litsenziyali, har bir yangi kontent avtomatik testlanadi.

## Maqsad

O'zbek tilida so'zlashuvchi o'quvchini A1 dan IELTS 7+ gacha olib boradigan, internetsiz ishlaydigan, bepul platforma.

## Backlog (prioritet bo'yicha)

| #   | Funksiya                                     | Nega muhim                                                      | Qabul mezonlari                                                                                                                                     | Holat |
| --- | -------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| 1   | **Noto'g'ri fe'llar trenajyori** (`#/verbs`) | O'zbek o'quvchilarining eng ko'p xatosi; har bir darajada kerak | ≥100 fe'l (V1/V2/V3 + o'zbekcha); jadval + test (V2/V3 yozish, 10 ta tasodifiy); xatolar daftariga tushadi; kontent testi takrorlanishni tekshiradi | ✅    |
| 2   | **Progressni saqlash/tiklash**               | Hamma narsa bitta brauzerda — telefon almashsa yo'qoladi        | "Zaxira nusxa": JSON yuklab olish va qayta yuklash; noto'g'ri faylda xato xabari; unit test                                                         | ✅    |
| 3   | **Bugungi reja** (bosh sahifa)               | Nima qilishni bilmaslik — tashlab ketishning asosiy sababi      | Darajaga mos 4 ta vazifa; bajarilganlari ✅; har kuni yangilanadi (sana bo'yicha deterministik)                                                     | ✅    |
| 4   | **Talaffuz: minimal juftlar** (`#/sounds`)   | w/v, θ/s, iː/ɪ — o'zbeklar uchun qiyin tovushlar                | ≥8 tovush juftligi × 6 juft so'z; TTS bilan "qaysi so'zni eshitdingiz?"; natija %                                                                   | ✅    |
| 5   | **Speaking: ovoz yozib olish va tinglash**   | IELTS Speaking'ga tayyorlanishda o'zini eshitish                | Cue card'da 🎙 yozish → ▶ tinglash (MediaRecorder); ruxsat bo'lmasa xabar                                                                           | ⬜    |
| 6   | **Progress sahifasi** (`#/progress`)         | Motivatsiya: o'sishni ko'rish                                   | Sinov testlari tarixi, o'qish/grammatika %, xatolar, so'zlar; SVG grafik                                                                            | ⬜    |
| 7   | **Oflayn PWA**                               | "Oflayn" va'dasi haqiqiy bo'lishi; telefonga o'rnatish          | manifest + service worker (cache-first); ikkinchi ochilishda internetsiz ishlaydi                                                                   | ⬜    |
| 8   | **Kollokatsiya va iboralar**                 | IELTS Lexical resource                                          | ≥60 kollokatsiya mashq bilan                                                                                                                        | ⬜    |
| 9   | **Mock Test 3**                              | Ko'proq to'liq format                                           | 40+40 savol, mavjud testlar o'tadi                                                                                                                  | ⬜    |
| 10  | **Global qidiruv**                           | 200+ topshiriq orasidan topish                                  | Bitta qidiruv: so'z, grammatika, matn, IELTS topshiriq                                                                                              | ⬜    |

## Iteratsiyalar jurnali

- **1-iteratsiya** — `#/verbs`: 112 ta noto'g'ri fe'l (V1/V2/V3, o'zbekcha, daraja), qidiruv + daraja filtri, 🔊, 10 ta tasodifiy fe'l testi (20 savol, xatolar daftariga tushadi). Topilgan va tuzatilgan: telefonlarda keng jadvallar sahifani yonga cho'zardi → `.tbl` mobil ekranda o'zi skroll qiladi; E2E endi 11 ta sahifada mobil kenglikni tekshiradi.
- **2-iteratsiya** — 💾 Zaxira nusxa (bosh sahifa): `store.snapshot()/restore()` (`src/core/store.js`), JSON yuklab olish va fayldan tiklash, noto'g'ri faylda o'zbekcha xato. Unit test (faqat o'z namespace'i, validatsiya, round-trip) + E2E (yuklab olish → o'zgartirish → tiklash → XP yangilanadi → yomon fayl rad etiladi).
- **3-iteratsiya** — 📅 Bugungi reja (bosh sahifa): `src/core/plan.js` sana bo'yicha deterministik 4 vazifa tanlaydi (10 karta, darajadagi grammatika mavzusi, o'qish matni, B1+ uchun tinglash / A1–A2 uchun fe'llar testi); `activity` jurnali (14 kun) kartalar, grammatika, o'qish va fe'llar testidan yoziladi; bajarilganlar ✅. Unit test (determinizm, daraja, done) + E2E.
- **4-iteratsiya** — 👂 `#/sounds`: o'zbeklar uchun qiyin 10 ta tovush juftligi (w/v, iː/ɪ, θ/s, ð/d, æ/e, ʌ/ɑː, so'z oxiri d/t, ŋ/n, ɒ/ɔː, uː/ʊ) × 6 juft so'z; har biriga o'zbekcha artikulyatsiya maslahati; 10 raundli "qaysi so'zni eshitdingiz?" o'yini (TTS, sekin rejim), eng yaxshi natija saqlanadi, juftlar jadvali. Kontent testi + E2E (10/10) + mobil.
