// Visual vocabulary (Jourist-style themed picture cards). Emoji = license-free picture.
// fields: word, ipa, uz (translation), pos, level (CEFR), emoji, example, category

const raw = {
  "Uy va oila": [
    ['house', '/haʊs/', 'uy', 'noun', 'A1', '🏠', 'They live in a small house.'],
    ['kitchen', '/ˈkɪtʃɪn/', 'oshxona', 'noun', 'A1', '🍳', 'Mum is cooking in the kitchen.'],
    ['bed', '/bed/', 'karavot', 'noun', 'A1', '🛏️', 'I go to bed at ten.'],
    ['family', '/ˈfæməli/', 'oila', 'noun', 'A1', '👨‍👩‍👧', 'My family is very big.'],
    ['key', '/kiː/', 'kalit', 'noun', 'A1', '🔑', "I can't find my key."],
    ['window', '/ˈwɪndəʊ/', 'deraza', 'noun', 'A1', '🪟', 'Please open the window.'],
    ['neighbour', '/ˈneɪbə/', "qo'shni", 'noun', 'A2', '🏘️', 'Our neighbour has a dog.'],
    ['furniture', '/ˈfɜːnɪtʃə/', 'mebel', 'noun', 'B1', '🛋️', 'We bought new furniture.'],
  ],
  "Ovqat": [
    ['apple', '/ˈæpl/', 'olma', 'noun', 'A1', '🍎', 'An apple a day keeps the doctor away.'],
    ['bread', '/bred/', 'non', 'noun', 'A1', '🍞', 'We eat bread every day.'],
    ['water', '/ˈwɔːtə/', 'suv', 'noun', 'A1', '💧', 'Can I have some water?'],
    ['tea', '/tiː/', 'choy', 'noun', 'A1', '🍵', 'Would you like green tea?'],
    ['rice', '/raɪs/', 'guruch', 'noun', 'A1', '🍚', 'Plov is made with rice.'],
    ['delicious', '/dɪˈlɪʃəs/', 'mazali', 'adjective', 'A2', '😋', 'This soup is delicious.'],
    ['recipe', '/ˈresəpi/', 'retsept', 'noun', 'B1', '📜', "Grandma's recipe is a secret."],
    ['ingredient', '/ɪnˈɡriːdiənt/', 'tarkibiy qism', 'noun', 'B2', '🧂', 'Fresh ingredients matter most.'],
  ],
  "Shahar va sayohat": [
    ['bus', '/bʌs/', 'avtobus', 'noun', 'A1', '🚌', 'I take the bus to work.'],
    ['airport', '/ˈeəpɔːt/', 'aeroport', 'noun', 'A2', '✈️', 'The airport is far from here.'],
    ['ticket', '/ˈtɪkɪt/', 'chipta', 'noun', 'A1', '🎫', 'Two tickets to Samarkand, please.'],
    ['hotel', '/həʊˈtel/', 'mehmonxona', 'noun', 'A1', '🏨', 'Our hotel has a pool.'],
    ['map', '/mæp/', 'xarita', 'noun', 'A1', '🗺️', 'Look at the map.'],
    ['luggage', '/ˈlʌɡɪdʒ/', 'yuk', 'noun', 'A2', '🧳', 'My luggage is too heavy.'],
    ['journey', '/ˈdʒɜːni/', 'safar', 'noun', 'B1', '🛤️', 'The journey took six hours.'],
    ['destination', '/ˌdestɪˈneɪʃn/', 'manzil', 'noun', 'B2', '📍', 'Bukhara is a popular destination.'],
  ],
  "Inson tanasi va sog'liq": [
    ['head', '/hed/', 'bosh', 'noun', 'A1', '🙂', 'My head hurts.'],
    ['hand', '/hænd/', "qo'l", 'noun', 'A1', '✋', 'Raise your hand.'],
    ['eye', '/aɪ/', "ko'z", 'noun', 'A1', '👁️', 'She has blue eyes.'],
    ['doctor', '/ˈdɒktə/', 'shifokor', 'noun', 'A1', '🩺', 'You should see a doctor.'],
    ['medicine', '/ˈmedsn/', 'dori', 'noun', 'A2', '💊', 'Take this medicine twice a day.'],
    ['healthy', '/ˈhelθi/', "sog'lom", 'adjective', 'A2', '💪', 'Vegetables keep you healthy.'],
    ['symptom', '/ˈsɪmptəm/', 'alomat', 'noun', 'B2', '🤒', 'Fever is a common symptom.'],
  ],
  "Ish va ta'lim": [
    ['book', '/bʊk/', 'kitob', 'noun', 'A1', '📘', 'I am reading a good book.'],
    ['teacher', '/ˈtiːtʃə/', "o'qituvchi", 'noun', 'A1', '🧑‍🏫', 'Our teacher is very kind.'],
    ['computer', '/kəmˈpjuːtə/', 'kompyuter', 'noun', 'A1', '💻', 'My computer is slow.'],
    ['meeting', '/ˈmiːtɪŋ/', "yig'ilish", 'noun', 'A2', '🤝', 'The meeting starts at nine.'],
    ['salary', '/ˈsæləri/', 'maosh', 'noun', 'B1', '💵', 'She asked for a higher salary.'],
    ['deadline', '/ˈdedlaɪn/', 'muddat', 'noun', 'B1', '⏰', 'The deadline is on Friday.'],
    ['achieve', '/əˈtʃiːv/', 'erishmoq', 'verb', 'B1', '🏆', 'You can achieve your goals.'],
    ['negotiate', '/nɪˈɡəʊʃieɪt/', 'muzokara qilmoq', 'verb', 'C1', '🗣️', 'We negotiated a better price.'],
  ],
  "Tabiat": [
    ['sun', '/sʌn/', 'quyosh', 'noun', 'A1', '☀️', 'The sun is shining.'],
    ['tree', '/triː/', 'daraxt', 'noun', 'A1', '🌳', 'There is a big tree in our yard.'],
    ['mountain', '/ˈmaʊntɪn/', "tog'", 'noun', 'A2', '⛰️', 'Chimgan mountains are beautiful.'],
    ['river', '/ˈrɪvə/', 'daryo', 'noun', 'A1', '🏞️', 'The river is very wide.'],
    ['weather', '/ˈweðə/', 'ob-havo', 'noun', 'A2', '🌦️', 'What is the weather like today?'],
    ['environment', '/ɪnˈvaɪrənmənt/', 'atrof-muhit', 'noun', 'B2', '🌍', 'We must protect the environment.'],
    ['drought', '/draʊt/', "qurg'oqchilik", 'noun', 'C1', '🏜️', 'The drought destroyed the crops.'],
  ],
};

export const vocabulary = Object.entries(raw).flatMap(([category, rows]) =>
  rows.map(([word, ipa, uz, pos, level, emoji, example]) => ({
    id: word, word, ipa, uz, pos, level, emoji, example, category,
  })),
);

export const categories = Object.keys(raw);
