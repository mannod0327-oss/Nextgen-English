// IELTS Writing prompt bank (original). Same schema as `writing` in ielts.js; `plan` gives an outline / ideas.
// Task 1 items carry a data table; 30 tasks also carry a Band 7 `model` (see `models` at the end).

const t1 = (id, prompt, table, plan) => ({ id: `bw1-${id}`, task: 1, minutes: 20, minWords: 150, type: 'Task 1 · Table', prompt: `${prompt} Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`, table, plan });
// Chart tasks: `chart` is drawn as SVG (core/chart.js chartSvg); `table` is derived from it for the data view and the number checks.
const t1c = (id, kind, prompt, labels, series, unit, plan) => ({
  ...t1(id, prompt, [['', ...labels], ...series.map(([name, ...values]) => [name, ...values.map((v) => `${v}${unit === '%' ? '%' : ''}`)])], plan),
  type: `Task 1 · ${kind === 'bar' ? 'Bar chart' : 'Line graph'}`,
  chart: { type: kind, labels, series: series.map(([name, ...values]) => ({ name, values })), unit },
});
const t2 = (id, type, prompt, plan) => ({ id: `bw2-${id}`, task: 2, minutes: 40, minWords: 250, type: `Task 2 · ${type}`, prompt, plan });

const OPINION = 'To what extent do you agree or disagree?';
const DISCUSS = 'Discuss both views and give your own opinion.';
const ADV = 'Do the advantages of this outweigh the disadvantages?';
const PS = 'What are the causes of this problem, and what solutions can you suggest?';

export const writingBank = [
  // ---- Task 1 (tables)
  t1('cinema', 'The table shows the number of cinema tickets sold (in millions) in a country between 2000 and 2020.',
    [['Year', '2000', '2005', '2010', '2015', '2020'], ['Tickets (millions)', '42', '48', '55', '51', '19']],
    ['Overview: steady rise to 2010, slight fall, then a sharp drop in 2020.', 'Peak: 55 million in 2010.', 'Compare 2020 with 2000: less than half.']),
  t1('energy', 'The table shows the percentage of electricity produced from different sources in a country in 2005 and 2025.',
    [['Source', '2005', '2025'], ['Gas', '60%', '45%'], ['Coal', '25%', '10%'], ['Hydro', '12%', '20%'], ['Solar & wind', '3%', '25%']],
    ['Overview: fossil fuels fell, renewables grew; gas still largest.', 'Solar & wind: biggest increase (3% → 25%).', 'Coal more than halved.']),
  t1('spending', 'The table shows how an average family spent its monthly income in 2010 and 2020.',
    [['Category', '2010', '2020'], ['Food', '40%', '32%'], ['Housing', '25%', '30%'], ['Transport', '10%', '12%'], ['Education', '8%', '14%'], ['Other', '17%', '12%']],
    ['Overview: food still biggest but fell; housing and education rose.', 'Education almost doubled.', '"Other" fell by five points.']),
  t1('students-abroad', 'The table shows the number of students from one country studying abroad, by destination, in 2015 and 2025.',
    [['Destination', '2015', '2025'], ['Russia', '12,000', '9,500'], ['South Korea', '1,500', '6,800'], ['UK', '2,100', '3,900'], ['Turkey', '3,200', '5,100']],
    ['Overview: Russia remained top but declined; all others rose.', 'South Korea: more than fourfold increase.', 'Compare UK and Turkey.']),
  t1('internet-age', 'The table shows the average hours per day that different age groups spent online in 2025.',
    [['Age group', 'Weekdays', 'Weekends'], ['15–24', '5.5', '7.0'], ['25–44', '4.0', '4.5'], ['45–64', '2.5', '3.0'], ['65+', '1.0', '1.5']],
    ['Overview: online time falls with age; weekends higher for all.', 'Youngest group: highest, especially at weekends.', '65+: lowest, about one fifth of youngest.']),
  t1('tourists', 'The table shows the number of international visitors (in thousands) to four cities in 2019 and 2024.',
    [['City', '2019', '2024'], ['Samarkand', '850', '1,400'], ['Bukhara', '520', '900'], ['Khiva', '300', '610'], ['Tashkent', '1,900', '2,300']],
    ['Overview: all cities grew; Tashkent largest, Khiva fastest growth.', 'Khiva roughly doubled.', 'Samarkand +550,000.']),
  t1('water-use', 'The table shows water use per person (litres per day) in five countries.',
    [['Country', 'Household', 'Agriculture', 'Industry'], ['A', '150', '900', '300'], ['B', '90', '1,400', '120'], ['C', '220', '400', '600'], ['D', '60', '700', '50'], ['E', '180', '300', '500']],
    ['Overview: agriculture largest in most countries; C and E more industrial.', 'B: highest agriculture.', 'D: lowest in every category except agriculture.']),
  t1('employment', 'The table shows the percentage of workers employed in three sectors in a country in 1990, 2005 and 2020.',
    [['Sector', '1990', '2005', '2020'], ['Agriculture', '45%', '30%', '22%'], ['Industry', '20%', '24%', '23%'], ['Services', '35%', '46%', '55%']],
    ['Overview: shift from agriculture to services; industry stable.', 'Services became the largest sector by 2005.', 'Agriculture halved.']),
  t1('commute', 'The table shows the average commuting time (minutes) in four cities in 2010 and 2025.',
    [['City', '2010', '2025'], ['City A', '35', '52'], ['City B', '28', '30'], ['City C', '45', '38'], ['City D', '22', '41']],
    ['Overview: rose in three cities, fell in C.', 'D nearly doubled.', 'B almost unchanged.']),
  t1('recycling', 'The table shows the percentage of household waste that was recycled in five countries in 2012 and 2022.',
    [['Country', '2012', '2022'], ['W', '18%', '42%'], ['X', '35%', '48%'], ['Y', '8%', '12%'], ['Z', '50%', '55%'], ['V', '22%', '20%']],
    ['Overview: most improved; Z highest throughout; V slightly fell.', 'W: largest increase (more than doubled).', 'Y lowest in both years.']),
  t1('reading-habits', 'The table shows the percentage of adults who read books for pleasure, by format, in 2015 and 2025.',
    [['Format', '2015', '2025'], ['Printed books', '58%', '41%'], ['E-books', '14%', '22%'], ['Audiobooks', '5%', '19%'], ['Do not read', '30%', '33%']],
    ['Overview: print declined, digital formats grew; non-readers slightly up.', 'Audiobooks almost fourfold.', 'Note: totals over 100% — people use several formats.']),
  t1('car-ownership', 'The table shows the number of cars per 1,000 people in four countries in 2000 and 2020.',
    [['Country', '2000', '2020'], ['P', '120', '310'], ['Q', '450', '470'], ['R', '60', '190'], ['S', '300', '250']],
    ['Overview: rapid growth in P and R; Q stable; S declined.', 'Q highest in both years.', 'R more than tripled.']),
  t1('weather', 'The table shows average monthly temperature (°C) and rainfall (mm) in a city.',
    [['Month', 'Jan', 'Apr', 'Jul', 'Oct'], ['Temperature', '2', '16', '31', '15'], ['Rainfall', '55', '65', '4', '25']],
    ['Overview: hot dry summer, cold wetter winter and spring.', 'July: hottest and driest.', 'April: wettest month shown.']),
  t1('smartphones', 'The table shows the percentage of people who owned a smartphone, by age group, in 2012 and 2024.',
    [['Age', '2012', '2024'], ['16–24', '52%', '98%'], ['25–34', '44%', '96%'], ['35–54', '25%', '89%'], ['55+', '6%', '68%']],
    ['Overview: ownership rose sharply in all groups; gap between ages narrowed.', '55+: elevenfold increase.', 'Young almost universal by 2024.']),
  t1('university-subjects', 'The table shows the number of first-year students (thousands) choosing five subjects in 2014 and 2024.',
    [['Subject', '2014', '2024'], ['Engineering', '18', '24'], ['Medicine', '9', '12'], ['Economics', '22', '15'], ['IT', '6', '21'], ['Languages', '14', '13']],
    ['Overview: IT and engineering grew; economics fell; languages stable.', 'IT: more than tripled.', 'Economics lost its first place.']),
  t1('food-prices', 'The table shows the average price (sum per kg) of four food items in 2020 and 2025.',
    [['Item', '2020', '2025'], ['Bread', '6,000', '9,000'], ['Rice', '12,000', '18,500'], ['Meat', '65,000', '95,000'], ['Apples', '8,000', '9,500']],
    ['Overview: all prices rose; meat most expensive; apples rose least.', 'Use percentages: bread +50%.', 'Compare meat with others.']),
  t1('sleep', 'The table shows the average hours of sleep per night of different age groups in two years.',
    [['Age group', '2005', '2025'], ['Children (6–12)', '9.8', '9.1'], ['Teenagers', '8.6', '7.2'], ['Adults', '7.4', '6.9'], ['Elderly', '7.0', '6.8']],
    ['Overview: sleep fell in all groups; children still sleep most.', 'Teenagers: biggest fall (1.4 hours).', 'Elderly almost unchanged.']),
  t1('libraries', 'The table shows library visits (millions) and book loans (millions) in a country.',
    [['Year', 'Visits', 'Loans'], ['2005', '30', '45'], ['2010', '28', '38'], ['2015', '25', '30'], ['2020', '14', '18'], ['2025', '22', '21']],
    ['Overview: both fell until 2020, then partial recovery.', 'Loans fell faster than visits.', '2025: visits exceed loans for first time.']),
  t1('plastic', 'The table shows plastic waste per person (kg per year) in five regions in 2010 and 2025.',
    [['Region', '2010', '2025'], ['North', '45', '38'], ['South', '20', '34'], ['East', '30', '52'], ['West', '55', '41'], ['Centre', '25', '27']],
    ['Overview: rose in South and East, fell in North and West.', 'East became the highest.', 'Centre almost unchanged.']),
  t1('gym', 'The table shows the percentage of people doing regular exercise, by gender and age, in 2025.',
    [['Age', 'Men', 'Women'], ['18–29', '58%', '49%'], ['30–44', '41%', '44%'], ['45–59', '33%', '38%'], ['60+', '22%', '30%']],
    ['Overview: exercise declines with age; women overtake men after 30.', 'Biggest gender gap: 18–29.', 'Lowest: men 60+.']),

  // ---- Task 1 (line graphs and bar charts)
  t1c('internet-access', 'line', 'The graph shows the percentage of urban and rural households with internet access in a country between 2000 and 2025.',
    ['2000', '2005', '2010', '2015', '2020', '2025'], [['Urban', 12, 30, 55, 78, 90, 96], ['Rural', 2, 8, 20, 41, 65, 82]], '%',
    ['Overview: both rose steadily; the urban–rural gap first widened, then narrowed.', 'Urban: 12% → 96%.', 'Rural: 2% → 82%; fastest growth after 2010.']),
  t1c('museum-visits', 'line', 'The graph shows the number of visitors (in thousands) to three museums in a city between 2015 and 2025.',
    ['2015', '2017', '2019', '2021', '2023', '2025'], [['History', 120, 135, 150, 60, 140, 170], ['Art', 80, 85, 95, 40, 110, 150], ['Science', 50, 70, 90, 35, 95, 130]], '',
    ['Overview: all three grew, with a sharp dip in 2021 and full recovery by 2025.', 'History museum always most visited.', 'Science museum: biggest relative growth (50 → 130).']),
  t1c('rainfall', 'line', 'The graph shows the average monthly rainfall (in millimetres) in two cities, X and Y, in selected months of the year.',
    ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'], [['City X', 45, 60, 30, 5, 10, 40], ['City Y', 90, 70, 50, 30, 60, 100]], 'mm',
    ['Overview: Y wetter all year; both driest in July.', 'X: peak 60 mm in March, almost dry in summer.', 'Y: highest 100 mm in November.']),
  t1c('transport-mode', 'bar', 'The chart shows how students travelled to a university in 2015 and 2025.',
    ['Bus', 'Metro', 'Car', 'Bicycle', 'Walking'], [['2015', 40, 15, 25, 5, 15], ['2025', 28, 30, 20, 12, 10]], '%',
    ['Overview: the bus lost its lead to the metro, which doubled (15% → 30%).', 'Bicycle more than doubled.', 'Car and walking fell slightly.']),
  t1c('reading-formats', 'bar', 'The chart shows the average number of hours per week that people in different age groups spent reading printed and digital texts.',
    ['18–24', '25–44', '45–64', '65+'], [['Printed', 1.5, 2.0, 3.5, 5.0], ['Digital', 4.5, 3.5, 2.0, 0.5]], 'h',
    ['Overview: printed reading rises with age, digital falls — opposite trends.', 'Youngest: digital three times printed.', '65+: printed ten times digital.']),
  t1c('household-waste', 'bar', 'The chart shows the amount of household waste per person (kg per year) that was recycled or sent to landfill in four countries.',
    ['Country A', 'Country B', 'Country C', 'Country D'], [['Recycled', 180, 90, 250, 60], ['Landfill', 220, 380, 150, 410]], 'kg',
    ['Overview: only C recycled more than it sent to landfill.', 'D: highest landfill, lowest recycling.', 'Total waste per person similar (400–470 kg).']),
  // ---- Task 2
  t2('online-learning', 'Opinion', `Online learning will soon replace traditional classroom teaching. ${OPINION}`, ['Agree partly: flexibility, cost, access in rural areas.', 'Disagree: social skills, discipline, practical subjects.', 'Conclusion: blended learning.']),
  t2('homework', 'Opinion', `Homework should be banned in primary schools. ${OPINION}`, ['For: play time, family time, stress.', 'Against: habit of study, practice.', 'Your view: limited, short homework.']),
  t2('uniform', 'Discussion', `Some people think school uniforms are necessary, while others think students should wear what they like. ${DISCUSS}`, ['Uniform: equality, discipline, less pressure on poor families.', 'Free choice: self-expression, comfort.', 'Opinion + reason.']),
  t2('exams', 'Discussion', `Some believe exams are the best way to assess students, while others prefer continuous assessment through projects and coursework. ${DISCUSS}`, ['Exams: fair, objective, prepare for pressure.', 'Projects: deeper learning, real skills, less stress.', 'Opinion: combination.']),
  t2('gap-year', 'Advantages/disadvantages', `Some young people take a gap year between school and university to travel or work. ${ADV}`, ['Advantages: maturity, experience, clearer goals.', 'Disadvantages: losing study habits, cost, delay.', 'Outweigh? Give a clear answer.']),
  t2('teachers-pay', 'Opinion', `Teachers should be paid as much as doctors because their work is equally important. ${OPINION}`, ['Agree: shape future, attract talent.', 'Disagree: training length, responsibility for life.', 'Middle position possible.']),
  t2('single-sex', 'Discussion', `Some people believe boys and girls should study in separate schools, while others think mixed schools are better. ${DISCUSS}`, ['Separate: fewer distractions, tailored teaching.', 'Mixed: real-life preparation, social skills.', 'Opinion.']),
  t2('foreign-language-primary', 'Opinion', `Children should begin learning a foreign language at primary school rather than secondary school. ${OPINION}`, ['Brain flexibility, pronunciation.', 'Counter: need for good teachers, overload.', 'Conclusion.']),
  t2('obesity', 'Problem–solution', `Obesity among children is increasing in many countries. ${PS}`, ['Causes: fast food, screens, less walking.', 'Solutions: school meals, sport, advertising rules, parents.']),
  t2('sugar-tax', 'Opinion', `Governments should tax sugary drinks to improve public health. ${OPINION}`, ['For: evidence of reduced consumption, revenue for health.', 'Against: unfair to the poor, personal freedom.', 'Your view.']),
  t2('sport-funding', 'Discussion', `Some people think governments should spend money on professional sports, while others think the money should go to sports facilities for ordinary people. ${DISCUSS}`, ['Professional: national pride, inspiration, tourism.', 'Public: health, accessibility.', 'Opinion.']),
  t2('ageing', 'Advantages/disadvantages', `In many countries, the proportion of older people is increasing. ${ADV}`, ['Advantages: experience, volunteering, family support.', 'Disadvantages: pensions, healthcare costs, fewer workers.']),
  t2('traffic', 'Problem–solution', `Traffic congestion is becoming a major problem in many large cities. ${PS}`, ['Causes: car ownership, poor public transport, urban sprawl.', 'Solutions: metro, bus lanes, congestion charges, remote work.']),
  t2('cars-centre', 'Opinion', `Private cars should be banned from city centres. ${OPINION}`, ['For: pollution, safety, walkable streets.', 'Against: disabled people, deliveries, businesses.', 'Partial ban/time limits.']),
  t2('tourism', 'Advantages/disadvantages', `International tourism has grown rapidly in recent decades. ${ADV}`, ['Advantages: jobs, cultural exchange, preservation funding.', 'Disadvantages: pollution, overcrowding, rising prices.']),
  t2('flights', 'Opinion', `People should fly less to protect the environment, even if it limits their freedom to travel. ${OPINION}`, ['Aviation emissions; alternatives (trains).', 'Counter: business, family, developing countries.', 'Your position.']),
  t2('climate-individual', 'Discussion', `Some people believe that individuals can do little to stop climate change, and that only governments and large companies can make a difference. ${DISCUSS}`, ['Governments: laws, scale.', 'Individuals: consumer pressure, voting, habits.', 'Opinion: both needed.']),
  t2('plastic-bags', 'Opinion', `Single-use plastic should be completely banned. ${OPINION}`, ['For: oceans, wildlife.', 'Against: medical uses, cost, alternatives also have impact.', 'Conclusion.']),
  t2('zoos', 'Discussion', `Some people think zoos are cruel and should be closed, while others believe they help protect endangered species. ${DISCUSS}`, ['Cruel: small spaces, stress.', 'Useful: breeding, education, research.', 'Opinion.']),
  t2('city-country', 'Advantages/disadvantages', `More and more people are choosing to live in big cities rather than in the countryside. ${ADV}`, ['Advantages: jobs, services, education.', 'Disadvantages: cost, pollution, stress, empty villages.']),
  t2('remote-work', 'Advantages/disadvantages', `Many companies now allow employees to work from home. ${ADV}`, ['Advantages: no commute, flexibility, wider hiring.', 'Disadvantages: isolation, blurred boundaries, junior learning.']),
  t2('job-satisfaction', 'Discussion', `Some people think a high salary is the most important factor in a job, while others think job satisfaction matters more. ${DISCUSS}`, ['Salary: security, family.', 'Satisfaction: motivation, health, long-term career.', 'Opinion.']),
  t2('ai-jobs', 'Opinion', `Artificial intelligence will create more jobs than it destroys. ${OPINION}`, ['Create: new industries, productivity.', 'Destroy: routine jobs, transition problems.', 'Your view + role of retraining.']),
  t2('retirement', 'Opinion', `The retirement age should be raised because people are living longer. ${OPINION}`, ['For: pension costs, healthy older workers.', 'Against: physical jobs, youth unemployment.', 'Flexible retirement.']),
  t2('working-mothers', 'Opinion', `Governments should provide free childcare so that both parents can work. ${OPINION}`, ['For: women’s careers, economy.', 'Against: cost, family time.', 'Conclusion.']),
  t2('social-media', 'Advantages/disadvantages', `Social media has become the main way young people communicate. ${ADV}`, ['Advantages: staying in touch, communities, information.', 'Disadvantages: anxiety, cyberbullying, less face-to-face contact.']),
  t2('phones-school', 'Opinion', `Mobile phones should be banned in schools. ${OPINION}`, ['For: concentration, bullying, social interaction.', 'Against: safety, learning tools.', 'Your position.']),
  t2('privacy', 'Discussion', `Some people think that collecting personal data online is acceptable if it improves services, while others believe privacy must be protected at all costs. ${DISCUSS}`, ['Data: personalised services, security.', 'Privacy: misuse, manipulation.', 'Opinion.']),
  t2('screen-children', 'Problem–solution', `Children are spending more and more time in front of screens. ${PS}`, ['Causes: cheap devices, busy parents, games design.', 'Solutions: limits, outdoor activities, school education.']),
  t2('news-online', 'Opinion', `Newspapers will disappear because people get news online. ${OPINION}`, ['Agree: speed, cost, habits.', 'Disagree: trust, older readers, paid quality journalism.', 'Conclusion.']),
  t2('advertising', 'Opinion', `Advertising encourages people to buy things they do not need. ${OPINION}`, ['Agree: psychology, debt, materialism.', 'Disagree: information, competition, consumer choice.', 'Your view.']),
  t2('crime-punishment', 'Discussion', `Some believe that the best way to reduce crime is longer prison sentences, while others think there are better ways. ${DISCUSS}`, ['Longer sentences: deterrence, safety.', 'Alternatives: education, rehabilitation, jobs.', 'Opinion.']),
  t2('youth-crime', 'Problem–solution', `In some areas, crime committed by teenagers is increasing. ${PS}`, ['Causes: boredom, family problems, peer pressure.', 'Solutions: youth centres, school support, parents, sport.']),
  t2('history-buildings', 'Opinion', `Old buildings should be protected even if this slows down the development of cities. ${OPINION}`, ['For: identity, tourism, history.', 'Against: housing needs, safety, cost.', 'Balance.']),
  t2('art-funding', 'Discussion', `Some people think governments should fund museums and theatres, while others think this money should be spent on healthcare and education. ${DISCUSS}`, ['Arts: culture, tourism, wellbeing.', 'Health/education: basic needs.', 'Opinion.']),
  t2('space', 'Opinion', `Space exploration is a waste of money that should be spent on problems on Earth. ${OPINION}`, ['Agree: poverty, climate.', 'Disagree: technology spin-offs, satellites, inspiration.', 'Your view.']),
  t2('volunteering', 'Opinion', `All young people should do unpaid community work for a period of time. ${OPINION}`, ['For: responsibility, skills, society.', 'Against: compulsion, studies, exploitation.', 'Conclusion.']),
  t2('shopping-online', 'Advantages/disadvantages', `Online shopping is replacing traditional shops. ${ADV}`, ['Advantages: convenience, price, choice.', 'Disadvantages: closing shops, jobs, packaging waste.']),
  t2('family-meals', 'Problem–solution', `In many families, members rarely eat meals together any more. ${PS}`, ['Causes: work hours, phones, different schedules.', 'Solutions: fixed family time, phone-free rules, cooking together.']),
  t2('languages-disappearing', 'Opinion', `It is not important to protect minority languages because a few global languages are enough for communication. ${OPINION}`, ['Disagree: culture, identity, knowledge.', 'Agree partly: practicality, economics.', 'Your view.']),
];

// Band 7 model answers (original) for a selection of bank tasks; shown after the learner's own attempt.
const models = {
  'bw1-cinema': `The table illustrates how many cinema tickets were sold in a country, measured in millions, at five-year intervals from 2000 to 2020.

Overall, ticket sales grew steadily during the first decade and reached a peak in 2010, after which they declined slightly before collapsing in the final year of the period.

In 2000, 42 million tickets were sold. This figure rose to 48 million five years later and climbed further to 55 million in 2010, which was the highest point shown in the table. In other words, sales increased by roughly 30% over these ten years.

The following years saw a reversal of this trend. By 2015 the number had dipped to 51 million, a modest fall of four million. However, the most dramatic change took place between 2015 and 2020, when sales plummeted to only 19 million. This final figure was less than half the level recorded at the start of the period and well over 60% lower than in 2015, which suggests that some exceptional factor affected cinema attendance in that year.`,

  'bw1-energy': `The table compares the proportion of electricity generated from four different sources in a country in 2005 and 2025.

Overall, the country became noticeably less dependent on fossil fuels over the twenty years, while renewable sources expanded considerably. Nevertheless, gas remained the single largest source in both years.

In 2005, gas was by far the dominant source, accounting for 60% of all electricity. Coal provided a quarter, whereas hydroelectric power contributed 12% and solar and wind energy only 3%. Together, fossil fuels therefore produced 85% of the total.

By 2025, the picture had changed significantly. The share of gas fell by fifteen percentage points to 45%, and coal more than halved, dropping to just 10%. In contrast, hydro rose to 20%, and the most striking growth was in solar and wind power, whose share increased more than eightfold to 25%. As a result, solar and wind overtook coal and even hydro to become the second most important source, and renewables as a whole supplied 45% of the country's electricity, the same proportion as gas.`,

  'bw1-spending': `The table shows how the monthly income of an average family was divided between five categories of spending in 2010 and 2020.

Overall, food remained the largest expense in both years, although its share decreased. Meanwhile, families spent a larger proportion of their income on housing, transport and especially education.

In 2010, food took 40% of a typical family's budget, followed by housing at 25%. "Other" expenses made up 17%, while transport and education accounted for the smallest shares, at 10% and 8% respectively.

Ten years later, spending on food had fallen to 32%, a drop of eight percentage points. Housing, on the other hand, rose to 30%, so the gap between these two categories narrowed to only two points. The share spent on education almost doubled, increasing from 8% to 14%, which was the largest relative change in the table. Transport grew only slightly, from 10% to 12%. Finally, the proportion spent on other items declined by five points to 12%, which suggests that families had less money left for non-essential purchases.`,

  'bw1-students-abroad': `The table provides information about the number of students from one country who were studying in four foreign destinations in 2015 and 2025.

Overall, Russia was the most popular destination in both years, but it was the only one to lose students. All three other countries attracted considerably more students in 2025, with South Korea showing the most remarkable growth.

In 2015, Russia hosted 12,000 students, which was more than the other three destinations combined. Turkey was a distant second with 3,200 students, followed by the UK with 2,100 and South Korea with only 1,500.

By 2025, the number of students in Russia had fallen to 9,500, a decrease of 2,500. In contrast, South Korea saw a more than fourfold increase to 6,800 students, so it moved from last place to second. Turkey also became more popular, rising to 5,100, while the number of students in the UK almost doubled to 3,900. As a result, although Russia kept its leading position, the gap between it and the other destinations became much smaller than it had been ten years earlier.`,

  'bw1-tourists': `The table shows how many international visitors, in thousands, travelled to four cities in 2019 and 2024.

Overall, every city received more foreign tourists in 2024 than in 2019. Tashkent welcomed the largest number of visitors in both years, while Khiva experienced the fastest rate of growth.

In 2019, Tashkent attracted 1.9 million international visitors, more than twice as many as Samarkand, which received 850,000. Bukhara was third with 520,000, and Khiva had the fewest visitors, at 300,000.

Five years later, the number of tourists visiting Tashkent had risen to 2.3 million, an increase of 400,000. However, the historical cities grew much faster in relative terms. Samarkand gained 550,000 visitors to reach 1.4 million, and Bukhara rose by 380,000 to 900,000. Most impressively, the figure for Khiva roughly doubled, climbing to 610,000. Consequently, although Tashkent remained the most visited city, Samarkand narrowed the gap considerably, and the three historical cities together received more visitors than the capital in 2024.`,

  'bw1-employment': `The table illustrates the percentage of the workforce employed in agriculture, industry and services in a country in 1990, 2005 and 2020.

Overall, there was a clear shift away from agriculture towards the service sector over the thirty-year period, whereas the proportion of industrial workers remained relatively stable.

In 1990, agriculture was the largest employer, accounting for 45% of all workers. The service sector employed just over a third of the workforce (35%), and industry only one fifth.

By 2005, the situation had changed considerably. The share of agricultural workers had dropped to 30%, while services had grown to 46%, overtaking agriculture to become the leading sector. Industry rose slightly to 24%.

This trend continued until 2020. The percentage of people working in agriculture fell further to 22%, which means that it roughly halved over the whole period. In contrast, services expanded to 55%, so more than half of all workers were employed in this sector by the end of the period. Industry, meanwhile, hardly changed, standing at 23%, which was almost the same as the figure for agriculture.`,

  'bw2-online-learning': `In recent years, more and more courses have moved online, and some people predict that traditional classrooms will soon disappear. While I accept that online learning has clear advantages, I disagree that it will completely replace face-to-face teaching.

On the one hand, online education offers flexibility and access that schools cannot match. Students can watch lectures at any time, repeat difficult parts and study while working. For young people in rural areas, an internet connection can open the door to courses that are simply not available locally. In addition, online programmes are often cheaper, because there are no costs for buildings or travel. During the pandemic, millions of learners proved that it is possible to continue studying from home.

On the other hand, a classroom provides much more than information. Children learn to cooperate, to discuss ideas politely and to make friends, and these social skills are difficult to develop through a screen. Furthermore, many students lack the self-discipline to study alone; without a teacher who notices when they are confused or distracted, they easily fall behind. Practical subjects such as chemistry, medicine or sport also require physical equipment and direct supervision, which cannot be fully replaced by video lessons.

In my view, the most likely future is blended learning, in which online materials support, rather than replace, the work of teachers. Universities may move some lectures online, but schools will remain essential places where young people learn both knowledge and how to live with others.

In conclusion, although online learning will continue to grow, I believe that traditional classroom teaching will still play a central role in education.`,

  'bw2-uniform': `Whether students should wear a uniform or be free to choose their own clothes is a question that divides parents and teachers. Both positions have reasonable arguments, but I believe that a simple and affordable uniform is the better option for most schools.

Supporters of school uniforms argue that they create a sense of equality. When everyone wears the same clothes, children from poorer families are not embarrassed because they cannot afford fashionable brands, and bullying based on appearance becomes less common. Uniforms are also said to encourage discipline and a sense of belonging to the school community. Moreover, they save time and stress for parents, who do not have to buy many different outfits or argue with their children every morning.

On the other hand, opponents believe that students should be allowed to express their personality through what they wear. Teenagers in particular are developing their identity, and choosing clothes is one harmless way of doing this. Some also point out that uniforms can be expensive if they must be bought from a single supplier, and that they are often uncomfortable, especially in hot weather or during physical activities.

In my opinion, the advantages of uniforms outweigh these disadvantages, provided that schools design them sensibly. A uniform should be cheap, comfortable and suitable for the local climate, and parents should be able to buy it in ordinary shops. Schools could also allow some freedom, for example in hairstyles, accessories or on special "free dress" days.

In conclusion, although free choice of clothing supports self-expression, I believe that a practical uniform helps to create a fairer and more focused learning environment.`,

  'bw2-gap-year': `It is becoming increasingly common for school leavers to take a year off before starting university, during which they travel, work or volunteer. In my opinion, the benefits of a well-planned gap year are greater than its drawbacks.

The main advantage of a gap year is personal development. Young people who travel or live away from home have to manage money, solve problems and communicate with strangers, often in a foreign language. These experiences build confidence and independence, which are valuable both at university and in later careers. Furthermore, a year of work can help students save money for their studies and give them a clearer idea of what they want to study. Many students choose their university course without really knowing what it involves; spending time in a real workplace may prevent them from making an expensive mistake.

However, there are also some disadvantages. A gap year can be costly, particularly if it involves international travel, so it is not an option for every family. In addition, some students lose their study habits and find it difficult to return to academic work after a long break. There is also a risk that the year is simply wasted if it is not planned carefully, for example if a young person spends most of it at home playing computer games.

Nevertheless, these problems can be reduced with good planning. Students can work locally rather than travel abroad, and they can keep studying a language or an online course to stay in the habit of learning.

In conclusion, although a gap year has certain risks, I believe that, when it is used purposefully, its advantages clearly outweigh its disadvantages.`,

  'bw2-family-meals': `In many households today, family members eat at different times and often in different rooms. This essay will examine the main reasons for this change and suggest some practical ways to bring families back to the table.

The first cause is modern working life. Many parents work long hours or have long commutes, and some have more than one job, so they arrive home after the children have already eaten. Secondly, children themselves have busy schedules, with extra lessons, sports clubs and homework that take up their evenings. A third and increasingly important reason is technology. Smartphones, tablets and televisions mean that even when family members are at home together, they prefer to eat in front of a screen rather than talk to one another.

Several solutions could help to address this problem. Firstly, families could agree on a fixed time for at least one shared meal each day, or a few times a week if daily meals are impossible. Even breakfast or a weekend lunch can serve this purpose. Secondly, a simple "no phones at the table" rule would make meals a time for real conversation. Parents need to set an example by putting their own devices away. Finally, involving children in shopping and cooking can make meals more enjoyable and help young people to value food and family time. On a wider level, employers could support flexible working hours so that parents can be at home in the evening.

In conclusion, long working hours, busy schedules and digital devices have reduced the number of family meals. However, with clear family rules and a little planning, shared meals can once again become a normal part of daily life.`,

  'bw2-obesity': `Childhood obesity has become a serious health concern in many parts of the world, including countries where it was once rare. This essay will discuss the main reasons for this trend and propose measures that families, schools and governments could take.

The most obvious cause is diet. Fast food and sugary drinks are cheap, widely advertised and easy to buy, and many children consume them every day instead of home-cooked meals. Busy parents may also rely on processed food because it saves time. The second major cause is a lack of physical activity. In the past, children walked to school and played outside for hours, whereas today many are driven everywhere and spend their free time sitting in front of screens. In large cities, the lack of safe parks and playgrounds makes this problem even worse.

To tackle this issue, action is needed at several levels. Firstly, parents should be better informed about healthy eating, for example through campaigns that explain how much sugar is hidden in popular snacks and drinks. Secondly, schools play a key role: they can serve balanced lunches, remove vending machines selling sweets, and make sure that every child has daily physical education. Thirdly, governments can use laws and taxes. Restricting advertisements for unhealthy food during children's programmes and taxing sugary drinks would make healthier choices more attractive. Investing in parks, sports facilities and safe cycling routes would also encourage children to be more active.

In conclusion, childhood obesity is mainly the result of unhealthy diets and inactive lifestyles. Only a combined effort by families, schools and governments can reverse this worrying trend.`,

  'bw2-languages-disappearing': `Some people argue that minority languages need not be protected, since a handful of global languages such as English, Chinese and Spanish are sufficient for communication. Although I understand the practical reasoning behind this view, I strongly disagree with it.

It is true that global languages bring practical benefits. They allow people from different countries to do business, study abroad and share scientific knowledge. Supporting many small languages also costs money, for instance to print textbooks, train teachers and translate official documents. From a purely economic point of view, it might seem more efficient for everyone to use one of a few major languages.

However, a language is far more than a tool for exchanging information. Each language carries the history, traditions, songs and humour of the people who speak it, and when it disappears, much of this culture is lost forever. Minority languages also contain unique knowledge, for example about local plants, medicine and the natural environment, which is often not recorded anywhere else. Moreover, language is closely connected to identity. Children who are not allowed to use the language of their parents and grandparents may feel cut off from their families and communities.

Importantly, protecting minority languages does not mean rejecting global ones. Many people, including millions in Central Asia, grow up speaking two or three languages without difficulty. Governments can therefore teach a global language at school while also supporting local languages through education, media and cultural events.

In conclusion, while global languages are clearly useful, they cannot replace the cultural value of minority languages. I believe that societies should make the effort to preserve them.`,

  'bw2-homework': `It has been suggested that homework should be abolished in primary schools so that young children have more time to play and rest. Although I agree that the amount of homework should be strictly limited, I do not believe it should be banned completely.

Those who support a ban make several valid points. Young children need time for unstructured play, which develops creativity, social skills and physical health. Moreover, long homework tasks often create stress and conflict at home, especially when parents are tired after work or are unable to help with the subject. In some cases, homework even increases inequality, because children whose parents have more time and education receive more support than others.

However, a small amount of homework has clear benefits. Short daily tasks, such as reading for fifteen minutes or practising multiplication tables, help children to remember what they have learned at school. They also develop habits of independence and responsibility that will be essential in secondary school, where the workload increases significantly. In addition, homework can show parents what their children are studying, which encourages communication between families and teachers.

In my view, the solution is not to ban homework but to change its nature. Primary school homework should be short, should never require help from adults, and should focus on activities such as reading, simple practice or creative projects rather than long written exercises. Schools could also set a clear maximum, for example twenty minutes a day.

In conclusion, while excessive homework can harm young children, a limited and well-designed amount supports learning and builds good habits. Therefore, I disagree that it should be banned altogether.`,

  'bw2-exams': `How students should be assessed is a long-standing debate in education. Some argue that traditional examinations are the fairest and most effective method, while others believe that continuous assessment through projects and coursework gives a more accurate picture of ability. This essay will discuss both views before giving my own opinion.

Supporters of examinations emphasise fairness and reliability. In an exam, every candidate answers the same questions under the same conditions and within the same time limit, so it is difficult to cheat or to receive outside help. Exams also test whether students can remember and apply knowledge under pressure, a skill that is useful in many jobs. Furthermore, they are relatively cheap and quick to administer for large numbers of students.

On the other hand, critics argue that a single exam can be an unreliable measure. A talented student may perform badly because of illness, anxiety or simply a bad day. In addition, exams tend to reward memorisation rather than deeper skills such as research, teamwork and creativity. Continuous assessment allows students to demonstrate these abilities over a longer period, and it encourages steady work throughout the year instead of last-minute revision.

In my opinion, the most effective system combines both approaches. Exams remain valuable for testing core knowledge fairly, but projects and coursework should form a significant part of the final grade, perhaps around forty per cent. To reduce the risk of cheating, part of the coursework could be completed in class under supervision.

In conclusion, both methods have strengths and weaknesses. A balanced combination would give a fairer and more complete assessment of what students can actually do.`,

  'bw2-teachers-pay': `Some people believe that teachers deserve the same salary as doctors, since both professions are vital to society. While I agree that teachers are often underpaid and that their salaries should rise significantly, I do not think that complete equality with doctors is necessary or realistic.

There are strong arguments for paying teachers much more. Teachers shape the knowledge, values and skills of every future citizen, including future doctors. A country's economic development depends heavily on the quality of its schools. Moreover, in many countries, low salaries make it difficult to attract talented graduates into teaching, and experienced teachers leave the profession for better-paid jobs. As a result, classes become larger and the quality of education falls, which harms society in the long term.

However, there are also reasons why doctors' salaries are usually higher. Medical training typically lasts much longer than teacher training, often more than ten years including specialisation, and doctors carry direct responsibility for life-and-death decisions. Many work long night shifts and face high levels of legal risk. In addition, paying every teacher as much as a doctor would be extremely expensive, since there are many more teachers than doctors in most countries.

In my view, the aim should be to make teaching an attractive and respected career rather than to match doctors' pay exactly. Governments could raise basic salaries, reward teachers who take on extra training or responsibilities, and reduce administrative workload so that teachers can focus on teaching.

In conclusion, teachers' work is undoubtedly as important as that of doctors, and their pay should reflect this more fairly. Nevertheless, equal salaries are not the only way to show that teaching is valued.`,

  'bw2-foreign-language-primary': `There is a growing view that children should start learning a foreign language at primary school rather than waiting until secondary school. I strongly agree with this idea, although I believe it must be introduced with well-trained teachers and realistic goals.

The first reason is that young children learn pronunciation more easily. Research suggests that learners who start early are more likely to develop a natural accent, because they can still hear and imitate new sounds without difficulty. Young children are also usually less afraid of making mistakes, so they are more willing to speak, sing and play games in a new language.

Secondly, starting early simply gives learners more time. Language learning is a slow process, and an extra four or five years of regular practice can make a significant difference by the end of school. In countries such as Uzbekistan, where many university courses and jobs now require English, this early start can open important opportunities later in life.

Finally, learning another language at a young age has broader benefits. It can increase children's curiosity about other cultures and may improve general thinking skills, such as concentration and the ability to switch between tasks.

Nevertheless, early language teaching only works if it is done properly. Primary school lessons should focus on listening, speaking and enjoyment rather than grammar rules and tests. Most importantly, schools need teachers who speak the language well, because poor models of pronunciation can do more harm than good.

In conclusion, I believe that children should begin learning a foreign language at primary school, provided that lessons are communicative and that teachers are properly trained.`,

  'bw2-sugar-tax': `Many governments are considering a tax on sugary drinks as a way to reduce obesity and related illnesses. In my opinion, such a tax is a sensible measure, but it will only be effective if it forms part of a wider public health strategy.

The main argument in favour of the tax is that it changes behaviour through price. Sugary drinks contain large amounts of sugar but almost no nutritional value, and they are a major cause of tooth decay and weight gain, particularly among children. When prices rise, consumers tend to buy less, and in several countries that have introduced such taxes, sales of the most sugary drinks have fallen noticeably. Moreover, the tax often encourages manufacturers to reduce the sugar content of their products in order to avoid it.

A second advantage is that the money raised can be used for health. For example, the revenue could fund sports facilities in schools or campaigns that teach families about healthy diets.

However, critics argue that the tax is unfair to people on low incomes, who spend a larger share of their money on food and drink. Others believe that governments should not interfere in personal choices. These concerns are understandable, but the health benefits are likely to be greatest for poorer families, who also suffer most from diet-related diseases.

Nevertheless, a tax alone is not enough. It should be combined with clear food labels, restrictions on advertising aimed at children and easy access to clean, free drinking water in schools and public places.

In conclusion, I agree that governments should tax sugary drinks, as long as the measure is supported by education and the revenue is invested in public health.`,

  'bw2-sport-funding': `Opinions differ on how governments should spend money on sport. Some believe that funding professional sport brings national prestige and inspires the public, while others argue that the money would be better spent on facilities for ordinary people. Both views have merit, but I believe that priority should be given to community sport.

On the one hand, investment in professional sport can bring significant benefits. Success in international competitions, such as the Olympic Games or the World Cup, creates national pride and puts a country on the world map. Famous athletes can also become role models who inspire young people to take up sport. In addition, major sporting events attract tourists and can lead to improvements in infrastructure, such as new roads and public transport.

On the other hand, the benefits of professional sport are often concentrated among a small number of elite athletes. Building a single international stadium can cost as much as hundreds of local sports grounds, and such stadiums are sometimes rarely used after a major event. By contrast, swimming pools, football pitches and cycle lanes in local communities allow millions of ordinary people to exercise regularly. This improves public health, reduces the cost of treating diseases such as diabetes, and gives young people positive ways to spend their free time.

In my opinion, governments should spend most of their sports budget on facilities that are open to everyone, especially in schools and poorer neighbourhoods. A smaller amount could still support talented young athletes, since many future champions begin in local clubs.

In conclusion, although professional sport brings prestige, the health and social benefits of community sport are far greater, so it should receive the larger share of public money.`,
  'bw2-ageing': `In many countries, people are living longer and birth rates are falling, so the proportion of older people in the population is rising. Although this trend brings some benefits, I believe that its disadvantages are more significant unless societies prepare for it carefully.

There are certainly positive aspects. Longer life expectancy is a sign of better healthcare, nutrition and living conditions, which is a remarkable achievement. Older people also make valuable contributions to society. Many continue to work, volunteer or care for their grandchildren, which allows parents to work. In addition, older citizens have experience and knowledge that can be passed on to younger generations, both in families and in the workplace.

However, an ageing population creates serious economic challenges. As the number of retired people increases, a smaller working population must pay the taxes that fund pensions and healthcare. Medical costs rise because older people are more likely to suffer from chronic illnesses that require long-term treatment. Furthermore, some industries may face a shortage of workers, which can slow economic growth. In countries where families traditionally care for elderly relatives, younger people may also find it difficult to balance work and caring responsibilities.

These problems can be reduced through sensible policies. Governments could gradually raise the retirement age, encourage flexible work for older employees and invest in preventive healthcare so that people stay healthy for longer. Immigration can also help to fill gaps in the labour market.

In conclusion, a longer life is clearly something to celebrate, but the economic pressure of an ageing population is considerable. Therefore, in my opinion, the disadvantages currently outweigh the advantages, unless governments act early to adapt.`,

  'bw2-traffic': `Traffic congestion has become one of the most serious problems in large cities around the world, wasting time, increasing pollution and causing stress. This essay will examine the main causes of the problem and suggest some practical solutions.

The most obvious cause is the rapid increase in the number of private cars. As incomes rise, more families can afford a car, and many people see owning one as a sign of status. At the same time, public transport in many cities is overcrowded, unreliable or does not reach the suburbs, so people feel they have no alternative to driving. A further cause is poor urban planning. When homes, offices and shops are located far apart, people have to travel long distances every day, and most of these journeys take place at the same peak times.

There are several ways to tackle this problem. Firstly, governments should invest in fast, affordable and reliable public transport, such as metro lines, bus lanes and trams, so that leaving the car at home becomes the easier option. Secondly, cities could introduce congestion charges, which require drivers to pay to enter the city centre during busy hours; the money raised can be used to improve public transport. Thirdly, employers could reduce peak-hour traffic by allowing flexible working hours or working from home on some days. Finally, in the long term, planners should design neighbourhoods where schools, shops and workplaces are within walking or cycling distance.

In conclusion, traffic congestion is mainly caused by rising car ownership, weak public transport and poor planning. A combination of better transport, pricing measures and smarter city design offers the best chance of solving it.`,

  'bw2-cars-centre': `Some people argue that private cars should be completely banned from city centres in order to reduce pollution and congestion. While I agree that the number of cars in central areas should be greatly reduced, I believe a total ban would be impractical and unfair.

There are strong reasons to limit cars in city centres. Traffic is a major source of air pollution, which damages people's health, and it also produces noise and makes streets dangerous for pedestrians and cyclists. Several European cities that have restricted cars in their historic centres have seen cleaner air, quieter streets and even an increase in business for local shops, because people walking or cycling tend to stop and spend more time in the area. Moreover, space currently used for roads and parking could be turned into parks, cycle lanes and cafés.

However, a complete ban would create serious difficulties. Elderly people and those with disabilities often depend on cars, and emergency services, delivery vehicles and taxis need access. In cities where public transport is still limited, a sudden ban would make it very hard for many residents to reach their jobs, schools and hospitals.

In my opinion, a gradual and flexible approach is better. Cities could create car-free zones in the busiest streets, introduce charges for driving into the centre at peak times and reduce the number of parking spaces. At the same time, they must improve public transport and make exceptions for residents with special needs.

In conclusion, reducing car traffic in city centres has clear benefits, but these can be achieved without a complete ban. Therefore, I only partly agree with the statement.`,

  'bw2-tourism': `International tourism has expanded dramatically in recent decades, as air travel has become cheaper and more people have the money and time to travel abroad. In my view, the advantages of this growth outweigh the disadvantages, provided that tourism is managed responsibly.

The most important benefit is economic. Tourism creates millions of jobs, not only in hotels and restaurants but also in transport, handicrafts and agriculture. For countries such as Uzbekistan, with remarkable historic cities, it is an important source of foreign currency and can encourage investment in roads, airports and the restoration of monuments. In addition, tourism promotes understanding between cultures. When people travel, they meet others with different traditions and often return home with a more open attitude.

Nevertheless, rapid growth can cause serious problems. Popular destinations can become overcrowded, which damages historic sites and makes life difficult for local residents. In some cities, homes are converted into short-term rentals for visitors, so rents rise and local families are forced to move away. Air travel is also a significant source of carbon emissions, which contribute to climate change.

However, these disadvantages can be reduced through careful planning. Governments can limit visitor numbers at fragile sites, introduce a small tourist tax to fund local services, and encourage tourists to visit less well-known regions and different seasons. Promoting rail travel and ecotourism can also reduce the environmental impact.

In conclusion, although international tourism has some negative effects on the environment and local communities, its economic and cultural benefits are considerable. With sensible management, the advantages clearly outweigh the disadvantages.`,

  'bw2-plastic-bags': `Some people believe that all single-use plastic, such as bags, bottles and straws, should be completely banned. Although I strongly support reducing single-use plastic, I think a total and immediate ban would be difficult to achieve, so a gradual approach is more realistic.

There are powerful arguments for strict action. Single-use plastic is used for only a few minutes but can remain in the environment for hundreds of years. Much of it ends up in rivers and oceans, where it harms fish, birds and other wildlife, and tiny particles called microplastics have now been found in drinking water and even in human blood. In addition, producing plastic uses oil, which contributes to climate change. Countries that have banned plastic bags have often seen a rapid fall in litter.

However, a complete ban on all single-use plastic would create practical problems. In hospitals, for example, disposable plastic items such as syringes and gloves are essential for hygiene and safety. Some people with disabilities rely on plastic straws. Furthermore, if alternatives are not available or affordable, a ban could increase prices for consumers and harm small businesses.

In my view, governments should ban the most unnecessary items, such as plastic bags, straws and cutlery, where good alternatives already exist. For other products, they could introduce taxes, require companies to use recyclable materials and invest in better recycling systems. Encouraging people to carry reusable bags and bottles is also important.

In conclusion, single-use plastic causes serious environmental damage and must be greatly reduced. However, rather than an immediate total ban, a combination of targeted bans, taxes and recycling is a more effective solution.`,

  'bw2-zoos': `Zoos have long been popular places to visit, but their role is now widely debated. Some argue that keeping animals in captivity is cruel and that zoos should be closed, while others believe that they play an essential role in protecting endangered species. This essay will consider both views before giving my opinion.

Critics of zoos argue that even the best enclosures cannot reproduce an animal's natural environment. Large animals such as elephants, polar bears and big cats naturally travel long distances, and in captivity some develop stress-related behaviour, such as walking in circles. Opponents also point out that many zoos, especially poorly funded ones, exist mainly for entertainment and profit rather than for conservation.

On the other hand, supporters argue that modern zoos make an important contribution to protecting wildlife. Breeding programmes in zoos have saved several species from extinction and later returned them to the wild. Zoos also fund research and conservation projects in the animals' natural habitats. Moreover, they educate millions of visitors, particularly children, who might otherwise never see these animals and may become more interested in protecting nature.

In my opinion, zoos should not be closed, but they must change. Only zoos that meet strict standards of animal welfare and that take part in genuine conservation programmes should be allowed to operate. Species that clearly suffer in captivity, such as elephants, should gradually be moved to large sanctuaries.

In conclusion, although some zoos are cruel and outdated, well-run modern zoos help to protect endangered species and educate the public. Therefore, I believe they should be reformed rather than abolished.`,

  'bw1-internet-age': `The table compares the average number of hours that four age groups spent online each day in 2025, on weekdays and at weekends.

Overall, time spent on the internet clearly declined with age, and every group was online for longer at weekends than on weekdays. The youngest users spent by far the most time online.

People aged 15 to 24 were online for 5.5 hours a day during the week, and this figure rose to 7.0 hours at weekends, the highest value in the table. The 25–44 group came second, with 4.0 hours on weekdays and slightly more, 4.5 hours, at weekends.

Older people used the internet much less. Those aged 45 to 64 spent 2.5 hours online on weekdays and 3.0 hours at weekends. The lowest figures belonged to people over 65, who were online for only 1.0 hour on a typical weekday and 1.5 hours at the weekend. In other words, the oldest group spent roughly a fifth of the time that the youngest group spent online.

It is also worth noting that the weekend increase was largest for the youngest users, at 1.5 hours, while for the other groups it was only half an hour.`,

  'bw1-water-use': `The table shows how many litres of water per person were used each day for household, agricultural and industrial purposes in five countries, labelled A to E.

Overall, agriculture was the largest user of water in most of the countries, especially in B and D. However, countries C and E used more water for industry than for farming.

Country B used the most water for agriculture, at 1,400 litres per person, followed by country A with 900 litres and country D with 700. In contrast, agricultural use was much lower in country C (400 litres) and country E (300 litres).

Industrial use varied widely. It was highest in country C, at 600 litres, and in country E, at 500, whereas country A used 300 litres, country B 120 and country D only 50.

As for household consumption, the figures were smaller everywhere. Country C used the most, at 220 litres per person, while country E used 180 and country A 150. Households in country B used 90 litres, and those in country D used just 60, which means that country D had the lowest figure in every category except agriculture.`,

  'bw1-commute': `The table compares the average time, in minutes, that people in four cities spent commuting to work in 2010 and 2025.

Overall, commuting times increased in three of the four cities over the fifteen-year period, and the most dramatic growth was in City D. City C was the only city where journeys became shorter.

In 2010, City C had the longest average commute, at 45 minutes, followed by City A with 35 minutes and City B with 28. City D had the shortest journeys, at just 22 minutes.

By 2025, the situation had changed considerably. City A's commuting time rose by 17 minutes to 52 minutes, making it the city with the longest journeys. The figure for City D nearly doubled, climbing to 41 minutes, which was the largest increase in the table. In City B, by contrast, the change was minimal: the average commute grew by only two minutes, from 28 to 30.

City C followed the opposite trend. Its average commuting time fell by seven minutes to 38, so it moved from having the longest journeys in 2010 to only the third longest in 2025.`,

  'bw1-smartphones': `The table shows what percentage of people in four age groups owned a smartphone in 2012 and in 2024.

Overall, smartphone ownership rose sharply in every age group over the twelve years. Younger people were more likely to own a smartphone in both years, but the gap between the age groups narrowed considerably.

In 2012, just over half of people aged 16 to 24 (52%) had a smartphone, and the figure for the 25–34 group was slightly lower, at 44%. Ownership was much less common among older people: only a quarter of those aged 35 to 54 owned one, and the figure for people over 55 was a mere 6%.

By 2024, smartphones had become almost universal among younger adults. Ownership reached 98% in the youngest group and 96% among 25 to 34-year-olds. The 35–54 group saw a dramatic rise, from 25% to 89%. The most striking change, however, was among people aged 55 and over, where ownership increased more than tenfold, from 6% to 68%.

As a result, while the difference between the youngest and the oldest groups was 46 percentage points in 2012, it had fallen to 30 points by 2024.`,

  'bw1-food-prices': `The table compares the average price per kilogram, in sum, of bread, rice, meat and apples in 2020 and 2025.

Overall, all four items became more expensive over the five-year period. Meat was by far the most expensive item in both years, while the price of apples rose the least.

In 2020, a kilogram of meat cost 65,000 sum, which was more than five times the price of rice (12,000 sum). Apples cost 8,000 sum per kilogram, and bread was the cheapest item, at 6,000 sum.

By 2025, the price of meat had increased by 30,000 sum to 95,000, the largest rise in absolute terms. Rice also became considerably more expensive, rising to 18,500 sum. The price of bread went up from 6,000 to 9,000 sum, an increase of 50%, which was the biggest rise in percentage terms, although rice rose by a similar proportion.

Apples, in contrast, saw only a modest change. Their price grew by 1,500 sum to 9,500 sum per kilogram. As a result, apples were only slightly more expensive than bread in 2025, whereas in 2020 the difference had been 2,000 sum.`,

  'bw1-libraries': `The table shows the number of visits to libraries and the number of books borrowed, both in millions, in a country at five-year intervals between 2005 and 2025.

Overall, both figures fell over most of the period and reached their lowest point in 2020, before recovering partly in 2025. Loans fell more sharply than visits, and by the end of the period visits were slightly higher than loans.

In 2005, there were 30 million library visits and 45 million book loans. Over the next ten years both figures declined gradually. Visits dropped to 28 million in 2010 and 25 million in 2015, while loans fell more quickly, to 38 million and then 30 million.

The most dramatic change took place between 2015 and 2020. Visits almost halved, falling to 14 million, and loans dropped to just 18 million, less than half of the 2005 figure.

In the final five years, however, libraries became more popular again. The number of visits rose by eight million to 22 million, and loans recovered to 21 million. For the first time in the period, therefore, visits exceeded loans, although by only one million.`,
};
for (const w of writingBank) if (models[w.id]) w.model = models[w.id];
