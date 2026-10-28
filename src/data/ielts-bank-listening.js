// IELTS Listening practice bank (original): short Part 1–4 style scripts, 5 questions each.
// Same schema as listening entries in `readings` (script hidden until checked; "Name: " labels are not read aloud).

const M = (id, prompt, options, answer) => ({ id, type: 'single', prompt, options, answer });
const F = (id, prompt, answer) => ({ id, type: 'fill', prompt, answer });
const lp = (n, level, part, title, uzTitle, text, qs) => ({ id: `il-${n}`, level, listening: true, ielts: true, part, title: `Part ${part}: ${title}`, uzTitle, text, questions: qs.map((q, i) => q(`il${n}-${i + 1}`)) });

export const listeningBank = [
  lp(1, 'B1', 1, 'Joining a language course', 'Til kursiga yozilish',
    `Receptionist: Good morning, City Language Centre.
Caller: Hello, I'd like to join an evening Spanish course.
Receptionist: We have a beginners' class on Tuesdays and Thursdays from six to eight.
Caller: That's perfect. How long is the course?
Receptionist: Ten weeks, and it costs one hundred and twenty dollars, including the book.
Caller: Can I pay in two parts?
Receptionist: Yes, half now and half after five weeks. Can I have your name?
Caller: Daniel Moreno. M-O-R-E-N-O.
Receptionist: Thank you. The first class is on the fourth of March, in room twelve.`,
    [(id) => F(id, 'Language: ___', 'Spanish'), (id) => M(id, 'Class days:', ['Mon & Wed', 'Tue & Thu', 'Sat only', 'Fri'], 1), (id) => F(id, 'Course length: ___ weeks', ['10', 'ten']), (id) => F(id, 'Surname: ___', 'Moreno'), (id) => F(id, 'Room number: ___', ['12', 'twelve'])]),
  lp(2, 'B1', 1, 'Reporting lost property', 'Yo‘qolgan buyum haqida xabar',
    `Officer: Lost property office. How can I help?
Woman: I left my bag on the number thirty-four bus this morning.
Officer: Can you describe it?
Woman: It's a small brown leather backpack. Inside there's a laptop, a blue umbrella and my keys.
Officer: Was there any identification?
Woman: Yes, my library card. My name is Gulnora Yusupova.
Officer: Let me check. Yes, a brown backpack was handed in at the bus station at about eleven. You can collect it today until seven p.m. Please bring your passport.`,
    [(id) => F(id, 'Bus number: ___', ['34', 'thirty-four']), (id) => M(id, 'The bag is made of …', ['cloth', 'plastic', 'leather', 'nylon'], 2), (id) => M(id, 'Which item was NOT in the bag?', ['laptop', 'umbrella', 'keys', 'wallet'], 3), (id) => F(id, 'The bag was handed in at the bus ___.', 'station'), (id) => F(id, 'She must bring her ___.', 'passport')]),
  lp(3, 'A2', 1, 'Ordering a birthday cake', 'Tug‘ilgan kun torti buyurtmasi',
    `Baker: Sweet Corner Bakery, hello.
Customer: Hi, I'd like to order a birthday cake for Saturday.
Baker: What size?
Customer: Big enough for twenty people.
Baker: Then I recommend the large one. Chocolate or vanilla?
Customer: Chocolate, please, with strawberries on top.
Baker: And any writing?
Customer: Yes: "Happy Birthday Kamila".
Baker: That will be two hundred and fifty thousand sum. You can collect it after ten a.m. on Saturday.`,
    [(id) => F(id, 'Number of guests: ___', ['20', 'twenty']), (id) => M(id, 'Flavour:', ['vanilla', 'chocolate', 'lemon', 'carrot'], 1), (id) => F(id, 'Decoration on top: ___', ['strawberries', 'strawberry']), (id) => F(id, 'Name on the cake: ___', 'Kamila'), (id) => F(id, 'Collection time: after ___ a.m.', ['10', 'ten'])]),
  lp(4, 'B1', 1, 'Booking a doctor’s appointment', 'Shifokorga yozilish',
    `Receptionist: Green Valley Clinic.
Patient: Hello, I'd like to see a doctor. I've had a sore throat for a week.
Receptionist: Are you registered with us?
Patient: Yes, my name is Timur Alimov.
Receptionist: Thank you. Dr Hassan has a free appointment tomorrow at nine fifteen, or Dr Lee on Friday at three.
Patient: Tomorrow, please.
Receptionist: Fine. Please arrive ten minutes early and bring a list of any medicines you are taking.`,
    [(id) => F(id, 'Problem: sore ___', 'throat'), (id) => F(id, 'Duration: one ___', 'week'), (id) => M(id, 'Which doctor will he see?', ['Dr Lee', 'Dr Hassan', 'Dr Alimov', 'not decided'], 1), (id) => F(id, 'Appointment time: ___ (masalan 9:15)', ['9:15', '9.15', 'nine fifteen']), (id) => M(id, 'He should bring …', ['his passport', 'a list of medicines', 'money', 'a friend'], 1)]),
  lp(5, 'B1', 1, 'Hiring a car', 'Avtomobil ijarasi',
    `Agent: Good afternoon, Silk Car Rentals.
Customer: Hi, I need a car for three days from Friday.
Agent: Small, medium or large?
Customer: Medium, please. There are four of us.
Agent: That's forty dollars a day. Insurance is an extra eight dollars a day.
Customer: I'll take the insurance.
Agent: You can collect the car at the airport office. Please bring your driving licence and a credit card.
Customer: Is the tank full?
Agent: Yes, and you should return it full too.`,
    [(id) => F(id, 'Rental period: ___ days', ['3', 'three']), (id) => M(id, 'Car size:', ['small', 'medium', 'large', 'van'], 1), (id) => F(id, 'Daily price: $___', ['40', 'forty']), (id) => F(id, 'Insurance per day: $___', ['8', 'eight']), (id) => F(id, 'Collection point: the ___ office', 'airport')]),
  lp(6, 'B1', 1, 'Registering at a gym', 'Sport zaliga ro‘yxatdan o‘tish',
    `Staff: Welcome to FitLife. Can I help?
Visitor: I'd like to register. Do you have student prices?
Staff: Yes, students pay ninety thousand a month instead of one hundred and fifty.
Visitor: Great. What time do you open?
Staff: Seven in the morning on weekdays and nine at weekends. We close at ten every night.
Visitor: Do you have yoga classes?
Staff: Yes, on Monday and Wednesday evenings. They're included in the price.
Visitor: And can I get a towel?
Staff: Towels cost five thousand each time, so most people bring their own.`,
    [(id) => F(id, 'Student price: ___ thousand a month', ['90', 'ninety']), (id) => F(id, 'Weekend opening time: ___ a.m.', ['9', 'nine']), (id) => F(id, 'Closing time: ___ p.m.', ['10', 'ten']), (id) => M(id, 'Yoga classes are on …', ['Tue & Thu', 'Mon & Wed', 'weekends', 'Friday'], 1), (id) => M(id, 'Towels …', ['are free', 'cost 5,000 each time', 'are not available', 'are included'], 1)]),
  lp(7, 'B2', 1, 'Opening a bank account', 'Bank hisob raqami ochish',
    `Clerk: Good morning. How can I help?
Student: I'd like to open a student account.
Clerk: Certainly. I'll need your passport and a letter from your university confirming you are a full-time student.
Student: I have both. Is there a monthly fee?
Clerk: Not for students. You'll get a debit card within five working days, and you can use our mobile app immediately.
Student: Can I get an overdraft?
Clerk: Yes, up to five hundred dollars, interest-free for the first year.`,
    [(id) => M(id, 'Type of account:', ['business', 'savings', 'student', 'joint'], 2), (id) => F(id, 'Document from the university: a ___', 'letter'), (id) => M(id, 'Monthly fee for students:', ['$5', 'none', '$10', 'depends'], 1), (id) => F(id, 'The card arrives within ___ working days.', ['5', 'five']), (id) => F(id, 'Overdraft limit: $___', ['500', 'five hundred'])]),
  lp(8, 'A2', 1, 'Asking about a flat-share', 'Kvartirani birga ijaraga olish',
    `Laila: Hi, I saw your advert for a room.
Owner: Yes, it's in a three-bedroom flat. Two other students live there.
Laila: How much is the rent?
Owner: Two million sum a month, plus bills, which are usually about two hundred thousand.
Laila: Is there a washing machine?
Owner: Yes, and a balcony. The flat is a five-minute walk from the university.
Laila: Can I see it on Sunday?
Owner: Sunday afternoon at four is fine.`,
    [(id) => F(id, 'Number of bedrooms: ___', ['3', 'three']), (id) => F(id, 'Other residents: ___ students', ['2', 'two']), (id) => M(id, 'The flat has …', ['a garden', 'a balcony', 'a garage', 'a pool'], 1), (id) => F(id, 'Walk to university: ___ minutes', ['5', 'five']), (id) => F(id, 'Viewing time: Sunday at ___', ['4', 'four'])]),
  lp(9, 'B1', 1, 'Booking a restaurant table', 'Restoranda stol band qilish',
    `Waiter: Navruz Restaurant, good evening.
Customer: I'd like to book a table for Friday evening.
Waiter: For how many people?
Customer: Six adults and two children.
Waiter: What time?
Customer: Seven thirty.
Waiter: Would you like to sit inside or on the terrace?
Customer: The terrace, if it's warm.
Waiter: No problem. We'll need a phone number, and please tell us about any allergies.
Customer: One child is allergic to nuts.`,
    [(id) => M(id, 'Day of booking:', ['Thursday', 'Friday', 'Saturday', 'Sunday'], 1), (id) => F(id, 'Number of adults: ___', ['6', 'six']), (id) => F(id, 'Time: ___ (masalan 7:30)', ['7:30', '7.30', 'seven thirty']), (id) => F(id, 'Seating: on the ___', 'terrace'), (id) => F(id, 'Allergy: ___', ['nuts', 'nut'])]),
  lp(10, 'B1', 1, 'Signing up for a volunteer programme', 'Ko‘ngilli dasturga yozilish',
    `Coordinator: Thanks for calling Green City Volunteers.
Caller: I'd like to help with the tree-planting project.
Coordinator: Wonderful. We plant every Saturday from eight until twelve.
Caller: Do I need any experience?
Coordinator: None at all, but please wear strong boots. We provide gloves and tools.
Caller: Where do we meet?
Coordinator: At the north gate of Central Park. And we offer free lunch afterwards.
Caller: Great, my name is Sardor Nabiev.`,
    [(id) => F(id, 'Project: ___ planting', 'tree'), (id) => F(id, 'Day: ___', 'Saturday'), (id) => F(id, 'Volunteers should wear strong ___.', ['boots', 'boot']), (id) => M(id, 'Meeting point:', ['south gate', 'north gate', 'city hall', 'bus station'], 1), (id) => F(id, 'Free ___ is provided afterwards.', 'lunch')]),
  // ---- Part 2 (monologues)
  lp(11, 'B1', 2, 'Museum audio guide', 'Muzey audiogidi',
    `Welcome to the Museum of Applied Arts. This audio guide will take about forty minutes. The tour begins in the main hall, which was once the reception room of a wealthy merchant's house built in the early twentieth century. Look up and you will see the painted ceiling, which took craftsmen nearly two years to complete. In the next room you will find a collection of embroidered suzani from different regions. Please remember that photography with flash is not permitted. The gift shop, near the exit, sells copies of many items in the collection.`,
    [(id) => F(id, 'The tour lasts about ___ minutes.', ['40', 'forty']), (id) => M(id, 'The main hall was once …', ['a school', 'a reception room', 'a shop', 'a mosque'], 1), (id) => F(id, 'The painted ceiling took nearly ___ years.', ['2', 'two']), (id) => F(id, 'The next room shows embroidered ___.', 'suzani'), (id) => M(id, 'The gift shop is …', ['in the main hall', 'near the exit', 'upstairs', 'outside'], 1)]),
  lp(12, 'B1', 2, 'Campus tour', 'Kampus bo‘ylab ekskursiya',
    `Hello, everyone, and welcome to the campus tour. We're starting here at the main library, which is open twenty-four hours during exams. To your left is the sports centre, where students can use the swimming pool free of charge. Straight ahead is the student union building, with a café, a bookshop and a medical centre on the first floor. The science laboratories are in the newest building, behind the car park. Finally, the international office, where you can get help with visas, is next to the main entrance.`,
    [(id) => M(id, 'During exams, the library is open …', ['until 10 p.m.', '24 hours', 'only weekends', 'mornings'], 1), (id) => F(id, 'Students can use the swimming ___ for free.', 'pool'), (id) => F(id, 'The medical centre is on the ___ floor.', ['first', '1st']), (id) => F(id, 'The laboratories are behind the car ___.', 'park'), (id) => M(id, 'The international office helps with …', ['jobs', 'visas', 'sport', 'food'], 1)]),
  lp(13, 'B2', 2, 'Radio: a new metro line', 'Radio: yangi metro liniyasi',
    `And now local news. The new metro line connecting the airport with the city centre will open next month. The line has seven stations, and the journey from the airport to the centre will take just eighteen minutes. Trains will run every six minutes during rush hours and every twelve minutes at other times. A single ticket will cost the same as on other lines, but passengers with large luggage are advised to use the first carriage, which has extra space. Officials expect the line to reduce taxi traffic on the airport road by about a quarter.`,
    [(id) => F(id, 'Number of stations: ___', ['7', 'seven']), (id) => F(id, 'Journey time: ___ minutes', ['18', 'eighteen']), (id) => F(id, 'Rush-hour frequency: every ___ minutes', ['6', 'six']), (id) => M(id, 'Passengers with luggage should use …', ['the last carriage', 'the first carriage', 'any carriage', 'a special train'], 1), (id) => M(id, 'Taxi traffic is expected to fall by about …', ['10%', 'a quarter', 'a half', 'two thirds'], 1)]),
  lp(14, 'B1', 2, 'Summer camp information', 'Yozgi lager haqida',
    `Thank you for choosing Mountain Stars Summer Camp. The camp runs for two weeks, starting on the first of July. Children aged eight to fourteen are welcome. Each day begins with breakfast at eight, followed by activities such as hiking, swimming and arts and crafts. Children sleep in wooden cabins, with six children per cabin. Mobile phones are collected on arrival and returned at the end of the camp, but parents can call the camp office at any time. Please make sure your child brings a sleeping bag and a torch.`,
    [(id) => F(id, 'Length of camp: ___ weeks', ['2', 'two']), (id) => M(id, 'Age range:', ['6–12', '8–14', '10–16', '12–18'], 1), (id) => F(id, 'Children sleep in wooden ___.', ['cabins', 'cabin']), (id) => F(id, 'Children per cabin: ___', ['6', 'six']), (id) => F(id, 'Bring a sleeping bag and a ___.', 'torch')]),
  lp(15, 'B2', 2, 'Farmers’ market announcement', 'Dehqon bozori e’loni',
    `The weekly farmers' market is moving. From next Sunday, it will take place in the car park of the sports stadium instead of the town square, because the square is being repaired. The market will open an hour earlier, at seven, and close at one. More than fifty local farmers will sell fruit, vegetables, honey and dairy products. For the first time, there will also be a children's corner with games and face painting. Visitors are encouraged to bring their own bags, as plastic bags will no longer be provided.`,
    [(id) => M(id, 'Why is the market moving?', ['more space needed', 'the square is being repaired', 'complaints', 'new rules'], 1), (id) => F(id, 'New location: the ___ car park', 'stadium'), (id) => F(id, 'New opening time: ___ a.m.', ['7', 'seven']), (id) => F(id, 'Number of farmers: more than ___', ['50', 'fifty']), (id) => M(id, 'What will no longer be provided?', ['parking', 'plastic bags', 'games', 'honey'], 1)]),
  lp(16, 'B2', 2, 'Charity run briefing', 'Xayriya yugurishi',
    `Good morning, runners. Today's charity run is ten kilometres long and follows the river path. The start line is beside the bridge, and the race begins at nine o'clock sharp. Water stations are at the three-kilometre and seven-kilometre points. If you feel unwell, stop and tell one of our volunteers, who are wearing yellow jackets. All runners who finish will receive a medal. Money raised today will help build a new playground at the children's hospital. Last year we raised twelve thousand dollars, and we hope to beat that.`,
    [(id) => F(id, 'Distance: ___ km', ['10', 'ten']), (id) => F(id, 'The start is beside the ___.', 'bridge'), (id) => M(id, 'Water stations are at …', ['2 and 5 km', '3 and 7 km', '5 km only', 'every km'], 1), (id) => F(id, 'Volunteers wear ___ jackets.', 'yellow'), (id) => F(id, 'Money will build a new ___.', 'playground')]),
  lp(17, 'B1', 2, 'Hotel welcome talk', 'Mehmonxona xush kelibsiz nutqi',
    `Welcome to the Oasis Hotel. Breakfast is served in the restaurant on the ground floor from seven until ten thirty. The swimming pool on the roof is open from eight a.m. until eight p.m. Free Wi-Fi is available in all rooms; the password is printed on your key card holder. If you would like a taxi, please ask at reception at least thirty minutes in advance. Check-out time is twelve noon, but you can leave your luggage with us if your flight is later.`,
    [(id) => F(id, 'Breakfast ends at ___ (masalan 10:30)', ['10:30', '10.30', 'ten thirty']), (id) => F(id, 'The pool is on the ___.', 'roof'), (id) => M(id, 'The Wi-Fi password is …', ['at reception', 'on the key card holder', 'in the restaurant', 'not needed'], 1), (id) => F(id, 'Book a taxi at least ___ minutes in advance.', ['30', 'thirty']), (id) => F(id, 'Check-out time: twelve ___', 'noon')]),
  lp(18, 'B2', 2, 'Talk: starting a small business', 'Nutq: kichik biznes boshlash',
    `Tonight's talk is for anyone thinking of starting a small business. First, research your market: talk to at least twenty potential customers before spending any money. Second, keep your costs low at the beginning; many successful businesses started at a kitchen table. Third, separate your personal and business finances by opening a business account. The city's business centre offers free advice sessions every Tuesday, and small loans are available for people under thirty. Finally, don't be afraid of failure — most entrepreneurs fail at least once before they succeed.`,
    [(id) => F(id, 'Talk to at least ___ potential customers.', ['20', 'twenty']), (id) => M(id, 'At the beginning, you should …', ['rent an office', 'keep costs low', 'hire staff', 'advertise on TV'], 1), (id) => F(id, 'Open a separate business ___.', 'account'), (id) => F(id, 'Free advice sessions are on ___.', ['Tuesday', 'Tuesdays']), (id) => F(id, 'Loans are for people under ___.', ['30', 'thirty'])]),
  lp(19, 'B1', 2, 'Library rules for new members', 'Kutubxona qoidalari',
    `Welcome to the city library. As a new member, you can borrow up to six books for three weeks. You can renew them online twice, unless another reader has reserved them. If you return books late, there is a small fine of one thousand sum per day. The quiet study room is on the second floor, and food is not allowed there. Computers can be booked for up to two hours a day. Please note that the library is closed on public holidays.`,
    [(id) => F(id, 'Books you can borrow: ___', ['6', 'six']), (id) => F(id, 'Loan period: ___ weeks', ['3', 'three']), (id) => F(id, 'Online renewals allowed: ___', ['2', 'two', 'twice']), (id) => F(id, 'The quiet room is on the ___ floor.', ['second', '2nd']), (id) => F(id, 'Computers: up to ___ hours a day', ['2', 'two'])]),
  lp(20, 'B2', 2, 'Tour of a tea factory', 'Choy fabrikasi bo‘ylab tur',
    `Welcome to the Green Hills Tea Factory. Our tea grows on the hills behind the factory, at a height of about one thousand two hundred metres. The leaves are picked by hand, mainly in spring, when the young leaves have the best flavour. After picking, they are brought here within two hours to keep them fresh. You'll see the drying machines, which were installed last year and use solar energy. At the end of the tour, there's a tasting room where you can try five different teas.`,
    [(id) => F(id, 'Height of tea gardens: about ___ metres', ['1200', '1,200', 'one thousand two hundred']), (id) => M(id, 'Leaves are picked mainly in …', ['summer', 'autumn', 'spring', 'winter'], 2), (id) => F(id, 'Leaves arrive within ___ hours.', ['2', 'two']), (id) => F(id, 'The drying machines use ___ energy.', 'solar'), (id) => F(id, 'Visitors can taste ___ teas.', ['5', 'five'])]),
  // ---- Part 3 (academic discussions)
  lp(21, 'B2', 3, 'Choosing a dissertation topic', 'Dissertatsiya mavzusini tanlash',
    `Tutor: So, Nodira, have you chosen a topic for your dissertation?
Nodira: I'm thinking about online shopping habits of older people.
Tutor: Interesting. Why that group?
Nodira: Most research focuses on young people, so there's a gap.
Tutor: Good point. How will you collect data?
Nodira: Interviews, probably about fifteen, because older people may not use online surveys.
Tutor: Sensible. Make sure you get ethical approval first — it usually takes three weeks.
Nodira: I'll submit the form on Monday.`,
    [(id) => M(id, 'Topic: online shopping habits of …', ['teenagers', 'older people', 'students', 'parents'], 1), (id) => M(id, 'Why did she choose this group?', ['It is easy.', 'There is a research gap.', 'Her tutor insisted.', 'They are her family.'], 1), (id) => F(id, 'Planned number of interviews: ___', ['15', 'fifteen']), (id) => F(id, 'Ethical approval usually takes ___ weeks.', ['3', 'three']), (id) => F(id, 'She will submit the form on ___.', 'Monday')]),
  lp(22, 'B2', 3, 'Group project problems', 'Guruh loyihasidagi muammolar',
    `Jamol: Our marketing project is behind schedule.
Lola: I know. Aziz hasn't sent his part on competitors yet.
Jamol: Should we tell the tutor?
Lola: Let's message him first and give him until Thursday.
Jamol: Fine. Meanwhile, I'll finish the customer survey analysis.
Lola: And I'll design the slides. The presentation is on the twelfth, so we need a rehearsal on the tenth.
Jamol: Let's book a room in the library for that.`,
    [(id) => F(id, 'Subject of project: ___', 'marketing'), (id) => M(id, 'Aziz has not sent his part on …', ['customers', 'competitors', 'prices', 'slides'], 1), (id) => F(id, 'Deadline given to Aziz: ___', 'Thursday'), (id) => M(id, 'Who will design the slides?', ['Jamol', 'Lola', 'Aziz', 'the tutor'], 1), (id) => F(id, 'Rehearsal date: the ___', ['10th', 'tenth', '10'])]),
  lp(23, 'B2', 3, 'Feedback on an essay', 'Esse bo‘yicha fikr-mulohaza',
    `Tutor: Your essay on renewable energy has good ideas, Bek, but the structure needs work.
Bek: In what way?
Tutor: Your introduction doesn't state your main argument clearly. Also, paragraph three mixes two different points.
Bek: Should I split it?
Tutor: Yes. And you need more recent sources — most of yours are over ten years old.
Bek: What about the length?
Tutor: It's fine, just under the two-thousand-word limit. Resubmit by the end of next week.`,
    [(id) => F(id, 'Essay topic: ___ energy', 'renewable'), (id) => M(id, 'Main problem:', ['grammar', 'structure', 'length', 'spelling'], 1), (id) => F(id, 'Paragraph ___ mixes two points.', ['3', 'three']), (id) => M(id, 'What does he need?', ['older sources', 'more recent sources', 'fewer sources', 'pictures'], 1), (id) => F(id, 'Word limit: ___', ['2000', '2,000', 'two thousand', 'two-thousand'])]),
  lp(24, 'B2', 3, 'Planning a field trip', 'Dala safarini rejalashtirish',
    `Professor: Our geography field trip will be to the Chimgan mountains.
Student: How long will we stay?
Professor: Three days. We'll study how plants change with altitude.
Student: What should we bring?
Professor: Warm clothes — it can be cold at night even in May — and a notebook. We'll provide GPS devices.
Student: Where will we sleep?
Professor: In a guesthouse in the village. The bus leaves the university at six a.m. on the fifteenth.`,
    [(id) => F(id, 'Destination: the ___ mountains', 'Chimgan'), (id) => F(id, 'Length of trip: ___ days', ['3', 'three']), (id) => M(id, 'Topic of study:', ['rivers', 'how plants change with altitude', 'animals', 'weather'], 1), (id) => M(id, 'The university provides …', ['notebooks', 'GPS devices', 'warm clothes', 'food'], 1), (id) => F(id, 'Accommodation: a ___', 'guesthouse')]),
  lp(25, 'C1', 3, 'Discussing survey results', 'So‘rovnoma natijalarini muhokama qilish',
    `Kamila: Our survey on students' sleep shows that sixty percent sleep less than seven hours.
Rustam: That's higher than we predicted.
Kamila: And the main reason they gave was screen use late at night, not study.
Rustam: Interesting. But our sample was only eighty students, all from the same faculty.
Kamila: True, we should mention that as a limitation.
Rustam: Should we recommend anything?
Kamila: Perhaps that the university runs workshops on sleep habits.`,
    [(id) => F(id, 'Students sleeping less than 7 hours: ___ %', ['60', 'sixty']), (id) => M(id, 'Main reason given:', ['study', 'screen use', 'noise', 'part-time jobs'], 1), (id) => F(id, 'Sample size: ___ students', ['80', 'eighty']), (id) => M(id, 'The limitation is that all students …', ['were female', 'came from the same faculty', 'were first-year', 'lived at home'], 1), (id) => F(id, 'Recommendation: university ___ on sleep habits', ['workshops', 'workshop'])]),
  lp(26, 'B2', 3, 'Preparing for a debate', 'Munozaraga tayyorgarlik',
    `Coach: The debate topic is whether homework should be banned. You're arguing against the ban.
Diyor: So we support homework.
Coach: Exactly. Your strongest point should be that it builds independent study habits.
Malika: What about evidence?
Coach: Use the national survey from last year. And prepare answers to the stress argument — the other team will use it.
Diyor: How long is each speech?
Coach: Four minutes, with one minute for questions.`,
    [(id) => F(id, 'Debate topic: banning ___', 'homework'), (id) => M(id, 'The students argue …', ['for the ban', 'against the ban', 'both sides', 'neither'], 1), (id) => F(id, 'Strongest point: independent study ___', ['habits', 'habit']), (id) => F(id, 'Evidence: the national ___', 'survey'), (id) => F(id, 'Each speech lasts ___ minutes.', ['4', 'four'])]),
  lp(27, 'B2', 3, 'Choosing optional modules', 'Tanlov fanlarini tanlash',
    `Adviser: You need to choose two optional modules for next semester.
Student: I'm interested in Digital Marketing and Business Law.
Adviser: Business Law has an exam at the end, while Digital Marketing is assessed by a project.
Student: I prefer projects.
Adviser: Then you could take Digital Marketing and Psychology of Consumers, which is also project-based.
Student: That sounds good. When is the registration deadline?
Adviser: Friday the twentieth, online.`,
    [(id) => F(id, 'Number of optional modules: ___', ['2', 'two']), (id) => M(id, 'Business Law is assessed by …', ['a project', 'an exam', 'a presentation', 'coursework'], 1), (id) => M(id, 'The student prefers …', ['exams', 'projects', 'essays', 'tests'], 1), (id) => F(id, 'Second module chosen: Psychology of ___', 'Consumers'), (id) => F(id, 'Registration deadline: Friday the ___', ['20th', 'twentieth', '20'])]),
  lp(28, 'C1', 3, 'Laboratory safety discussion', 'Laboratoriya xavfsizligi',
    `Supervisor: Before you start the chemistry experiment, a few safety points.
Student: We've read the manual.
Supervisor: Good. Goggles must be worn at all times, even when you're only watching.
Student: What about gloves?
Supervisor: Use the blue ones, not the white; the white ones aren't chemical-resistant.
Student: And if something spills?
Supervisor: Use the spill kit by the door and report it to me immediately. Never pour waste into the sink — use the labelled containers.`,
    [(id) => F(id, 'Subject of experiment: ___', 'chemistry'), (id) => F(id, '___ must be worn at all times.', 'goggles'), (id) => M(id, 'Which gloves should be used?', ['white', 'blue', 'any', 'none'], 1), (id) => F(id, 'The spill kit is by the ___.', 'door'), (id) => M(id, 'Waste should go …', ['into the sink', 'into labelled containers', 'outside', 'in the bin'], 1)]),
  lp(29, 'B2', 3, 'Planning a student magazine', 'Talabalar jurnalini rejalashtirish',
    `Editor: For the first issue, we need six articles.
Writer: I can write about the new sports centre.
Editor: Great. Shahzod is interviewing the university president.
Writer: What about photos?
Editor: Madina will take them. The magazine will be online only this term, to save money.
Writer: When's the deadline for articles?
Editor: The end of October. Each article should be about five hundred words.`,
    [(id) => F(id, 'Articles needed: ___', ['6', 'six']), (id) => F(id, 'The writer will write about the new sports ___.', 'centre'), (id) => M(id, 'Who will take photos?', ['Shahzod', 'Madina', 'the editor', 'the writer'], 1), (id) => M(id, 'This term the magazine will be …', ['printed', 'online only', 'weekly', 'cancelled'], 1), (id) => F(id, 'Article length: about ___ words', ['500', 'five hundred'])]),
  lp(30, 'C1', 3, 'Research methods tutorial', 'Tadqiqot usullari darsi',
    `Tutor: Let's compare quantitative and qualitative methods for your project on public transport.
Student: Quantitative means numbers, like questionnaires?
Tutor: Yes. They show how many people use buses, but not why.
Student: So interviews would explain reasons.
Tutor: Exactly. Many good projects use mixed methods — a questionnaire first, then interviews with a small group.
Student: How many interviews?
Tutor: Eight to ten is enough at this level. Remember to record them only with permission.`,
    [(id) => F(id, 'Project topic: public ___', 'transport'), (id) => M(id, 'Questionnaires show …', ['why people act', 'how many people do something', 'personal stories', 'nothing useful'], 1), (id) => F(id, 'Interviews explain ___.', ['reasons', 'why']), (id) => F(id, 'Using both approaches is called ___ methods.', 'mixed'), (id) => M(id, 'Interviews should be recorded …', ['always', 'only with permission', 'never', 'secretly'], 1)]),
  // ---- Part 4 (lectures)
  lp(31, 'C1', 4, 'Lecture: the history of coffee', 'Ma’ruza: qahva tarixi',
    `Coffee is believed to have originated in Ethiopia, where, according to legend, a goat herder noticed his animals becoming energetic after eating certain berries. By the fifteenth century, coffee was being grown in Yemen, and coffee houses soon spread across the Middle East. These were important social spaces where people discussed news and politics. In the seventeenth century coffee reached Europe, where it was at first regarded with suspicion. Today, Brazil is the largest producer in the world, and coffee is one of the most traded agricultural products.`,
    [(id) => F(id, 'Coffee probably originated in ___.', 'Ethiopia'), (id) => F(id, 'In the legend, a ___ herder noticed the effect.', 'goat'), (id) => F(id, 'By the 15th century coffee was grown in ___.', 'Yemen'), (id) => M(id, 'Coffee houses were important for …', ['sleeping', 'discussing news and politics', 'trading horses', 'studying medicine'], 1), (id) => F(id, 'Largest producer today: ___', 'Brazil')]),
  lp(32, 'C1', 4, 'Lecture: coral reefs', 'Ma’ruza: marjon riflari',
    `Coral reefs cover less than one percent of the ocean floor, yet they support about a quarter of all marine species. Corals are animals that live together with tiny algae, which provide them with food through photosynthesis. When water becomes too warm, corals expel these algae and turn white, a process known as bleaching. If temperatures return to normal quickly, corals can recover, but repeated bleaching often kills them. Scientists are now experimenting with growing heat-resistant corals in nurseries and transplanting them onto damaged reefs.`,
    [(id) => M(id, 'Reefs cover … of the ocean floor.', ['less than 1%', 'about 10%', 'a quarter', 'half'], 0), (id) => M(id, 'Reefs support about … of marine species.', ['1%', '10%', 'a quarter', 'half'], 2), (id) => F(id, 'Algae provide food through ___.', 'photosynthesis'), (id) => F(id, 'When corals expel algae and turn white, it is called ___.', 'bleaching'), (id) => F(id, 'Heat-resistant corals are grown in ___.', ['nurseries', 'nursery'])]),
  lp(33, 'C1', 4, 'Lecture: memory and sleep', 'Ma’ruza: xotira va uyqu',
    `Today we'll consider how sleep supports memory. During the day, new information is stored temporarily in a region of the brain called the hippocampus. During deep sleep, this information is replayed and gradually transferred to the cortex for long-term storage. Experiments show that people who sleep after learning recall more than those who stay awake for the same period. Even a short nap of about twenty minutes can improve performance on some tasks. Conversely, a single night without sleep can reduce the ability to form new memories by roughly forty percent.`,
    [(id) => F(id, 'Temporary storage region: the ___', 'hippocampus'), (id) => M(id, 'Memories are transferred during …', ['dreaming only', 'deep sleep', 'waking', 'exercise'], 1), (id) => F(id, 'Long-term storage: the ___', 'cortex'), (id) => F(id, 'Useful nap length: about ___ minutes', ['20', 'twenty']), (id) => F(id, 'One sleepless night reduces memory formation by about ___ %', ['40', 'forty'])]),
  lp(34, 'C1', 4, 'Lecture: the economics of tourism', 'Ma’ruza: turizm iqtisodiyoti',
    `Tourism can bring significant income to a region, but not all of that money stays locally. Economists use the term "leakage" to describe spending that leaves the destination, for example when hotels are owned by foreign companies or when food is imported. In some resorts, leakage can exceed half of all tourist spending. To keep more income locally, governments can encourage small family-run guesthouses, local guides and the use of regional products. Seasonality is another challenge: if visitors only come in summer, workers may be unemployed for the rest of the year.`,
    [(id) => F(id, 'Money leaving the destination is called ___.', 'leakage'), (id) => M(id, 'Which causes leakage?', ['local guides', 'foreign-owned hotels', 'regional products', 'family guesthouses'], 1), (id) => M(id, 'In some resorts leakage can exceed …', ['a tenth', 'a quarter', 'half', 'all'], 2), (id) => F(id, 'Governments can encourage family-run ___.', ['guesthouses', 'guesthouse']), (id) => F(id, 'Visitors coming only in one season is called ___.', 'seasonality')]),
  lp(35, 'C1', 4, 'Lecture: urban migration', 'Ma’ruza: shaharga migratsiya',
    `More than half of the world's population now lives in cities, and the figure is expected to reach about two thirds by the middle of the century. Economists describe two kinds of factors behind migration: "push" factors, such as poverty or lack of jobs in rural areas, and "pull" factors, such as higher wages and better education in cities. Rapid migration can lead to informal settlements on the edges of cities, where housing is poor and services are limited. Successful cities invest early in transport, water supply and schools in growing districts.`,
    [(id) => M(id, 'Today, … of the world lives in cities.', ['a third', 'more than half', 'two thirds', 'three quarters'], 1), (id) => M(id, 'Expected by mid-century:', ['half', 'about two thirds', '90%', 'a third'], 1), (id) => F(id, 'Poverty in rural areas is a ___ factor.', 'push'), (id) => F(id, 'Higher wages in cities are a ___ factor.', 'pull'), (id) => F(id, 'Rapid migration can lead to ___ settlements.', 'informal')]),
  lp(36, 'C1', 4, 'Lecture: the first printing press', 'Ma’ruza: birinchi bosmaxona',
    `Printing with movable type transformed the spread of knowledge. Although earlier forms of printing existed in East Asia, Johannes Gutenberg's press, developed in Germany around fourteen fifty, used metal type and oil-based ink that made mass production practical. Before this, books were copied by hand, which could take months. Within fifty years, printing presses were operating in more than two hundred European cities. Printed books became cheaper, literacy increased, and scientific ideas could be shared and checked far more quickly than before.`,
    [(id) => F(id, 'Gutenberg worked in ___.', 'Germany'), (id) => F(id, 'His press dates from around ___.', ['1450', 'fourteen fifty']), (id) => F(id, 'Gutenberg used ___ type.', 'metal'), (id) => M(id, 'Before printing, books were …', ['imported', 'copied by hand', 'very cheap', 'printed on cloth'], 1), (id) => F(id, 'Within 50 years presses operated in over ___ cities.', ['200', 'two hundred'])]),
  lp(37, 'C1', 4, 'Lecture: desert plants', 'Ma’ruza: cho‘l o‘simliklari',
    `Desert plants have developed remarkable strategies to survive with very little water. Some, like cacti, store water in thick stems and have spines instead of leaves to reduce water loss. Others have extremely long roots that reach groundwater deep below the surface. Many desert annuals avoid drought altogether: their seeds remain dormant in the soil for years and germinate only after heavy rain, completing their life cycle in just a few weeks. Some plants open their pores only at night, when it is cooler, to limit evaporation.`,
    [(id) => F(id, 'Cacti store water in thick ___.', ['stems', 'stem']), (id) => F(id, 'Cacti have ___ instead of leaves.', ['spines', 'spine']), (id) => M(id, 'Long roots reach …', ['the surface', 'groundwater', 'other plants', 'rocks'], 1), (id) => F(id, 'Seeds of desert annuals can remain ___ for years.', 'dormant'), (id) => M(id, 'Some plants open their pores …', ['at midday', 'only at night', 'in winter', 'never'], 1)]),
  lp(38, 'C1', 4, 'Lecture: the placebo effect', 'Ma’ruza: platsebo effekti',
    `A placebo is a treatment with no active ingredient, such as a sugar pill. Remarkably, patients who receive placebos often report real improvements, particularly for symptoms such as pain and nausea. This is why new medicines are tested against placebos in controlled trials. The effect seems to depend on expectation: larger pills, injections and even more expensive-looking packaging can produce stronger effects. Surprisingly, some studies have found that placebos can work even when patients are told openly that they are taking one.`,
    [(id) => F(id, 'An example of a placebo is a ___ pill.', 'sugar'), (id) => M(id, 'Placebos work best for symptoms such as …', ['broken bones', 'pain and nausea', 'infections', 'cancer'], 1), (id) => F(id, 'New medicines are tested in controlled ___.', ['trials', 'trial']), (id) => F(id, 'The effect depends on ___.', ['expectation', 'expectations']), (id) => M(id, 'Placebos may work even when patients …', ['are asleep', 'are told openly', 'are children', 'pay nothing'], 1)]),
  lp(39, 'C1', 4, 'Lecture: renewable energy storage', 'Ma’ruza: qayta tiklanuvchi energiyani saqlash',
    `Solar and wind power are now among the cheapest sources of electricity, but they are variable: the sun does not always shine and the wind does not always blow. Storage is therefore essential. Lithium-ion batteries are the most common solution for short periods, typically a few hours. For longer storage, one of the oldest methods is pumped hydro, in which water is pumped uphill to a reservoir when electricity is cheap and released through turbines when demand is high. Researchers are also exploring hydrogen, which can be produced using surplus electricity and stored for months.`,
    [(id) => M(id, 'Solar and wind are described as …', ['expensive', 'variable', 'constant', 'unreliable forever'], 1), (id) => F(id, 'Most common batteries: ___-ion', 'lithium'), (id) => M(id, 'Batteries usually store energy for …', ['a few hours', 'months', 'years', 'seconds'], 0), (id) => F(id, 'In pumped hydro, water is pumped to a ___.', 'reservoir'), (id) => F(id, '___ can be stored for months.', 'hydrogen')]),
  lp(40, 'C1', 4, 'Lecture: how children learn language', 'Ma’ruza: bolalar tilni qanday o‘rganadi',
    `Children acquire their first language with surprising speed. By around twelve months, most babies produce their first words, and by the age of two many combine words into short sentences. Researchers emphasise the importance of interaction: children learn far more from conversation with adults than from passive exposure, such as television. Adults naturally use a simplified, slower style of speech, sometimes called "child-directed speech", which appears to help. Bilingual children may start speaking slightly later in each language, but they catch up quickly.`,
    [(id) => F(id, 'First words appear at around ___ months.', ['12', 'twelve']), (id) => F(id, 'Short sentences by the age of ___.', ['2', 'two']), (id) => M(id, 'Children learn most from …', ['television', 'conversation with adults', 'books alone', 'other babies'], 1), (id) => F(id, 'Simplified adult speech: child-___ speech', 'directed'), (id) => M(id, 'Bilingual children …', ['never catch up', 'may start slightly later but catch up', 'speak earlier', 'learn only one language'], 1)]),
];
