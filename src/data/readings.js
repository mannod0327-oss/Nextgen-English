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
  // ---- More A1–A2 reading
  {
    id: 'my-day', level: 'A1', title: 'My Day', uzTitle: 'Mening kunim',
    text: `I get up at seven o'clock every day. First, I wash my face and brush my teeth. Then I have breakfast with my family. I usually eat bread, eggs and cheese, and I drink tea. At eight o'clock I go to school by bus. My lessons start at half past eight and finish at one o'clock. After school I have lunch at home and do my homework. In the evening I play football with my friends in the park. I go to bed at ten o'clock.`,
    questions: [
      { id: 'md1', type: 'fill', prompt: 'I get up at ___ o’clock. (so‘z bilan)', answer: ['seven', '7'] },
      { id: 'md2', type: 'single', prompt: 'What does the writer drink at breakfast?', options: ['milk', 'coffee', 'tea', 'juice'], answer: 2 },
      { id: 'md3', type: 'single', prompt: 'How does the writer go to school?', options: ['on foot', 'by bus', 'by car', 'by bike'], answer: 1 },
      { id: 'md4', type: 'single', prompt: 'Lessons finish at …', options: ['twelve', 'one o’clock', 'half past eight', 'three'], answer: 1 },
      { id: 'md5', type: 'fill', prompt: 'In the evening I play ___ with my friends.', answer: 'football' },
    ],
  },
  {
    id: 'my-friend', level: 'A1', title: 'My Best Friend', uzTitle: 'Eng yaqin do‘stim',
    text: `My best friend is Laylo. She is fourteen years old, the same age as me. She has long black hair and brown eyes. She is tall and very friendly. Laylo lives in the next street, so we walk to school together every morning. She likes reading books and drawing pictures. Her favourite subject is art. I like maths, but she does not! At weekends we often go to the cinema or eat ice cream in the park. Laylo has a little brother. His name is Sardor and he is five.`,
    questions: [
      { id: 'bf1', type: 'single', prompt: 'How old is Laylo?', options: ['twelve', 'thirteen', 'fourteen', 'fifteen'], answer: 2 },
      { id: 'bf2', type: 'single', prompt: 'Laylo’s eyes are …', options: ['blue', 'green', 'black', 'brown'], answer: 3 },
      { id: 'bf3', type: 'fill', prompt: 'Laylo’s favourite subject is ___.', answer: 'art' },
      { id: 'bf4', type: 'single', prompt: 'Does Laylo like maths?', options: ['Yes, very much.', 'No, she doesn’t.', 'Sometimes.', 'The text does not say.'], answer: 1 },
      { id: 'bf5', type: 'fill', prompt: 'Her brother Sardor is ___ years old. (so‘z bilan)', answer: ['five', '5'] },
    ],
  },
  {
    id: 'our-flat', level: 'A1', title: 'Our Flat', uzTitle: 'Bizning kvartiramiz',
    text: `We live in a flat in Tashkent. It is on the third floor of a big building. Our flat has three rooms: a living room and two bedrooms. There is also a kitchen and a bathroom. The kitchen is small, but it is very clean. In the living room there is a big sofa, a TV and a carpet. My sister and I share a bedroom. We have two beds, a desk and a lot of books. From our window we can see a park with tall trees. I like our flat very much.`,
    questions: [
      { id: 'of1', type: 'single', prompt: 'Which floor is the flat on?', options: ['first', 'second', 'third', 'fifth'], answer: 2 },
      { id: 'of2', type: 'fill', prompt: 'The flat has ___ rooms. (so‘z bilan)', answer: ['three', '3'] },
      { id: 'of3', type: 'single', prompt: 'The kitchen is …', options: ['big and dirty', 'small but clean', 'new and big', 'very old'], answer: 1 },
      { id: 'of4', type: 'multiple', prompt: 'What is in the living room?', options: ['a sofa', 'a bed', 'a TV', 'a desk'], answer: [0, 2] },
      { id: 'of5', type: 'fill', prompt: 'From the window they can see a ___.', answer: 'park' },
    ],
  },
  {
    id: 'birthday', level: 'A1', title: 'A Birthday Party', uzTitle: 'Tug‘ilgan kun',
    text: `Yesterday was my brother Javohir's birthday. He is now ten years old. My mother made a big chocolate cake, and my father bought balloons. Ten of Javohir's friends came to our house at four o'clock. They played games in the garden and listened to music. Javohir got many presents: a football, two books and a new bicycle from our grandparents. He was very happy. At six o'clock we ate the cake and sang "Happy Birthday". It was a great day for everyone.`,
    questions: [
      { id: 'bd1', type: 'fill', prompt: 'Javohir is now ___ years old. (so‘z bilan)', answer: ['ten', '10'] },
      { id: 'bd2', type: 'single', prompt: 'What kind of cake did the mother make?', options: ['lemon', 'chocolate', 'carrot', 'apple'], answer: 1 },
      { id: 'bd3', type: 'single', prompt: 'Where did the children play games?', options: ['in the park', 'at school', 'in the garden', 'in the kitchen'], answer: 2 },
      { id: 'bd4', type: 'single', prompt: 'Who gave Javohir a bicycle?', options: ['his father', 'his friends', 'his grandparents', 'his mother'], answer: 2 },
      { id: 'bd5', type: 'fill', prompt: 'They ate the cake at ___ o’clock. (so‘z bilan)', answer: ['six', '6'] },
    ],
  },
  {
    id: 'shopping-list', level: 'A1', title: 'At the Supermarket', uzTitle: 'Supermarketda',
    text: `On Sunday, Malika goes to the supermarket with her mother. They have a shopping list. They need milk, rice, apples, onions and a kilo of meat. First they go to the fruit section. The apples are red and green. Malika chooses six green apples. Then they buy rice and onions. The milk is at the back of the shop, next to the cheese. The meat is expensive today, so they buy half a kilo. At the end, Malika's mother pays by card. Malika carries the small bag home.`,
    questions: [
      { id: 'sl1', type: 'single', prompt: 'When do they go to the supermarket?', options: ['on Saturday', 'on Sunday', 'on Monday', 'every day'], answer: 1 },
      { id: 'sl2', type: 'fill', prompt: 'Malika chooses six ___ apples.', answer: 'green' },
      { id: 'sl3', type: 'single', prompt: 'Where is the milk?', options: ['next to the cheese', 'next to the meat', 'at the entrance', 'in the fruit section'], answer: 0 },
      { id: 'sl4', type: 'single', prompt: 'How much meat do they buy?', options: ['one kilo', 'two kilos', 'half a kilo', 'none'], answer: 2, explanation: 'Ro‘yxatda 1 kilo edi, lekin go‘sht qimmat bo‘lgani uchun yarim kilo oldi.' },
      { id: 'sl5', type: 'single', prompt: 'How does the mother pay?', options: ['in cash', 'by card', 'by phone', 'she doesn’t pay'], answer: 1 },
    ],
  },
  {
    id: 'weekend-trip', level: 'A2', title: 'A Weekend in the Mountains', uzTitle: 'Tog‘dagi dam olish kunlari',
    text: `Last weekend my family and I went to the mountains near Chimgan. We left Tashkent early on Saturday morning, and the journey by car took about two hours. We stayed in a small guesthouse with a beautiful view of the valley. On Saturday afternoon we walked to a waterfall. The path was steep, and my little sister got tired, so my father carried her on his back for the last part. In the evening it was cold, so we sat by the fire and drank hot tea. On Sunday it rained, but we visited a local market and bought dried fruit and honey. I want to go back in winter to try skiing.`,
    questions: [
      { id: 'wt1', type: 'fill', prompt: 'The journey by car took about ___ hours. (so‘z bilan)', answer: ['two', '2'] },
      { id: 'wt2', type: 'single', prompt: 'Where did the family stay?', options: ['in a hotel', 'in a tent', 'in a small guesthouse', 'with friends'], answer: 2 },
      { id: 'wt3', type: 'single', prompt: 'Why did the father carry the little sister?', options: ['She was ill.', 'She was tired.', 'She was afraid.', 'She was cold.'], answer: 1 },
      { id: 'wt4', type: 'multiple', prompt: 'What did they buy at the market?', options: ['dried fruit', 'bread', 'honey', 'shoes'], answer: [0, 2] },
      { id: 'wt5', type: 'fill', prompt: 'The writer wants to go back in winter to try ___.', answer: 'skiing' },
    ],
  },
  {
    id: 'new-phone', level: 'A2', title: 'My First Smartphone', uzTitle: 'Birinchi smartfonim',
    text: `When I was twelve, my parents gave me my first smartphone. At first I was very excited and used it all the time: I played games, watched videos and sent messages to my friends until late at night. After a few weeks my school marks got worse, and I often felt tired in the morning. My mother suggested some rules. Now I leave my phone in the kitchen when I do my homework, and I don't use it after nine o'clock in the evening. I still enjoy my phone, but I also have more time for reading and sport. My marks are better again, and I sleep much better too.`,
    questions: [
      { id: 'np1', type: 'fill', prompt: 'The writer got the phone at the age of ___. (raqam yoki so‘z)', answer: ['twelve', '12'] },
      { id: 'np2', type: 'single', prompt: 'What happened after a few weeks?', options: ['The phone broke.', 'School marks got worse.', 'Friends stopped writing.', 'The writer lost the phone.'], answer: 1 },
      { id: 'np3', type: 'single', prompt: 'Who suggested rules?', options: ['the teacher', 'the father', 'the mother', 'a friend'], answer: 2 },
      { id: 'np4', type: 'fill', prompt: 'Now the phone stays in the ___ during homework.', answer: 'kitchen' },
      { id: 'np5', type: 'single', prompt: 'How does the writer feel now?', options: ['angry about the rules', 'happier, with better sleep and marks', 'bored', 'still tired every morning'], answer: 1 },
    ],
  },
  {
    id: 'cooking-class', level: 'A2', title: 'Learning to Cook', uzTitle: 'Ovqat pishirishni o‘rganish',
    text: `Bekzod is nineteen and studies at a university in Samarkand. Last year he moved into a flat with two other students, and he realised that he could not cook anything except eggs. He spent too much money on fast food, so he decided to learn. Every Sunday he called his grandmother on a video call, and she showed him how to make simple dishes: soup, rice with vegetables and, finally, plov. His first plov was a disaster — the rice was too soft — but he did not give up. Now he cooks for his flatmates twice a week, and they share the cost of the food. He says he saves about half of the money he used to spend.`,
    questions: [
      { id: 'cc1', type: 'single', prompt: 'Where does Bekzod study?', options: ['Tashkent', 'Bukhara', 'Samarkand', 'Khiva'], answer: 2 },
      { id: 'cc2', type: 'single', prompt: 'Why did he decide to learn to cook?', options: ['He wanted to be a chef.', 'He spent too much on fast food.', 'His flatmates asked him.', 'His university required it.'], answer: 1 },
      { id: 'cc3', type: 'fill', prompt: 'His ___ taught him on video calls.', answer: 'grandmother' },
      { id: 'cc4', type: 'single', prompt: 'What was wrong with his first plov?', options: ['It was too salty.', 'The rice was too soft.', 'It was burnt.', 'There was no meat.'], answer: 1 },
      { id: 'cc5', type: 'single', prompt: 'How much money does he save now?', options: ['nothing', 'about a quarter', 'about half', 'all of it'], answer: 2 },
    ],
  },
  {
    id: 'lost-dog', level: 'A2', title: 'The Lost Dog', uzTitle: 'Yo‘qolgan it',
    text: `One evening in October, Nigora was walking home from work when she saw a small white dog sitting alone near the bus stop. It looked cold and frightened, and it had a red collar but no name tag. Nigora gave it some water and waited, but nobody came. She took a photo of the dog and posted it on a local community group online. Within an hour, a boy called Aziz wrote back: it was his dog, Snowy, who had run away from the park that afternoon. Aziz and his father came to collect Snowy the same evening. To say thank you, they brought Nigora a box of sweets, and now Aziz always puts a name tag on Snowy's collar.`,
    questions: [
      { id: 'ld1', type: 'single', prompt: 'Where did Nigora see the dog?', options: ['in the park', 'near the bus stop', 'at work', 'outside a shop'], answer: 1 },
      { id: 'ld2', type: 'single', prompt: 'The dog had …', options: ['a name tag', 'a red collar but no name tag', 'no collar', 'a blue collar'], answer: 1 },
      { id: 'ld3', type: 'single', prompt: 'How did Nigora find the owner?', options: ['She called the police.', 'She posted a photo online.', 'She asked neighbours.', 'She went to the park.'], answer: 1 },
      { id: 'ld4', type: 'fill', prompt: 'The dog’s name is ___.', answer: 'Snowy' },
      { id: 'ld5', type: 'single', prompt: 'What did Aziz’s family bring Nigora?', options: ['flowers', 'money', 'a box of sweets', 'a photo'], answer: 2 },
    ],
  },
  {
    id: 'volunteer-day', level: 'A2', title: 'Cleaning the River', uzTitle: 'Daryoni tozalash',
    text: `Last Saturday, about fifty volunteers met near the river in our town to collect rubbish. Most of them were students, but there were also some families with children and a few older people. The organisers gave everyone gloves and large bags. In three hours we collected more than two hundred kilos of rubbish — mostly plastic bottles, but also old tyres and even a broken chair. After the work, a local café gave all the volunteers free bread and tea. Our teacher said the river looked much better, but she reminded us that the best solution is not to throw rubbish in the first place. The next clean-up day will be in spring.`,
    questions: [
      { id: 'vd1', type: 'fill', prompt: 'About ___ volunteers came. (raqam yoki so‘z)', answer: ['fifty', '50'] },
      { id: 'vd2', type: 'single', prompt: 'Who were most of the volunteers?', options: ['older people', 'families', 'students', 'teachers'], answer: 2 },
      { id: 'vd3', type: 'single', prompt: 'How long did they work?', options: ['one hour', 'two hours', 'three hours', 'all day'], answer: 2 },
      { id: 'vd4', type: 'single', prompt: 'What was most of the rubbish?', options: ['tyres', 'plastic bottles', 'furniture', 'paper'], answer: 1 },
      { id: 'vd5', type: 'fill', prompt: 'The next clean-up day will be in ___.', answer: 'spring' },
    ],
  },
  // ---- More B1 reading
  {
    id: 'registan', level: 'B1', title: 'Registan Square', uzTitle: 'Registon maydoni',
    text: `Registan Square in Samarkand is one of the most famous places in Central Asia. Its name means "sandy place", because in the past the ground there was covered with sand. For centuries it was the centre of city life: people came to the square to hear royal announcements, watch public events and buy goods at the market.

The square is surrounded by three large madrasas, or Islamic schools. The oldest, the Ulugbek Madrasa, was built in the fifteenth century by Ulugbek, a ruler who was also a famous astronomer. Students studied mathematics, astronomy and philosophy there as well as religion. The other two, the Sher-Dor and Tilya-Kori madrasas, were added about two hundred years later. The Sher-Dor Madrasa is known for its unusual tile pictures of lions chasing deer, with a human face in the sun above them.

In the twentieth century, earthquakes and time damaged the buildings, and some towers started to lean. Engineers spent many years repairing them, and today the square is a UNESCO World Heritage Site. In the evening, there is often a light show, and thousands of tourists visit every year.`,
    questions: [
      { id: 'b1rg1', type: 'single', prompt: 'What does the name "Registan" mean?', options: ['royal square', 'sandy place', 'blue city', 'old market'], answer: 1 },
      { id: 'b1rg2', type: 'single', prompt: 'Ulugbek was a ruler and also a famous astronomer.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'b1rg3', type: 'single', prompt: 'All three madrasas were built in the same century.', options: ['True', 'False', 'Not Given'], answer: 1 },
      { id: 'b1rg4', type: 'single', prompt: 'Students at the madrasas paid high fees.', options: ['True', 'False', 'Not Given'], answer: 2 },
      { id: 'b1rg5', type: 'fill', prompt: 'The Sher-Dor tiles show lions chasing ___.', answer: 'deer' },
      { id: 'b1rg6', type: 'single', prompt: 'Why did the buildings need repairs?', options: ['because of fires', 'because of earthquakes and time', 'because of wars', 'because tourists damaged them'], answer: 1 },
    ],
  },
  {
    id: 'chorsu', level: 'B1', title: 'A Morning at the Bazaar', uzTitle: 'Bozorda bir tong',
    text: `If you want to see everyday life in Tashkent, go to Chorsu Bazaar early in the morning. The market is under a huge blue dome, and by seven o'clock it is already full of noise and colour. Sellers shout prices, carts full of watermelons move between the stalls, and the smell of fresh bread comes from the tandir ovens.

Inside the dome, you can buy meat, cheese and dried fruit. Outside, there are long rows of vegetables, spices and nuts. Most sellers let you taste before you buy, and it is normal to bargain. A good tip is to smile, ask the price, and then offer a little less. Many sellers are happy to talk, and some will even teach you a few words of Uzbek.

In recent years, large supermarkets have opened in the city, and some young people prefer to shop online. However, many families still believe that the bazaar is the best place for fresh, seasonal food. For them, shopping there is not only about buying things — it is also a chance to meet friends and neighbours.`,
    questions: [
      { id: 'b1cb1', type: 'single', prompt: 'What covers the main part of the market?', options: ['a glass roof', 'a huge blue dome', 'tents', 'trees'], answer: 1 },
      { id: 'b1cb2', type: 'fill', prompt: 'Fresh bread is baked in ___ ovens.', answer: 'tandir' },
      { id: 'b1cb3', type: 'single', prompt: 'Bargaining is normal at the bazaar.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'b1cb4', type: 'single', prompt: 'Prices at the bazaar are lower than in supermarkets.', options: ['True', 'False', 'Not Given'], answer: 2 },
      { id: 'b1cb5', type: 'single', prompt: 'What is the writer’s tip for bargaining?', options: ['pay the first price', 'smile and offer a little less', 'shout loudly', 'come back later'], answer: 1 },
      { id: 'b1cb6', type: 'multiple', prompt: 'Why do many families still use the bazaar?', options: ['fresh, seasonal food', 'free delivery', 'meeting friends and neighbours', 'online payment'], answer: [0, 2] },
    ],
  },
  {
    id: 'teen-sleep', level: 'B1', title: 'Why Teenagers Need More Sleep', uzTitle: 'Nega o‘smirlarga ko‘proq uyqu kerak',
    text: `Many parents complain that their teenage children go to bed late and find it hard to get up in the morning. It is easy to think that teenagers are simply lazy, but scientists say the real reason is biology. During the teenage years, the body releases melatonin, the hormone that makes us feel sleepy, about two hours later than in younger children. As a result, many teenagers do not feel tired until eleven o'clock or even midnight.

Experts recommend that teenagers sleep between eight and ten hours a night, but surveys show that most get only six or seven on school days. Lack of sleep can make it harder to concentrate, remember new information and control emotions. It may also increase the risk of accidents for young drivers.

Some schools in other countries have started classes later in the morning, and the results have been positive: students arrive on time more often and their grades improve. Doctors also advise teenagers to stop using phones and computers at least an hour before bed, because the blue light from screens delays sleep even more.`,
    questions: [
      { id: 'b1ts1', type: 'single', prompt: 'According to scientists, teenagers go to bed late mainly because of …', options: ['laziness', 'biology', 'homework', 'television'], answer: 1 },
      { id: 'b1ts2', type: 'fill', prompt: 'The hormone that makes us sleepy is called ___.', answer: 'melatonin' },
      { id: 'b1ts3', type: 'single', prompt: 'Teenagers should sleep between eight and ten hours a night.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'b1ts4', type: 'single', prompt: 'Most teenagers sleep nine hours on school days.', options: ['True', 'False', 'Not Given'], answer: 1 },
      { id: 'b1ts5', type: 'single', prompt: 'What happened in schools that started later?', options: ['grades got worse', 'students arrived on time more often and grades improved', 'nothing changed', 'students slept at school'], answer: 1 },
      { id: 'b1ts6', type: 'fill', prompt: 'The blue ___ from screens delays sleep.', answer: 'light' },
    ],
  },
  {
    id: 'food-waste', level: 'B1', title: 'The Problem of Food Waste', uzTitle: 'Oziq-ovqat isrofi muammosi',
    text: `Around the world, roughly one third of all food that is produced is never eaten. Some of it is lost on farms or during transport, but a large amount is thrown away in shops, restaurants and homes. At the same time, millions of people do not have enough to eat.

Food waste is also bad for the environment. When food rots in rubbish dumps, it produces methane, a gas that contributes to climate change. In addition, all the water, energy and land used to grow the food are wasted too.

There are many simple ways to reduce waste at home. Plan your meals for the week and write a shopping list, so you only buy what you need. Store fruit and vegetables correctly, and use leftovers to make new dishes — many traditional recipes, such as soups, were invented for exactly this purpose. It also helps to understand date labels: "best before" means the food may lose some quality after that date, but it is usually still safe to eat. Some supermarkets now sell imperfect vegetables at lower prices, and apps allow cafés to sell unsold food cheaply at the end of the day.`,
    questions: [
      { id: 'b1fw1', type: 'single', prompt: 'How much of the world’s food is never eaten?', options: ['about a tenth', 'about a third', 'about half', 'almost all'], answer: 1 },
      { id: 'b1fw2', type: 'fill', prompt: 'Rotting food produces a gas called ___.', answer: 'methane' },
      { id: 'b1fw3', type: 'single', prompt: 'Food after the "best before" date is usually dangerous to eat.', options: ['True', 'False', 'Not Given'], answer: 1 },
      { id: 'b1fw4', type: 'single', prompt: 'Restaurants waste more food than homes.', options: ['True', 'False', 'Not Given'], answer: 2 },
      { id: 'b1fw5', type: 'multiple', prompt: 'Which tips does the writer give?', options: ['plan meals and write a shopping list', 'buy food every day', 'use leftovers in new dishes', 'throw away imperfect vegetables'], answer: [0, 2] },
      { id: 'b1fw6', type: 'fill', prompt: 'Some supermarkets sell ___ vegetables at lower prices.', answer: 'imperfect' },
    ],
  },
  {
    id: 'electric-cars', level: 'B1', title: 'Are Electric Cars the Future?', uzTitle: 'Elektromobillar kelajakmi?',
    text: `Ten years ago, electric cars were rare and expensive. Today they are a common sight in many cities, including Tashkent, where charging stations are appearing in car parks and outside shopping centres. Supporters say that electric cars are cleaner and quieter than petrol cars, and that they are cheaper to run, because electricity costs less than fuel and the engines need less maintenance.

However, there are still some problems. The price of a new electric car is usually higher than that of a similar petrol car, although it is falling. Charging takes longer than filling a tank — from thirty minutes at a fast charger to several hours at home. In very cold weather, batteries lose some of their range, which means the car can travel a shorter distance before it needs charging.

Experts also point out that an electric car is only as clean as the electricity it uses. If most power comes from burning coal or gas, the benefit for the environment is smaller. Nevertheless, as more solar and wind power is built, electric cars are likely to become an even better choice.`,
    questions: [
      { id: 'b1ec1', type: 'multiple', prompt: 'Which advantages of electric cars are mentioned?', options: ['cleaner and quieter', 'faster than petrol cars', 'cheaper to run', 'cheaper to buy'], answer: [0, 2] },
      { id: 'b1ec2', type: 'single', prompt: 'The price of new electric cars is falling.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'b1ec3', type: 'single', prompt: 'Fast charging takes about thirty minutes.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'b1ec4', type: 'single', prompt: 'Electric cars are banned in some city centres.', options: ['True', 'False', 'Not Given'], answer: 2 },
      { id: 'b1ec5', type: 'fill', prompt: 'In cold weather, batteries lose some of their ___.', answer: 'range' },
      { id: 'b1ec6', type: 'single', prompt: 'When is the environmental benefit smaller?', options: ['when the car is old', 'when electricity comes from coal or gas', 'when the car is charged at home', 'in summer'], answer: 1 },
    ],
  },
  {
    id: 'job-interview', level: 'B1', title: 'How to Succeed in a Job Interview', uzTitle: 'Ish suhbatidan qanday o‘tish kerak',
    text: `A job interview can be stressful, but good preparation makes a big difference. Before the interview, find out as much as you can about the company: what it does, who its customers are and what its plans are for the future. This will help you answer questions confidently and show that you are really interested in the job.

Think about the questions you are likely to be asked, such as "Why do you want this job?" or "What are your strengths and weaknesses?" Prepare short examples from your studies or work experience that show your skills. Practising your answers aloud, perhaps with a friend, can help you feel more relaxed.

On the day, plan your journey so that you arrive ten or fifteen minutes early. Dress smartly, switch off your phone, and greet the interviewer with a smile. During the interview, listen carefully to each question and do not be afraid to ask for a moment to think. At the end, you will often be asked if you have any questions. It is a good idea to prepare one or two, for example about training or the team you would work with. Finally, send a short thank-you email the same day.`,
    questions: [
      { id: 'b1ji1', type: 'single', prompt: 'Why should you research the company?', options: ['to ask for a higher salary', 'to answer confidently and show interest', 'to find other jobs', 'to meet the customers'], answer: 1 },
      { id: 'b1ji2', type: 'single', prompt: 'You should practise your answers aloud.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'b1ji3', type: 'single', prompt: 'You should arrive exactly on time, not earlier.', options: ['True', 'False', 'Not Given'], answer: 1 },
      { id: 'b1ji4', type: 'single', prompt: 'Most interviews last about one hour.', options: ['True', 'False', 'Not Given'], answer: 2 },
      { id: 'b1ji5', type: 'fill', prompt: 'After the interview, send a short thank-you ___.', answer: 'email' },
      { id: 'b1ji6', type: 'match', prompt: 'Match the word to its meaning:', pairs: [['strengths', 'kuchli tomonlar'], ['weaknesses', 'zaif tomonlar'], ['confidently', 'ishonch bilan'], ['interviewer', 'suhbat oluvchi']] },
    ],
  },
  // ---- More B2 reading
  {
    id: 'four-day-week', level: 'B2', title: 'The Four-Day Working Week', uzTitle: 'To‘rt kunlik ish haftasi',
    text: `In recent years, a growing number of companies have experimented with a four-day working week, in which employees work around thirty-two hours instead of forty, usually without any reduction in pay. The idea is not simply to give people an extra day off, but to test whether shorter, more focused working time can deliver the same results.

The largest trials, involving dozens of companies in several countries, have produced encouraging results. Most participating firms reported that productivity stayed the same or even rose slightly, while staff said they felt less stressed and slept better. Many companies also found it easier to recruit new employees, and the number of sick days fell. As a result, the majority of firms decided to continue with the new schedule after the trial ended.

Critics, however, point out that the model does not suit every type of work. In hospitals, schools and shops, someone must be present every day, so a four-day week for individual employees would require hiring more staff, which increases costs. There are also concerns that some workers simply squeeze five days of tasks into four longer days, which may increase pressure rather than reduce it.

Supporters respond that the trials have forced managers to rethink how time is used. Long meetings were shortened, unnecessary emails were cut, and teams agreed on "focus hours" without interruptions. Even companies that eventually returned to a five-day week said they kept some of these new habits.`,
    questions: [
      { id: 'b2fd1', type: 'single', prompt: 'In most four-day week trials, pay …', options: ['was reduced by 20%', 'stayed the same', 'increased', 'depended on productivity'], answer: 1 },
      { id: 'b2fd2', type: 'single', prompt: 'Most participating firms reported that productivity fell sharply.', options: ['True', 'False', 'Not Given'], answer: 1 },
      { id: 'b2fd3', type: 'single', prompt: 'The number of sick days decreased.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'b2fd4', type: 'single', prompt: 'Workers in technology companies benefited the most.', options: ['True', 'False', 'Not Given'], answer: 2 },
      { id: 'b2fd5', type: 'single', prompt: 'Why is the model difficult for hospitals and shops?', options: ['Staff do not want it.', 'Someone must be present every day, so more staff are needed.', 'It is illegal.', 'Customers complain.'], answer: 1 },
      { id: 'b2fd6', type: 'fill', prompt: 'Teams agreed on "___ hours" without interruptions.', answer: 'focus' },
    ],
  },
  {
    id: 'laughter', level: 'B2', title: 'The Science of Laughter', uzTitle: 'Kulgi haqidagi fan',
    text: `Most people assume that we laugh mainly because something is funny. Surprisingly, research suggests that this is true only a small part of the time. When scientists recorded thousands of everyday conversations, they found that most laughter followed ordinary comments such as "See you later" or "I know", not jokes. Laughter, it seems, is above all a social signal: it shows friendliness and helps people feel connected.

This may explain why we are around thirty times more likely to laugh when we are with other people than when we are alone. Laughter is also contagious; hearing someone else laugh activates areas of the brain that prepare the muscles of our own face to smile. Television comedies have used this effect for decades by adding recorded laughter to their programmes.

Laughter appears to have real physical benefits as well. A good laugh increases the heart rate and breathing for a short time, and afterwards the muscles relax. Some studies have found that laughing with others raises people's tolerance for pain, probably because it causes the brain to release endorphins, natural chemicals that make us feel good.

Humans are not the only animals that laugh. Chimpanzees and gorillas make breathy panting sounds when they are tickled or playing, and even rats produce high-pitched sounds during play that humans cannot hear without special equipment. This suggests that laughter developed long before language, as a way of saying "this is just play".`,
    questions: [
      { id: 'b2lf1', type: 'single', prompt: 'According to research, most laughter follows …', options: ['jokes', 'ordinary comments', 'funny films', 'surprises'], answer: 1 },
      { id: 'b2lf2', type: 'fill', prompt: 'We are about ___ times more likely to laugh with other people.', answer: ['thirty', '30'] },
      { id: 'b2lf3', type: 'single', prompt: 'Laughter is contagious.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'b2lf4', type: 'single', prompt: 'Women laugh more often than men.', options: ['True', 'False', 'Not Given'], answer: 2 },
      { id: 'b2lf5', type: 'fill', prompt: 'Laughing causes the brain to release ___.', answer: 'endorphins' },
      { id: 'b2lf6', type: 'single', prompt: 'What do the animal examples suggest?', options: ['Only humans laugh.', 'Laughter developed before language.', 'Rats laugh louder than humans.', 'Animals laugh at jokes.'], answer: 1 },
    ],
  },
  {
    id: 'microbiome', level: 'B2', title: 'The World Inside Us', uzTitle: 'Ichimizdagi olam',
    text: `Every human body is home to trillions of microorganisms — bacteria, fungi and viruses — most of which live in the gut. Together they are known as the microbiome. For a long time, scientists thought of bacteria mainly as a cause of disease, but research over the last twenty years has shown that many of these microbes are essential for our health.

Gut bacteria help us digest food, particularly fibre, which our own bodies cannot break down. In the process they produce substances that protect the lining of the intestine and help to control inflammation. The microbiome also plays an important role in training the immune system, especially in early childhood.

Perhaps the most surprising discovery is the connection between the gut and the brain. Experiments with mice have shown that changing their gut bacteria can affect their behaviour and stress levels, and researchers are now investigating whether similar links exist in humans. However, scientists warn that much of this research is still at an early stage.

So how can we keep our microbiome healthy? The most consistent advice is to eat a varied diet rich in vegetables, fruit, beans and whole grains, as well as fermented foods such as yoghurt. Antibiotics, while sometimes necessary, can kill helpful bacteria along with harmful ones, so they should only be taken when a doctor prescribes them.`,
    questions: [
      { id: 'b2mb1', type: 'single', prompt: 'Most of the body’s microorganisms live in the …', options: ['skin', 'gut', 'lungs', 'blood'], answer: 1 },
      { id: 'b2mb2', type: 'fill', prompt: 'Gut bacteria help us digest ___, which our bodies cannot break down.', answer: 'fibre' },
      { id: 'b2mb3', type: 'single', prompt: 'The microbiome helps to train the immune system.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'b2mb4', type: 'single', prompt: 'The gut–brain link has already been fully proven in humans.', options: ['True', 'False', 'Not Given'], answer: 1 },
      { id: 'b2mb5', type: 'single', prompt: 'People in cities have fewer gut bacteria.', options: ['True', 'False', 'Not Given'], answer: 2 },
      { id: 'b2mb6', type: 'single', prompt: 'Why should antibiotics be used carefully?', options: ['They are expensive.', 'They also kill helpful bacteria.', 'They cause allergies.', 'They make food taste bad.'], answer: 1 },
    ],
  },
  {
    id: 'smart-cities', level: 'B2', title: 'How Smart Are Smart Cities?', uzTitle: 'Aqlli shaharlar qanchalik aqlli?',
    text: `The term "smart city" describes an urban area that uses sensors, data and digital technology to improve services and quality of life. Traffic lights that adjust to the number of cars, rubbish bins that report when they are full and apps that show the exact arrival time of the next bus are all examples of smart-city technology.

The potential benefits are considerable. In some cities, intelligent traffic systems have reduced journey times by around a fifth, and sensors in water pipes can detect leaks before they cause serious damage. Data on air quality can warn people with asthma when pollution is high, and smart street lights that dim when no one is around can cut energy use significantly.

However, critics raise several concerns. Collecting huge amounts of data about people's movements creates risks for privacy, especially if cameras and phone data are used without clear rules. There is also the danger of a "digital divide": services that are only available through apps may exclude older people or those without smartphones. Finally, technology is expensive, and some projects have been abandoned after a few years because they did not solve real problems.

For this reason, many urban planners now argue that a city is not smart because of its gadgets, but because of how well it listens to its residents. Technology, they say, should be a tool to solve specific problems, not an end in itself.`,
    questions: [
      { id: 'b2sc1', type: 'multiple', prompt: 'Which are examples of smart-city technology in the text?', options: ['traffic lights that adjust to cars', 'flying taxis', 'bins that report when full', 'robot police officers'], answer: [0, 2] },
      { id: 'b2sc2', type: 'single', prompt: 'Intelligent traffic systems have reduced journey times by about …', options: ['5%', '10%', '20%', '50%'], answer: 2 },
      { id: 'b2sc3', type: 'single', prompt: 'Sensors in water pipes can detect leaks early.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'b2sc4', type: 'single', prompt: 'All smart-city projects have been successful.', options: ['True', 'False', 'Not Given'], answer: 1 },
      { id: 'b2sc5', type: 'fill', prompt: 'Services available only through apps may create a "digital ___".', answer: 'divide' },
      { id: 'b2sc6', type: 'single', prompt: 'According to planners, a city is truly smart when it …', options: ['has the most gadgets', 'listens well to its residents', 'has no cars', 'spends the most money'], answer: 1 },
    ],
  },
  // ---- More C1 reading
  {
    id: 'placebo', level: 'C1', title: 'The Puzzling Power of Placebos', uzTitle: 'Platseboning sirli kuchi',
    text: `A placebo is a treatment with no active ingredient — a sugar pill, for instance, or an injection of salt water. Yet in clinical trials, a substantial proportion of patients who receive placebos report genuine improvements, particularly in conditions such as pain, nausea and depression. This "placebo effect" is so consistent that new drugs must outperform it before they can be approved.

For decades, the effect was dismissed as imagination or as patients telling doctors what they wanted to hear. Brain-imaging studies have since challenged that view. When people expect pain relief, regions of the brain involved in pain processing become less active, and the body releases its own natural painkillers. Expectation, in other words, produces measurable biological changes.

Context matters enormously. Two placebo pills tend to work better than one, injections outperform pills, and expensive-looking treatments outperform cheap ones. Even the doctor's manner plays a part: patients treated warmly and attentively often report more benefit than those whose doctor is brisk and distant.

Most intriguing of all are "open-label" placebos, in which patients are told honestly that they are receiving an inactive pill. In several small studies of conditions such as irritable bowel syndrome, patients still improved, perhaps because the ritual of taking a pill triggers learned associations with recovery.

The phenomenon raises ethical questions. Deceiving patients undermines trust, yet the evidence suggests that some of the benefit of any treatment comes from expectation. Rather than prescribing fake pills, many researchers argue, doctors should deliberately harness the placebo effect through clear explanations, empathy and confidence in the treatments they give.`,
    questions: [
      { id: 'c1pl1', type: 'single', prompt: 'New drugs must perform better than placebos before approval.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'c1pl2', type: 'single', prompt: 'Brain-imaging studies confirmed that the placebo effect is purely imaginary.', options: ['True', 'False', 'Not Given'], answer: 1 },
      { id: 'c1pl3', type: 'single', prompt: 'Placebos work equally well for all illnesses.', options: ['True', 'False', 'Not Given'], answer: 2 },
      { id: 'c1pl4', type: 'multiple', prompt: 'Which factors increase the placebo effect, according to the text?', options: ['taking two pills instead of one', 'a cheap appearance', 'a warm, attentive doctor', 'taking the pill at night'], answer: [0, 2] },
      { id: 'c1pl5', type: 'fill', prompt: 'Placebos given with honest information are called "___-label" placebos.', answer: 'open' },
      { id: 'c1pl6', type: 'single', prompt: 'What do many researchers recommend?', options: ['prescribing fake pills regularly', 'using explanation and empathy to harness expectation', 'banning placebo trials', 'telling patients nothing'], answer: 1 },
    ],
  },
  {
    id: 'decision-fatigue', level: 'C1', title: 'Too Many Choices?', uzTitle: 'Tanlov juda ko‘pmi?',
    text: `Modern consumers face an unprecedented number of choices. A large supermarket may stock tens of thousands of products, and online shops offer millions. Conventional economic thinking holds that more choice is always beneficial, since it increases the chance that each person will find exactly what they want. Yet a growing body of research suggests that, beyond a certain point, choice can become a burden.

In a frequently cited experiment, shoppers in a supermarket were offered samples of jam. When twenty-four varieties were on display, more people stopped to taste, but only around three per cent went on to buy a jar. When just six varieties were available, about thirty per cent made a purchase. The researchers concluded that a large selection can lead to "choice overload", causing people to delay or avoid decisions altogether.

Subsequent studies have produced more mixed results, and some attempts to repeat the jam experiment have found smaller effects or none at all. Psychologists now believe that choice overload depends on circumstances: it is most likely when options are difficult to compare, when people have no clear preferences, and when they feel under time pressure.

A related idea is "decision fatigue" — the suggestion that making many decisions in a row gradually reduces the quality of later ones. Some well-known figures have reportedly limited their wardrobes to a few identical outfits to avoid wasting mental energy on trivial choices.

For businesses and governments, the practical lesson is not to eliminate choice but to structure it. Grouping products into clear categories, offering sensible default options and highlighting a small number of recommendations can help people choose more confidently.`,
    questions: [
      { id: 'c1df1', type: 'single', prompt: 'Conventional economics assumes that more choice is always beneficial.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'c1df2', type: 'single', prompt: 'With twenty-four jams, about what percentage of tasters bought a jar?', options: ['3%', '6%', '24%', '30%'], answer: 0 },
      { id: 'c1df3', type: 'single', prompt: 'Every later study confirmed the jam experiment’s results.', options: ['True', 'False', 'Not Given'], answer: 1 },
      { id: 'c1df4', type: 'multiple', prompt: 'When is choice overload most likely?', options: ['when options are hard to compare', 'when people have strong preferences', 'when people are under time pressure', 'when products are cheap'], answer: [0, 2] },
      { id: 'c1df5', type: 'fill', prompt: 'Making many decisions in a row may cause decision ___.', answer: 'fatigue' },
      { id: 'c1df6', type: 'single', prompt: 'What does the writer recommend?', options: ['eliminating choice', 'structuring choice with categories and defaults', 'offering more products', 'removing recommendations'], answer: 1 },
    ],
  },
  {
    id: 'desert-knowledge', level: 'C1', title: 'Ancient Water Engineering in the Desert', uzTitle: 'Cho‘ldagi qadimiy suv muhandisligi',
    text: `Long before modern pumps and pipelines, communities in the deserts of Central Asia and the Middle East developed ingenious ways of finding and managing water. Among the most remarkable is the qanat, or kariz, an underground channel that carries groundwater from the foot of a mountain to fields and settlements many kilometres away.

A qanat begins with a "mother well" dug into an aquifer, the layer of rock or gravel that holds water underground. From there, a gently sloping tunnel is excavated towards the area where the water is needed, with vertical shafts at regular intervals to remove soil and provide ventilation. Because the channel runs underground, very little water is lost to evaporation — a crucial advantage in regions where summer temperatures exceed forty degrees. And since the water flows by gravity alone, the system requires no external energy.

Building a qanat demanded extraordinary skill. Diggers had to maintain a slope steep enough for water to flow, yet gentle enough to prevent erosion of the tunnel. Specialist knowledge was passed down within families, and maintenance was often organised collectively, with strict rules for sharing water according to time slots.

In the twentieth century, many qanats were abandoned as electric pumps made it possible to draw water from deep wells quickly. However, over-pumping has lowered water tables in many regions, causing some wells to run dry. As a result, engineers and environmental groups have shown renewed interest in restoring qanats, not as a romantic return to the past, but as a model of sustainable water use that takes only what an aquifer can naturally replenish.`,
    questions: [
      { id: 'c1qn1', type: 'fill', prompt: 'A qanat begins with a "mother ___" dug into an aquifer.', answer: 'well' },
      { id: 'c1qn2', type: 'single', prompt: 'What is the purpose of the vertical shafts?', options: ['to store water', 'to remove soil and provide ventilation', 'to let sunlight in', 'to pump water'], answer: 1 },
      { id: 'c1qn3', type: 'single', prompt: 'Very little water is lost because the channel is underground.', options: ['True', 'False', 'Not Given'], answer: 0 },
      { id: 'c1qn4', type: 'single', prompt: 'Qanats need electricity to move water.', options: ['True', 'False', 'Not Given'], answer: 1 },
      { id: 'c1qn5', type: 'single', prompt: 'Most qanats in Central Asia are still in use today.', options: ['True', 'False', 'Not Given'], answer: 2 },
      { id: 'c1qn6', type: 'single', prompt: 'Why is there renewed interest in qanats?', options: ['They are cheaper than wells.', 'Over-pumping has lowered water tables.', 'Tourists want to see them.', 'Pumps have been banned.'], answer: 1 },
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
  {
    id: 'gym-membership', level: 'B1', listening: true, title: 'IELTS Section 1: Joining a Sports Centre', uzTitle: 'Tinglash: sport markaziga a’zo bo‘lish',
    text: `Assistant: Good evening, Olympia Sports Centre. How can I help?
Caller: Hi, I'm interested in becoming a member. Could you tell me about the options?
Assistant: Certainly. We have two types of membership. The standard one costs two hundred thousand sum a month and lets you use the gym and the pool. The premium membership is three hundred and fifty thousand and also includes fitness classes and the sauna.
Caller: I think I'll take the standard one for now. Do I need to pay a joining fee?
Assistant: Normally there's a fee of fifty thousand, but this month it's free for new members.
Caller: Great. What are your opening hours?
Assistant: We open at six a.m. on weekdays and close at eleven p.m. At weekends we open at eight.
Caller: Okay. Can I sign up over the phone?
Assistant: Yes. Can I take your full name, please?
Caller: Sevara Tursunova. That's T-U-R-S-U-N-O-V-A.
Assistant: And your date of birth?
Caller: The fourteenth of June, two thousand and one.
Assistant: Thank you. Please bring a passport photo when you come for your first visit, and we'll give you your card.`,
    questions: [
      { id: 'gm1', type: 'single', prompt: 'Which membership does the caller choose?', options: ['standard', 'premium', 'student', 'family'], answer: 0 },
      { id: 'gm2', type: 'fill', prompt: 'Monthly price: ___ thousand sum', answer: ['200', 'two hundred'] },
      { id: 'gm3', type: 'single', prompt: 'The joining fee this month is …', options: ['50,000 sum', 'free', '200,000 sum', 'half price'], answer: 1, explanation: 'Odatda 50 ming, lekin “this month it’s free” — chalg‘ituvchi raqam.' },
      { id: 'gm4', type: 'fill', prompt: 'At weekends the centre opens at ___ a.m.', answer: ['8', 'eight'] },
      { id: 'gm5', type: 'fill', prompt: 'Surname: ___', answer: 'Tursunova' },
      { id: 'gm6', type: 'single', prompt: 'What must she bring on her first visit?', options: ['her passport', 'a passport photo', 'a towel', 'cash'], answer: 1 },
    ],
  },
  {
    id: 'project-discussion', level: 'B2', listening: true, title: 'IELTS Section 3: Planning a Research Project', uzTitle: 'Tinglash: tadqiqot loyihasini rejalashtirish',
    text: `Tutor: So, Kamola and Timur, have you decided on a topic for your research project?
Kamola: We have. We'd like to investigate how students at our university use public transport.
Tutor: That sounds manageable. How are you planning to collect your data?
Timur: At first we thought about interviews, but they take a lot of time. So we've decided to use an online questionnaire instead.
Tutor: Sensible. How many responses are you hoping for?
Kamola: We're aiming for at least one hundred and fifty. That should give us reliable results.
Tutor: Good. And who is going to do what?
Timur: I'll design the questionnaire, because I've done a statistics course. Kamola will write the literature review.
Kamola: Yes, and we'll analyse the results together.
Tutor: One thing I'd suggest: test your questionnaire on a small group first. Students often write questions that are confusing.
Timur: That's a good idea. We could ask our classmates.
Tutor: Exactly. And remember, the first draft is due on the twentieth of March, not the end of the month as it says in the old handbook.`,
    questions: [
      { id: 'pd1', type: 'single', prompt: 'What is the topic of the project?', options: ['student accommodation', 'how students use public transport', 'online learning', 'university sports'], answer: 1 },
      { id: 'pd2', type: 'single', prompt: 'Why did they reject interviews?', options: ['They are too expensive.', 'They take too much time.', 'The tutor disagreed.', 'Students refused.'], answer: 1 },
      { id: 'pd3', type: 'fill', prompt: 'Target number of responses: at least ___', answer: ['150', 'one hundred and fifty', 'a hundred and fifty'] },
      { id: 'pd4', type: 'match', prompt: 'Who will do each task?', pairs: [['design the questionnaire', 'Timur'], ['write the literature review', 'Kamola'], ['analyse the results', 'both']] },
      { id: 'pd5', type: 'single', prompt: 'The tutor advises them to …', options: ['use interviews after all', 'test the questionnaire on a small group', 'ask more than 500 students', 'change the topic'], answer: 1 },
      { id: 'pd6', type: 'fill', prompt: 'The first draft is due on ___ March.', answer: ['20', '20th', 'the twentieth', 'twentieth'], explanation: 'Eski qo‘llanmadagi “end of the month” — chalg‘ituvchi.' },
    ],
  },
  {
    id: 'bees-headings', level: 'C1', title: 'IELTS Reading: Why Bees Matter', uzTitle: 'Asalarilar nega muhim (sarlavhalarni moslash)',
    text: `A. Roughly three-quarters of the world's major food crops depend, at least in part, on animal pollinators, and bees are by far the most important of these. Apples, almonds, melons and many vegetables would produce far smaller harvests without them. In economic terms, the value of pollination to global agriculture has been estimated in the hundreds of billions of dollars each year.

B. Over the past two decades, however, beekeepers in many countries have reported unusually heavy losses of their colonies. Scientists have identified several causes acting together rather than a single culprit: certain pesticides that affect bees' ability to navigate, parasites such as the varroa mite, the loss of wild flowers, and changing weather patterns.

C. Farmers have responded in different ways. Some now rent hives during the flowering season, transporting millions of bees by truck from one region to another. Others plant strips of wild flowers along the edges of their fields, providing food and shelter for wild bees throughout the year.

D. Individuals can help too. Gardeners who avoid chemical sprays and grow flowers that bloom at different times of the year create small but valuable refuges. Even urban balconies, when filled with herbs such as mint and basil, can support pollinators in the middle of a city.`,
    questions: [
      { id: 'bh1', type: 'match', prompt: 'Match each paragraph (A–D) with the best heading.', pairs: [['Paragraph A', 'The economic importance of pollination'], ['Paragraph B', 'A combination of threats'], ['Paragraph C', 'How agriculture is adapting'], ['Paragraph D', 'What ordinary people can do']] },
      { id: 'bh2', type: 'single', prompt: 'Scientists believe one single cause is responsible for colony losses.', options: ['True', 'False', 'Not Given'], answer: 1 },
      { id: 'bh3', type: 'single', prompt: 'Rented hives are more expensive than planting wild flowers.', options: ['True', 'False', 'Not Given'], answer: 2 },
      { id: 'bh4', type: 'fill', prompt: 'The varroa mite is an example of a ___.', answer: 'parasite' },
      { id: 'bh5', type: 'single', prompt: 'According to paragraph D, city balconies …', options: ['are too small to matter', 'can support pollinators', 'should not have flowers', 'attract dangerous insects'], answer: 1 },
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
  // ---- More listening (A2–B2)
  {
    id: 'train-station', level: 'A2', listening: true, title: 'Announcement at the Railway Station', uzTitle: 'Tinglash: vokzaldagi e’lon',
    text: `Attention, please. The high-speed train to Samarkand will leave from platform three at ten fifteen. Passengers for Samarkand, please go to platform three now. The journey takes two hours and ten minutes. Please have your ticket and passport ready, because they will be checked before you get on the train. The café in carriage four is open during the journey and sells hot drinks and sandwiches. We would also like to inform passengers that the train to Bukhara is delayed by twenty minutes. It will now leave at eleven forty from platform five. We are sorry for the delay. Thank you.`,
    questions: [
      { id: 'l2ts1', type: 'fill', prompt: 'The Samarkand train leaves from platform ___.', answer: ['3', 'three'] },
      { id: 'l2ts2', type: 'single', prompt: 'How long does the journey to Samarkand take?', options: ['one hour', 'two hours', 'two hours and ten minutes', 'three hours'], answer: 2 },
      { id: 'l2ts3', type: 'multiple', prompt: 'What must passengers have ready?', options: ['a ticket', 'a passport', 'money for the café', 'a seat number'], answer: [0, 1] },
      { id: 'l2ts4', type: 'fill', prompt: 'The café is in carriage ___.', answer: ['4', 'four'] },
      { id: 'l2ts5', type: 'single', prompt: 'The Bukhara train is delayed by …', options: ['ten minutes', 'fifteen minutes', 'twenty minutes', 'forty minutes'], answer: 2 },
    ],
  },
  {
    id: 'pizza-order', level: 'A2', listening: true, title: 'Ordering Food by Phone', uzTitle: 'Tinglash: telefonda ovqat buyurtma qilish',
    text: `Worker: Hello, Tasty Pizza. How can I help you?
Customer: Hi. I'd like to order two pizzas for delivery, please.
Worker: Of course. Which pizzas would you like?
Customer: One large chicken pizza and one medium vegetable pizza.
Worker: Would you like anything to drink?
Customer: Yes, a big bottle of orange juice, please.
Worker: OK. That's one large chicken, one medium vegetable and one orange juice. The total is ninety-five thousand sum.
Customer: Can I pay by card when it arrives?
Worker: Yes, the driver has a card machine. What's your address?
Customer: Twenty-two Navoi Street, flat eight.
Worker: Thank you. Your food will arrive in about forty minutes.`,
    questions: [
      { id: 'l2pz1', type: 'fill', prompt: 'The customer orders ___ pizzas.', answer: ['2', 'two'] },
      { id: 'l2pz2', type: 'single', prompt: 'What size is the vegetable pizza?', options: ['small', 'medium', 'large', 'extra large'], answer: 1 },
      { id: 'l2pz3', type: 'fill', prompt: 'The drink is a big bottle of ___ juice.', answer: 'orange' },
      { id: 'l2pz4', type: 'single', prompt: 'How will the customer pay?', options: ['in cash', 'by card when the food arrives', 'online now', 'by bank transfer'], answer: 1 },
      { id: 'l2pz5', type: 'fill', prompt: 'The food will arrive in about ___ minutes.', answer: ['40', 'forty'] },
    ],
  },
  {
    id: 'weather-forecast', level: 'A2', listening: true, title: 'Weather Forecast', uzTitle: 'Tinglash: ob-havo ma’lumoti',
    text: `Good morning, and here is the weather for the next three days. Today will be sunny and warm in Tashkent, with a high of twenty-eight degrees. In the mountains it will be cooler, and there may be some clouds in the afternoon. Tomorrow, Wednesday, a strong wind will come from the west, and the temperature will fall to around twenty degrees. Rain is expected in the evening, so don't forget your umbrella if you are going out. On Thursday the rain will stop in the morning, and the afternoon will be bright again, but cooler than today, with a high of twenty-three. Drivers should be careful on mountain roads on Wednesday night because of fog.`,
    questions: [
      { id: 'l2wf1', type: 'fill', prompt: 'Today’s high in Tashkent: ___ degrees.', answer: ['28', 'twenty-eight'] },
      { id: 'l2wf2', type: 'single', prompt: 'Where may there be clouds this afternoon?', options: ['in Tashkent', 'in the mountains', 'in the desert', 'everywhere'], answer: 1 },
      { id: 'l2wf3', type: 'single', prompt: 'When is rain expected?', options: ['this morning', 'Wednesday evening', 'Thursday afternoon', 'all week'], answer: 1 },
      { id: 'l2wf4', type: 'fill', prompt: 'On Thursday the high will be ___ degrees.', answer: ['23', 'twenty-three'] },
      { id: 'l2wf5', type: 'fill', prompt: 'Drivers should be careful because of ___ on Wednesday night.', answer: 'fog' },
    ],
  },
  {
    id: 'doctor-call', level: 'B1', listening: true, title: 'Making a Doctor’s Appointment', uzTitle: 'Tinglash: shifokor qabuliga yozilish',
    text: `Receptionist: Good morning, City Health Clinic. How can I help?
Patient: Hello. I'd like to make an appointment with a doctor, please. I've had a bad cough for about ten days, and now I have a fever as well.
Receptionist: I'm sorry to hear that. Is it your first visit to our clinic?
Patient: Yes, it is.
Receptionist: Then I'll need your name and date of birth.
Patient: My name is Bekzod Rakhimov, and I was born on the fourth of May, nineteen ninety-nine.
Receptionist: Thank you. Dr Karimova has a free appointment this afternoon at half past three. Is that OK?
Patient: Yes, that's perfect.
Receptionist: Please arrive fifteen minutes early to fill in a form, and bring your passport and any medicine you are taking at the moment. The clinic is on the second floor, above the pharmacy.
Patient: Great, thank you very much.`,
    questions: [
      { id: 'l3dr1', type: 'fill', prompt: 'The patient has had a cough for about ___ days.', answer: ['10', 'ten'] },
      { id: 'l3dr2', type: 'single', prompt: 'What other symptom does he have?', options: ['a headache', 'a fever', 'a sore throat', 'a rash'], answer: 1 },
      { id: 'l3dr3', type: 'fill', prompt: 'Surname: ___', answer: 'Rakhimov' },
      { id: 'l3dr4', type: 'single', prompt: 'When is the appointment?', options: ['3:00 this afternoon', '3:30 this afternoon', 'tomorrow morning', '4 May'], answer: 1 },
      { id: 'l3dr5', type: 'multiple', prompt: 'What should he bring?', options: ['his passport', 'a photo', 'his current medicine', 'money for the form'], answer: [0, 2] },
      { id: 'l3dr6', type: 'single', prompt: 'Where is the clinic?', options: ['next to the pharmacy', 'above the pharmacy', 'on the ground floor', 'in the hospital'], answer: 1 },
    ],
  },
  {
    id: 'khiva-radio', level: 'B1', listening: true, title: 'Radio Travel Show: A Weekend in Khiva', uzTitle: 'Tinglash: radio — Xivada dam olish',
    text: `Welcome back to Weekend Travel. This week I'm in Khiva, one of the best-preserved old cities in Central Asia. The historic centre, called Itchan Kala, is surrounded by thick mud-brick walls, and inside there are more than fifty historic buildings. You can walk across the whole old town in about twenty minutes, but you will want to stay much longer.
My first tip is to buy a combined ticket at the west gate. It gives you entry to most museums and costs much less than paying for each one separately. My second tip is to climb the Islam Khodja minaret early in the morning, before it gets too hot. From the top you can see the whole city and the desert beyond it.
In the evening, the walls look beautiful at sunset, and many restaurants have tables on their roofs. Try the local dish shivit oshi — green noodles made with dill. The best time to visit is spring or autumn, as summer temperatures can reach over forty degrees.`,
    questions: [
      { id: 'l3kh1', type: 'fill', prompt: 'The historic centre is called Itchan ___.', answer: 'Kala' },
      { id: 'l3kh2', type: 'single', prompt: 'How many historic buildings are inside?', options: ['about twenty', 'more than fifty', 'exactly forty', 'over a hundred'], answer: 1 },
      { id: 'l3kh3', type: 'fill', prompt: 'Buy a combined ticket at the ___ gate.', answer: 'west' },
      { id: 'l3kh4', type: 'single', prompt: 'Why should you climb the minaret early?', options: ['It is free in the morning.', 'It gets too hot later.', 'It closes at noon.', 'There are fewer tourists at night.'], answer: 1 },
      { id: 'l3kh5', type: 'fill', prompt: 'Shivit oshi is green noodles made with ___.', answer: 'dill' },
      { id: 'l3kh6', type: 'single', prompt: 'The best seasons to visit are …', options: ['summer and winter', 'spring and autumn', 'only summer', 'only winter'], answer: 1 },
    ],
  },
  {
    id: 'language-podcast', level: 'B2', listening: true, title: 'Podcast: How Adults Learn Languages', uzTitle: 'Tinglash: podkast — kattalar tilni qanday o‘rganadi',
    text: `Host: Today I'm talking to Dr Sarah Lee, who researches how adults learn foreign languages. Sarah, is it true that it's too late to learn a language after childhood?
Guest: Not at all. Children are better at developing a native-like accent, but adults actually learn grammar and vocabulary faster at the beginning, because they can use strategies and their knowledge of their first language.
Host: So what's the most effective strategy?
Guest: The research is quite clear: short, regular practice works better than long, occasional sessions. Twenty minutes every day is more useful than three hours once a week. It's also important to test yourself instead of just rereading notes — trying to remember a word makes the memory stronger.
Host: What about apps?
Guest: They're great for vocabulary, but they don't replace real conversation. I always recommend finding a speaking partner, even online, at least once a week.
Host: And what's the biggest mistake adults make?
Guest: Waiting until they feel ready to speak. Mistakes are a normal part of learning, and people who start speaking early usually make faster progress.`,
    questions: [
      { id: 'l4pl1', type: 'single', prompt: 'According to Dr Lee, children are better at …', options: ['learning grammar', 'developing a native-like accent', 'learning vocabulary quickly', 'using strategies'], answer: 1 },
      { id: 'l4pl2', type: 'single', prompt: 'Why do adults learn faster at the beginning?', options: ['They have more free time.', 'They use strategies and their first language.', 'They use apps.', 'They are less afraid of mistakes.'], answer: 1 },
      { id: 'l4pl3', type: 'fill', prompt: '___ minutes every day is better than three hours once a week.', answer: ['Twenty', '20'] },
      { id: 'l4pl4', type: 'single', prompt: 'Instead of rereading notes, learners should …', options: ['write them again', 'test themselves', 'listen to music', 'use more colours'], answer: 1 },
      { id: 'l4pl5', type: 'single', prompt: 'What does she say about apps?', options: ['They are useless.', 'They are good for vocabulary but do not replace conversation.', 'They are better than teachers.', 'They should be used once a week.'], answer: 1 },
      { id: 'l4pl6', type: 'fill', prompt: 'The biggest mistake is waiting until you feel ___ to speak.', answer: 'ready' },
    ],
  },
  // ---- More listening (B2–C1)
  {
    id: 'lecture-sleep-science', level: 'C1', listening: true, title: 'Lecture: The Science of Circadian Rhythms', uzTitle: 'Tinglash: ma’ruza — sirkadian ritmlar',
    text: `Good morning. Today's topic is the body clock, or, to use the technical term, circadian rhythms. The word circadian comes from Latin and means "about a day", because these internal cycles last roughly twenty-four hours.
The master clock is located in a tiny region of the brain called the suprachiasmatic nucleus, which receives information directly from the eyes. Light, particularly in the morning, is the most powerful signal for resetting the clock, which is why exposure to daylight soon after waking can help people who struggle to fall asleep at night.
Interestingly, the clock doesn't only control sleep. Body temperature, hormone levels and even the efficiency of digestion follow a daily pattern. Studies of shift workers, who regularly work at night, have linked long-term disruption of these rhythms to a higher risk of conditions such as diabetes and heart disease.
One practical application is called chronotherapy: giving certain medicines at the time of day when they are most effective. For instance, some blood pressure drugs appear to work better when taken in the evening.
Finally, people genuinely differ. So-called "larks" naturally wake early, while "owls" prefer to stay up late, and these preferences are partly genetic. Teenagers, as you may know from experience, tend to shift towards being owls before moving back again in their twenties.`,
    questions: [
      { id: 'lc1sl1', type: 'fill', prompt: 'Circadian comes from Latin and means "about a ___".', answer: 'day' },
      { id: 'lc1sl2', type: 'single', prompt: 'The master clock receives information directly from the …', options: ['ears', 'eyes', 'stomach', 'skin'], answer: 1 },
      { id: 'lc1sl3', type: 'single', prompt: 'The strongest signal for resetting the clock is …', options: ['food', 'exercise', 'light', 'temperature'], answer: 2 },
      { id: 'lc1sl4', type: 'multiple', prompt: 'Which conditions are linked to long-term disruption?', options: ['diabetes', 'asthma', 'heart disease', 'allergies'], answer: [0, 2] },
      { id: 'lc1sl5', type: 'fill', prompt: 'Giving medicines at the best time of day is called ___.', answer: 'chronotherapy' },
      { id: 'lc1sl6', type: 'single', prompt: 'People who naturally wake early are called …', options: ['owls', 'larks', 'robins', 'eagles'], answer: 1 },
    ],
  },
  {
    id: 'debate-tourism', level: 'C1', listening: true, title: 'Radio Debate: Is Tourism Good for Historic Cities?', uzTitle: 'Tinglash: radio bahsi — turizm tarixiy shaharlarga foydalimi?',
    text: `Presenter: Joining me are Dr Nodira Usmonova, an urban historian, and Mark Ellis, who runs a travel company. Mark, let's start with you. Is tourism good for cities like Bukhara?
Mark: Overwhelmingly, yes. Tourism has created thousands of jobs, and the income has paid for the restoration of buildings that were close to collapse twenty years ago.
Presenter: Dr Usmonova, do you agree?
Nodira: Partly. The restoration is real, but I'm concerned about what happens to residents. In some historic quarters, families have sold their homes to be turned into guesthouses, and the old neighbourhood life is disappearing. A city can become a kind of museum, beautiful but empty.
Mark: I understand that, but surely the alternative — decline and poverty — is worse?
Nodira: It's not either-or. Some European cities now limit the number of short-term rentals, and others charge a small tourist tax that is spent directly on local services.
Presenter: Would a tax put visitors off?
Mark: Not if it's modest. Most travellers wouldn't notice a couple of dollars a night.
Nodira: And crucially, the money has to be visible. If residents see better schools or clean streets, they're far more likely to support tourism.`,
    questions: [
      { id: 'lc1dt1', type: 'single', prompt: 'Mark says tourism income has paid for …', options: ['new airports', 'the restoration of buildings', 'free hotels', 'museums only'], answer: 1 },
      { id: 'lc1dt2', type: 'single', prompt: 'Dr Usmonova’s main concern is …', options: ['pollution', 'residents leaving historic quarters', 'high hotel prices', 'too few tourists'], answer: 1 },
      { id: 'lc1dt3', type: 'fill', prompt: 'She warns that a city can become a kind of ___.', answer: 'museum' },
      { id: 'lc1dt4', type: 'multiple', prompt: 'Which measures from European cities are mentioned?', options: ['limiting short-term rentals', 'banning tour buses', 'a small tourist tax', 'closing old quarters'], answer: [0, 2] },
      { id: 'lc1dt5', type: 'single', prompt: 'Mark thinks a modest tax would …', options: ['stop most visitors', 'hardly be noticed', 'be illegal', 'raise prices a lot'], answer: 1 },
      { id: 'lc1dt6', type: 'fill', prompt: 'Dr Usmonova says the money has to be ___ to residents.', answer: 'visible' },
    ],
  },
  {
    id: 'seminar-ai-marking', level: 'C1', listening: true, title: 'Seminar: Should AI Mark Essays?', uzTitle: 'Tinglash: seminar — inshoni sun’iy intellekt baholashi kerakmi?',
    text: `Tutor: Today we're discussing automated essay scoring. Aziza, you read the main study. What did it find?
Aziza: The researchers compared scores from an automated system with scores from two trained examiners for about three thousand essays. The system agreed with the examiners about as often as the examiners agreed with each other, which surprised me.
Tutor: So it's reliable?
Aziza: In terms of consistency, yes. But the authors point out a weakness: when they submitted essays that were long and full of advanced vocabulary but made no logical sense, the system still gave them high marks.
Ben: That's my main worry. Students would quickly learn to write for the machine rather than for a human reader.
Tutor: How might that be prevented?
Aziza: The authors suggest using the system only as a second marker. If its score is very different from the human score, a third examiner checks the essay.
Ben: I'd also add that the feedback is useful for practice. A student can get instant comments on grammar at midnight, when no teacher is available.
Tutor: So, a tool for learning, but not a replacement for human judgement in high-stakes exams?
Aziza: Exactly. That was the paper's conclusion too.`,
    questions: [
      { id: 'lc1ai1', type: 'fill', prompt: 'The study compared scores for about ___ essays.', answer: ['3000', 'three thousand', '3,000'] },
      { id: 'lc1ai2', type: 'single', prompt: 'The system agreed with examiners …', options: ['much less often than examiners agreed with each other', 'about as often as examiners agreed with each other', 'in every case', 'only on short essays'], answer: 1 },
      { id: 'lc1ai3', type: 'single', prompt: 'What weakness did the authors find?', options: ['It was too slow.', 'Nonsense essays with advanced vocabulary got high marks.', 'It could not read handwriting.', 'It gave everyone low marks.'], answer: 1 },
      { id: 'lc1ai4', type: 'single', prompt: 'The authors suggest using the system as …', options: ['the only marker', 'a second marker', 'a teacher replacement', 'a spelling checker'], answer: 1 },
      { id: 'lc1ai5', type: 'fill', prompt: 'If scores differ greatly, a ___ examiner checks the essay.', answer: 'third' },
      { id: 'lc1ai6', type: 'single', prompt: 'Ben sees an advantage in …', options: ['lower exam fees', 'instant feedback for practice', 'fewer teachers', 'shorter essays'], answer: 1 },
    ],
  },
  {
    id: 'tour-silk-factory', level: 'B2', listening: true, title: 'Guided Tour: A Silk Factory in Margilan', uzTitle: 'Tinglash: Marg‘ilondagi ipak fabrikasiga ekskursiya',
    text: `Welcome to the Yodgorlik silk factory. Before we start, please switch your phones to silent, and stay with the group, because some of the machines are hot.
Our first stop is the cocoon room. Silk comes from the cocoons of silkworms, which feed only on mulberry leaves. Each cocoon is made from a single thread that can be up to one kilometre long! The cocoons are boiled in water so that the thread can be unwound — about eight cocoons are combined to make one strong thread.
Next, we'll see the dyeing process. Many of our colours still come from natural sources: yellow from onion skins, red from pomegranate peel and madder root, and blue from indigo.
Then we'll move to the weaving hall, where you'll see the famous ikat technique. In ikat, the threads are tied and dyed before weaving, which creates the slightly blurred patterns that Margilan is known for. A skilled weaver produces only about two metres of fabric a day on a hand loom.
At the end of the tour there's a shop where you can buy scarves and fabric. Please note that prices are fixed, and we accept both cash and cards.`,
    questions: [
      { id: 'lb2sf1', type: 'single', prompt: 'Why should visitors stay with the group?', options: ['It is easy to get lost.', 'Some machines are hot.', 'Photos are not allowed.', 'The tour is short.'], answer: 1 },
      { id: 'lb2sf2', type: 'fill', prompt: 'Silkworms feed only on ___ leaves.', answer: 'mulberry' },
      { id: 'lb2sf3', type: 'fill', prompt: 'One thread can be up to one ___ long.', answer: ['kilometre', 'kilometer', 'km'] },
      { id: 'lb2sf4', type: 'single', prompt: 'Yellow dye comes from …', options: ['pomegranate peel', 'onion skins', 'indigo', 'madder root'], answer: 1 },
      { id: 'lb2sf5', type: 'single', prompt: 'In ikat, threads are dyed …', options: ['after weaving', 'before weaving', 'by machine', 'only in blue'], answer: 1 },
      { id: 'lb2sf6', type: 'fill', prompt: 'A weaver produces about ___ metres a day on a hand loom.', answer: ['2', 'two'] },
    ],
  },
  {
    id: 'news-water-saving', level: 'B2', listening: true, title: 'News Report: Saving Water on Farms', uzTitle: 'Tinglash: yangiliklar — fermalarda suvni tejash',
    text: `And now farming news. In the Fergana Valley, a growing number of farmers are switching to drip irrigation, a system that delivers water directly to the roots of plants through thin plastic tubes.
Traditionally, fields were flooded through open channels, but much of that water evaporates or drains away before plants can use it. According to the regional agriculture office, drip systems can cut water use by up to fifty per cent while increasing harvests.
The main obstacle has been cost. Installing a system on one hectare costs around fifteen hundred dollars, which is a lot for a small family farm. To help, the government now covers half of the installation cost, and banks offer loans with lower interest rates for farmers who make the change.
We spoke to Bahodir Karimov, who installed drip irrigation in his apricot orchard two years ago. He says his water bill has fallen by almost forty per cent, and the fruit is larger and sweeter. His only complaint is that the tubes need regular cleaning, because sand and minerals can block them.
The agriculture office hopes that a quarter of all farmland in the valley will use water-saving methods within five years.`,
    questions: [
      { id: 'lb2ws1', type: 'single', prompt: 'Drip irrigation delivers water …', options: ['through open channels', 'directly to the roots', 'from the air', 'only at night'], answer: 1 },
      { id: 'lb2ws2', type: 'fill', prompt: 'Drip systems can cut water use by up to ___ per cent.', answer: ['50', 'fifty'] },
      { id: 'lb2ws3', type: 'fill', prompt: 'Installing a system on one hectare costs around $___.', answer: ['1500', '1,500', 'fifteen hundred'] },
      { id: 'lb2ws4', type: 'single', prompt: 'The government covers …', options: ['all of the cost', 'half of the installation cost', 'only the tubes', 'nothing'], answer: 1 },
      { id: 'lb2ws5', type: 'fill', prompt: 'Bahodir grows ___ in his orchard.', answer: ['apricots', 'apricot'] },
      { id: 'lb2ws6', type: 'single', prompt: 'His only complaint is that the tubes …', options: ['are expensive', 'need regular cleaning', 'break in winter', 'are too long'], answer: 1 },
    ],
  },
  // ---- A1 listening (short and slow)
  {
    id: 'l-meet-new-friend', level: 'A1', listening: true, title: 'Meeting a New Classmate', uzTitle: 'Tinglash: yangi sinfdosh bilan tanishuv',
    text: `Anna: Hi! I'm Anna. What's your name?
Jasur: Hello, Anna. My name is Jasur.
Anna: Nice to meet you, Jasur. Where are you from?
Jasur: I'm from Namangan. And you?
Anna: I'm from Poland. How old are you?
Jasur: I'm nineteen. I study computer science.
Anna: Me too! Do you have a brother or sister?
Jasur: Yes, I have two sisters. They are at school.
Anna: I have one brother. He is ten.`,
    questions: [
      { id: 'la1mf1', type: 'fill', prompt: "The boy's name is ___.", answer: 'Jasur' },
      { id: 'la1mf2', type: 'single', prompt: 'Where is Jasur from?', options: ['Tashkent', 'Namangan', 'Poland', 'Bukhara'], answer: 1 },
      { id: 'la1mf3', type: 'fill', prompt: 'Jasur is ___ years old.', answer: ['19', 'nineteen'] },
      { id: 'la1mf4', type: 'single', prompt: 'What does Jasur study?', options: ['English', 'medicine', 'computer science', 'music'], answer: 2 },
      { id: 'la1mf5', type: 'single', prompt: 'How many sisters does Jasur have?', options: ['one', 'two', 'three', 'none'], answer: 1 },
    ],
  },
  {
    id: 'l-what-time', level: 'A1', listening: true, title: 'What Time Is It?', uzTitle: 'Tinglash: soat necha?',
    text: `Man: Excuse me, what time is it?
Woman: It's half past eight.
Man: Oh no! My bus leaves at a quarter to nine.
Woman: Where are you going?
Man: To the university. My lesson starts at nine o'clock.
Woman: The bus stop is next to the bank. It's five minutes from here.
Man: Thank you very much!
Woman: You're welcome. Good luck!`,
    questions: [
      { id: 'la1wt1', type: 'single', prompt: 'What time is it now?', options: ['8:00', '8:30', '8:45', '9:00'], answer: 1 },
      { id: 'la1wt2', type: 'single', prompt: 'The bus leaves at …', options: ['8:15', '8:30', '8:45', '9:15'], answer: 2 },
      { id: 'la1wt3', type: 'fill', prompt: 'The man is going to the ___.', answer: 'university' },
      { id: 'la1wt4', type: 'fill', prompt: 'The bus stop is next to the ___.', answer: 'bank' },
      { id: 'la1wt5', type: 'fill', prompt: 'The bus stop is ___ minutes from here.', answer: ['5', 'five'] },
    ],
  },
  {
    id: 'l-at-the-cafe', level: 'A1', listening: true, title: 'At the Café', uzTitle: 'Tinglash: kafeda',
    text: `Waiter: Good morning. What would you like?
Customer: A cup of green tea, please.
Waiter: Anything to eat?
Customer: Yes. Can I have a samsa, please?
Waiter: Of course. Meat or pumpkin?
Customer: Pumpkin, please.
Waiter: OK. One green tea and one pumpkin samsa. That's twelve thousand sum.
Customer: Here you are. Is there free Wi-Fi here?
Waiter: Yes, there is. The password is on the table.
Customer: Great. And where is the toilet, please?
Waiter: It's on the left, next to the door.
Customer: Thank you.
Waiter: You're welcome. Have a nice day!`,
    questions: [
      { id: 'la1cf1', type: 'single', prompt: 'What does the customer drink?', options: ['black tea', 'green tea', 'coffee', 'water'], answer: 1 },
      { id: 'la1cf2', type: 'fill', prompt: 'The customer eats a ___.', answer: 'samsa' },
      { id: 'la1cf3', type: 'single', prompt: 'What is in the samsa?', options: ['meat', 'pumpkin', 'cheese', 'potato'], answer: 1 },
      { id: 'la1cf4', type: 'fill', prompt: 'The price is ___ thousand sum.', answer: ['12', 'twelve'] },
      { id: 'la1cf5', type: 'single', prompt: 'When does this conversation happen?', options: ['in the morning', 'in the afternoon', 'in the evening', 'at night'], answer: 0 },
    ],
  },
  {
    id: 'l-my-room', level: 'A1', listening: true, title: 'My Room', uzTitle: 'Tinglash: mening xonam',
    text: `Hello! This is my room. It is small, but I like it. There is a bed next to the window. There is a desk and a chair under the window, and there is a computer on the desk. My clothes are in the big brown wardrobe. On the wall there is a map of the world and a photo of my family. My favourite thing is the green lamp on the desk. I read books there every evening.`,
    questions: [
      { id: 'la1rm1', type: 'single', prompt: 'The room is …', options: ['big', 'small', 'dark', 'new'], answer: 1 },
      { id: 'la1rm2', type: 'fill', prompt: 'The bed is next to the ___.', answer: 'window' },
      { id: 'la1rm3', type: 'single', prompt: 'What is on the desk?', options: ['a TV', 'a computer', 'a phone', 'a cat'], answer: 1 },
      { id: 'la1rm4', type: 'single', prompt: 'What colour is the wardrobe?', options: ['green', 'brown', 'white', 'black'], answer: 1 },
      { id: 'la1rm5', type: 'fill', prompt: 'The speaker’s favourite thing is the green ___.', answer: 'lamp' },
    ],
  },
];
