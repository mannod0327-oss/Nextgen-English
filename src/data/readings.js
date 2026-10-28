// Graded reading texts and listening tasks (A1–C1) with comprehension questions in the exam question schema.
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
  {
    id: 'ulugh-beg', level: 'B2', title: "Ulugh Beg's Observatory", uzTitle: 'Ulug‘bek rasadxonasi',
    text: `In the 1420s, Ulugh Beg, the grandson of Amir Temur and ruler of Samarkand, built one of the most advanced observatories of the medieval world. Unlike most rulers of his time, he was more interested in science than in war. The observatory was a three-storey building on a hill, and its main instrument was a giant meridian arc, partly cut into the rock, which allowed astronomers to measure the positions of the stars with remarkable precision. Working with a team of scholars, Ulugh Beg produced a star catalogue describing more than a thousand stars, and calculated the length of the year with an error of only about a minute. After his death in 1449, the observatory was destroyed and gradually forgotten. Its remains were rediscovered by an archaeologist in 1908, and today visitors to Samarkand can still see the lower part of the great arc.`,
    questions: [
      { id: 'ub1', type: 'single', prompt: 'Ulugh Beg was more interested in science than in war.', options: ['True', 'False', 'Not Given'], answer: 0, explanation: 'IELTS: True — matnda aynan shunday aytilgan.' },
      { id: 'ub2', type: 'single', prompt: 'The observatory had five floors.', options: ['True', 'False', 'Not Given'], answer: 1, explanation: "Matnda “three-storey” deyilgan — demak False." },
      { id: 'ub3', type: 'single', prompt: 'Ulugh Beg learned astronomy from his grandfather.', options: ['True', 'False', 'Not Given'], answer: 2, explanation: 'Matnda bu haqda hech narsa yo‘q — Not Given.' },
      { id: 'ub4', type: 'fill', prompt: 'The main instrument was a giant meridian ___.', answer: 'arc' },
      { id: 'ub5', type: 'fill', prompt: 'The remains were rediscovered in ___. (yil)', answer: '1908' },
    ],
  },
  {
    id: 'ai-education', level: 'C1', title: 'Artificial Intelligence in the Classroom', uzTitle: 'Sun’iy intellekt sinfxonada',
    text: `Few technologies have entered education as quickly as artificial intelligence. Within a couple of years, chatbots that can explain grammar, solve equations and draft essays have become available to almost any student with a phone. Enthusiasts claim that this could finally make personalised tutoring, once a privilege of the wealthy, accessible to everyone: an AI tutor never loses patience, works at midnight and can adapt its explanations to each learner's level. Sceptics, however, warn that easy answers may undermine the very skills education is meant to build. If a machine writes the essay, the student may never learn to organise an argument; if it solves the problem, the struggle that produces understanding disappears. There are practical concerns as well, from factual errors delivered with great confidence to questions of privacy and fairness in assessment. Most educators now agree that banning the technology is neither realistic nor desirable. The real challenge is to redesign tasks so that AI supports thinking rather than replacing it — for example, by asking students to critique a chatbot's answer instead of simply accepting it.`,
    questions: [
      { id: 'ai1', type: 'single', prompt: 'According to enthusiasts, AI could make personalised tutoring available to everyone.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'ai2', type: 'single', prompt: 'Most educators want to ban AI in schools.', options: ['True', 'False', 'Not Given'], answer: 1, explanation: "Matnda “banning… is neither realistic nor desirable” — False." },
      { id: 'ai3', type: 'single', prompt: 'AI tutors are cheaper than human teachers in every country.', options: ['True', 'False', 'Not Given'], answer: 2 },
      { id: 'ai4', type: 'single', prompt: 'The word "undermine" is closest in meaning to …', options: ['strengthen', 'weaken gradually', 'measure', 'replace quickly'], answer: 1 },
      { id: 'ai5', type: 'single', prompt: 'What solution does the writer suggest?', options: ['Ban chatbots completely.', 'Redesign tasks so AI supports thinking.', 'Use AI only at home.', 'Replace teachers with AI.'], answer: 1 },
    ],
  },
  {
    id: 'habits', level: 'C1', title: 'Why Habits Are Hard to Change', uzTitle: 'Odatlarni o‘zgartirish nega qiyin',
    text: `Every New Year, millions of people promise to exercise more, sleep earlier or spend less time on their phones, and by February most of these resolutions have quietly been abandoned. Psychologists argue that the problem is rarely a lack of willpower. Much of our daily behaviour is automatic: a habit forms when an action is repeated in the same situation until the situation itself triggers it. Researchers often describe this as a loop of cue, routine and reward — the phone vibrates, we check it, and we feel a small sense of relief. Because the brain conserves effort by running such loops without conscious thought, simply deciding to stop rarely works. A more effective strategy is to change the environment: keeping the phone in another room removes the cue altogether. Building a new habit also takes longer than popular advice suggests. One well-known study found that participants needed around two months on average before a new behaviour felt automatic, with large differences between individuals. Missing a single day, however, did not seriously damage the process, which suggests that consistency matters more than perfection.`,
    questions: [
      { id: 'hb1', type: 'single', prompt: 'According to psychologists, the main problem is a lack of willpower.', options: ['True', 'False', 'Not Given'], answer: 1 },
      { id: 'hb2', type: 'single', prompt: 'Changing your environment can remove the cue for a habit.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'hb3', type: 'single', prompt: 'Women form new habits faster than men.', options: ['True', 'False', 'Not Given'], answer: 2 },
      { id: 'hb4', type: 'fill', prompt: 'A habit loop consists of cue, routine and ___.', answer: 'reward' },
      { id: 'hb5', type: 'single', prompt: 'What does the study suggest about missing one day?', options: ['You must start again.', 'It does not seriously damage the process.', 'It doubles the time needed.', 'It is impossible to avoid.'], answer: 1 },
    ],
  },
  {
    id: 'water-central-asia', level: 'C1', title: 'Water: Central Asia’s Most Precious Resource', uzTitle: 'Suv — Markaziy Osiyoning eng qimmatli boyligi',
    text: `In a region where summer temperatures regularly exceed forty degrees, water has always shaped where people live and what they grow. Two great rivers, the Amu Darya and the Syr Darya, carry meltwater from the mountains of Tajikistan and Kyrgyzstan across the deserts to the lowlands of Uzbekistan, Turkmenistan and Kazakhstan. For centuries, intricate canal systems allowed oases such as Khorezm and the Fergana Valley to flourish. In the twentieth century, however, irrigation expanded on an unprecedented scale, and much of the water was lost through evaporation and leaking, unlined canals. Today the challenge is twofold. On the one hand, the population is growing and demand for food and electricity is rising; on the other, climate change is shrinking the glaciers that feed the rivers. Experts argue that the most promising responses are not necessarily new dams but more efficient use of what already exists: drip irrigation, lined canals, crops that need less water and closer cooperation between upstream and downstream countries, whose interests have often been in conflict.`,
    questions: [
      { id: 'wa1', type: 'single', prompt: 'The Amu Darya and Syr Darya begin in the mountains of Tajikistan and Kyrgyzstan.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'wa2', type: 'single', prompt: 'In the twentieth century, very little water was lost from canals.', options: ['True', 'False', 'Not Given'], answer: 1 },
      { id: 'wa3', type: 'single', prompt: 'Experts believe building new dams is the best solution.', options: ['True', 'False', 'Not Given'], answer: 1, explanation: "“not necessarily new dams but more efficient use” — False." },
      { id: 'wa4', type: 'multiple', prompt: 'Which responses do experts recommend?', options: ['drip irrigation', 'lined canals', 'more cotton fields', 'crops that need less water', 'moving cities'], answer: [0, 1, 3] },
      { id: 'wa5', type: 'single', prompt: 'The word "unprecedented" means …', options: ['never seen before', 'very small', 'planned carefully', 'illegal'], answer: 0 },
    ],
  },
  // ---- Listening tasks (IELTS-style): text hidden until checked; "Name: " speaker labels are not read aloud.
  {
    id: 'hotel-booking', level: 'A2', listening: true, title: 'Booking a Hotel Room', uzTitle: 'Tinglash: mehmonxona band qilish',
    text: `Receptionist: Good morning, Silk Road Hotel. How can I help you?
Guest: Hello. I'd like to book a room for next weekend, please.
Receptionist: Of course. Which nights?
Guest: Friday and Saturday, so two nights.
Receptionist: A single or a double room?
Guest: A double room, please. I'm coming with my wife.
Receptionist: No problem. That's ninety dollars a night, and breakfast is included. Can I have your name?
Guest: Yes, it's Karimov. K-A-R-I-M-O-V.
Receptionist: Thank you, Mr Karimov. And a phone number?
Guest: It's nine nine eight, nine zero, four five six, seven eight, one two.
Receptionist: Great. Check-in is from two o'clock. Will you need a taxi from the airport?
Guest: No, thank you. We're coming by train.`,
    questions: [
      { id: 'hl1', type: 'fill', prompt: 'Number of nights: ___ (raqam bilan)', answer: ['2', 'two'] },
      { id: 'hl2', type: 'single', prompt: 'Type of room:', options: ['single', 'double', 'family', 'suite'], answer: 1 },
      { id: 'hl3', type: 'fill', prompt: 'Price per night: $___', answer: ['90', 'ninety'] },
      { id: 'hl4', type: 'fill', prompt: 'Surname: ___', answer: 'Karimov', explanation: 'IELTS: harflab aytilgan ismni to‘g‘ri yozish muhim.' },
      { id: 'hl5', type: 'single', prompt: 'How will the guests travel to the hotel?', options: ['by taxi', 'by plane', 'by train', 'by bus'], answer: 2, explanation: 'Taksi taklif qilindi, lekin mehmon “by train” dedi — chalg‘ituvchi variant.' },
    ],
  },
  {
    id: 'museum-tour', level: 'B1', listening: true, title: 'Museum Announcement', uzTitle: 'Tinglash: muzey e’loni',
    text: `Welcome to the State Museum of History. Before you start your visit, here is some useful information. The museum is open every day except Monday, from nine in the morning until six in the evening. On Thursdays we stay open until eight. The main exhibition is on the ground floor, and the jewellery collection is on the second floor. Please note that the first floor is closed this month for repairs. Free guided tours in English start at eleven o'clock and at three o'clock from the main entrance. Each tour lasts about forty-five minutes. Photography is allowed, but please do not use flash. The café is next to the gift shop, and it serves hot drinks and light meals. Lockers for bags are available near the ticket office. They cost five thousand sum. We hope you enjoy your visit.`,
    questions: [
      { id: 'mt1', type: 'single', prompt: 'On which day is the museum closed?', options: ['Sunday', 'Monday', 'Thursday', 'It is never closed.'], answer: 1 },
      { id: 'mt2', type: 'fill', prompt: 'On Thursdays the museum closes at ___ o’clock.', answer: ['8', 'eight'] },
      { id: 'mt3', type: 'single', prompt: 'Which floor is closed this month?', options: ['the ground floor', 'the first floor', 'the second floor', 'none'], answer: 1 },
      { id: 'mt4', type: 'multiple', prompt: 'Which TWO times do English tours start?', options: ['9:00', '11:00', '13:00', '15:00'], answer: [1, 3] },
      { id: 'mt5', type: 'fill', prompt: 'A tour lasts about ___ minutes.', answer: ['45', 'forty-five', 'forty five'] },
    ],
  },
  {
    id: 'student-orientation', level: 'B2', listening: true, title: 'Student Orientation Talk', uzTitle: 'Tinglash: talabalar uchun tanishuv',
    text: `Good afternoon, everyone, and welcome to the university. I'm going to give you a quick overview of the support available to you this term. First, the library. It's open twenty-four hours during exam periods, but at other times it closes at ten p.m. You'll need your student card to enter, so collect it from the registration office in Building C by Friday. Second, academic writing. Many first-year students underestimate how different university essays are from school essays. That's why we run a free writing workshop every Wednesday afternoon. You don't need to book; just turn up. Third, if you're struggling with stress or homesickness, our counselling service is confidential and free of charge. Appointments can be made online. Finally, a word about deadlines. Late assignments lose ten percent of the mark for each day they are late, unless you have an approved extension. So, if you're ill, contact your tutor before the deadline, not after it.`,
    questions: [
      { id: 'so1', type: 'single', prompt: 'Outside exam periods, the library closes at …', options: ['8 p.m.', '10 p.m.', 'midnight', 'it never closes'], answer: 1 },
      { id: 'so2', type: 'fill', prompt: 'Students must collect their card from Building ___.', answer: 'C' },
      { id: 'so3', type: 'single', prompt: 'What does the speaker say about the writing workshop?', options: ['It must be booked online.', 'It costs a small fee.', 'Students can attend without booking.', 'It is only for final-year students.'], answer: 2 },
      { id: 'so4', type: 'fill', prompt: 'Late work loses ___ percent per day.', answer: ['10', 'ten'] },
      { id: 'so5', type: 'single', prompt: 'If students are ill, they should contact their tutor …', options: ['after the deadline', 'before the deadline', 'only by email', 'at the counselling service'], answer: 1 },
    ],
  },
  {
    id: 'urban-heat', level: 'C1', listening: true, title: 'Lecture: Urban Heat Islands', uzTitle: 'Tinglash: shahar issiqlik orollari (ma’ruza)',
    text: `Today's lecture deals with a phenomenon known as the urban heat island. Put simply, cities tend to be noticeably warmer than the surrounding countryside, and the difference is most pronounced at night. During the day, asphalt, concrete and dark roofs absorb solar radiation; after sunset, they release that stored heat slowly, which prevents the city from cooling down. In large cities the night-time difference can reach several degrees. Now, why does this matter? Primarily because of public health. Prolonged heat raises the risk of heat stroke, particularly among elderly people, and it drives up electricity demand for air conditioning, which in turn produces more waste heat. Fortunately, the remedies are well understood. Planting street trees provides shade and cools the air through evaporation. Reflective or "cool" roofs bounce sunlight back instead of absorbing it. And traditional design offers lessons too: the narrow streets and inner courtyards of old Bukhara were, in effect, an early form of climate adaptation. In the next session we will compare the cost-effectiveness of these measures.`,
    questions: [
      { id: 'uh1', type: 'single', prompt: 'According to the lecturer, the temperature difference is greatest …', options: ['at midday', 'in the morning', 'at night', 'in winter'], answer: 2 },
      { id: 'uh2', type: 'single', prompt: 'Cities stay warm after sunset because building materials …', options: ['reflect sunlight', 'release stored heat slowly', 'produce electricity', 'stop the wind completely'], answer: 1 },
      { id: 'uh3', type: 'multiple', prompt: 'Which TWO problems does the lecturer link to urban heat?', options: ['heat stroke among elderly people', 'more traffic accidents', 'higher electricity demand', 'lower school results'], answer: [0, 2] },
      { id: 'uh4', type: 'fill', prompt: 'Trees cool the air through shade and ___.', answer: 'evaporation' },
      { id: 'uh5', type: 'single', prompt: 'The example of old Bukhara is used to show that …', options: ['old cities were hotter', 'traditional design helped people adapt to heat', 'courtyards are expensive', 'narrow streets cause heat islands'], answer: 1 },
    ],
  },
  // ---- More B2–C1 reading
  {
    id: 'sleep-memory', level: 'B2', title: 'Sleep and Memory', uzTitle: 'Uyqu va xotira',
    text: `Students preparing for exams often sacrifice sleep in order to study longer, but research suggests this strategy may backfire. While we sleep, the brain does not simply switch off. Instead, it replays and reorganises information gathered during the day, transferring important memories from short-term storage into more stable, long-term networks. In one well-known type of experiment, volunteers learn a list of words or a new skill in the evening. Those who are allowed a full night's sleep usually remember more the next morning than those who stay awake, even when both groups spend the same total time awake before the test. Deep sleep appears to be particularly important for remembering facts, whereas the dreaming stage seems to help with creative problem-solving. Lack of sleep also reduces concentration, so a tired student takes longer to learn the same material. Most experts therefore recommend regular study sessions spread over several weeks, combined with seven to nine hours of sleep, rather than one exhausting night before the exam.`,
    questions: [
      { id: 'sm1', type: 'single', prompt: 'During sleep, the brain …', options: ['stops working completely', 'reorganises information from the day', 'deletes old memories', 'only produces dreams'], answer: 1 },
      { id: 'sm2', type: 'single', prompt: 'In the experiments, people who slept usually remembered more.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'sm3', type: 'single', prompt: 'The volunteers in the experiments were all university students.', options: ['True', 'False', 'Not Given'], answer: 2, explanation: 'Ishtirokchilar kimligi aytilmagan — Not Given.' },
      { id: 'sm4', type: 'single', prompt: 'Which stage of sleep helps most with remembering facts?', options: ['deep sleep', 'the dreaming stage', 'light sleep', 'the first five minutes'], answer: 0 },
      { id: 'sm5', type: 'fill', prompt: 'Experts recommend seven to ___ hours of sleep.', answer: ['nine', '9'] },
    ],
  },
  {
    id: 'fast-fashion', level: 'C1', title: 'The True Cost of Fast Fashion', uzTitle: 'Tez moda (fast fashion)ning haqiqiy narxi',
    text: `Over the past two decades, the clothing industry has undergone a profound transformation. Retailers that once released two collections a year now introduce new designs every few weeks, and garments have become so inexpensive that many are worn only a handful of times before being discarded. This model, commonly referred to as fast fashion, is undeniably convenient for consumers, yet its costs are largely borne elsewhere. Textile production consumes vast quantities of water; cotton, in particular, is a thirsty crop, a fact that Central Asian readers will recognise from the history of the Aral Sea. Synthetic fabrics such as polyester, meanwhile, are derived from oil and shed microscopic fibres into rivers and oceans each time they are washed. There is also a human dimension: to keep prices low, production is frequently outsourced to factories where wages are minimal and safety standards are weak. Proposed remedies range from stricter regulation and recycling schemes to so-called slow fashion, which encourages consumers to buy fewer, better-made items and to repair rather than replace them. Whether such ideas can compete with the appeal of cheap novelty remains an open question.`,
    questions: [
      { id: 'ff1', type: 'single', prompt: 'Fast-fashion retailers now release new designs only twice a year.', options: ['True', 'False', 'Not Given'], answer: 1, explanation: 'Ikki marta — bu avval edi; hozir “every few weeks”.' },
      { id: 'ff2', type: 'single', prompt: 'The writer mentions the Aral Sea to illustrate …', options: ['the beauty of Central Asia', 'how much water cotton needs', 'a new factory', 'the history of polyester'], answer: 1 },
      { id: 'ff3', type: 'fill', prompt: 'Polyester is made from ___.', answer: 'oil' },
      { id: 'ff4', type: 'multiple', prompt: 'Which remedies are mentioned?', options: ['stricter regulation', 'banning cotton', 'recycling schemes', 'repairing clothes', 'higher taxes on shoppers'], answer: [0, 2, 3] },
      { id: 'ff5', type: 'single', prompt: 'The phrase "borne elsewhere" means the costs are …', options: ['paid by other people or places', 'hidden in the price', 'reduced over time', 'born in factories'], answer: 0 },
    ],
  },
];
