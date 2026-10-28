// IELTS Academic practice: original Writing and Speaking tasks in the official format,
// plus the publicly documented raw-score → band conversion for Listening / Academic Reading.

// Approximate conversion (40 questions). Lower bound of each raw-score range → band.
export const bandTable = {
  listening: [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 0]],
  reading: [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [0, 0]],
};

/** Raw score (0–40) → approximate band. */
export function toBand(kind, raw) {
  return bandTable[kind].find(([min]) => raw >= min)[1];
}

export const writingCriteria = [
  ['Task achievement / response', "Savolning hamma qismiga javob berdimmi? Task 1: umumiy ko'rinish (overview) bormi? Task 2: fikrim aniq va oxirigacha bir xilmi?"],
  ['Coherence & cohesion', "Abzaslar mantiqiy tartibdami? Bog'lovchilar (however, as a result, whereas) o'rinli va haddan ko'p emasmi?"],
  ['Lexical resource', "So'zlarni takrorlamay, aniq so'zlar ishlatdimmi (rise sharply, a significant proportion)? Imlo xatolari yo'qmi?"],
  ['Grammatical range & accuracy', "Murakkab gaplar (which, although, if) bormi? Zamonlar to'g'rimi (Task 1 da o'tgan davr uchun Past Simple)?"],
];

export const writing = [
  {
    id: 'w1-internet', task: 1, minutes: 20, minWords: 150,
    prompt: 'The table below shows the percentage of households with internet access in three Central Asian countries in 2010, 2015 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    table: [['', '2010', '2015', '2020'], ['Country A', '15%', '42%', '71%'], ['Country B', '8%', '25%', '58%'], ['Country C', '30%', '48%', '63%']],
    model: `The table compares the proportion of households with internet access in three Central Asian countries over a ten-year period from 2010 to 2020.

Overall, access to the internet rose considerably in all three countries. Country C had the highest figure at the start of the period, but by 2020 it had been overtaken by Country A, which experienced the most dramatic growth.

In 2010, 30% of households in Country C were connected, double the figure for Country A (15%) and almost four times that of Country B (8%). Over the next five years, Country A's percentage almost tripled to 42%, while Country C saw a more moderate increase to 48%.

Between 2015 and 2020, the gap narrowed further. Country A climbed to 71%, the highest rate in the table, and Country B more than doubled its share, reaching 58%. Country C, by contrast, grew relatively slowly to 63%, meaning that it ended the period in second place.`,
    tips: ["Birinchi gap — savolni o'z so'zlaringiz bilan qayta yozish (paraphrase).", "2-abzas: Overall… — eng muhim 2 tendensiya, raqamsiz.", "Har bir raqamni emas, eng muhimlarini taqqoslang.", "Shaxsiy fikr yozmang — faqat ma'lumot."],
  },
  {
    id: 'w1-process', task: 1, minutes: 20, minWords: 150,
    prompt: 'The diagram below shows how green tea is produced. Summarise the information by selecting and reporting the main features.',
    steps: ['Fresh leaves are picked by hand', 'Leaves are steamed for 1 minute (stops oxidation)', 'Leaves are rolled and shaped', 'Leaves are dried at 80–90°C', 'Dried tea is sorted by quality', 'Tea is packed and sent to shops'],
    model: `The diagram illustrates the stages involved in the production of green tea, from harvesting the leaves to distributing the final product.

Overall, the process consists of six main steps, beginning with picking fresh leaves and ending with packaging. The key feature that distinguishes green tea is that the leaves are steamed early in the process.

First, fresh tea leaves are picked by hand. They are then steamed for approximately one minute, which prevents oxidation and preserves their green colour. After this, the leaves are rolled and shaped before being dried at a temperature of between 80 and 90 degrees Celsius.

Once the leaves have dried, the tea is sorted according to its quality, so that higher grades can be separated from lower ones and sold at different prices. Finally, the tea is packed into boxes or bags and transported to shops, where it is sold to consumers. In total, the process is relatively simple, but timing at the steaming stage is critical to the final flavour.`,
    tips: ["Jarayonlarda Passive voice asosiy: leaves are picked, tea is packed.", "Ketma-ketlik so'zlari: First, then, after this, once…, finally.", "Overview: nechta bosqich, qayerdan boshlanib qayerda tugaydi."],
  },
  {
    id: 'w2-university', task: 2, minutes: 40, minWords: 250,
    prompt: 'Some people believe that university education should be free for all students. Others think students should pay for their own studies. Discuss both views and give your own opinion.',
    model: `Whether higher education should be funded by the state or by students themselves is a widely debated issue. While there are convincing arguments on both sides, I believe that university should be free, at least for students from low-income families.

Those who support tuition fees argue that students are the main beneficiaries of a degree. Graduates typically earn higher salaries throughout their careers, so it seems fair that they, rather than all taxpayers, should cover the cost. In addition, when students pay, they may take their studies more seriously and choose courses that are relevant to the job market, which reduces public spending on degrees that lead nowhere.

On the other hand, free education ensures that talent, not wealth, determines who studies. In countries such as Uzbekistan, many capable young people from rural areas cannot afford high fees, and their potential is lost to society. Moreover, the benefits of education are not purely individual: a country with more doctors, engineers and teachers enjoys better public services and faster economic growth, which justifies public investment.

In my view, the strongest solution is a balanced one. Governments should provide free tuition for students who cannot afford it and for subjects the economy urgently needs, such as medicine and engineering, while wealthier students could contribute through income-based loans repaid only after graduation, once they are earning a reasonable salary.

In conclusion, although graduates do gain personally from their degrees, education also benefits society as a whole. Therefore, I believe it should be free for those who need support.`,
    tips: ["Kirish: mavzu + o'z pozitsiyangiz (discuss + opinion savolida fikr kirishda aytiladi).", "2 ta asosiy abzas: har bir nuqtai nazar alohida, misol bilan.", "Xulosa: yangi fikr qo'shmang, pozitsiyani takrorlang.", "250 so'zdan kam bo'lsa ball tushadi."],
  },
  {
    id: 'w2-cities', task: 2, minutes: 40, minWords: 250,
    prompt: 'In many countries, more and more people are moving from rural areas to big cities. What problems does this cause? What solutions can you suggest?',
    model: `In recent decades, large numbers of people have left the countryside in search of better opportunities in major cities. This trend creates serious difficulties for both urban and rural areas, but these can be reduced through careful planning and investment.

The most visible problem is pressure on city infrastructure. When populations grow faster than housing and transport systems, rents rise sharply, roads become congested and public services such as hospitals and schools are overcrowded. Air pollution also tends to increase as more cars enter the streets. At the same time, villages lose their young, educated residents, which leaves an ageing population behind and weakens local agriculture and businesses.

Several measures could address these issues. Firstly, governments could invest in regional development by building universities, hospitals and industrial zones in smaller towns, so that people do not need to move to the capital to find good jobs or services. Secondly, improving internet access would allow more people to work remotely while staying in their home regions. Finally, cities themselves should plan for growth by expanding affordable housing and public transport, such as metro and bus networks, rather than relying on private cars. Tashkent's recent metro extensions, for instance, show how better transport can make life in a growing city more manageable for ordinary residents.

In conclusion, migration to cities causes overcrowding, pollution and the decline of rural communities. However, if authorities spread opportunities more evenly across the country and plan urban growth sensibly, the negative effects can be significantly reduced for everyone involved.`,
    tips: ["Problem–solution esse: 1 abzas muammolar, 1 abzas yechimlar.", "Har bir yechim muammoga bog'langan bo'lsin.", "Firstly / Secondly / Finally — tartibni ko'rsatadi."],
  },
  {
    id: 'w1-transport', task: 1, minutes: 20, minWords: 150,
    prompt: 'The table below shows how students at a university in Tashkent travelled to classes in 2014 and 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    table: [['Mode of transport', '2014', '2024'], ['Bus', '45%', '28%'], ['Metro', '20%', '38%'], ['Car (own or taxi)', '15%', '22%'], ['Walking', '15%', '7%'], ['Bicycle / scooter', '5%', '5%']],
    model: `The table compares the methods of transport that students at a university in Tashkent used to get to classes in 2014 and 2024.

Overall, the bus lost its position as the most common way of travelling, while the metro became the most popular choice. Walking also declined considerably, whereas the use of cars increased.

In 2014, almost half of all students (45%) travelled by bus, which was more than double the proportion who used the metro (20%). Ten years later, however, the figures had almost reversed: the share of bus users fell to 28%, while the metro rose to 38%, making it the leading mode of transport.

Car use, including taxis, grew from 15% to 22% over the decade. By contrast, the percentage of students who walked to university dropped from 15% to just 7%. The proportion of those who cycled or used scooters remained unchanged at 5% in both years, the lowest figure in the table.`,
    tips: ["Ikki yil taqqoslanadi: o'tgan zamon (fell, rose, remained) ishlating.", "Raqam takrorlamaslik uchun: the share of, the proportion of, the percentage of.", "O'zgarmagan qatorni ham eslatib o'ting (remained unchanged)."],
  },
  {
    id: 'w2-technology', task: 2, minutes: 40, minWords: 250,
    prompt: 'Some people think that children should not be allowed to use smartphones until they are teenagers. To what extent do you agree or disagree?',
    model: `Smartphones have become part of everyday life, and many children now receive their first device at primary school age. Some argue that phones should be banned until the teenage years. I partly agree with this view: young children should not have their own smartphones, but a complete ban is neither realistic nor entirely beneficial.

There are strong reasons to delay smartphone ownership. Firstly, young children find it difficult to control the time they spend on games and videos, and excessive screen time has been linked to poor sleep, reduced physical activity and weaker concentration at school. Secondly, a smartphone gives children access to social media and strangers online, and they may not yet be mature enough to recognise risks such as cyberbullying or inappropriate content. For these reasons, parents are justified in waiting before giving a child a personal device.

However, a strict ban until the age of thirteen ignores the positive uses of technology. Educational apps can help children practise reading, mathematics and foreign languages in an engaging way. In addition, many families rely on phones to stay in contact with their children when they travel to school or activities alone. Rather than banning devices completely, parents could allow supervised use of a shared tablet or a simple phone with limited functions.

In conclusion, while I agree that children under thirteen should not own unrestricted smartphones, I believe that carefully controlled access to technology is more sensible than a total ban. The key is supervision and clear limits rather than prohibition.`,
    tips: ["“To what extent” — pozitsiyangizni aniq ayting: to'liq qo'shilaman / qisman / qarshiman.", "Qisman rozilik (partly agree) — ikkala tomonni ko'rsatish uchun qulay.", "Har bir abzas bitta asosiy fikr + sabab + misol."],
  },
];

export const speaking = [
  {
    id: 's-hometown', topic: 'Hometown & travel',
    part1: ['Where are you from?', 'What do you like most about your hometown?', 'Has your hometown changed much in recent years?', 'Do you prefer mornings or evenings? Why?', 'How do you usually spend your weekends?'],
    part2: { card: 'Describe a place in your country that you would recommend to a tourist.', points: ['where it is', 'how you know about it', 'what visitors can do there', 'and explain why you would recommend it.'] },
    part3: ['Why do people enjoy travelling to other countries?', 'How can tourism harm historical places?', 'Should governments spend more money on protecting historical buildings?'],
  },
  {
    id: 's-learning', topic: 'Education & skills',
    part1: ['Are you a student or do you work?', 'What subject did you enjoy most at school?', 'Do you prefer studying alone or with others?', 'How often do you use the internet to learn something new?'],
    part2: { card: 'Describe a skill you learned that was difficult at first.', points: ['what the skill is', 'when and how you learned it', 'why it was difficult', 'and explain how you feel about it now.'] },
    part3: ['What skills will be most important for young people in the future?', 'Is it better to learn from a teacher or from the internet?', 'Should schools teach practical skills like cooking and managing money?'],
  },
  {
    id: 's-technology', topic: 'Technology',
    part1: ['How much time do you spend on your phone each day?', 'What apps do you use most often?', 'Did you use computers when you were a child?', 'Would you like to have less technology in your life?'],
    part2: { card: 'Describe a piece of technology that you find very useful.', points: ['what it is', 'when you started using it', 'how you use it', 'and explain why it is so useful for you.'] },
    part3: ['How has technology changed the way people communicate?', 'Do you think people depend too much on technology?', 'What jobs might disappear because of artificial intelligence?'],
  },
  {
    id: 's-environment', topic: 'Environment & weather',
    part1: ['What kind of weather do you like best?', 'Does the weather affect your mood?', 'Do you try to save energy at home?', 'Are there any parks near where you live?'],
    part2: { card: 'Describe an action you or someone you know took to help the environment.', points: ['what the action was', 'who did it', 'why they did it', 'and explain how effective you think it was.'] },
    part3: ['Who is more responsible for protecting the environment: individuals or governments?', 'Why do some people not care about environmental problems?', 'How might cities change in the future because of climate change?'],
  },
  {
    id: 's-work', topic: 'Work & ambitions',
    part1: ['What job would you like to do in the future?', 'Would you prefer to work in an office or from home?', 'Is it important to enjoy your job?', 'What did you want to be when you were a child?'],
    part2: { card: 'Describe a person you admire who is successful in their job.', points: ['who this person is', 'what job they do', 'how they became successful', 'and explain why you admire them.'] },
    part3: ['What makes a job satisfying for most people?', 'Is it better to stay in one job for a long time or to change jobs often?', 'How will artificial intelligence change the workplace?'],
  },
];

// Official free practice (links only — their tests stay on their sites).
export const officialResources = [
  ['IELTS.org — rasmiy sayt, namunaviy savollar', 'https://ielts.org/'],
  ['British Council — bepul tayyorlov materiallari', 'https://takeielts.britishcouncil.org/'],
  ['IDP IELTS — bepul mashqlar', 'https://ielts.idp.com/'],
];
