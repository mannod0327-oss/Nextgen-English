# O'zgarishlar tarixi

Har bir iteratsiyaning qabul mezonlari va jurnali: [docs/SPEC.md](docs/SPEC.md).

## Spec-driven tsikl, iteratsiyalar 23–122 (v=136)

100 iteratsiya. Har birida birinchi navbatda SPEC'dagi eng yuqori ⬜ band bajarildi, keyin unit, kontent va E2E testlar (mobil kenglik va a11y bilan) o'tkazildi va GitHub Pages'ga deploy qilindi. Barcha kontent original.

### IELTS

- **To'liq sinov testlari**: 4 tadan 15 tagacha (5–15-mocklar). Har biri: Listening 40 savol / 30 daqiqa va Reading 40 savol / 60 daqiqa, oxirida band.
- **Savol turlari strategiyalari**: 6 ta qo'llanma (T/F/NG, matching headings, gap-fill, Listening Part 1–4, Task 1, Task 2).
- **Writing**: 78 ta topshiriq, ulardan 72 tasida Band 7 namunaviy javob bor.
  - Task 1: SVG chiziqli va ustunli diagrammalar, jadvallar, jarayon sxemalari.
  - General Training xatlari.
  - Writing tekshiruvi: leksik profil (TTR va akademik so'zlar).
- **Speaking**: 30 ta Part 2 namunasi, 20 ta Part 3 javobi, 40 ta Part 1 javobi, shadowing mashqi.
- **Imtihon rejasi**: imtihon sanasigacha kunlar hisobi va kunlik reja.

### Trenerlar (#/drill — 9 ta, 460 ta element)

- Artikllar, imlo, bog'lovchilar, so'z urg'usi, Task 1 tili, sinonim/parafraz, so'z yasalishi, predlogli fe'llar, gap urg'usi.
- Raqam va sanalarni tinglash, tinglab to'ldirish (diktant).
- Aralash grammatika testi.

### Kontent

- **So'zlar**: 699 ta, 48 mavzu (IELTS mavzulari, frazali fe'llar, akademik so'zlar).
- **Grammatika**: 59 mavzu, 272 mashq (A1–C1), chop etiladigan ishchi varaqlar bilan.
- **Matnlar**: 50 ta o'qish matni va 38 ta tinglash mashqi, jami 463 savol. O'qish tezligini (WPM) o'lchash va cloze rejimi bor.
- **Kollokatsiyalar**: 198 ta kollokatsiya va idioma.
- **Talaffuz va nutq**: 16 ta minimal juft to'plami, 30 ta Speech Lab vaziyati.
- **Daraja testi**: 80 ta savol, har darajadan tasodifiy tanlanadi.
- **Imtihonlar**: 6 ta tayyor imtihon, jumladan C1.

### O'quvchi uchun

- Kunlik XP maqsadi (halqa va 7 kunlik ko'rinish), kun so'zi.
- Xatolar daftarini kunlik takrorlash.
- Shaxsiy so'zlar ro'yxati (kartochkalar va chop etish).
- Shaxsiy o'quv yo'li, haftalik hisobot, progressni CSV eksport qilish.
- Testlarni havola orqali ulashish.
- Bosh sahifada tez qidiruv va oxirgi sahifalar, yo'riqnoma (#/help).

### Texnik

- IELTS, trenerlar va kollokatsiyalar dangasa (lazy) yuklanadi, shuning uchun birinchi render 600 KB dan kichik.
- E2E'da a11y auditi: har bir boshqaruvning nomi bor, id'lar takrorlanmaydi, klaviatura fokusi ko'rinadi.
- 69 ta unit/kontent testi va to'liq E2E smoke (mobil overflow va offline service worker bilan).
