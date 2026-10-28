// Graded reading texts (A1–B2) with comprehension questions in the exam question schema.
// Original texts set in Uzbekistan so the context is familiar; each can also be heard via TTS.

export const readings = [
  {
    id: 'my-family', level: 'A1', title: 'My Family', uzTitle: 'Mening oilam',
    text: `My name is Dilnoza. I am fifteen years old and I live in Samarkand. There are five people in my family: my father, my mother, my two brothers and me. My father is a doctor. He works at the city hospital. My mother is a teacher. She teaches maths at a school near our house. My older brother, Jasur, is a student at university. My younger brother, Bekzod, is eight. He likes football very much. We have a cat. Her name is Mosh. In the evening we eat dinner together and talk about our day.`,
    questions: [
      { id: 'mf1', type: 'single', prompt: 'Where does Dilnoza live?', options: ['Tashkent', 'Bukhara', 'Samarkand', 'Khiva'], answer: 2 },
      { id: 'mf2', type: 'single', prompt: 'What is her mother’s job?', options: ['doctor', 'teacher', 'student', 'nurse'], answer: 1 },
      { id: 'mf3', type: 'fill', prompt: 'There are ___ people in her family. (raqamni so‘z bilan yozing)', answer: ['five', '5'] },
      { id: 'mf4', type: 'single', prompt: 'Who likes football?', options: ['Jasur', 'Bekzod', 'Dilnoza', 'her father'], answer: 1 },
      { id: 'mf5', type: 'single', prompt: 'Mosh is …', options: ['a dog', 'a brother', 'a cat', 'a teacher'], answer: 2 },
    ],
  },
  {
    id: 'bazaar', level: 'A1', title: 'At the Bazaar', uzTitle: 'Bozorda',
    text: `Every Saturday morning Aziz goes to the bazaar with his grandmother. The bazaar is big and very busy. There are many fruits and vegetables. In summer the melons are sweet and cheap. Aziz’s grandmother buys bread, tomatoes, onions and carrots for plov. She always talks to the sellers and asks for a good price. Aziz carries the bags. After shopping they drink green tea in a small café. Aziz likes Saturdays because his grandmother buys him an ice cream.`,
    questions: [
      { id: 'bz1', type: 'single', prompt: 'When does Aziz go to the bazaar?', options: ['every Sunday', 'every Saturday morning', 'every evening', 'in winter'], answer: 1 },
      { id: 'bz2', type: 'multiple', prompt: 'What does his grandmother buy for plov? (Hammasini belgilang)', options: ['onions', 'apples', 'carrots', 'milk'], answer: [0, 2] },
      { id: 'bz3', type: 'single', prompt: 'What does Aziz do at the bazaar?', options: ['He sells fruit.', 'He carries the bags.', 'He cooks plov.', 'He drives the car.'], answer: 1 },
      { id: 'bz4', type: 'fill', prompt: 'After shopping they drink green ___.', answer: 'tea' },
      { id: 'bz5', type: 'single', prompt: 'Why does Aziz like Saturdays?', options: ['He doesn’t go to school.', 'He gets an ice cream.', 'He plays football.', 'He sees his friends.'], answer: 1 },
    ],
  },
  {
    id: 'navruz', level: 'A2', title: 'Navruz', uzTitle: 'Navro‘z',
    text: `Navruz is one of the most important holidays in Uzbekistan. People celebrate it on 21 March, when spring begins and day and night are the same length. Before the holiday, families clean their houses and visit older relatives. A special dish called sumalak is cooked from young wheat. Women stir it all night in a big pot and sing songs. In the morning everyone tastes it. There are also concerts, games and traditional sports in the parks. For many people, Navruz is a time to forgive old problems and start the new year with a clean heart.`,
    questions: [
      { id: 'nv1', type: 'fill', prompt: 'Navruz is celebrated on 21 ___.', answer: 'March' },
      { id: 'nv2', type: 'single', prompt: 'Sumalak is made from …', options: ['rice', 'young wheat', 'meat', 'apples'], answer: 1 },
      { id: 'nv3', type: 'single', prompt: 'How long do women stir sumalak?', options: ['one hour', 'all morning', 'all night', 'two days'], answer: 2 },
      { id: 'nv4', type: 'multiple', prompt: 'What do people do before the holiday?', options: ['clean their houses', 'go to the sea', 'visit older relatives', 'buy new cars'], answer: [0, 2] },
      { id: 'nv5', type: 'single', prompt: 'According to the text, Navruz is a time to …', options: ['work more', 'forgive old problems', 'travel abroad', 'stay at home'], answer: 1 },
    ],
  },
  {
    id: 'first-day', level: 'A2', title: 'My First Day at Work', uzTitle: 'Ishdagi birinchi kunim',
    text: `Hi Madina,
I started my new job at the bank yesterday! I was very nervous in the morning, so I woke up at six and left home early. The office is in the city centre, about twenty minutes by metro. My manager, Mr Rustamov, was very kind. He showed me the building and introduced me to my colleagues. In the afternoon I learned how to use the computer system. It was difficult, but my colleague Laylo helped me a lot. I was tired in the evening, but I was happy. Let’s meet on Saturday and I’ll tell you more!
Best wishes,
Nodira`,
    questions: [
      { id: 'fd1', type: 'single', prompt: 'Where does Nodira work now?', options: ['at a school', 'at a bank', 'at a hospital', 'at a shop'], answer: 1 },
      { id: 'fd2', type: 'single', prompt: 'Why did she leave home early?', options: ['She was nervous.', 'The metro was closed.', 'Her manager asked her.', 'She wanted breakfast.'], answer: 0 },
      { id: 'fd3', type: 'fill', prompt: 'The office is about ___ minutes by metro. (raqam bilan yoki so‘z bilan)', answer: ['twenty', '20'] },
      { id: 'fd4', type: 'single', prompt: 'Who helped her with the computer system?', options: ['Madina', 'Mr Rustamov', 'Laylo', 'nobody'], answer: 2 },
      { id: 'fd5', type: 'single', prompt: 'How did she feel in the evening?', options: ['tired but happy', 'angry', 'bored', 'ill'], answer: 0 },
    ],
  },
  {
    id: 'learning-online', level: 'B1', title: 'Learning English Online', uzTitle: 'Ingliz tilini onlayn o‘rganish',
    text: `A few years ago, most people learned English in a classroom with a teacher and a textbook. Today, millions of students also use apps, video lessons and online courses. The biggest advantage is flexibility: you can study at any time and in any place, even on the bus. Many apps also use games and points to keep learners motivated. However, online learning has some disadvantages too. It is easy to lose concentration when your phone is full of messages, and an app cannot always correct your pronunciation or explain why a sentence is wrong. Experts say that the best results come from combining both methods: regular lessons with a teacher and a little practice online every day. Fifteen minutes a day, they say, is better than three hours once a week.`,
    questions: [
      { id: 'lo1', type: 'single', prompt: 'What is the biggest advantage of online learning, according to the text?', options: ['It is free.', 'It is flexible.', 'It has no homework.', 'It is faster.'], answer: 1 },
      { id: 'lo2', type: 'multiple', prompt: 'Which disadvantages are mentioned?', options: ['It is easy to lose concentration.', 'It is too expensive.', 'Apps cannot always correct pronunciation.', 'There are no video lessons.'], answer: [0, 2] },
      { id: 'lo3', type: 'single', prompt: 'What do experts recommend?', options: ['only apps', 'only a teacher', 'a combination of both', 'three hours once a week'], answer: 2 },
      { id: 'lo4', type: 'fill', prompt: 'Many apps use games and ___ to keep learners motivated.', answer: 'points' },
      { id: 'lo5', type: 'match', prompt: 'Match the word to its meaning:', pairs: [['flexibility', 'moslashuvchanlik'], ['advantage', 'afzallik'], ['concentration', 'diqqat'], ['regular', 'muntazam']] },
    ],
  },
  {
    id: 'aral-sea', level: 'B1', title: 'The Aral Sea', uzTitle: 'Orol dengizi',
    text: `The Aral Sea, between Uzbekistan and Kazakhstan, was once one of the four largest lakes in the world. Fishermen caught tons of fish there, and towns like Muynak were busy ports. In the 1960s, however, large amounts of water from the Amu Darya and Syr Darya rivers began to be used to grow cotton. As less water reached the sea, it started to shrink. Today it has lost most of its water, and old ships lie in the sand far from the shore. The dry seabed has created a new desert, the Aralkum, and strong winds carry salt and dust to nearby villages. Scientists and governments are now planting trees on the dry seabed to stop the sand from moving, and the northern part of the sea has partly recovered.`,
    questions: [
      { id: 'as1', type: 'single', prompt: 'Why did the Aral Sea start to shrink?', options: ['There was no rain.', 'River water was used to grow cotton.', 'The sea froze.', 'Ships took the water.'], answer: 1 },
      { id: 'as2', type: 'fill', prompt: 'The new desert on the dry seabed is called the ___.', answer: 'Aralkum' },
      { id: 'as3', type: 'single', prompt: 'What do strong winds carry to the villages?', options: ['rain and snow', 'fish', 'salt and dust', 'cotton'], answer: 2 },
      { id: 'as4', type: 'single', prompt: 'What are people doing to help?', options: ['building new ports', 'planting trees on the seabed', 'growing more cotton', 'moving the villages'], answer: 1 },
      { id: 'as5', type: 'single', prompt: 'Muynak was once …', options: ['a desert', 'a busy port', 'a river', 'a cotton factory'], answer: 1 },
    ],
  },
  {
    id: 'remote-work', level: 'B2', title: 'Working from Home', uzTitle: 'Uydan ishlash',
    text: `Since 2020, working from home has gone from a rare privilege to an everyday reality for millions of office workers. Supporters argue that it saves hours of commuting, reduces traffic and pollution, and allows employees to organise their day around family life. Companies, too, can save money on office space and hire talented people who live far away. Critics, however, point out that the line between work and private life becomes blurred, and many remote workers admit that they work longer hours than before. Others miss the informal conversations in the corridor, which often lead to new ideas and help new employees learn from experienced colleagues. As a result, many organisations have chosen a hybrid model, in which staff spend two or three days in the office and the rest at home. Whether this compromise will last remains to be seen.`,
    questions: [
      { id: 'rw1', type: 'multiple', prompt: 'Which benefits do supporters mention?', options: ['less commuting', 'higher salaries', 'less pollution', 'more time with family'], answer: [0, 2, 3] },
      { id: 'rw2', type: 'single', prompt: 'What is one problem critics mention?', options: ['Internet is too slow.', 'Work and private life become blurred.', 'Offices are too expensive.', 'Nobody wants to work.'], answer: 1 },
      { id: 'rw3', type: 'single', prompt: 'Why are informal conversations important, according to the text?', options: ['They are fun.', 'They lead to new ideas and help new employees learn.', 'Managers like them.', 'They save time.'], answer: 1 },
      { id: 'rw4', type: 'fill', prompt: 'Many organisations now use a ___ model.', answer: 'hybrid' },
      { id: 'rw5', type: 'single', prompt: 'The phrase "remains to be seen" means …', options: ['it is certain', 'nobody knows yet', 'it is a secret', 'it has finished'], answer: 1 },
    ],
  },
  {
    id: 'silk-road', level: 'B2', title: 'The Great Silk Road', uzTitle: 'Buyuk Ipak yo‘li',
    text: `For more than fifteen centuries, the network of trade routes known as the Silk Road connected China with the Middle East and Europe. Although silk gave the routes their name, merchants carried a remarkable variety of goods, from spices and glass to paper and horses. Cities in present-day Uzbekistan, such as Samarkand, Bukhara and Khiva, flourished as caravan stops where travellers could rest, trade and exchange news. Perhaps more important than the goods, however, were the ideas that travelled along the roads: religions, scientific knowledge, art styles and technologies such as papermaking spread from one civilisation to another. Scholars like Al-Khwarizmi and Ibn Sina, whose work later influenced European science, lived in this region. Today, the Silk Road cities attract tourists from all over the world, and their mosques, madrasas and markets remind visitors of a time when Central Asia stood at the crossroads of the world.`,
    questions: [
      { id: 'sr1', type: 'single', prompt: 'What is the main idea of the text?', options: ['Silk was the only product traded.', 'The Silk Road spread goods and ideas between civilisations.', 'Tourism in Uzbekistan is growing.', 'Samarkand is the oldest city in the world.'], answer: 1 },
      { id: 'sr2', type: 'multiple', prompt: 'Which goods are mentioned?', options: ['spices', 'cars', 'paper', 'horses', 'coffee'], answer: [0, 2, 3] },
      { id: 'sr3', type: 'single', prompt: 'The word "flourished" is closest in meaning to …', options: ['disappeared', 'grew and became successful', 'were destroyed', 'stayed small'], answer: 1 },
      { id: 'sr4', type: 'fill', prompt: 'One technology that spread along the roads was ___. (bitta so‘z)', answer: ['papermaking', 'paper-making'] },
      { id: 'sr5', type: 'single', prompt: 'Why are Al-Khwarizmi and Ibn Sina mentioned?', options: ['They were merchants.', 'Their work influenced European science.', 'They built mosques.', 'They were tourists.'], answer: 1 },
    ],
  },
];
