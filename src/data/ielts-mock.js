// Full-length IELTS Academic mock tests (original content): Listening 4 parts × 10, Reading 3 passages (13+13+14).
// Keys are URL ids (#/ielts?mock=…); `kind` picks the band table.
// Only single-answer types (single, fill) so the raw score is 0–40 like the real test and maps to bandTable.

const tfng = ['True', 'False', 'Not Given'];

export const mockTests = {
  listening: {
    kind: 'listening', title: 'IELTS Listening — Mock Test 1', minutes: 30,
    sections: [
      {
        title: 'Part 1 · Booking a city tour',
        intro: 'You will hear a phone call between a tourist and a travel agent. Questions 1–10.',
        script: `Agent: Good morning, Registan Tours. How can I help you?
Tourist: Hi. I'd like to book a city tour of Samarkand for this Saturday.
Agent: Certainly. We have a half-day tour and a full-day tour. Which would you prefer?
Tourist: The full-day one, please. What time does it start?
Agent: It starts at half past eight in the morning and finishes at about five.
Tourist: And how much is it?
Agent: It's forty-five dollars per person, and that includes lunch at a traditional restaurant.
Tourist: Great. There will be three of us.
Agent: Fine. Can I have the name for the booking?
Tourist: Yes, it's Laura Whitfield. That's W-H-I-T-F-I-E-L-D.
Agent: Thank you. And where are you staying?
Tourist: At the Amir Hotel, on University Boulevard.
Agent: Then our minibus will collect you from the hotel entrance. Please be ready ten minutes before the start.
Tourist: Do we need to bring anything?
Agent: Comfortable shoes, definitely, and a hat — it gets very sunny. Also, some mosques ask visitors to cover their shoulders, so a light scarf is useful.
Tourist: How do I pay?
Agent: You can pay by card on the phone now, or in cash to the guide. Most people pay the guide.
Tourist: I'll pay in cash, then. And what's your phone number in case we're late?
Agent: It's oh seven one, two three four, five five six.
Tourist: Thank you very much.`,
        questions: [
          { id: 'ml1', type: 'single', prompt: '1. Type of tour:', options: ['half-day', 'full-day', 'evening', 'two-day'], answer: 1 },
          { id: 'ml2', type: 'fill', prompt: '2. Start time: ___ a.m. (raqam bilan, masalan 9:15)', answer: ['8:30', '8.30', 'half past eight'] },
          { id: 'ml3', type: 'fill', prompt: '3. Price per person: $___', answer: ['45', 'forty-five', 'forty five'] },
          { id: 'ml4', type: 'fill', prompt: '4. The price includes ___.', answer: ['lunch', 'lunch at a traditional restaurant'] },
          { id: 'ml5', type: 'fill', prompt: '5. Number of people: ___', answer: ['3', 'three'] },
          { id: 'ml6', type: 'fill', prompt: '6. Surname: ___', answer: 'Whitfield' },
          { id: 'ml7', type: 'fill', prompt: '7. Hotel: the ___ Hotel', answer: 'Amir' },
          { id: 'ml8', type: 'single', prompt: '8. Which item is NOT mentioned as useful to bring?', options: ['comfortable shoes', 'a hat', 'a scarf', 'a camera'], answer: 3 },
          { id: 'ml9', type: 'single', prompt: '9. How will the tourist pay?', options: ['by card on the phone', 'in cash to the guide', 'by bank transfer', 'at the hotel'], answer: 1 },
          { id: 'ml10', type: 'fill', prompt: '10. Agency phone number: ___', answer: ['071234556', '071 234 556', '071-234-556'] },
        ],
      },
      {
        title: 'Part 2 · A new community library',
        intro: 'You will hear a local radio presenter talking about a new library. Questions 11–20.',
        script: `Good afternoon, and welcome to Community Matters. Today I want to tell you about the new Chilanzar Community Library, which opens to the public next Monday.

The library is in the former cinema building on Bunyodkor Avenue, and the conversion took eighteen months. The architects kept the original front of the building, but the inside is completely new. On the ground floor you'll find the children's section and a café. The first floor is the quiet study area, with two hundred desks, and the second floor has computer rooms and a small recording studio that young people can use free of charge to make podcasts.

Membership is free for everyone living in the district. To join, you simply need to bring a document with your address on it, such as a utility bill. Members can borrow up to eight books at a time for three weeks.

Opening hours are from nine a.m. to nine p.m. from Monday to Saturday. On Sundays the library opens later, at eleven, and closes at six.

There will be several events in the first week. On Tuesday evening, a well-known children's author will read from her new book. On Thursday there's a free workshop on using online government services, which is aimed especially at older residents. And on Saturday there will be a book swap, so bring along any books you've finished with.

Finally, the library is looking for volunteers to help with homework clubs. If you're interested, please contact the volunteer coordinator, whose name is Dilfuza.`,
        questions: [
          { id: 'ml11', type: 'single', prompt: '11. The library is located in a former …', options: ['school', 'cinema', 'factory', 'hospital'], answer: 1 },
          { id: 'ml12', type: 'fill', prompt: '12. The conversion took ___ months.', answer: ['18', 'eighteen'] },
          { id: 'ml13', type: 'single', prompt: '13. What is on the ground floor?', options: ['computer rooms', 'the quiet study area', "the children's section and a café", 'a recording studio'], answer: 2 },
          { id: 'ml14', type: 'fill', prompt: '14. The study area has ___ desks.', answer: ['200', 'two hundred'] },
          { id: 'ml15', type: 'fill', prompt: '15. Young people can use a recording studio to make ___.', answer: ['podcasts', 'podcast'] },
          { id: 'ml16', type: 'single', prompt: '16. To join, you need to bring …', options: ['a passport photo', 'a document showing your address', 'a membership fee', 'a letter from your employer'], answer: 1 },
          { id: 'ml17', type: 'fill', prompt: '17. Members can borrow up to ___ books.', answer: ['8', 'eight'] },
          { id: 'ml18', type: 'fill', prompt: '18. On Sundays the library opens at ___ a.m.', answer: ['11', 'eleven'] },
          { id: 'ml19', type: 'single', prompt: '19. The Thursday workshop is mainly for …', options: ['children', 'students', 'older residents', 'teachers'], answer: 2 },
          { id: 'ml20', type: 'fill', prompt: '20. Volunteers will help with ___ clubs.', answer: 'homework' },
        ],
      },
      {
        title: 'Part 3 · Planning a presentation',
        intro: 'You will hear two students, Aziza and Ben, talking with their tutor about a presentation on saving water. Questions 21–30.',
        script: `Tutor: So, how is your presentation on water saving coming along?
Aziza: Quite well, I think. We've decided to focus on households rather than agriculture, because agriculture is too big a topic for fifteen minutes.
Tutor: Sensible. What will you start with?
Ben: We thought we'd open with a surprising statistic — how much water a typical family uses in a day. Then we'll show where most of it goes.
Tutor: And where does most of it go?
Aziza: According to the survey we found, the biggest share is the shower, not the toilet, which surprised us.
Tutor: Interesting. Where did that survey come from?
Ben: A university study from twenty twenty-two. We'll put the reference on the last slide.
Tutor: Good. Now, how are you dividing the work?
Aziza: I'll present the problem and the statistics, and Ben will talk about solutions.
Ben: Yes, I'm going to compare three devices: low-flow shower heads, dual-flush toilets and tap aerators. I'll give the cost of each and the amount of water it saves.
Tutor: Will you include anything interactive? Audiences remember more when they take part.
Aziza: We were thinking of a short quiz at the beginning, but maybe it's better at the end, as a review.
Tutor: I'd keep it at the end. One concern: your slides have too much text. Try to use more charts.
Ben: That's fair. Aziza is better at design, so she'll redo the slides.
Aziza: And we still need to practise. We're meeting in the library on Wednesday to rehearse.
Tutor: Make sure you time yourselves. Last year several groups went over the limit and lost marks.
Ben: How many marks is the presentation worth?
Tutor: Forty percent of the module. The written report is the other sixty.`,
        questions: [
          { id: 'ml21', type: 'single', prompt: '21. Why did the students choose households?', options: ['Agriculture is too big a topic.', 'The tutor told them to.', 'There was no data on agriculture.', 'Households use more water.'], answer: 0 },
          { id: 'ml22', type: 'fill', prompt: '22. The presentation will last ___ minutes.', answer: ['15', 'fifteen'] },
          { id: 'ml23', type: 'single', prompt: '23. They will open the presentation with …', options: ['a quiz', 'a surprising statistic', 'a video', 'a personal story'], answer: 1 },
          { id: 'ml24', type: 'single', prompt: '24. According to the survey, most household water is used by …', options: ['the toilet', 'the shower', 'the washing machine', 'cooking'], answer: 1 },
          { id: 'ml25', type: 'fill', prompt: '25. The survey was published in ___.', answer: ['2022', 'twenty twenty-two'] },
          { id: 'ml26', type: 'single', prompt: '26. Ben will talk about …', options: ['the problem', 'statistics', 'solutions', 'the history of water use'], answer: 2 },
          { id: 'ml27', type: 'fill', prompt: '27. Ben will compare ___ devices.', answer: ['3', 'three'] },
          { id: 'ml28', type: 'single', prompt: '28. Where will the quiz be?', options: ['at the beginning', 'in the middle', 'at the end', 'there will be no quiz'], answer: 2, explanation: 'Avval boshida deyishdi, keyin tutor “keep it at the end” dedi.' },
          { id: 'ml29', type: 'single', prompt: '29. Who will redo the slides?', options: ['Ben', 'Aziza', 'the tutor', 'both students'], answer: 1 },
          { id: 'ml30', type: 'fill', prompt: '30. The presentation is worth ___ percent of the module.', answer: ['40', 'forty'] },
        ],
      },
      {
        title: 'Part 4 · Lecture: The psychology of colour',
        intro: 'You will hear part of a lecture on how colour affects people. Questions 31–40.',
        script: `Today I'd like to look at what psychologists know — and don't know — about the effects of colour on human behaviour.

Let's begin with a popular belief: that red makes people more aggressive or excited. There is some evidence for this. In a number of sports studies, athletes wearing red won slightly more often than those in blue, although the effect was small and appeared mainly in combat sports such as wrestling.

Blue, by contrast, is often associated with calm and trust, which is why it is so common in bank logos. But we should be careful. Much of this association appears to be learned rather than natural. In some cultures, for example, white is the colour of celebration, while in others it is linked to mourning.

A more reliable finding concerns the workplace. Researchers have found that people working in rooms painted entirely in grey or beige reported lower mood than those in rooms with some colour. Interestingly, however, the most productive rooms were not the brightest. Very intense colours on every wall seemed to be distracting.

Colour also affects how we perceive taste. In one experiment, participants were given identical drinks coloured either orange or green. Most of them described the orange drink as sweeter, even though the two contained exactly the same amount of sugar. Food companies are, of course, well aware of this.

Finally, a word on methodology. Many early colour studies used very small samples, often fewer than thirty people, and their results have been hard to repeat. So, in the next part of the course, we will examine how to design experiments that avoid these problems.`,
        questions: [
          { id: 'ml31', type: 'single', prompt: '31. In sports studies, the advantage of wearing red was …', options: ['large in all sports', 'small, mainly in combat sports', 'only seen in football', 'not found at all'], answer: 1 },
          { id: 'ml32', type: 'fill', prompt: '32. The red effect appeared mainly in sports such as ___.', answer: 'wrestling' },
          { id: 'ml33', type: 'fill', prompt: '33. Blue is common in the logos of ___.', answer: ['banks', 'bank'] },
          { id: 'ml34', type: 'single', prompt: '34. The lecturer suggests that the link between blue and trust is …', options: ['biological', 'mostly learned', 'proven by many studies', 'only true in Asia'], answer: 1 },
          { id: 'ml35', type: 'single', prompt: '35. What example does the lecturer give of a learned colour meaning?', options: ['red in sport', 'white in different cultures', 'grey offices', 'orange drinks'], answer: 1 },
          { id: 'ml36', type: 'single', prompt: '36. Workers in grey or beige rooms reported …', options: ['higher productivity', 'lower mood', 'more headaches', 'better concentration'], answer: 1 },
          { id: 'ml37', type: 'single', prompt: '37. The most productive rooms were …', options: ['the brightest ones', 'completely grey', 'not the brightest', 'painted red'], answer: 2 },
          { id: 'ml38', type: 'fill', prompt: '38. Most participants thought the ___ drink was sweeter.', answer: 'orange' },
          { id: 'ml39', type: 'single', prompt: '39. The two drinks contained …', options: ['different amounts of sugar', 'the same amount of sugar', 'no sugar', 'different fruits'], answer: 1 },
          { id: 'ml40', type: 'fill', prompt: '40. Many early studies used samples of fewer than ___ people.', answer: ['30', 'thirty'] },
        ],
      },
    ],
  },

  reading: {
    kind: 'reading', title: 'IELTS Academic Reading — Mock Test 1', minutes: 60,
    sections: [
      {
        title: 'Passage 1 · The Revival of Hand-Woven Silk',
        intro: 'Questions 1–13. You should spend about 20 minutes on this passage.',
        text: `For centuries, the Fergana Valley was famous for its hand-woven silk, in particular the colourful fabric known as ikat. The technique is unusual: instead of dyeing the finished cloth, weavers dye the threads before weaving, tying tight bundles around sections of the yarn so that the dye cannot reach them. When the threads are finally placed on the loom, the patterns appear with their characteristic soft, slightly blurred edges.

During the twentieth century, however, the craft declined sharply. Large factories produced cheaper machine-made textiles, and many families abandoned weaving in favour of more reliable jobs. By the 1980s, only a small number of elderly masters still knew the full process, from raising silkworms to finishing the cloth.

The revival began in the 1990s, partly thanks to growing interest from foreign visitors and designers. Workshops in the town of Margilan started to offer demonstrations, and tourists who watched the slow, careful work were often willing to pay high prices for the results. A single scarf can take several days to produce, and a large piece of fabric may require weeks.

Today, young people are once again learning the craft, often from their grandparents. Some workshops have introduced formal apprenticeships lasting around two years. Natural dyes, made from plants such as pomegranate skin and walnut shells, have also returned, although many producers still use synthetic dyes for brighter colours.

Not everyone is optimistic. Critics point out that cheap printed imitations, which copy ikat patterns without using the traditional technique, are widely sold in markets and are difficult for buyers to distinguish from the real thing. Some weavers have responded by attaching labels that explain how each piece was made. Others argue that the best protection is education: once customers understand the difference, they are less likely to accept a copy.`,
        questions: [
          { id: 'mr1', type: 'single', prompt: '1. In ikat weaving, the cloth is dyed after it has been woven.', options: tfng, answer: 1 },
          { id: 'mr2', type: 'single', prompt: '2. Ikat patterns have sharp, precise edges.', options: tfng, answer: 1 },
          { id: 'mr3', type: 'single', prompt: '3. Factory textiles were cheaper than hand-woven silk.', options: tfng, answer: 0 },
          { id: 'mr4', type: 'single', prompt: '4. The government banned home weaving in the twentieth century.', options: tfng, answer: 2 },
          { id: 'mr5', type: 'single', prompt: '5. Foreign interest helped the craft to recover.', options: tfng, answer: 0 },
          { id: 'mr6', type: 'single', prompt: '6. Most tourists in Margilan buy large pieces of fabric.', options: tfng, answer: 2 },
          { id: 'mr7', type: 'single', prompt: '7. All producers have stopped using synthetic dyes.', options: tfng, answer: 1 },
          { id: 'mr8', type: 'fill', prompt: '8. Weavers tie tight ___ around parts of the yarn. (ONE WORD)', answer: 'bundles' },
          { id: 'mr9', type: 'fill', prompt: '9. By the 1980s, only a few elderly ___ knew the whole process. (ONE WORD)', answer: 'masters' },
          { id: 'mr10', type: 'fill', prompt: '10. A single scarf can take several ___ to make. (ONE WORD)', answer: 'days' },
          { id: 'mr11', type: 'fill', prompt: '11. Some apprenticeships last about ___ years. (NUMBER)', answer: ['2', 'two'] },
          { id: 'mr12', type: 'fill', prompt: '12. Natural dyes come from pomegranate skin and ___ shells. (ONE WORD)', answer: 'walnut' },
          { id: 'mr13', type: 'fill', prompt: '13. Some weavers attach ___ explaining how a piece was made. (ONE WORD)', answer: 'labels' },
        ],
      },
      {
        title: 'Passage 2 · Farming in the City',
        intro: 'Questions 14–26. You should spend about 20 minutes on this passage.',
        text: `A. As cities grow, planners are increasingly asking whether some of the food urban residents eat could be grown within the city itself. Urban agriculture is not new — city dwellers have always kept small gardens — but recent years have seen a wave of more ambitious projects, from rooftop farms to vertical farms housed in former warehouses.

B. Vertical farms grow crops in stacked layers under artificial light, usually without soil. Plants receive water and nutrients through hydroponic systems that recycle most of the water used. Supporters claim that such farms can use up to ninety percent less water than conventional fields and that, because they are indoors, they need no pesticides. They can also produce harvests all year round, regardless of the weather.

C. The main obstacle is energy. Sunlight is free, but artificial lighting is not, and the electricity required to grow crops indoors can make vertical farming expensive. For this reason, most vertical farms concentrate on leafy greens and herbs, which grow quickly and sell at high prices. Staple crops such as wheat or rice would be far too costly to produce in this way.

D. Rooftop and community gardens face different challenges. They rely on natural light and are therefore cheaper to run, but space is limited and yields are relatively small. Their value, many researchers argue, lies less in the quantity of food they produce than in their social benefits. Community gardens can bring neighbours together, provide green space in crowded districts and teach children where food comes from.

E. There are environmental arguments too. Food grown close to consumers travels shorter distances, which reduces transport emissions, although some studies suggest that transport accounts for only a small share of the total carbon footprint of most foods. Green roofs can also help to cool buildings in summer and absorb rainwater during storms.

F. Urban agriculture is therefore unlikely to feed entire cities. Its supporters, however, rarely claim that it will. Instead, they see it as one part of a wider food system — a way of making cities more resilient, more attractive and more aware of the resources they consume.`,
        questions: [
          { id: 'mr14', type: 'single', prompt: '14. Which paragraph describes how vertical farms work?', options: ['A', 'B', 'C', 'D'], answer: 1 },
          { id: 'mr15', type: 'single', prompt: '15. Which paragraph explains the main cost problem of vertical farms?', options: ['B', 'C', 'D', 'E'], answer: 1 },
          { id: 'mr16', type: 'single', prompt: '16. Which paragraph focuses on social benefits?', options: ['C', 'D', 'E', 'F'], answer: 1 },
          { id: 'mr17', type: 'single', prompt: '17. Which paragraph mentions cooling buildings?', options: ['B', 'C', 'D', 'E'], answer: 3 },
          { id: 'mr18', type: 'single', prompt: '18. Vertical farms mainly grow leafy greens and herbs because …', options: ['they need little water', 'they grow fast and sell at high prices', 'customers refuse other crops', 'wheat cannot grow without soil'], answer: 1 },
          { id: 'mr19', type: 'single', prompt: '19. According to the writer, the main value of community gardens is …', options: ['the large amount of food they produce', 'their low cost', 'their social benefits', 'their effect on prices'], answer: 2 },
          { id: 'mr20', type: 'single', prompt: '20. What does the writer say about transport emissions?', options: ['They are the largest part of food’s carbon footprint.', 'Some studies suggest they are a small share.', 'Urban farms increase them.', 'They have never been measured.'], answer: 1 },
          { id: 'mr21', type: 'single', prompt: '21. Supporters say vertical farms can use up to 90% less water than conventional fields.', options: tfng, answer: 0 },
          { id: 'mr22', type: 'single', prompt: '22. Vertical farms require pesticides because insects enter warehouses.', options: tfng, answer: 1 },
          { id: 'mr23', type: 'single', prompt: '23. Rooftop gardens are more expensive to run than vertical farms.', options: tfng, answer: 1, explanation: '“They rely on natural light and are therefore cheaper to run.”' },
          { id: 'mr24', type: 'single', prompt: '24. Supporters of urban agriculture believe it can feed whole cities.', options: tfng, answer: 1, explanation: '“Its supporters, however, rarely claim that it will.”' },
          { id: 'mr25', type: 'fill', prompt: '25. Vertical farms grow plants in stacked ___ under artificial light. (ONE WORD)', answer: 'layers' },
          { id: 'mr26', type: 'fill', prompt: '26. Green roofs can absorb ___ during storms. (ONE WORD)', answer: 'rainwater' },
        ],
      },
      {
        title: 'Passage 3 · Why We Put Things Off',
        intro: 'Questions 27–40. You should spend about 20 minutes on this passage.',
        text: `Almost everyone procrastinates at some point, delaying a task even though they know that the delay is likely to make things worse. For a long time, procrastination was treated as a problem of time management: people were simply thought to be poor at planning. Over the past two decades, however, psychologists have increasingly come to see it as a problem of emotion regulation rather than organisation.

According to this view, we avoid certain tasks because they make us feel bad — bored, anxious, confused or afraid of failure. Putting the task off brings immediate relief, and that relief acts as a reward, making us more likely to delay again next time. In other words, procrastination is a short-term strategy for improving mood, achieved at the cost of long-term goals.

This explains why procrastinators are not necessarily lazy. Many work very hard on other activities, such as tidying their room or answering emails, while avoiding the one task that matters most. It also explains why simply giving people a better calendar rarely solves the problem. If the underlying emotion is not addressed, the avoidance continues.

Research has also examined the role of the 'future self'. In brain-imaging studies, people who procrastinated more tended to think about themselves in the future in a way that resembled thinking about a stranger. If the person who will suffer the consequences of delay feels like someone else, it becomes easier to leave the work for 'them'.

Several practical techniques follow from these findings. One is to make the first step extremely small — for example, deciding to write a single sentence rather than an entire essay. Once people start, the negative feelings often fade. A second technique is self-compassion. In one study of university students, those who forgave themselves for procrastinating before a first exam procrastinated less before the next one. Harsh self-criticism, it seems, adds to the bad feelings that caused the delay in the first place.

Finally, changing the environment can help. Removing distractions, such as keeping a phone in another room, reduces the number of easy escapes available. None of these methods is a cure, but together they suggest that the key to overcoming procrastination lies less in willpower than in understanding why a task feels unpleasant.`,
        questions: [
          { id: 'mr27', type: 'single', prompt: '27. Psychologists now mainly view procrastination as a problem of …', options: ['time management', 'emotion regulation', 'intelligence', 'physical tiredness'], answer: 1 },
          { id: 'mr28', type: 'single', prompt: '28. Delaying a task makes us more likely to delay again because …', options: ['we forget the task', 'the relief acts as a reward', 'other people encourage us', 'tasks become easier later'], answer: 1 },
          { id: 'mr29', type: 'single', prompt: '29. The writer mentions tidying a room to show that procrastinators …', options: ['are lazy', 'can still work hard on other things', 'enjoy cleaning', 'need better calendars'], answer: 1 },
          { id: 'mr30', type: 'single', prompt: '30. In brain-imaging studies, heavy procrastinators thought of their future self as …', options: ['a close friend', 'a stranger', 'a hero', 'a child'], answer: 1 },
          { id: 'mr31', type: 'single', prompt: '31. What is the writer’s main conclusion?', options: ['Willpower is the most important factor.', 'Procrastination cannot be reduced.', 'Understanding why a task feels unpleasant is key.', 'Calendars solve most problems.'], answer: 2 },
          { id: 'mr32', type: 'single', prompt: '32. Procrastination was once seen as a planning problem.', options: tfng, answer: 0 },
          { id: 'mr33', type: 'single', prompt: '33. Fear of failure is one reason people avoid tasks.', options: tfng, answer: 0 },
          { id: 'mr34', type: 'single', prompt: '34. Better calendars usually solve procrastination.', options: tfng, answer: 1 },
          { id: 'mr35', type: 'single', prompt: '35. Women procrastinate more than men.', options: tfng, answer: 2 },
          { id: 'mr36', type: 'single', prompt: '36. Students who forgave themselves procrastinated less before the next exam.', options: tfng, answer: 0 },
          { id: 'mr37', type: 'fill', prompt: '37. Putting a task off brings immediate ___. (ONE WORD)', answer: 'relief' },
          { id: 'mr38', type: 'fill', prompt: '38. One technique is to make the first ___ very small. (ONE WORD)', answer: 'step' },
          { id: 'mr39', type: 'fill', prompt: '39. Harsh self-___ adds to the bad feelings. (ONE WORD)', answer: 'criticism' },
          { id: 'mr40', type: 'fill', prompt: '40. Keeping a phone in another room removes ___. (ONE WORD)', answer: ['distractions', 'distraction'] },
        ],
      },
    ],
  },

  'listening-2': {
    kind: 'listening', title: 'IELTS Listening — Mock Test 2', minutes: 30,
    sections: [
      {
        title: 'Part 1 · Renting a flat',
        intro: 'You will hear a student calling about a flat to rent. Questions 1–10.',
        script: `Landlord: Hello, Rustam speaking.
Student: Hi, I'm calling about the flat advertised on the university website. Is it still available?
Landlord: Yes, it is. It's a two-bedroom flat on the fourth floor, near Oybek metro station.
Student: Is there a lift?
Landlord: There is, but it's quite old, so sometimes it doesn't work.
Student: I see. How much is the rent?
Landlord: Four million two hundred thousand sum a month. Electricity and gas are extra, but water and internet are included.
Student: And is a deposit required?
Landlord: Yes, one month's rent, which you get back when you leave if there's no damage.
Student: Is the flat furnished?
Landlord: Mostly. There are beds, a sofa and a wardrobe, but you'd need to buy your own desk.
Student: That's fine. What about the kitchen?
Landlord: There's a cooker and a fridge. Unfortunately there's no washing machine yet, but I'm planning to buy one next month.
Student: When could I move in?
Landlord: From the first of September. The minimum contract is six months.
Student: Could I come and see it?
Landlord: Of course. How about Thursday at five thirty?
Student: Perfect. My name's Nilufar Saidova — that's S-A-I-D-O-V-A.
Landlord: Great, Nilufar. See you on Thursday.`,
        questions: [
          { id: 'n2l1', type: 'fill', prompt: '1. Number of bedrooms: ___', answer: ['2', 'two'] },
          { id: 'n2l2', type: 'fill', prompt: '2. Floor: ___ (raqam bilan)', answer: ['4', '4th', 'fourth'] },
          { id: 'n2l3', type: 'fill', prompt: '3. Nearest metro station: ___', answer: 'Oybek' },
          { id: 'n2l4', type: 'single', prompt: '4. Which bills are included in the rent?', options: ['electricity and gas', 'water and internet', 'all bills', 'none'], answer: 1 },
          { id: 'n2l5', type: 'single', prompt: '5. The deposit is …', options: ['one month’s rent', 'two months’ rent', 'not required', 'non-refundable'], answer: 0 },
          { id: 'n2l6', type: 'fill', prompt: '6. The student must buy her own ___.', answer: 'desk' },
          { id: 'n2l7', type: 'single', prompt: '7. What is missing from the kitchen now?', options: ['a cooker', 'a fridge', 'a washing machine', 'a sink'], answer: 2 },
          { id: 'n2l8', type: 'fill', prompt: '8. Minimum contract: ___ months', answer: ['6', 'six'] },
          { id: 'n2l9', type: 'single', prompt: '9. When will she view the flat?', options: ['Tuesday at 5:30', 'Thursday at 5:30', 'Thursday at 3:30', 'Saturday morning'], answer: 1 },
          { id: 'n2l10', type: 'fill', prompt: '10. Student’s surname: ___', answer: 'Saidova' },
        ],
      },
      {
        title: 'Part 2 · Welcome to a national park',
        intro: 'You will hear a park ranger speaking to a group of visitors. Questions 11–20.',
        script: `Good morning, everyone, and welcome to the national park. My name is Farhod and I'm one of the rangers here. Before you set off, I'd like to give you some important information.

The park covers about five hundred square kilometres of mountains, forests and rivers. It was established in nineteen ninety-two to protect rare animals such as the snow leopard, although I should say that visitors almost never see one — they are extremely shy.

There are three marked walking routes. The red route is the shortest, about four kilometres, and is suitable for families with young children. The blue route goes up to the waterfall and takes around three hours there and back. The black route is for experienced walkers only, as it involves steep climbs, and you must register at the visitor centre before you start.

A few rules. Fires are allowed only in the barbecue areas near the main car park. Please take all your rubbish home with you — there are no bins on the routes, because they attract bears. Drones are not permitted anywhere in the park without written permission.

The visitor centre is open from eight until six, and it has a small museum and a shop selling maps. If you get lost or need help, call the emergency number written on the back of your ticket. Mobile signal is weak in some valleys, so we recommend staying on the marked routes.

Finally, the shuttle bus back to the city leaves from the car park at four thirty. It doesn't wait, so please don't be late.`,
        questions: [
          { id: 'n2l11', type: 'fill', prompt: '11. The park covers about ___ square kilometres.', answer: ['500', 'five hundred'] },
          { id: 'n2l12', type: 'fill', prompt: '12. The park was established in ___.', answer: ['1992', 'nineteen ninety-two'] },
          { id: 'n2l13', type: 'single', prompt: '13. What does the ranger say about snow leopards?', options: ['They are dangerous.', 'Visitors rarely see them.', 'They live near the car park.', 'They were brought from abroad.'], answer: 1 },
          { id: 'n2l14', type: 'single', prompt: '14. Which route is best for young children?', options: ['red', 'blue', 'black', 'none'], answer: 0 },
          { id: 'n2l15', type: 'fill', prompt: '15. The blue route goes to the ___.', answer: 'waterfall' },
          { id: 'n2l16', type: 'single', prompt: '16. Before starting the black route, walkers must …', options: ['buy a map', 'register at the visitor centre', 'hire a guide', 'pay extra'], answer: 1 },
          { id: 'n2l17', type: 'single', prompt: '17. Why are there no bins on the routes?', options: ['They are expensive.', 'They attract bears.', 'Nobody uses them.', 'They are not allowed by law.'], answer: 1 },
          { id: 'n2l18', type: 'fill', prompt: '18. ___ are not allowed without written permission.', answer: ['drones', 'drone'] },
          { id: 'n2l19', type: 'single', prompt: '19. The emergency number is …', options: ['in the museum', 'on the back of the ticket', 'on the shuttle bus', 'on the map only'], answer: 1 },
          { id: 'n2l20', type: 'fill', prompt: '20. The shuttle bus leaves at ___ (masalan 4:30).', answer: ['4:30', '4.30', 'four thirty'] },
        ],
      },
      {
        title: 'Part 3 · Discussing a field-trip report',
        intro: 'You will hear two students, Malika and Sam, discussing their report on air quality with their tutor. Questions 21–30.',
        script: `Tutor: Right, let's look at your air-quality report. How did the data collection go?
Malika: Mostly well. We measured air quality at six locations around the city over two weeks.
Tutor: Six? I thought you planned eight.
Sam: We did, but two of the sensors stopped working after the first day, so we had to leave those sites out.
Tutor: That's fine, as long as you explain it in the limitations section. What did you find?
Malika: The worst readings were next to the ring road, which we expected. What surprised us was that the area near the new shopping centre was almost as bad.
Tutor: Why do you think that was?
Sam: Probably the car park. Thousands of cars come and go every day, and there's a lot of waiting traffic.
Tutor: And the best readings?
Malika: In the botanical garden, by a long way. The trees seem to make a real difference.
Tutor: Good. Now, your graphs are clear, but your introduction is too long. It's almost a third of the report.
Sam: We could move the background on health effects into an appendix.
Tutor: That would work. I'd also like to see more comparison with other cities. Have you found any published studies?
Malika: Only one, from Almaty. Sam's going to look for more in the university database this week.
Tutor: And who's writing the conclusion?
Sam: Malika is. She's better at summarising.
Tutor: Fine. The final deadline is next Friday, and remember the word limit is three thousand words, excluding the appendix.`,
        questions: [
          { id: 'n2l21', type: 'fill', prompt: '21. Air quality was measured at ___ locations.', answer: ['6', 'six'] },
          { id: 'n2l22', type: 'single', prompt: '22. Why were two sites left out?', options: ['They were too far away.', 'The sensors stopped working.', 'The tutor rejected them.', 'They had no traffic.'], answer: 1 },
          { id: 'n2l23', type: 'single', prompt: '23. The limitation should be explained …', options: ['in the introduction', 'in the limitations section', 'in the appendix', 'in an email'], answer: 1 },
          { id: 'n2l24', type: 'single', prompt: '24. What surprised the students?', options: ['the ring road readings', 'poor air near the shopping centre', 'clean air in the city centre', 'the weather'], answer: 1 },
          { id: 'n2l25', type: 'fill', prompt: '25. Sam thinks the cause was the ___ park.', answer: 'car' },
          { id: 'n2l26', type: 'fill', prompt: '26. The best readings were in the ___ garden.', answer: 'botanical' },
          { id: 'n2l27', type: 'single', prompt: '27. What is the tutor’s criticism?', options: ['The graphs are unclear.', 'The introduction is too long.', 'There is no data.', 'The conclusion is missing.'], answer: 1 },
          { id: 'n2l28', type: 'fill', prompt: '28. Background on health effects will move to an ___.', answer: 'appendix' },
          { id: 'n2l29', type: 'single', prompt: '29. Who will write the conclusion?', options: ['Sam', 'Malika', 'the tutor', 'both'], answer: 1 },
          { id: 'n2l30', type: 'fill', prompt: '30. Word limit: ___ words', answer: ['3000', '3,000', 'three thousand'] },
        ],
      },
      {
        title: 'Part 4 · Lecture: The history of the bicycle',
        intro: 'You will hear part of a lecture on the development of the bicycle. Questions 31–40.',
        script: `In today's lecture I'll trace the history of the bicycle, a machine that seems simple but took nearly a century to reach its modern form.

The earliest ancestor appeared in Germany in eighteen seventeen. Known as the running machine, it had two wheels but no pedals: riders pushed themselves along with their feet. It was invented partly in response to a shortage of horses after a failed harvest, which made feeding animals expensive.

In the eighteen sixties, pedals were attached directly to the front wheel. This created a problem: the only way to go faster was to make the front wheel larger. The result was the famous penny-farthing, with a front wheel that could be more than one and a half metres high. It was fast but dangerous, and falls were common, so riding it was mainly a sport for young, wealthy men.

The real breakthrough came in the eighteen eighties with the so-called safety bicycle. It had two wheels of equal size and, crucially, a chain that connected the pedals to the rear wheel. This allowed speed without a huge wheel. Shortly afterwards, air-filled rubber tyres made riding far more comfortable.

The social impact was remarkable. The bicycle was the first affordable form of personal transport, and it gave many women a new independence, allowing them to travel without an escort. It even influenced fashion, as heavy skirts were replaced by more practical clothing.

Today, cities are rediscovering the bicycle as a solution to congestion and pollution. Next week we'll look at how cities such as Copenhagen have designed their streets around it.`,
        questions: [
          { id: 'n2l31', type: 'fill', prompt: '31. The first running machine appeared in ___ (country).', answer: 'Germany' },
          { id: 'n2l32', type: 'fill', prompt: '32. It appeared in the year ___.', answer: ['1817', 'eighteen seventeen'] },
          { id: 'n2l33', type: 'single', prompt: '33. The running machine had no …', options: ['wheels', 'seat', 'pedals', 'frame'], answer: 2 },
          { id: 'n2l34', type: 'single', prompt: '34. Why was it invented partly?', options: ['a shortage of horses', 'a new road law', 'a sports competition', 'cheap steel'], answer: 0 },
          { id: 'n2l35', type: 'single', prompt: '35. Why did penny-farthings have a huge front wheel?', options: ['for comfort', 'to go faster', 'to carry luggage', 'for safety'], answer: 1 },
          { id: 'n2l36', type: 'single', prompt: '36. Who mainly rode penny-farthings?', options: ['children', 'young wealthy men', 'women', 'farmers'], answer: 1 },
          { id: 'n2l37', type: 'fill', prompt: '37. The safety bicycle used a ___ to drive the rear wheel.', answer: 'chain' },
          { id: 'n2l38', type: 'fill', prompt: '38. Air-filled rubber ___ made riding more comfortable.', answer: ['tyres', 'tires'] },
          { id: 'n2l39', type: 'single', prompt: '39. For many women, the bicycle provided …', options: ['a new job', 'independence', 'a hobby only', 'higher status'], answer: 1 },
          { id: 'n2l40', type: 'fill', prompt: '40. Next week’s lecture will discuss the city of ___.', answer: 'Copenhagen' },
        ],
      },
    ],
  },

  'reading-2': {
    kind: 'reading', title: 'IELTS Academic Reading — Mock Test 2', minutes: 60,
    sections: [
      {
        title: 'Passage 1 · A Forest on the Seabed',
        intro: 'Questions 1–13. You should spend about 20 minutes on this passage.',
        text: `As the Aral Sea retreated over the second half of the twentieth century, it left behind tens of thousands of square kilometres of dry seabed. This new desert, now often called the Aralkum, is covered with salt and fine dust left by agricultural chemicals. Strong winds lift this material into the air, carrying it hundreds of kilometres and contributing to breathing problems among people living in the region.

One response has been to plant vegetation that can hold the soil in place. The most widely used plant is the saxaul, a hardy shrub or small tree native to Central Asian deserts. Saxaul is remarkably well adapted to harsh conditions: its roots can reach depths of more than ten metres in search of water, and its small, scale-like leaves lose very little moisture. A single mature plant is said to be able to fix several tonnes of sand around it.

Planting began on a small scale decades ago, but it has expanded significantly in recent years. Seeds and young plants are sown in late autumn and winter, when the soil contains more moisture. Workers often travel long distances to reach planting sites, and in some areas aircraft have been used to scatter seeds over large territories.

The results are mixed. In places where young plants have survived, they have visibly reduced the movement of sand and created conditions in which other species can begin to grow. However, survival rates vary greatly depending on the salt content of the soil, and in the most saline areas many seedlings die within the first year.

Scientists stress that planting forests on the former seabed cannot bring back the sea itself. Its purpose is more limited: to reduce dust storms and make the landscape more stable. Even so, many local residents regard the green patches spreading across the old seabed as a symbol of hope.`,
        questions: [
          { id: 'n2r1', type: 'single', prompt: '1. The dry seabed is covered with salt and dust.', options: tfng, answer: 0 },
          { id: 'n2r2', type: 'single', prompt: '2. Dust from the Aralkum travels only a few kilometres.', options: tfng, answer: 1 },
          { id: 'n2r3', type: 'single', prompt: '3. Saxaul was brought to Central Asia from another continent.', options: tfng, answer: 1, explanation: '“native to Central Asian deserts” — mahalliy o‘simlik.' },
          { id: 'n2r4', type: 'single', prompt: '4. Saxaul leaves lose a lot of water.', options: tfng, answer: 1 },
          { id: 'n2r5', type: 'single', prompt: '5. Planting usually takes place in summer.', options: tfng, answer: 1 },
          { id: 'n2r6', type: 'single', prompt: '6. Planting workers are paid more than other farm workers.', options: tfng, answer: 2 },
          { id: 'n2r7', type: 'single', prompt: '7. Seedling survival depends on how salty the soil is.', options: tfng, answer: 0 },
          { id: 'n2r8', type: 'single', prompt: '8. Scientists believe the forests will bring the sea back.', options: tfng, answer: 1 },
          { id: 'n2r9', type: 'fill', prompt: '9. The new desert is often called the ___. (ONE WORD)', answer: 'Aralkum' },
          { id: 'n2r10', type: 'fill', prompt: '10. Saxaul roots can reach depths of more than ___ metres. (NUMBER)', answer: ['10', 'ten'] },
          { id: 'n2r11', type: 'fill', prompt: '11. In some areas, ___ have been used to scatter seeds. (ONE WORD)', answer: 'aircraft' },
          { id: 'n2r12', type: 'fill', prompt: '12. In very saline areas many seedlings die within the first ___. (ONE WORD)', answer: 'year' },
          { id: 'n2r13', type: 'fill', prompt: '13. Local residents see the green patches as a symbol of ___. (ONE WORD)', answer: 'hope' },
        ],
      },
      {
        title: 'Passage 2 · How Languages Borrow Words',
        intro: 'Questions 14–26. You should spend about 20 minutes on this passage.',
        text: `A. No language exists in isolation. Whenever speakers of different languages come into contact — through trade, migration, conquest or, more recently, the internet — words travel between them. Linguists call these words loanwords, although the term is slightly misleading, since a borrowed word is never given back.

B. English is a particularly enthusiastic borrower. Estimates vary, but a large proportion of its vocabulary comes from French and Latin, much of it following the Norman Conquest of 1066, when French became the language of the ruling class. This history still shapes the language today: everyday words such as 'cow' and 'pig' are of English origin, while the words for the meat served at the table, 'beef' and 'pork', come from French.

C. Borrowing usually fills a gap. When a new object or idea arrives, it is often easier to adopt its foreign name than to invent a new one. Words such as 'coffee', 'tea' and 'algebra' entered European languages together with the things they describe. In Uzbek, too, many technical terms have been borrowed, first from Arabic and Persian, later from Russian and, today, increasingly from English.

D. Borrowed words rarely stay unchanged. Their pronunciation is adapted to the sound system of the new language, and their meaning may shift. Sometimes a word acquires a meaning it never had in the original language, creating so-called false friends, which can confuse learners.

E. Not everyone welcomes borrowing. In several countries, official bodies have tried to replace foreign words with native alternatives, with varying success. Some invented terms are accepted quickly; others are ignored by the public, who continue to use the borrowed form.

F. Most linguists, however, see borrowing as a natural sign of a living language rather than a threat. Languages that borrow heavily, such as English, have not lost their identity; instead, they have gained a richer vocabulary and greater flexibility of expression.`,
        questions: [
          { id: 'n2r14', type: 'single', prompt: '14. Which paragraph explains why the term "loanword" is not quite accurate?', options: ['A', 'B', 'C', 'D'], answer: 0 },
          { id: 'n2r15', type: 'single', prompt: '15. Which paragraph gives an example linked to food and social class?', options: ['A', 'B', 'C', 'E'], answer: 1 },
          { id: 'n2r16', type: 'single', prompt: '16. Which paragraph describes efforts to replace foreign words?', options: ['B', 'C', 'D', 'E'], answer: 3 },
          { id: 'n2r17', type: 'single', prompt: '17. Which paragraph mentions false friends?', options: ['C', 'D', 'E', 'F'], answer: 1 },
          { id: 'n2r18', type: 'single', prompt: '18. According to paragraph C, borrowing usually happens because …', options: ['it is fashionable', 'a new object or idea needs a name', 'governments require it', 'native words are too long'], answer: 1 },
          { id: 'n2r19', type: 'single', prompt: '19. What happens to most borrowed words?', options: ['They stay exactly the same.', 'Their sound and meaning may change.', 'They disappear quickly.', 'They become official terms.'], answer: 1 },
          { id: 'n2r20', type: 'single', prompt: '20. Most linguists view borrowing as …', options: ['a threat to identity', 'a sign of a living language', 'a recent problem', 'something to be controlled'], answer: 1 },
          { id: 'n2r21', type: 'single', prompt: '21. French became the language of the ruling class after 1066.', options: tfng, answer: 0 },
          { id: 'n2r22', type: 'single', prompt: '22. The word "beef" comes from English.', options: tfng, answer: 1 },
          { id: 'n2r23', type: 'single', prompt: '23. Uzbek borrowed technical terms from Arabic before Russian.', options: tfng, answer: 0 },
          { id: 'n2r24', type: 'single', prompt: '24. All invented replacement words have been accepted by the public.', options: tfng, answer: 1 },
          { id: 'n2r25', type: 'fill', prompt: '25. Words such as coffee and ___ entered Europe together with the things they describe. (ONE WORD, not "tea")', answer: 'algebra' },
          { id: 'n2r26', type: 'fill', prompt: '26. Heavy borrowing gives a language a richer ___. (ONE WORD)', answer: 'vocabulary' },
        ],
      },
      {
        title: 'Passage 3 · The Attention Economy',
        intro: 'Questions 27–40. You should spend about 20 minutes on this passage.',
        text: `In 1971, the economist Herbert Simon observed that a wealth of information creates a poverty of attention. Half a century later, his remark seems prophetic. Smartphones, social networks and streaming services compete constantly for a resource that cannot be increased: the limited number of hours, and the limited focus, that each person has in a day. This competition is often described as the attention economy.

Many digital services are free to use because their real business is selling advertising. The longer users stay on a platform, the more advertisements they see and the more data the company can collect about their interests. As a result, designers have strong incentives to make products that are difficult to put down. Features such as endless scrolling, automatic playing of the next video and frequent notifications are not accidental; they are tested carefully to see which versions keep people engaged longest.

Critics argue that some of these techniques exploit weaknesses in human psychology. Notifications, for instance, arrive at unpredictable intervals, a pattern that psychologists know can be especially powerful in forming habits. Some former employees of technology companies have publicly expressed regret about features they helped to build.

The consequences are still debated. Some studies have linked heavy social-media use to anxiety and poor sleep, particularly among teenagers, while others find only small effects and warn that correlation does not prove causation. What seems clearer is that frequent interruptions make deep concentration more difficult: after switching away from a demanding task, people may need several minutes to return to the same level of focus.

Responses have come from several directions. Some governments are considering rules on design features aimed at children. Technology companies have introduced tools that show users how much time they spend on their devices, although critics doubt their effectiveness. Individuals, meanwhile, are experimenting with strategies such as turning off non-essential notifications, keeping phones out of bedrooms or switching their screens to black and white, which makes colourful apps less attractive.

Ultimately, the attention economy raises a question that goes beyond technology: who decides how we spend our time? Simon's insight suggests that, in an age of abundant information, protecting attention may be one of the most important skills a person can learn.`,
        questions: [
          { id: 'n2r27', type: 'single', prompt: '27. Herbert Simon’s remark is described as …', options: ['outdated', 'prophetic', 'confusing', 'exaggerated'], answer: 1 },
          { id: 'n2r28', type: 'single', prompt: '28. Many digital services are free because they …', options: ['are funded by governments', 'earn money from advertising', 'are run by volunteers', 'charge for data storage'], answer: 1 },
          { id: 'n2r29', type: 'single', prompt: '29. Features like endless scrolling are …', options: ['accidental', 'carefully tested', 'banned in some countries', 'unpopular with users'], answer: 1 },
          { id: 'n2r30', type: 'single', prompt: '30. Why are unpredictable notifications powerful?', options: ['They are loud.', 'They help form habits.', 'They are colourful.', 'They save time.'], answer: 1 },
          { id: 'n2r31', type: 'single', prompt: '31. What does the writer say is clearer than other effects?', options: ['Social media causes anxiety.', 'Interruptions make deep concentration harder.', 'Teenagers sleep more.', 'Time-tracking tools work well.'], answer: 1 },
          { id: 'n2r32', type: 'single', prompt: '32. Simon made his observation in 1971.', options: tfng, answer: 0 },
          { id: 'n2r33', type: 'single', prompt: '33. The amount of attention a person has can easily be increased.', options: tfng, answer: 1 },
          { id: 'n2r34', type: 'single', prompt: '34. Some former technology employees regret features they built.', options: tfng, answer: 0 },
          { id: 'n2r35', type: 'single', prompt: '35. All studies agree that social media causes anxiety.', options: tfng, answer: 1 },
          { id: 'n2r36', type: 'single', prompt: '36. Several countries have already banned endless scrolling.', options: tfng, answer: 2, explanation: 'Matnda faqat “considering rules” — taqiqlangani aytilmagan.' },
          { id: 'n2r37', type: 'fill', prompt: '37. Platforms collect ___ about users’ interests. (ONE WORD)', answer: 'data' },
          { id: 'n2r38', type: 'fill', prompt: '38. After switching tasks, people may need several ___ to refocus. (ONE WORD)', answer: 'minutes' },
          { id: 'n2r39', type: 'fill', prompt: '39. Some people keep phones out of ___. (ONE WORD)', answer: 'bedrooms' },
          { id: 'n2r40', type: 'fill', prompt: '40. Switching screens to black and ___ makes apps less attractive. (ONE WORD)', answer: 'white' },
        ],
      },
    ],
  },
  'listening-3': {
    kind: 'listening', title: 'IELTS Listening — Mock Test 3', minutes: 30,
    sections: [
      {
        title: 'Part 1 · Registering for a photography course',
        intro: 'You will hear a man calling a community centre. Questions 1–10.',
        script: `Receptionist: Riverside Community Centre, good afternoon.
Caller: Hello. I'm interested in the photography course for beginners.
Receptionist: Yes, it runs on Wednesday evenings from seven until nine.
Caller: How many weeks is it?
Receptionist: Eight weeks, starting on the twelfth of April.
Caller: And the price?
Receptionist: It's sixty-five pounds, or fifty for students and people over sixty.
Caller: I'm a student, so that's fifty. Do I need my own camera?
Receptionist: A phone camera is fine for the first few weeks, but for the second half of the course you'll need a digital camera. We can lend you one for a small fee.
Caller: Great. Where exactly is the class?
Receptionist: In the Art Room, on the second floor. Can I take your name?
Caller: It's Javlon Ergashev. That's E-R-G-A-S-H-E-V.
Receptionist: And your email?
Caller: javlon at mailbox dot com.
Receptionist: Thank you. Please bring a notebook to the first class.`,
        questions: [
          { id: 'n3l1', type: 'fill', prompt: '1. Day of the course: ___', answer: 'Wednesday' },
          { id: 'n3l2', type: 'fill', prompt: '2. Number of weeks: ___', answer: ['8', 'eight'] },
          { id: 'n3l3', type: 'fill', prompt: '3. Start date: the ___ of April', answer: ['twelfth', '12th', '12'] },
          { id: 'n3l4', type: 'fill', prompt: '4. Price the caller pays: £___', answer: ['50', 'fifty'] },
          { id: 'n3l5', type: 'single', prompt: '5. For the second half of the course students need …', options: ['a phone', 'a digital camera', 'a laptop', 'a tripod'], answer: 1 },
          { id: 'n3l6', type: 'single', prompt: '6. If students have no camera, the centre can …', options: ['sell one', 'lend one for a small fee', 'give one free', 'not help'], answer: 1 },
          { id: 'n3l7', type: 'fill', prompt: '7. Room: the ___ Room', answer: 'Art' },
          { id: 'n3l8', type: 'fill', prompt: '8. Floor: ___', answer: ['second', '2nd', '2'] },
          { id: 'n3l9', type: 'fill', prompt: '9. Surname: ___', answer: 'Ergashev' },
          { id: 'n3l10', type: 'fill', prompt: '10. Bring a ___ to the first class.', answer: 'notebook' },
        ],
      },
      {
        title: 'Part 2 · A new recycling scheme',
        intro: 'You will hear a council officer explaining a new recycling scheme. Questions 11–20.',
        script: `Good evening, everyone. Thank you for coming to hear about the new recycling scheme, which starts on the first of June. From that date, every household will receive three bins instead of one. The blue bin is for paper and cardboard, the green bin is for glass and metal, and the brown bin is for food waste. Plastic will be collected separately in special bags, which you can pick up free of charge from the library or the post office.
Collections will take place every Tuesday. Blue and green bins will be emptied every week, but general waste will now be collected only every two weeks. Please put your bins out after eight p.m. on Monday evening and bring them back in by Wednesday.
Large items such as old furniture or fridges are not collected from the street. Instead, you can book a collection online, and the first two items each year are free. We are also opening a repair café in the town hall on the last Saturday of every month, where volunteers will help you fix broken items so that they don't have to be thrown away.
Our target is to increase the recycling rate from thirty percent to fifty percent within three years.`,
        questions: [
          { id: 'n3l11', type: 'fill', prompt: '11. The scheme starts on the first of ___.', answer: 'June' },
          { id: 'n3l12', type: 'fill', prompt: '12. Each household will receive ___ bins.', answer: ['3', 'three'] },
          { id: 'n3l13', type: 'single', prompt: '13. The green bin is for …', options: ['paper', 'glass and metal', 'food waste', 'plastic'], answer: 1 },
          { id: 'n3l14', type: 'single', prompt: '14. Plastic bags are available from …', options: ['shops', 'the library or post office', 'the town hall', 'the council website'], answer: 1 },
          { id: 'n3l15', type: 'fill', prompt: '15. Collection day: ___', answer: 'Tuesday' },
          { id: 'n3l16', type: 'single', prompt: '16. General waste will be collected …', options: ['every week', 'every two weeks', 'every month', 'twice a week'], answer: 1 },
          { id: 'n3l17', type: 'fill', prompt: '17. Put bins out after ___ p.m. on Monday.', answer: ['8', 'eight'] },
          { id: 'n3l18', type: 'single', prompt: '18. How many large-item collections are free each year?', options: ['none', 'one', 'two', 'unlimited'], answer: 2 },
          { id: 'n3l19', type: 'fill', prompt: '19. The repair café is in the town ___.', answer: 'hall' },
          { id: 'n3l20', type: 'fill', prompt: '20. Target recycling rate: ___ %', answer: ['50', 'fifty'] },
        ],
      },
      {
        title: 'Part 3 · Choosing a dissertation method',
        intro: 'You will hear two students, Shoira and Tom, discussing their psychology project with their tutor. Questions 21–30.',
        script: `Tutor: So, have you agreed on the focus of your project?
Shoira: Yes, we want to look at whether listening to music helps students concentrate while studying.
Tom: We were going to compare music with and without lyrics.
Tutor: Good. How will you measure concentration?
Shoira: We'll give participants a reading comprehension test in three conditions: silence, instrumental music and songs with lyrics.
Tutor: Each participant does all three?
Tom: Yes, but on different days, so they don't get tired. And we'll change the order for each person.
Tutor: Excellent — that controls for practice effects. How many participants?
Shoira: We hope to recruit thirty, mostly first-year students.
Tutor: That's reasonable. Have you thought about the type of music?
Tom: We'd chosen pop music, but now we think classical piano might be better for the instrumental condition, because it has fewer sudden changes.
Tutor: Makes sense. What do you expect to find?
Shoira: Our hypothesis is that songs with lyrics will lower scores, because the words compete with the reading text.
Tutor: Good. Remember to get signed consent forms before you begin, and keep the data anonymous. Your proposal is due on the fifth of December.`,
        questions: [
          { id: 'n3l21', type: 'single', prompt: '21. The project investigates whether music …', options: ['improves sleep', 'helps concentration while studying', 'reduces stress at work', 'improves memory in children'], answer: 1 },
          { id: 'n3l22', type: 'fill', prompt: '22. Participants will take a reading ___ test.', answer: 'comprehension' },
          { id: 'n3l23', type: 'fill', prompt: '23. Number of conditions: ___', answer: ['3', 'three'] },
          { id: 'n3l24', type: 'single', prompt: '24. Why will participants do the tasks on different days?', options: ['to avoid tiredness', 'because of room bookings', 'to save money', 'the tutor insisted'], answer: 0 },
          { id: 'n3l25', type: 'single', prompt: '25. Changing the order for each person controls for …', options: ['noise', 'practice effects', 'age', 'music volume'], answer: 1 },
          { id: 'n3l26', type: 'fill', prompt: '26. Planned number of participants: ___', answer: ['30', 'thirty'] },
          { id: 'n3l27', type: 'fill', prompt: '27. Instrumental music will now be classical ___.', answer: 'piano' },
          { id: 'n3l28', type: 'single', prompt: '28. Why did they change from pop music?', options: ['It is too popular.', 'Classical piano has fewer sudden changes.', 'Pop music has no lyrics.', 'The tutor dislikes pop.'], answer: 1 },
          { id: 'n3l29', type: 'single', prompt: '29. Their hypothesis is that songs with lyrics will …', options: ['raise scores', 'lower scores', 'have no effect', 'help only first-year students'], answer: 1 },
          { id: 'n3l30', type: 'fill', prompt: '30. Proposal deadline: the ___ of December', answer: ['fifth', '5th', '5'] },
        ],
      },
      {
        title: 'Part 4 · Lecture: The history of maps',
        intro: 'You will hear part of a lecture about how maps have developed. Questions 31–40.',
        script: `Today I'm going to talk about the development of maps and what they reveal about the people who made them.
Some of the oldest surviving maps were carved on clay tablets in ancient Mesopotamia. They were not designed for navigation but to record property boundaries and the locations of cities, which tells us that land ownership was already an important concern.
For many centuries, maps reflected beliefs as much as geography. Medieval European maps often placed Jerusalem at the centre and included religious scenes, so their purpose was partly spiritual.
A major step forward came with the work of scholars in the Islamic world. In the twelfth century, the geographer al-Idrisi produced a world map based on reports from travellers and merchants, and it remained influential for three hundred years.
The age of European exploration brought a practical problem: how to show the curved surface of the Earth on a flat sheet. In fifteen sixty-nine, Gerardus Mercator published a projection in which lines of constant compass direction appear straight, which was extremely useful for sailors. However, it greatly exaggerates the size of land near the poles, so Greenland looks about as large as Africa, although Africa is actually around fourteen times bigger.
Today, digital maps on our phones are updated constantly using satellite images and data from millions of users. In the final part of today's lecture, we'll consider the privacy questions this raises.`,
        questions: [
          { id: 'n3l31', type: 'fill', prompt: '31. Early maps in Mesopotamia were carved on clay ___.', answer: ['tablets', 'tablet'] },
          { id: 'n3l32', type: 'single', prompt: '32. These early maps were mainly used to record …', options: ['sea routes', 'property boundaries and cities', 'stars', 'trade prices'], answer: 1 },
          { id: 'n3l33', type: 'single', prompt: '33. Medieval European maps often placed … at the centre.', options: ['Rome', 'Jerusalem', 'Athens', 'London'], answer: 1 },
          { id: 'n3l34', type: 'fill', prompt: '34. Al-Idrisi worked in the ___ century.', answer: ['twelfth', '12th'] },
          { id: 'n3l35', type: 'single', prompt: '35. Al-Idrisi’s map was based on reports from …', options: ['soldiers', 'travellers and merchants', 'kings', 'astronomers'], answer: 1 },
          { id: 'n3l36', type: 'fill', prompt: '36. His map remained influential for ___ years.', answer: ['300', 'three hundred'] },
          { id: 'n3l37', type: 'fill', prompt: '37. Mercator published his projection in ___.', answer: ['1569', 'fifteen sixty-nine'] },
          { id: 'n3l38', type: 'fill', prompt: '38. The projection was especially useful for ___.', answer: ['sailors', 'sailor'] },
          { id: 'n3l39', type: 'single', prompt: '39. The Mercator projection exaggerates the size of land …', options: ['near the equator', 'near the poles', 'in Africa', 'in the oceans'], answer: 1 },
          { id: 'n3l40', type: 'fill', prompt: '40. Africa is about ___ times bigger than Greenland.', answer: ['14', 'fourteen'] },
        ],
      },
    ],
  },

  'reading-3': {
    kind: 'reading', title: 'IELTS Academic Reading — Mock Test 3', minutes: 60,
    sections: [
      {
        title: 'Passage 1 · The Story of Plov',
        intro: 'Questions 1–13. You should spend about 20 minutes on this passage.',
        text: `Few dishes are as closely tied to national identity as plov is in Uzbekistan. At its simplest, plov consists of rice cooked with meat, onions and carrots in a large cast-iron pot called a kazan, but there are dozens of regional versions. In Samarkand, the ingredients are traditionally arranged in layers and not stirred, while in Tashkent the rice is often mixed with the other ingredients near the end of cooking.

The dish is usually prepared by men at large gatherings such as weddings and celebrations, when a single kazan may feed several hundred guests. Cooking plov for such numbers requires considerable skill, particularly in controlling the heat, since the rice must absorb exactly the right amount of liquid without burning at the bottom. The yellow carrots used in many recipes are valued for their sweetness, and cumin seeds and dried barberries are common additions.

Plov also has a social meaning. In many neighbourhoods, a "morning plov" is served very early, sometimes before sunrise, to mark important family events, and men gather to eat together before going to work. Sharing plov is seen as a sign of hospitality and community.

In 2016 the culture and tradition of plov in Uzbekistan was added to UNESCO's list of the Intangible Cultural Heritage of Humanity. Supporters hope that this recognition will encourage young people to learn the traditional methods, which are typically passed down within families rather than taught in schools. Nevertheless, modern life is bringing changes: some families now cook smaller portions at home on electric stoves, and restaurants offer lighter versions for health-conscious customers.`,
        questions: [
          { id: 'n3r1', type: 'single', prompt: '1. Plov is always cooked in exactly the same way across Uzbekistan.', options: tfng, answer: 1 },
          { id: 'n3r2', type: 'single', prompt: '2. In Samarkand the ingredients are traditionally not stirred.', options: tfng, answer: 0 },
          { id: 'n3r3', type: 'single', prompt: '3. Women traditionally cook plov at weddings.', options: tfng, answer: 1 },
          { id: 'n3r4', type: 'single', prompt: '4. Controlling the heat is one of the main difficulties.', options: tfng, answer: 0 },
          { id: 'n3r5', type: 'single', prompt: '5. Yellow carrots are more expensive than orange carrots.', options: tfng, answer: 2 },
          { id: 'n3r6', type: 'single', prompt: '6. Morning plov is sometimes served before sunrise.', options: tfng, answer: 0 },
          { id: 'n3r7', type: 'single', prompt: '7. Traditional plov methods are usually taught in schools.', options: tfng, answer: 1 },
          { id: 'n3r8', type: 'fill', prompt: '8. Plov is cooked in a large pot called a ___. (ONE WORD)', answer: 'kazan' },
          { id: 'n3r9', type: 'fill', prompt: '9. Yellow carrots are valued for their ___. (ONE WORD)', answer: 'sweetness' },
          { id: 'n3r10', type: 'fill', prompt: '10. Common additions include cumin seeds and dried ___. (ONE WORD)', answer: 'barberries' },
          { id: 'n3r11', type: 'fill', prompt: '11. Sharing plov is a sign of hospitality and ___. (ONE WORD)', answer: 'community' },
          { id: 'n3r12', type: 'fill', prompt: '12. Plov was added to the UNESCO list in ___. (NUMBER)', answer: '2016' },
          { id: 'n3r13', type: 'fill', prompt: '13. Some families now cook on electric ___. (ONE WORD)', answer: ['stoves', 'stove'] },
        ],
      },
      {
        title: 'Passage 2 · Why Do We Yawn?',
        intro: 'Questions 14–26. You should spend about 20 minutes on this passage.',
        text: `A. Yawning is one of the most familiar human behaviours, yet scientists still disagree about why we do it. Almost all vertebrates yawn, including fish, birds and reptiles, which suggests that the behaviour is very old in evolutionary terms.

B. A popular explanation is that yawning increases the amount of oxygen in the blood. However, this idea has little experimental support. In one well-known study, volunteers who breathed air with extra oxygen yawned just as often as those breathing normal air.

C. A more recent theory proposes that yawning helps to cool the brain. When we yawn, a deep intake of air and the stretching of the jaw increase blood flow to the head, which may carry away excess heat. Supporting this idea, researchers have found that people yawn more in moderate temperatures than in very hot or very cold conditions, and that holding a cold pack to the forehead reduces yawning.

D. Yawning is also famously contagious: seeing, hearing or even reading about someone yawning can trigger a yawn. Contagious yawning appears to be linked to social bonds. People are more likely to catch a yawn from family members and friends than from strangers, and it is rare in children under about four years old.

E. Some researchers have suggested that contagious yawning helps groups coordinate their activity, for example by signalling that it is time to rest. Others caution that the link with empathy is weaker than once thought, since some studies have found only small differences between individuals.

F. Whatever its purpose, yawning is difficult to suppress, and attempts to stop it usually fail. As one researcher put it, yawning is a reminder that much of our behaviour is not under conscious control.`,
        questions: [
          { id: 'n3r14', type: 'single', prompt: '14. Which paragraph shows that yawning is very old in evolutionary terms?', options: ['A', 'B', 'C', 'D'], answer: 0 },
          { id: 'n3r15', type: 'single', prompt: '15. Which paragraph rejects the oxygen explanation?', options: ['A', 'B', 'C', 'E'], answer: 1 },
          { id: 'n3r16', type: 'single', prompt: '16. Which paragraph links yawning to temperature?', options: ['B', 'C', 'D', 'F'], answer: 1 },
          { id: 'n3r17', type: 'single', prompt: '17. Which paragraph describes yawning between friends and family?', options: ['C', 'D', 'E', 'F'], answer: 1 },
          { id: 'n3r18', type: 'single', prompt: '18. In the oxygen study, volunteers breathing extra oxygen yawned …', options: ['less often', 'more often', 'just as often', 'not at all'], answer: 2 },
          { id: 'n3r19', type: 'single', prompt: '19. Holding a cold pack to the forehead …', options: ['increases yawning', 'reduces yawning', 'has no effect', 'causes contagious yawning'], answer: 1 },
          { id: 'n3r20', type: 'single', prompt: '20. According to paragraph E, the link between yawning and empathy is …', options: ['proven', 'weaker than once thought', 'very strong in children', 'only found in animals'], answer: 1 },
          { id: 'n3r21', type: 'single', prompt: '21. Fish and birds also yawn.', options: tfng, answer: 0 },
          { id: 'n3r22', type: 'single', prompt: '22. People yawn most in very hot conditions.', options: tfng, answer: 1 },
          { id: 'n3r23', type: 'single', prompt: '23. Contagious yawning is common in babies.', options: tfng, answer: 1 },
          { id: 'n3r24', type: 'single', prompt: '24. Dogs can catch yawns from their owners.', options: tfng, answer: 2 },
          { id: 'n3r25', type: 'fill', prompt: '25. Yawning may help to ___ the brain. (ONE WORD)', answer: 'cool' },
          { id: 'n3r26', type: 'fill', prompt: '26. Contagious yawning may help groups ___ their activity. (ONE WORD)', answer: 'coordinate' },
        ],
      },
      {
        title: 'Passage 3 · The Gig Economy',
        intro: 'Questions 27–40. You should spend about 20 minutes on this passage.',
        text: `Over the last fifteen years, digital platforms have created a new way of working often called the gig economy. Instead of holding a permanent job with a single employer, workers accept individual tasks — delivering food, driving passengers, designing logos or translating documents — through apps that connect them directly with customers. The platforms take a commission on each transaction rather than paying a fixed salary.

For many workers, the main attraction is flexibility. Students, parents and people with other jobs can choose when and how much to work, and in theory they can log off whenever they like. Platforms have also lowered the barriers to entering certain kinds of work: a driver no longer needs to buy an expensive taxi licence, and a freelance designer can find clients in other countries without an agency.

Critics argue that this flexibility comes at a considerable cost. Because gig workers are usually classified as independent contractors rather than employees, they often have no right to sick pay, paid holidays or pensions, and income can vary greatly from week to week. Algorithms that allocate tasks and set prices can also feel opaque: workers may not know why their earnings have fallen or why their account has been suspended.

Governments have responded in different ways. Some courts have ruled that certain drivers should be treated as workers with basic rights, while other jurisdictions have created a new intermediate category between employee and contractor. Platforms argue that stricter rules would reduce flexibility and raise prices for customers.

Research on workers' own views presents a mixed picture. Surveys suggest that those who use platform work as a supplement to other income tend to be more satisfied than those who depend on it entirely. Many also report that ratings from customers create pressure to accept tasks they would prefer to refuse. The debate, therefore, is less about whether the gig economy should exist than about how its benefits and risks should be shared.`,
        questions: [
          { id: 'n3r27', type: 'single', prompt: '27. Platforms usually earn money by …', options: ['paying salaries', 'taking a commission on each transaction', 'selling licences', 'charging workers a monthly fee'], answer: 1 },
          { id: 'n3r28', type: 'single', prompt: '28. The main attraction for many workers is …', options: ['high pay', 'flexibility', 'pensions', 'training'], answer: 1 },
          { id: 'n3r29', type: 'single', prompt: '29. Which barrier has been lowered for drivers?', options: ['learning to drive', 'buying an expensive taxi licence', 'owning a car', 'speaking English'], answer: 1 },
          { id: 'n3r30', type: 'single', prompt: '30. Critics say algorithms can feel …', options: ['generous', 'opaque', 'slow', 'friendly'], answer: 1 },
          { id: 'n3r31', type: 'single', prompt: '31. What is the writer’s conclusion?', options: ['The gig economy should be banned.', 'The debate is about sharing benefits and risks.', 'Platforms have no disadvantages.', 'Workers prefer permanent jobs.'], answer: 1 },
          { id: 'n3r32', type: 'single', prompt: '32. Gig workers are usually classified as independent contractors.', options: tfng, answer: 0 },
          { id: 'n3r33', type: 'single', prompt: '33. Gig workers always receive paid holidays.', options: tfng, answer: 1 },
          { id: 'n3r34', type: 'single', prompt: '34. All courts have agreed that drivers are employees.', options: tfng, answer: 1 },
          { id: 'n3r35', type: 'single', prompt: '35. Food delivery is the largest type of gig work.', options: tfng, answer: 2 },
          { id: 'n3r36', type: 'single', prompt: '36. Workers who rely entirely on platforms tend to be less satisfied.', options: tfng, answer: 0 },
          { id: 'n3r37', type: 'fill', prompt: '37. A freelance designer can find clients without an ___. (ONE WORD)', answer: 'agency' },
          { id: 'n3r38', type: 'fill', prompt: '38. Some jurisdictions created a new ___ category. (ONE WORD)', answer: 'intermediate' },
          { id: 'n3r39', type: 'fill', prompt: '39. Platforms say stricter rules would raise ___ for customers. (ONE WORD)', answer: ['prices', 'price'] },
          { id: 'n3r40', type: 'fill', prompt: '40. Customer ___ create pressure to accept tasks. (ONE WORD)', answer: ['ratings', 'rating'] },
        ],
      },
    ],
  },

  'listening-4': {
    kind: 'listening', title: 'IELTS Listening — Mock Test 4', minutes: 30,
    sections: [
      {
        title: 'Part 1 · Joining a sports centre',
        intro: 'You will hear a woman asking about membership at a sports centre. Questions 1–10.',
        script: `Assistant: Good morning, Lakeside Sports Centre. How can I help?
Caller: Hi. I'd like some information about membership, please.
Assistant: Of course. We have two options. Standard membership costs thirty-two pounds a month and includes the gym and the swimming pool. Premium is forty-five pounds and also includes all fitness classes.
Caller: I'd like to do yoga, so I think premium is better for me.
Assistant: Good choice. Yoga classes are on Mondays and Thursdays at six thirty in the evening.
Caller: Is there a joining fee?
Assistant: Normally it's twenty pounds, but this month it's free.
Caller: Great. And what are your opening hours?
Assistant: We open at six a.m. on weekdays and close at ten p.m. At weekends we open at eight.
Caller: Is there parking?
Assistant: Yes, it's free for members, but you need to register your car at reception.
Caller: Fine. Can I join today?
Assistant: Certainly. Can I have your full name?
Caller: Malika Tursunova. Tursunova is spelt T-U-R-S-U-N-O-V-A.
Assistant: And a phone number?
Caller: It's oh-seven-nine-one, four-four-six, two-eight-three.
Assistant: Thank you. On your first visit, please bring a photo for your membership card. And don't forget a towel — we don't provide them.`,
        questions: [
          { id: 'n4l1', type: 'fill', prompt: '1. Standard membership: £___ a month', answer: ['32', 'thirty-two'] },
          { id: 'n4l2', type: 'fill', prompt: '2. Premium membership: £___ a month', answer: ['45', 'forty-five'] },
          { id: 'n4l3', type: 'single', prompt: '3. Premium membership also includes …', options: ['parking', 'fitness classes', 'a personal trainer', 'towels'], answer: 1 },
          { id: 'n4l4', type: 'fill', prompt: '4. Yoga days: Mondays and ___', answer: 'Thursdays' },
          { id: 'n4l5', type: 'single', prompt: '5. This month the joining fee is …', options: ['£20', '£10', 'free', '£32'], answer: 2 },
          { id: 'n4l6', type: 'fill', prompt: '6. Weekend opening time: ___ a.m.', answer: ['8', 'eight'] },
          { id: 'n4l7', type: 'single', prompt: '7. To park for free, members must …', options: ['pay at reception', 'register their car at reception', 'arrive before 8 a.m.', 'buy a permit online'], answer: 1 },
          { id: 'n4l8', type: 'fill', prompt: '8. Surname: ___', answer: 'Tursunova' },
          { id: 'n4l9', type: 'fill', prompt: '9. On the first visit, bring a ___ for the card.', answer: 'photo' },
          { id: 'n4l10', type: 'fill', prompt: '10. Members must bring their own ___.', answer: 'towel' },
        ],
      },
      {
        title: 'Part 2 · A guided tour of a science museum',
        intro: 'You will hear a guide talking to visitors at the start of a museum tour. Questions 11–20.',
        script: `Welcome to the City Science Museum. My name is Daniel and I'll be your guide this morning. The tour lasts about ninety minutes, and we'll finish in the café on the ground floor, where you can get a ten percent discount with your ticket.
We'll begin on the first floor in the Space Gallery. The highlight there is a real rocket engine, which was donated to the museum in nineteen ninety-eight. Next, we'll move to the Human Body section, where you can test your reaction speed and your sense of balance.
After that, we'll go up to the second floor to see our newest exhibition, called "Water World". It opened just last month and explains how cities clean and recycle water. Please note that photography is not allowed in this exhibition, because some of the models are on loan from other museums.
The tour ends at around half past eleven. In the afternoon there is a free science show for children in the lecture theatre at two o'clock, but places are limited, so you should collect a ticket from the information desk.
Finally, a few practical points. Lockers for bags are next to the main entrance; they cost one pound, which is returned when you open the locker again. The toilets are on every floor next to the lifts. If you get lost, just look for a member of staff in a green shirt.`,
        questions: [
          { id: 'n4l11', type: 'fill', prompt: '11. The tour lasts about ___ minutes.', answer: ['90', 'ninety'] },
          { id: 'n4l12', type: 'fill', prompt: '12. Ticket holders get a ___ % discount in the café.', answer: ['10', 'ten'] },
          { id: 'n4l13', type: 'single', prompt: '13. The rocket engine is in the …', options: ['Human Body section', 'Space Gallery', 'Water World', 'lecture theatre'], answer: 1 },
          { id: 'n4l14', type: 'fill', prompt: '14. The rocket engine was donated in ___.', answer: ['1998', 'nineteen ninety-eight'] },
          { id: 'n4l15', type: 'single', prompt: '15. In the Human Body section visitors can test their …', options: ['memory', 'reaction speed and balance', 'eyesight', 'hearing'], answer: 1 },
          { id: 'n4l16', type: 'single', prompt: '16. Why is photography not allowed in Water World?', options: ['It is too dark.', 'Some models are on loan.', 'It is very crowded.', 'It is still being built.'], answer: 1 },
          { id: 'n4l17', type: 'fill', prompt: '17. The children’s science show starts at ___ o’clock.', answer: ['2', 'two'] },
          { id: 'n4l18', type: 'single', prompt: '18. To attend the show, visitors should …', options: ['pay at the door', 'collect a ticket from the information desk', 'book online', 'ask the guide'], answer: 1 },
          { id: 'n4l19', type: 'single', prompt: '19. The locker fee is …', options: ['free', '£1, returned later', '£2', '£1, not returned'], answer: 1 },
          { id: 'n4l20', type: 'fill', prompt: '20. Staff wear ___ shirts.', answer: 'green' },
        ],
      },
      {
        title: 'Part 3 · Planning a survey on student sleep',
        intro: 'You will hear two students, Aziz and Hannah, talking to their tutor about a research project. Questions 21–30.',
        script: `Tutor: So, what have you decided to investigate?
Hannah: We'd like to find out how much sleep university students get during the exam period compared with the rest of the term.
Tutor: Interesting. How will you collect the data?
Aziz: At first we wanted to use interviews, but they take too long, so we'll use an online questionnaire instead.
Tutor: And how many students do you hope to include?
Hannah: About two hundred, from three different faculties.
Tutor: How will you make sure the answers are accurate? People often don't remember how much they slept.
Aziz: That's a good point. We're going to ask a smaller group, around twenty students, to keep a sleep diary for two weeks, and compare it with their questionnaire answers.
Tutor: Excellent, that will help you check reliability. What do you expect to find?
Hannah: We think students will sleep about one hour less during exams, and that they'll drink more coffee.
Tutor: Have you thought about ethical issues?
Aziz: Yes. The questionnaire will be anonymous, and we'll ask permission from the ethics committee before we start.
Tutor: Good. One more thing — I'd suggest adding a question about phone use at night. Screens are a major factor in poor sleep.
Hannah: That's a great idea. We'll add it.
Tutor: Your first draft is due on the twentieth of March.`,
        questions: [
          { id: 'n4l21', type: 'single', prompt: '21. The students want to compare sleep during exams with …', options: ['the holidays', 'the rest of the term', 'school years', 'weekends'], answer: 1 },
          { id: 'n4l22', type: 'single', prompt: '22. Why did they decide not to use interviews?', options: ['They are too expensive.', 'They take too long.', 'Students dislike them.', 'The tutor refused.'], answer: 1 },
          { id: 'n4l23', type: 'fill', prompt: '23. Data will be collected with an online ___.', answer: 'questionnaire' },
          { id: 'n4l24', type: 'fill', prompt: '24. Number of students in the main survey: about ___', answer: ['200', 'two hundred'] },
          { id: 'n4l25', type: 'fill', prompt: '25. Students will come from ___ faculties.', answer: ['3', 'three'] },
          { id: 'n4l26', type: 'fill', prompt: '26. A smaller group will keep a sleep ___.', answer: 'diary' },
          { id: 'n4l27', type: 'single', prompt: '27. The diaries will help the students check …', options: ['costs', 'reliability', 'grades', 'coffee prices'], answer: 1 },
          { id: 'n4l28', type: 'single', prompt: '28. They expect students to sleep … during exams.', options: ['two hours more', 'about one hour less', 'the same', 'half as much'], answer: 1 },
          { id: 'n4l29', type: 'fill', prompt: '29. The tutor suggests a question about ___ use at night.', answer: 'phone' },
          { id: 'n4l30', type: 'fill', prompt: '30. First draft due: the ___ of March', answer: ['twentieth', '20th', '20'] },
        ],
      },
      {
        title: 'Part 4 · Lecture: How cities stay cool',
        intro: 'You will hear part of a lecture about urban heat. Questions 31–40.',
        script: `In today's lecture I want to look at a problem that affects almost every large city: the urban heat island effect. This is the reason why city centres are often several degrees warmer than the surrounding countryside, particularly at night.
There are three main causes. First, materials such as concrete and asphalt absorb heat during the day and release it slowly after sunset. Second, cities have fewer trees and less open soil, so there is less evaporation to cool the air. Third, cars, air conditioners and factories all produce waste heat.
The consequences can be serious. During heatwaves, hospitals in hot cities report more admissions, especially among elderly people. Higher temperatures also increase the demand for electricity, because more people use air conditioning, which in turn produces more heat.
So what can be done? One of the simplest solutions is planting trees. A single large tree can provide the same cooling effect as several air conditioners, mainly through shade and the water it releases from its leaves. Another approach is the so-called cool roof: painting roofs white or covering them with reflective materials. In some trials, white roofs were up to thirty degrees cooler than dark ones on a sunny afternoon.
Green roofs, which are covered with plants, offer additional benefits: they reduce the risk of flooding by absorbing rainwater and they provide habitats for insects and birds. However, they are more expensive to build and need regular maintenance.
Traditional architecture also offers lessons. In many Central Asian cities, old houses were built around shaded courtyards with a small pool in the centre, and narrow streets kept people out of direct sunlight. Modern planners are now rediscovering these ideas.`,
        questions: [
          { id: 'n4l31', type: 'single', prompt: '31. City centres are especially warmer than the countryside …', options: ['in the morning', 'at night', 'in winter', 'at midday'], answer: 1 },
          { id: 'n4l32', type: 'fill', prompt: '32. Concrete and ___ absorb heat during the day.', answer: 'asphalt' },
          { id: 'n4l33', type: 'fill', prompt: '33. Fewer trees means less ___ to cool the air.', answer: 'evaporation' },
          { id: 'n4l34', type: 'single', prompt: '34. During heatwaves, hospitals see more admissions especially of …', options: ['children', 'elderly people', 'workers', 'tourists'], answer: 1 },
          { id: 'n4l35', type: 'single', prompt: '35. Greater use of air conditioning …', options: ['cools the whole city', 'produces more heat', 'reduces electricity demand', 'has no effect'], answer: 1 },
          { id: 'n4l36', type: 'single', prompt: '36. A large tree cools the air mainly through …', options: ['wind', 'shade and water from its leaves', 'its roots', 'absorbing pollution'], answer: 1 },
          { id: 'n4l37', type: 'fill', prompt: '37. In trials, white roofs were up to ___ degrees cooler.', answer: ['30', 'thirty'] },
          { id: 'n4l38', type: 'fill', prompt: '38. Green roofs reduce the risk of ___.', answer: 'flooding' },
          { id: 'n4l39', type: 'single', prompt: '39. A disadvantage of green roofs is that they …', options: ['attract insects', 'are expensive and need maintenance', 'make buildings hotter', 'cannot hold rainwater'], answer: 1 },
          { id: 'n4l40', type: 'fill', prompt: '40. Old Central Asian houses had shaded ___ with a small pool.', answer: ['courtyards', 'courtyard'] },
        ],
      },
    ],
  },

  'reading-4': {
    kind: 'reading', title: 'IELTS Academic Reading — Mock Test 4', minutes: 60,
    sections: [
      {
        title: 'Passage 1 · The Aral Sea',
        intro: 'Questions 1–13. You should spend about 20 minutes on this passage.',
        text: `In the middle of the twentieth century, the Aral Sea, which lies between Kazakhstan and Uzbekistan, was the fourth-largest lake in the world. It supported a thriving fishing industry, and towns such as Muynak on its southern shore were busy ports where thousands of people worked in canneries.

The decline of the sea began in the 1960s, when large irrigation projects diverted water from the two rivers that fed it, the Amu Darya and the Syr Darya, to grow cotton in the surrounding desert. Within a few decades, the amount of water reaching the sea had fallen dramatically. By the early 2000s, the Aral had split into separate northern and southern parts, and its total area had shrunk by roughly ninety per cent.

The consequences for the region were severe. As the water retreated, the remaining sea became so salty that most native fish species disappeared, and the fishing industry collapsed. Old ships were left stranded on dry land, many kilometres from the new shoreline. Strong winds now carry dust and salt from the exposed seabed across a wide area, and local doctors have reported higher rates of respiratory illness. The climate has also changed: summers have become hotter and winters colder, because the sea no longer moderates temperatures.

There has been some progress, however. In 2005, a dam was completed in Kazakhstan to keep water in the smaller northern part of the sea. Since then, the water level there has risen, salinity has fallen, and several fish species have returned, allowing a small fishing industry to restart. In Uzbekistan, the focus has been on planting drought-resistant shrubs such as saxaul on the dry seabed to stop the dust from blowing away. Millions of hectares are planned to be covered in this way.`,
        questions: [
          { id: 'n4r1', type: 'single', prompt: '1. The Aral Sea was once the fourth-largest lake in the world.', options: tfng, answer: 0 },
          { id: 'n4r2', type: 'single', prompt: '2. Muynak was located on the northern shore of the sea.', options: tfng, answer: 1 },
          { id: 'n4r3', type: 'single', prompt: '3. Irrigation water was used mainly to grow wheat.', options: tfng, answer: 1 },
          { id: 'n4r4', type: 'single', prompt: '4. The sea had split into two parts by the early 2000s.', options: tfng, answer: 0 },
          { id: 'n4r5', type: 'single', prompt: '5. Some tourists now visit the stranded ships.', options: tfng, answer: 2 },
          { id: 'n4r6', type: 'single', prompt: '6. Winters in the region have become milder.', options: tfng, answer: 1 },
          { id: 'n4r7', type: 'single', prompt: '7. Fish have returned to the northern part of the sea.', options: tfng, answer: 0 },
          { id: 'n4r8', type: 'fill', prompt: '8. Many people in Muynak worked in ___. (ONE WORD)', answer: 'canneries' },
          { id: 'n4r9', type: 'fill', prompt: '9. The total area shrank by about ninety ___. (TWO WORDS)', answer: 'per cent' },
          { id: 'n4r10', type: 'fill', prompt: '10. Winds carry dust and ___ from the seabed. (ONE WORD)', answer: 'salt' },
          { id: 'n4r11', type: 'fill', prompt: '11. Doctors report more ___ illness. (ONE WORD)', answer: 'respiratory' },
          { id: 'n4r12', type: 'fill', prompt: '12. The dam in Kazakhstan was completed in ___. (NUMBER)', answer: '2005' },
          { id: 'n4r13', type: 'fill', prompt: '13. Uzbekistan is planting shrubs such as ___ on the dry seabed. (ONE WORD)', answer: 'saxaul' },
        ],
      },
      {
        title: 'Passage 2 · The Science of Habits',
        intro: 'Questions 14–26. You should spend about 20 minutes on this passage.',
        text: `A. Psychologists estimate that a large proportion of our daily behaviour — perhaps as much as forty per cent — is performed out of habit rather than conscious decision. We brush our teeth, check our phones and take the same route to work without thinking about it. Habits save mental effort, freeing the brain to deal with new or difficult problems.

B. Research suggests that habits are built through a simple loop. First, a cue, such as a time of day or a place, triggers the behaviour. Next comes the routine itself, and finally a reward, which tells the brain that the loop is worth remembering. Over time, the link between cue and routine becomes automatic, and the reward is anticipated even before it arrives.

C. A popular belief holds that it takes exactly twenty-one days to form a new habit. However, a study at a London university that followed volunteers for twelve weeks found that the average time was about sixty-six days, and that it varied enormously between people and behaviours. Drinking a glass of water after breakfast became automatic much faster than doing fifty sit-ups.

D. The same study found that missing a single day did not seriously damage the process. What mattered more was repetition in a stable context. This is why experts recommend attaching a new behaviour to an existing one — for example, doing a minute of stretching immediately after making morning tea.

E. Breaking bad habits is often harder than creating good ones, because the cue continues to trigger a strong desire for the reward. Rather than relying on willpower, researchers advise changing the environment: keeping sweets out of sight, or leaving the phone in another room while studying. Replacing the routine while keeping the same cue and reward can also be effective.

F. Finally, habits are closely connected to identity. People who see themselves as "a runner" or "a reader" tend to maintain those behaviours longer than people who simply set themselves a goal, such as running a certain distance.`,
        questions: [
          { id: 'n4r14', type: 'single', prompt: '14. Which paragraph explains the three stages of a habit loop?', options: ['A', 'B', 'C', 'D'], answer: 1 },
          { id: 'n4r15', type: 'single', prompt: '15. Which paragraph challenges a popular belief about habit formation?', options: ['B', 'C', 'E', 'F'], answer: 1 },
          { id: 'n4r16', type: 'single', prompt: '16. Which paragraph gives advice on breaking bad habits?', options: ['C', 'D', 'E', 'F'], answer: 2 },
          { id: 'n4r17', type: 'single', prompt: '17. Which paragraph links habits with how people see themselves?', options: ['A', 'D', 'E', 'F'], answer: 3 },
          { id: 'n4r18', type: 'single', prompt: '18. According to paragraph A, habits are useful because they …', options: ['make us happier', 'save mental effort', 'improve memory', 'reduce stress at work'], answer: 1 },
          { id: 'n4r19', type: 'single', prompt: '19. In the London study, the average time to form a habit was about …', options: ['21 days', '50 days', '66 days', '12 days'], answer: 2 },
          { id: 'n4r20', type: 'single', prompt: '20. Experts recommend attaching a new behaviour to …', options: ['a reward', 'an existing behaviour', 'a goal', 'a friend'], answer: 1 },
          { id: 'n4r21', type: 'single', prompt: '21. Missing one day seriously damages habit formation.', options: tfng, answer: 1 },
          { id: 'n4r22', type: 'single', prompt: '22. Simple behaviours became automatic faster than difficult ones.', options: tfng, answer: 0 },
          { id: 'n4r23', type: 'single', prompt: '23. Women form habits faster than men.', options: tfng, answer: 2 },
          { id: 'n4r24', type: 'single', prompt: '24. Researchers advise relying mainly on willpower to stop bad habits.', options: tfng, answer: 1 },
          { id: 'n4r25', type: 'fill', prompt: '25. A habit loop begins with a ___. (ONE WORD)', answer: 'cue' },
          { id: 'n4r26', type: 'fill', prompt: '26. Repetition in a stable ___ matters most. (ONE WORD)', answer: 'context' },
        ],
      },
      {
        title: 'Passage 3 · Can Machines Translate?',
        intro: 'Questions 27–40. You should spend about 20 minutes on this passage.',
        text: `The dream of a machine that could translate between languages is almost as old as the computer itself. In 1954, researchers in the United States demonstrated a system that translated around sixty Russian sentences into English, and confidently predicted that the problem would be solved within a few years. In reality, progress was slow. Early systems relied on hand-written rules and bilingual dictionaries, and they struggled with ambiguity: the same word can have many meanings, and word order differs greatly between languages.

From the 1990s, a different approach became dominant. Instead of rules, statistical systems learned from huge collections of texts that had already been translated by humans, such as the proceedings of international organisations. By calculating which phrases most often corresponded to one another, these systems produced translations that were rough but often understandable. Their quality depended heavily on the amount of parallel text available, so they worked much better for widely used language pairs than for languages with few digital resources.

The most recent revolution came with neural networks. Rather than translating phrase by phrase, neural systems process a whole sentence at once and represent its meaning as a long list of numbers. This allows them to produce far more fluent output and to handle word order more naturally. For many common language pairs, professional translators now report that machine output can be a useful first draft.

Nevertheless, important limitations remain. Neural systems can produce sentences that sound perfectly natural but contain factual errors, which makes their mistakes harder to notice. They also have difficulty with humour, poetry and culturally specific expressions, and they may reproduce stereotypes found in their training data — for example, by assuming that a doctor is male. For languages with few digital texts, including many spoken in Central Asia and Africa, quality is still considerably lower.

As a result, the role of human translators is changing rather than disappearing. Many now work as post-editors, correcting and improving machine output, while legal, medical and literary translation still depend largely on human expertise. The question for the future is not whether machines can translate, but how humans and machines can best work together.`,
        questions: [
          { id: 'n4r27', type: 'single', prompt: '27. The 1954 demonstration translated sentences from …', options: ['English into Russian', 'Russian into English', 'French into English', 'German into Russian'], answer: 1 },
          { id: 'n4r28', type: 'single', prompt: '28. Early systems struggled mainly with …', options: ['speed', 'ambiguity and word order', 'the cost of computers', 'spelling'], answer: 1 },
          { id: 'n4r29', type: 'single', prompt: '29. Statistical systems learned from …', options: ['grammar books', 'texts already translated by humans', 'conversations', 'dictionaries only'], answer: 1 },
          { id: 'n4r30', type: 'single', prompt: '30. Neural systems differ because they …', options: ['use bilingual dictionaries', 'process a whole sentence at once', 'translate word by word', 'need no data'], answer: 1 },
          { id: 'n4r31', type: 'single', prompt: '31. What is the writer’s main conclusion?', options: ['Machines will soon replace all translators.', 'Humans and machines will increasingly work together.', 'Machine translation has stopped improving.', 'Neural systems are worse than statistical ones.'], answer: 1 },
          { id: 'n4r32', type: 'single', prompt: '32. The 1954 researchers correctly predicted how long progress would take.', options: tfng, answer: 1 },
          { id: 'n4r33', type: 'single', prompt: '33. Statistical systems worked better for widely used language pairs.', options: tfng, answer: 0 },
          { id: 'n4r34', type: 'single', prompt: '34. Neural systems are cheaper to build than statistical systems.', options: tfng, answer: 2 },
          { id: 'n4r35', type: 'single', prompt: '35. Errors in neural translations can be hard to notice.', options: tfng, answer: 0 },
          { id: 'n4r36', type: 'single', prompt: '36. Literary translation is now done mostly by machines.', options: tfng, answer: 1 },
          { id: 'n4r37', type: 'fill', prompt: '37. The 1954 system translated around ___ sentences. (ONE WORD)', answer: 'sixty' },
          { id: 'n4r38', type: 'fill', prompt: '38. Neural systems may reproduce ___ from their training data. (ONE WORD)', answer: ['stereotypes', 'stereotype'] },
          { id: 'n4r39', type: 'fill', prompt: '39. Translators say machine output can be a useful first ___. (ONE WORD)', answer: 'draft' },
          { id: 'n4r40', type: 'fill', prompt: '40. Many translators now work as ___, correcting machine output. (ONE WORD)', answer: ['post-editors', 'post-editor'] },
        ],
      },
    ],
  },

  'listening-5': {
    kind: 'listening', title: 'IELTS Listening — Mock Test 5', minutes: 30,
    sections: [
      {
        title: 'Part 1 · Booking a bicycle tour',
        intro: 'You will hear a man phoning a tour company. Questions 1–10.',
        script: `Agent: Good morning, Silk Road Cycling. How can I help you?
Caller: Hi. I'm interested in your bicycle tour from Samarkand to Bukhara.
Agent: Great. That tour takes five days, and we cover about sixty kilometres a day.
Caller: When does the next one start?
Agent: The next one leaves on the ninth of September. There are only four places left.
Caller: And how much is it?
Agent: It's four hundred and twenty dollars per person. That includes the hotels, breakfast and dinner, but not lunch.
Caller: Do I need my own bicycle?
Agent: No, we provide mountain bikes and helmets. But you should bring comfortable shoes and sunglasses.
Caller: Is there a vehicle with the group?
Agent: Yes, a support van carries your luggage and follows the group in case anyone gets tired.
Caller: OK. I'd like to book one place. My name's Timur Abdullayev. That's A-B-D-U-L-L-A-Y-E-V.
Agent: Thank you. We'll need a deposit of fifty dollars to hold your place, and you can pay the rest when you arrive.`,
        questions: [
          { id: 'n5l1', type: 'fill', prompt: '1. Length of tour: ___ days', answer: ['5', 'five'] },
          { id: 'n5l2', type: 'fill', prompt: '2. Distance per day: about ___ km', answer: ['60', 'sixty'] },
          { id: 'n5l3', type: 'fill', prompt: '3. Next tour starts: the ___ of September', answer: ['ninth', '9th', '9'] },
          { id: 'n5l4', type: 'fill', prompt: '4. Places left: ___', answer: ['4', 'four'] },
          { id: 'n5l5', type: 'fill', prompt: '5. Price per person: $___', answer: ['420', 'four hundred and twenty'] },
          { id: 'n5l6', type: 'single', prompt: '6. Which meal is NOT included?', options: ['breakfast', 'lunch', 'dinner', 'all meals are included'], answer: 1 },
          { id: 'n5l7', type: 'single', prompt: '7. The company provides …', options: ['bikes and helmets', 'shoes and sunglasses', 'bikes only', 'nothing'], answer: 0 },
          { id: 'n5l8', type: 'fill', prompt: '8. A support ___ carries the luggage.', answer: 'van' },
          { id: 'n5l9', type: 'fill', prompt: '9. Surname: ___', answer: 'Abdullayev' },
          { id: 'n5l10', type: 'fill', prompt: '10. Deposit: $___', answer: ['50', 'fifty'] },
        ],
      },
      {
        title: 'Part 2 · A new city park',
        intro: 'You will hear a park manager talking on local radio. Questions 11–20.',
        script: `Good afternoon. I'm here to tell you about Riverside Park, which opens to the public next Saturday. The park covers twelve hectares along the river, on land that used to be an old factory site.
At the north entrance, there's a large car park, but we encourage visitors to come by bus or bicycle, because spaces are limited. Next to the entrance you'll find the visitor centre, where you can pick up free maps and hire bicycles for an hour or a whole day.
In the middle of the park there's a lake with a small island. Swimming is not allowed, but you can hire rowing boats from May to October. To the east of the lake is the children's area, which includes a water playground that is open only in the summer months.
One feature we're particularly proud of is the community garden in the south-west corner. Local residents can rent a small plot to grow their own vegetables, and there's a waiting list already, so please apply early on our website.
The park is open from seven in the morning until ten at night. Dogs are welcome, but they must be kept on a lead near the lake and the children's area. Finally, on opening day there will be a free concert at four o'clock on the main lawn.`,
        questions: [
          { id: 'n5l11', type: 'fill', prompt: '11. The park covers ___ hectares.', answer: ['12', 'twelve'] },
          { id: 'n5l12', type: 'single', prompt: '12. The land was previously …', options: ['farmland', 'a factory site', 'a car park', 'a forest'], answer: 1 },
          { id: 'n5l13', type: 'single', prompt: '13. Visitors are encouraged to arrive by …', options: ['car', 'bus or bicycle', 'boat', 'taxi'], answer: 1 },
          { id: 'n5l14', type: 'single', prompt: '14. At the visitor centre you can …', options: ['buy food', 'hire bicycles', 'rent garden plots', 'swim'], answer: 1 },
          { id: 'n5l15', type: 'single', prompt: '15. On the lake visitors can …', options: ['swim', 'hire rowing boats', 'fish', 'skate in winter'], answer: 1 },
          { id: 'n5l16', type: 'fill', prompt: '16. The children’s area is to the ___ of the lake.', answer: 'east' },
          { id: 'n5l17', type: 'fill', prompt: '17. The community garden is in the south-___ corner.', answer: 'west' },
          { id: 'n5l18', type: 'fill', prompt: '18. Apply for a garden plot on the ___.', answer: 'website' },
          { id: 'n5l19', type: 'fill', prompt: '19. Closing time: ___ p.m.', answer: ['10', 'ten'] },
          { id: 'n5l20', type: 'fill', prompt: '20. The opening concert starts at ___ o’clock.', answer: ['4', 'four'] },
        ],
      },
      {
        title: 'Part 3 · Preparing a group presentation',
        intro: 'You will hear two students, Madina and Josh, planning a presentation with their tutor. Questions 21–30.',
        script: `Tutor: So, your presentation is on the topic of food waste in universities. How far have you got?
Madina: We've done some background reading, and we've decided to focus on the main university canteen.
Josh: Yes, we want to measure how much food is thrown away there in one week.
Tutor: How will you do that?
Josh: The canteen manager has agreed to let us weigh the waste bins at the end of every day.
Tutor: Excellent. And will you collect any other data?
Madina: We're going to give a short survey to students, asking why they leave food. We think portions might be too big.
Tutor: That's a good hypothesis. How many responses are you aiming for?
Madina: At least one hundred and fifty.
Tutor: And how will you divide the work?
Josh: I'll be responsible for the data on weight, and Madina will analyse the survey.
Tutor: Good. Now, the presentation itself must be fifteen minutes, followed by five minutes of questions. I'd strongly recommend using charts rather than tables, because they're easier for the audience to follow.
Madina: Should we suggest solutions as well?
Tutor: Yes, definitely — that's what will make it stand out. Perhaps something like offering smaller portions at a lower price. And make sure you practise at least twice before the day; the presentations are on the twenty-second of November.`,
        questions: [
          { id: 'n5l21', type: 'single', prompt: '21. The presentation will focus on …', options: ['student kitchens', 'the main university canteen', 'local restaurants', 'supermarkets'], answer: 1 },
          { id: 'n5l22', type: 'fill', prompt: '22. They will measure food waste for one ___.', answer: 'week' },
          { id: 'n5l23', type: 'single', prompt: '23. Who agreed to help them weigh the bins?', options: ['the tutor', 'the canteen manager', 'other students', 'the cleaners'], answer: 1 },
          { id: 'n5l24', type: 'single', prompt: '24. Their hypothesis is that …', options: ['food is too expensive', 'portions are too big', 'food tastes bad', 'students have no time'], answer: 1 },
          { id: 'n5l25', type: 'fill', prompt: '25. Target number of survey responses: ___', answer: ['150', 'one hundred and fifty'] },
          { id: 'n5l26', type: 'single', prompt: '26. Josh will be responsible for …', options: ['the survey', 'the weight data', 'the slides', 'the solutions'], answer: 1 },
          { id: 'n5l27', type: 'fill', prompt: '27. Length of presentation: ___ minutes', answer: ['15', 'fifteen'] },
          { id: 'n5l28', type: 'single', prompt: '28. The tutor recommends using …', options: ['tables', 'charts', 'videos', 'handouts'], answer: 1 },
          { id: 'n5l29', type: 'single', prompt: '29. A possible solution mentioned is …', options: ['closing the canteen', 'smaller portions at a lower price', 'free food', 'banning plastic'], answer: 1 },
          { id: 'n5l30', type: 'fill', prompt: '30. Presentation date: the ___ of November', answer: ['twenty-second', '22nd', '22'] },
        ],
      },
      {
        title: 'Part 4 · Lecture: The history of paper',
        intro: 'You will hear part of a lecture about the history of paper. Questions 31–40.',
        script: `Today we're looking at one of the most important inventions in human history: paper.
Before paper, people wrote on many different materials. In ancient Egypt, they used papyrus, made from a plant that grew along the Nile. In Europe, the most common material was parchment, made from animal skin, which was strong but extremely expensive.
Paper as we know it was invented in China around the year one hundred and five, and is traditionally credited to an official called Cai Lun. He made it by mixing tree bark, old rags and fishing nets with water, then pressing the mixture flat and drying it in the sun.
For several centuries, the technique was kept secret. According to a well-known story, it reached the Islamic world after a battle in seven hundred and fifty-one, when Chinese prisoners who knew how to make paper were taken to Samarkand. Whatever the exact details, Samarkand soon became famous for producing high-quality paper, and from there the technology spread to Baghdad, Damascus and eventually Spain.
In Europe, paper was at first treated with suspicion, and some officials refused to use it for important documents because they believed it would not last. Its real breakthrough came in the fifteenth century with the invention of the printing press, which created enormous demand for cheap paper.
Until the nineteenth century, most paper was made from cotton and linen rags. Then, as demand grew, manufacturers began to use wood pulp, which made paper much cheaper but also more acidic, so many books from that period are now turning yellow and falling apart.`,
        questions: [
          { id: 'n5l31', type: 'fill', prompt: '31. In ancient Egypt people wrote on ___.', answer: 'papyrus' },
          { id: 'n5l32', type: 'single', prompt: '32. Parchment was …', options: ['cheap and weak', 'strong but very expensive', 'made from plants', 'invented in China'], answer: 1 },
          { id: 'n5l33', type: 'fill', prompt: '33. Paper was invented in China around the year ___.', answer: ['105', 'one hundred and five'] },
          { id: 'n5l34', type: 'single', prompt: '34. Cai Lun’s ingredients included …', options: ['cotton and silk', 'tree bark, rags and fishing nets', 'animal skin', 'wood pulp'], answer: 1 },
          { id: 'n5l35', type: 'fill', prompt: '35. Paper reportedly reached Samarkand after a battle in ___.', answer: ['751', 'seven hundred and fifty-one'] },
          { id: 'n5l36', type: 'single', prompt: '36. Samarkand became famous for …', options: ['cheap paper', 'high-quality paper', 'printing presses', 'parchment'], answer: 1 },
          { id: 'n5l37', type: 'fill', prompt: '37. From Samarkand the technology spread to Baghdad, Damascus and eventually ___.', answer: 'Spain' },
          { id: 'n5l38', type: 'single', prompt: '38. Why did some European officials refuse to use paper?', options: ['It was too expensive.', 'They thought it would not last.', 'It was illegal.', 'It came from abroad.'], answer: 1 },
          { id: 'n5l39', type: 'fill', prompt: '39. Paper’s breakthrough came with the printing ___.', answer: 'press' },
          { id: 'n5l40', type: 'fill', prompt: '40. Wood pulp made paper more ___, so old books turn yellow.', answer: 'acidic' },
        ],
      },
    ],
  },

  'reading-5': {
    kind: 'reading', title: 'IELTS Academic Reading — Mock Test 5', minutes: 60,
    sections: [
      {
        title: 'Passage 1 · The Snow Leopard',
        intro: 'Questions 1–13. You should spend about 20 minutes on this passage.',
        text: `The snow leopard is one of the most elusive large cats in the world. It lives in the high mountains of Central and South Asia, including the Tien Shan and Pamir ranges in Uzbekistan, Kyrgyzstan and Tajikistan, usually at altitudes between three and five thousand metres. Its thick, pale grey coat with dark rosettes provides excellent camouflage among the rocks, and its long tail helps it to balance on steep slopes and is wrapped around the body for warmth while it sleeps.

Snow leopards are solitary animals and are most active at dawn and dusk. They hunt wild sheep and goats, such as the ibex, and can kill prey up to three times their own weight. Because their territories are enormous and they avoid humans, scientists rarely see them directly. Instead, researchers rely on camera traps — cameras triggered by movement — and on collecting droppings, from which DNA can be extracted to identify individual animals.

It is estimated that between four and seven thousand snow leopards remain in the wild. The main threats are poaching for their fur, the decline of their natural prey, and conflict with herders, who sometimes kill leopards that attack their livestock. Climate change may also push the tree line higher up the mountains, reducing the open habitat that snow leopards depend on.

Several conservation programmes now work directly with local communities. In some villages, herders receive compensation or insurance when they lose animals, and they are helped to build predator-proof enclosures for their sheep at night. Some former hunters have been employed as rangers, using their detailed knowledge of the mountains to protect the animals they once hunted.`,
        questions: [
          { id: 'n5r1', type: 'single', prompt: '1. Snow leopards usually live between 3,000 and 5,000 metres.', options: tfng, answer: 0 },
          { id: 'n5r2', type: 'single', prompt: '2. The snow leopard’s tail is short.', options: tfng, answer: 1 },
          { id: 'n5r3', type: 'single', prompt: '3. Snow leopards usually live in groups.', options: tfng, answer: 1 },
          { id: 'n5r4', type: 'single', prompt: '4. Snow leopards can roar loudly.', options: tfng, answer: 2 },
          { id: 'n5r5', type: 'single', prompt: '5. They can kill animals heavier than themselves.', options: tfng, answer: 0 },
          { id: 'n5r6', type: 'single', prompt: '6. Scientists often see snow leopards directly.', options: tfng, answer: 1 },
          { id: 'n5r7', type: 'single', prompt: '7. Some former hunters now work as rangers.', options: tfng, answer: 0 },
          { id: 'n5r8', type: 'fill', prompt: '8. The dark spots on the coat are called ___. (ONE WORD)', answer: 'rosettes' },
          { id: 'n5r9', type: 'fill', prompt: '9. Snow leopards are most active at dawn and ___. (ONE WORD)', answer: 'dusk' },
          { id: 'n5r10', type: 'fill', prompt: '10. A typical prey animal is the ___. (ONE WORD)', answer: 'ibex' },
          { id: 'n5r11', type: 'fill', prompt: '11. Researchers use camera ___ triggered by movement. (ONE WORD)', answer: ['traps', 'trap'] },
          { id: 'n5r12', type: 'fill', prompt: '12. ___ can be extracted from droppings. (ONE WORD)', answer: 'DNA' },
          { id: 'n5r13', type: 'fill', prompt: '13. Herders are helped to build predator-proof ___. (ONE WORD)', answer: ['enclosures', 'enclosure'] },
        ],
      },
      {
        title: 'Passage 2 · Why We Remember Some Things and Forget Others',
        intro: 'Questions 14–26. You should spend about 20 minutes on this passage.',
        text: `A. In the 1880s, the German psychologist Hermann Ebbinghaus carried out a series of experiments on himself. He memorised lists of meaningless syllables and then tested how many he could recall after different periods of time. His results produced what is now called the "forgetting curve": most forgetting happens very quickly, within the first hour or day, after which the rate of forgetting slows down.

B. Ebbinghaus also discovered that reviewing material at increasing intervals greatly reduces forgetting. This principle, known as spaced repetition, is the basis of many modern flashcard apps, which show learners a word just before they are likely to forget it.

C. Modern research has identified other factors that influence memory. One is the "testing effect": trying to recall information strengthens memory more than simply rereading it. In one experiment, students who took practice tests remembered around fifty per cent more a week later than those who spent the same time rereading their notes.

D. Emotion also plays a powerful role. People tend to remember emotional events — both pleasant and unpleasant — more vividly than neutral ones, partly because stress hormones help the brain to store them. However, vivid memories are not always accurate; people can feel very confident about details that are in fact wrong.

E. Sleep is another crucial factor. During deep sleep, the brain appears to replay and reorganise information learned during the day, transferring it from short-term to long-term storage. Students who stay up all night before an exam may therefore remember less, not more.

F. Finally, forgetting is not always a failure. Researchers argue that the brain actively removes unnecessary information, which helps us to focus on what matters and to adapt to new situations.`,
        questions: [
          { id: 'n5r14', type: 'single', prompt: '14. Which paragraph describes the origin of the forgetting curve?', options: ['A', 'B', 'C', 'D'], answer: 0 },
          { id: 'n5r15', type: 'single', prompt: '15. Which paragraph links memory with feelings?', options: ['B', 'C', 'D', 'E'], answer: 2 },
          { id: 'n5r16', type: 'single', prompt: '16. Which paragraph explains a benefit of forgetting?', options: ['A', 'C', 'E', 'F'], answer: 3 },
          { id: 'n5r17', type: 'single', prompt: '17. Which paragraph explains why all-night studying may not help?', options: ['B', 'D', 'E', 'F'], answer: 2 },
          { id: 'n5r18', type: 'single', prompt: '18. According to the forgetting curve, most forgetting happens …', options: ['after a month', 'very quickly', 'only during sleep', 'at a steady rate'], answer: 1 },
          { id: 'n5r19', type: 'single', prompt: '19. Students who took practice tests remembered about … more.', options: ['10%', '25%', '50%', '100%'], answer: 2 },
          { id: 'n5r20', type: 'single', prompt: '20. What is said about vivid emotional memories?', options: ['They are always accurate.', 'They are not always accurate.', 'They fade quickly.', 'They only concern unpleasant events.'], answer: 1 },
          { id: 'n5r21', type: 'single', prompt: '21. Ebbinghaus tested himself using meaningful words.', options: tfng, answer: 1 },
          { id: 'n5r22', type: 'single', prompt: '22. Flashcard apps are based on spaced repetition.', options: tfng, answer: 0 },
          { id: 'n5r23', type: 'single', prompt: '23. Rereading notes is more effective than testing yourself.', options: tfng, answer: 1 },
          { id: 'n5r24', type: 'single', prompt: '24. Children forget faster than adults.', options: tfng, answer: 2 },
          { id: 'n5r25', type: 'fill', prompt: '25. Stress ___ help the brain store emotional events. (ONE WORD)', answer: 'hormones' },
          { id: 'n5r26', type: 'fill', prompt: '26. During deep sleep the brain may ___ information learned during the day. (ONE WORD)', answer: ['replay', 'reorganise'] },
        ],
      },
      {
        title: 'Passage 3 · The Return of the Trolleybus?',
        intro: 'Questions 27–40. You should spend about 20 minutes on this passage.',
        text: `For much of the twentieth century, trolleybuses — electric buses powered by overhead wires — were a familiar sight in cities across Europe and the former Soviet Union, including Tashkent, where they operated for more than sixty years. From the 1990s onwards, however, many cities removed their networks. Diesel buses were cheaper to buy, did not need expensive overhead infrastructure, and could change routes easily.

Today, as cities try to reduce air pollution and carbon emissions, electric transport is back on the agenda, and some planners argue that the trolleybus deserves a second look. Its main advantage over battery buses is that it does not need to carry heavy batteries for the whole day. Because energy comes continuously from the wires, the vehicles are lighter, can run for eighteen or twenty hours without stopping to charge, and the batteries that are still used — for short sections without wires — are small and last longer.

Critics point out that overhead wires are visually unattractive and costly to maintain, and that a network is difficult to expand or modify once it has been built. A breakdown on one section can also block the vehicles behind it, since they cannot simply drive around the problem.

A compromise known as "in-motion charging" is now being tested in several cities. Buses charge their batteries while running under wires on the busiest central routes, and then continue on battery power into the suburbs, where installing wires would be uneconomic. This allows cities to use existing wires more efficiently while extending services into new areas.

Whether trolleybuses make a widespread return will depend on local conditions: the cost of electricity, the state of existing infrastructure, and, perhaps most importantly, whether residents are willing to accept wires above their streets in exchange for cleaner air.`,
        questions: [
          { id: 'n5r27', type: 'single', prompt: '27. Why did many cities remove trolleybuses from the 1990s?', options: ['They were too slow.', 'Diesel buses were cheaper and more flexible.', 'Passengers disliked them.', 'Electricity became free.'], answer: 1 },
          { id: 'n5r28', type: 'single', prompt: '28. The main advantage of trolleybuses over battery buses is that they …', options: ['are quieter', 'do not carry heavy batteries all day', 'need no drivers', 'are cheaper to build'], answer: 1 },
          { id: 'n5r29', type: 'single', prompt: '29. What problem do critics mention?', options: ['high fares', 'a breakdown can block vehicles behind it', 'they cannot carry many passengers', 'they are dangerous in rain'], answer: 1 },
          { id: 'n5r30', type: 'single', prompt: '30. In-motion charging means buses …', options: ['charge only at night', 'charge while running under wires, then use batteries', 'never use batteries', 'charge at every stop'], answer: 1 },
          { id: 'n5r31', type: 'single', prompt: '31. What does the writer suggest will decide the future of trolleybuses?', options: ['national laws', 'local conditions and residents’ attitudes', 'bus manufacturers', 'tourism'], answer: 1 },
          { id: 'n5r32', type: 'single', prompt: '32. Trolleybuses operated in Tashkent for over sixty years.', options: tfng, answer: 0 },
          { id: 'n5r33', type: 'single', prompt: '33. Battery buses can run longer without charging than trolleybuses.', options: tfng, answer: 1 },
          { id: 'n5r34', type: 'single', prompt: '34. Trolleybus networks are easy to change once built.', options: tfng, answer: 1 },
          { id: 'n5r35', type: 'single', prompt: '35. In-motion charging is already used in every European capital.', options: tfng, answer: 1 },
          { id: 'n5r36', type: 'single', prompt: '36. Trolleybuses are safer than diesel buses.', options: tfng, answer: 2 },
          { id: 'n5r37', type: 'fill', prompt: '37. Trolleybuses are powered by overhead ___. (ONE WORD)', answer: ['wires', 'wire'] },
          { id: 'n5r38', type: 'fill', prompt: '38. Trolleybuses can run for eighteen or ___ hours without charging. (ONE WORD)', answer: 'twenty' },
          { id: 'n5r39', type: 'fill', prompt: '39. Installing wires in the ___ would be uneconomic. (ONE WORD)', answer: 'suburbs' },
          { id: 'n5r40', type: 'fill', prompt: '40. Residents may accept wires in exchange for cleaner ___. (ONE WORD)', answer: 'air' },
        ],
      },
    ],
  },

  'listening-6': {
    kind: 'listening', title: 'IELTS Listening — Mock Test 6', minutes: 30,
    sections: [
      {
        title: 'Part 1 · Enrolling in an evening language course',
        intro: 'You will hear a woman phoning a language school. Questions 1–10.',
        script: `Receptionist: Good evening, Global Language Centre.
Caller: Hello. I'd like to enrol in one of your evening courses, please. I'm interested in Korean.
Receptionist: Certainly. We have a beginners' course on Tuesdays and Fridays from half past six to eight.
Caller: That's perfect. How long does the course last?
Receptionist: Twelve weeks. It starts on the third of October.
Caller: And what's the fee?
Receptionist: It's one hundred and eighty dollars, and that includes the textbook. There's a ten per cent discount if you pay for the whole course in advance.
Caller: Great, I'll pay in advance. How many students are in a class?
Receptionist: The maximum is fourteen.
Caller: Do I need to take a test first?
Receptionist: Not for beginners. Can I take your name?
Caller: Yes, it's Shahnoza Mirzayeva. M-I-R-Z-A-Y-E-V-A.
Receptionist: And a contact number?
Caller: Oh nine three, five five two, one seven eight eight.
Receptionist: Thank you. The classes are in room twenty-one, on the third floor. Please bring a notebook and arrive ten minutes early on the first day to collect your student card.`,
        questions: [
          { id: 'n6l1', type: 'fill', prompt: '1. Language: ___', answer: 'Korean' },
          { id: 'n6l2', type: 'fill', prompt: '2. Days: Tuesdays and ___', answer: 'Fridays' },
          { id: 'n6l3', type: 'fill', prompt: '3. Length of course: ___ weeks', answer: ['12', 'twelve'] },
          { id: 'n6l4', type: 'fill', prompt: '4. Start date: the ___ of October', answer: ['third', '3rd', '3'] },
          { id: 'n6l5', type: 'fill', prompt: '5. Fee: $___', answer: ['180', 'one hundred and eighty'] },
          { id: 'n6l6', type: 'single', prompt: '6. The fee includes …', options: ['a dictionary', 'the textbook', 'a test', 'parking'], answer: 1 },
          { id: 'n6l7', type: 'fill', prompt: '7. Discount for paying in advance: ___ %', answer: ['10', 'ten'] },
          { id: 'n6l8', type: 'fill', prompt: '8. Maximum class size: ___', answer: ['14', 'fourteen'] },
          { id: 'n6l9', type: 'fill', prompt: '9. Surname: ___', answer: 'Mirzayeva' },
          { id: 'n6l10', type: 'fill', prompt: '10. On the first day, collect your student ___.', answer: 'card' },
        ],
      },
      {
        title: 'Part 2 · Volunteering at a nature reserve',
        intro: 'You will hear a coordinator talking to new volunteers. Questions 11–20.',
        script: `Good morning, everyone, and thank you for volunteering at the Zarafshan Nature Reserve. I'm Akmal, the volunteer coordinator.
Let me explain how the week will work. On Monday and Tuesday you'll be helping with tree planting along the river. We plant mainly poplar and willow, because their roots help to stop the riverbanks from washing away.
On Wednesday, we'll be counting birds. This is part of a national survey, and the data is sent to the Academy of Sciences. You don't need any experience — you'll each be paired with a member of staff, and we'll provide binoculars.
Thursday is maintenance day. We'll be repairing the wooden walkways and replacing information signs that were damaged by floods in the spring.
On Friday, you'll help with our education programme, when two groups of schoolchildren visit. You'll lead small groups along the nature trail.
A few rules: please never feed the animals, stay on the marked paths, and take all your rubbish home with you. Lunch is provided every day at one o'clock in the visitor centre, but please bring your own water bottle — we have a refill point but no plastic bottles for sale. Finally, if you see a Bukhara deer, which is quite rare, please write the time and place in the logbook at reception.`,
        questions: [
          { id: 'n6l11', type: 'single', prompt: '11. Akmal’s job is …', options: ['park ranger', 'volunteer coordinator', 'scientist', 'teacher'], answer: 1 },
          { id: 'n6l12', type: 'single', prompt: '12. Poplar and willow are planted because …', options: ['they grow fast', 'their roots protect the riverbanks', 'birds like them', 'they are cheap'], answer: 1 },
          { id: 'n6l13', type: 'fill', prompt: '13. Bird data is sent to the Academy of ___.', answer: 'Sciences' },
          { id: 'n6l14', type: 'single', prompt: '14. For bird counting, volunteers …', options: ['need experience', 'work alone', 'are paired with staff', 'bring binoculars'], answer: 2 },
          { id: 'n6l15', type: 'fill', prompt: '15. Thursday: repairing wooden ___.', answer: ['walkways', 'walkway'] },
          { id: 'n6l16', type: 'single', prompt: '16. The signs were damaged by …', options: ['fire', 'floods', 'visitors', 'snow'], answer: 1 },
          { id: 'n6l17', type: 'single', prompt: '17. On Friday volunteers will …', options: ['plant trees', 'lead schoolchildren on the trail', 'count birds', 'clean the river'], answer: 1 },
          { id: 'n6l18', type: 'fill', prompt: '18. Lunch is at ___ o’clock.', answer: ['1', 'one'] },
          { id: 'n6l19', type: 'single', prompt: '19. Volunteers should bring …', options: ['lunch', 'a water bottle', 'plastic bottles', 'binoculars'], answer: 1 },
          { id: 'n6l20', type: 'fill', prompt: '20. Record Bukhara deer sightings in the ___ at reception.', answer: 'logbook' },
        ],
      },
      {
        title: 'Part 3 · Discussing a business case study',
        intro: 'You will hear two students, Rustam and Ellie, discussing a case study with their lecturer. Questions 21–30.',
        script: `Lecturer: So, which company did you choose for your case study?
Ellie: A small bakery chain in Tashkent that started as one shop eight years ago and now has eleven branches.
Lecturer: Interesting. What's the main question you're investigating?
Rustam: Why it grew so quickly when many similar businesses failed.
Lecturer: And what have you found so far?
Ellie: The founder told us the key was consistency — every branch uses exactly the same recipes, and staff train for three weeks before they start.
Rustam: But I think location was just as important. Almost all the branches are next to metro stations.
Lecturer: Good — two possible explanations. How will you decide between them?
Ellie: We're planning to compare sales from branches near metro stations with the two that aren't.
Lecturer: That's a sensible approach. What about weaknesses?
Rustam: Their biggest problem is staff turnover. Many young employees leave after a few months for better-paid jobs.
Lecturer: Do they have a solution?
Ellie: They've just introduced a bonus system, but it's too early to know if it's working.
Lecturer: Then mention that as an area for further research. Make sure your report includes a SWOT analysis, and keep it under three thousand words. It's due at the end of next month.`,
        questions: [
          { id: 'n6l21', type: 'fill', prompt: '21. The bakery chain now has ___ branches.', answer: ['11', 'eleven'] },
          { id: 'n6l22', type: 'single', prompt: '22. The students want to find out why the company …', options: ['closed shops', 'grew so quickly', 'changed its recipes', 'moved to Samarkand'], answer: 1 },
          { id: 'n6l23', type: 'single', prompt: '23. According to the founder, the key to success was …', options: ['low prices', 'consistency', 'advertising', 'delivery'], answer: 1 },
          { id: 'n6l24', type: 'fill', prompt: '24. New staff train for ___ weeks.', answer: ['3', 'three'] },
          { id: 'n6l25', type: 'single', prompt: '25. Rustam believes success was also due to …', options: ['location near metro stations', 'online sales', 'cheap rent', 'famous chefs'], answer: 0 },
          { id: 'n6l26', type: 'single', prompt: '26. How will they test the two explanations?', options: ['interview customers', 'compare sales of branches near and far from metro stations', 'ask the lecturer', 'visit other countries'], answer: 1 },
          { id: 'n6l27', type: 'fill', prompt: '27. The company’s biggest problem is staff ___.', answer: 'turnover' },
          { id: 'n6l28', type: 'single', prompt: '28. The new solution is …', options: ['higher prices', 'a bonus system', 'fewer branches', 'longer training'], answer: 1 },
          { id: 'n6l29', type: 'fill', prompt: '29. The report must include a ___ analysis.', answer: 'SWOT' },
          { id: 'n6l30', type: 'fill', prompt: '30. Maximum length: ___ words', answer: ['3000', 'three thousand', '3,000'] },
        ],
      },
      {
        title: 'Part 4 · Lecture: How bees communicate',
        intro: 'You will hear part of a biology lecture. Questions 31–40.',
        script: `Today I'd like to look at one of the most remarkable communication systems in the animal world: the dance of the honeybee.
In the 1940s, the Austrian scientist Karl von Frisch discovered that a forager bee returning to the hive can tell other bees exactly where to find food. He later received the Nobel Prize for this work.
If the food is close to the hive — less than about fifty metres away — the bee performs a "round dance", moving quickly in small circles. This tells the others that food is nearby, but not its exact direction; they find it mainly by smell.
For more distant food, the bee performs the "waggle dance". It walks in a straight line while shaking its body from side to side, then circles back and repeats. The angle of the straight run in relation to vertical shows the direction of the food relative to the sun. And the length of the waggle run indicates the distance: the longer the waggle, the further away the food.
What's especially impressive is that bees adjust for the movement of the sun during the day, so the direction they communicate stays accurate.
Bees also use chemical signals called pheromones. For example, when a bee stings, it releases an alarm pheromone that smells a little like bananas, which warns other bees and encourages them to attack.
Understanding bee communication has practical value. Bees pollinate about a third of the crops we eat, and their numbers have declined in many regions because of pesticides, disease and loss of habitat. Researchers now use dance information to discover which plants bees prefer, helping farmers to plant flowers that support healthy colonies.`,
        questions: [
          { id: 'n6l31', type: 'fill', prompt: '31. Von Frisch was from ___.', answer: 'Austria' },
          { id: 'n6l32', type: 'fill', prompt: '32. He later received the ___ Prize.', answer: 'Nobel' },
          { id: 'n6l33', type: 'fill', prompt: '33. A round dance means food is less than about ___ metres away.', answer: ['50', 'fifty'] },
          { id: 'n6l34', type: 'single', prompt: '34. After a round dance, bees find the food mainly by …', options: ['sight', 'smell', 'sound', 'temperature'], answer: 1 },
          { id: 'n6l35', type: 'single', prompt: '35. The angle of the waggle run shows the food’s direction relative to …', options: ['the hive door', 'the sun', 'the wind', 'the queen'], answer: 1 },
          { id: 'n6l36', type: 'single', prompt: '36. A longer waggle run means the food is …', options: ['sweeter', 'closer', 'further away', 'in a tree'], answer: 2 },
          { id: 'n6l37', type: 'fill', prompt: '37. Chemical signals are called ___.', answer: ['pheromones', 'pheromone'] },
          { id: 'n6l38', type: 'fill', prompt: '38. The alarm pheromone smells a little like ___.', answer: ['bananas', 'banana'] },
          { id: 'n6l39', type: 'single', prompt: '39. Bees pollinate about … of the crops we eat.', options: ['a tenth', 'a quarter', 'a third', 'half'], answer: 2 },
          { id: 'n6l40', type: 'fill', prompt: '40. Bee numbers have declined because of pesticides, disease and loss of ___.', answer: 'habitat' },
        ],
      },
    ],
  },

  'reading-6': {
    kind: 'reading', title: 'IELTS Academic Reading — Mock Test 6', minutes: 60,
    sections: [
      {
        title: 'Passage 1 · Suzani: Stories in Thread',
        intro: 'Questions 1–13. You should spend about 20 minutes on this passage.',
        text: `Suzani are large embroidered textiles that have been made in Uzbekistan, Tajikistan and neighbouring regions for centuries. The name comes from the Persian word for "needle". Traditionally, they were part of a bride's dowry: a girl's mother and female relatives would begin stitching them when she was still a child, so that several would be ready by the time she married.

A suzani is usually made from strips of cotton cloth, which are embroidered separately by different women and then sewn together. This is why the pattern on one strip sometimes does not match its neighbour perfectly. The most common designs include large circles representing the sun or moon, flowers, pomegranates — a symbol of fertility — and chili peppers, which were believed to protect against evil.

Each region developed its own style. Suzani from Bukhara often have delicate floral patterns on a light background, while those from Samarkand are known for bold, dark red circles. Nurata embroideries frequently feature a single large central star surrounded by flowers.

Originally, the threads were coloured with natural dyes: madder root for red, indigo for blue and pomegranate skin or saffron for yellow. In the twentieth century, cheaper synthetic dyes became common, and machine-made imitations appeared in tourist markets.

Today, there is renewed interest in traditional techniques. Workshops in Bukhara and Samarkand train young women in hand embroidery, and antique suzani are now sold to collectors and museums around the world for high prices.`,
        questions: [
          { id: 'n6r1', type: 'single', prompt: '1. The word suzani comes from the Persian word for "needle".', options: tfng, answer: 0 },
          { id: 'n6r2', type: 'single', prompt: '2. Suzani were traditionally given to the groom’s family as payment.', options: tfng, answer: 1 },
          { id: 'n6r3', type: 'single', prompt: '3. Different strips of one suzani were often embroidered by different women.', options: tfng, answer: 0 },
          { id: 'n6r4', type: 'single', prompt: '4. Bukhara suzani usually have dark backgrounds.', options: tfng, answer: 1 },
          { id: 'n6r5', type: 'single', prompt: '5. Nurata embroideries are the most expensive.', options: tfng, answer: 2 },
          { id: 'n6r6', type: 'single', prompt: '6. Synthetic dyes became common in the twentieth century.', options: tfng, answer: 0 },
          { id: 'n6r7', type: 'single', prompt: '7. Antique suzani are now sold only in Uzbekistan.', options: tfng, answer: 1 },
          { id: 'n6r8', type: 'fill', prompt: '8. Suzani are usually made from strips of ___ cloth. (ONE WORD)', answer: 'cotton' },
          { id: 'n6r9', type: 'fill', prompt: '9. Pomegranates are a symbol of ___. (ONE WORD)', answer: 'fertility' },
          { id: 'n6r10', type: 'fill', prompt: '10. Chili peppers were believed to protect against ___. (ONE WORD)', answer: 'evil' },
          { id: 'n6r11', type: 'fill', prompt: '11. Samarkand suzani are known for bold, dark red ___. (ONE WORD)', answer: ['circles', 'circle'] },
          { id: 'n6r12', type: 'fill', prompt: '12. Red dye came from madder ___. (ONE WORD)', answer: 'root' },
          { id: 'n6r13', type: 'fill', prompt: '13. Workshops in Bukhara and Samarkand train young women in hand ___. (ONE WORD)', answer: 'embroidery' },
        ],
      },
      {
        title: 'Passage 2 · Can Cities Be Designed for Happiness?',
        intro: 'Questions 14–26. You should spend about 20 minutes on this passage.',
        text: `A. For most of the twentieth century, cities were planned mainly around the needs of cars. Wide roads, separate zones for housing, offices and shopping, and large car parks were seen as signs of modern, efficient design. In recent decades, however, a growing number of planners and psychologists have asked a different question: how does the design of a city affect the well-being of the people who live in it?

B. One of the clearest findings concerns commuting. Surveys in several countries have found that long daily commutes, especially by car in heavy traffic, are associated with lower life satisfaction. Some economists have calculated that a person who commutes for an hour each way would need a considerably higher salary to be as satisfied as someone who lives close to work.

C. Access to nature is another important factor. People living near parks, trees or water tend to report lower stress levels, and hospital patients with a view of trees have been found to recover slightly faster than those facing a brick wall. Even small green spaces, such as pocket parks, appear to have measurable benefits.

D. Social connection matters too. Streets with front gardens, benches and small shops encourage brief, informal encounters between neighbours, which research links with a stronger sense of belonging. By contrast, high-speed roads tend to divide communities: one well-known study found that residents of streets with heavy traffic had far fewer friends among their neighbours than residents of quiet streets.

E. Critics caution that happiness is influenced by many factors, such as income, health and relationships, and that design alone cannot solve deep social problems. They also note that improvements can raise property prices, pushing out the very residents they were meant to help.

F. Nevertheless, many cities are now experimenting with "people-first" design, from car-free streets to tree-planting programmes, and are measuring residents' well-being alongside traditional indicators such as economic growth.`,
        questions: [
          { id: 'n6r14', type: 'single', prompt: '14. Which paragraph describes the car-centred planning of the past?', options: ['A', 'B', 'C', 'D'], answer: 0 },
          { id: 'n6r15', type: 'single', prompt: '15. Which paragraph links green space with lower stress?', options: ['B', 'C', 'D', 'E'], answer: 1 },
          { id: 'n6r16', type: 'single', prompt: '16. Which paragraph mentions a possible negative side effect of improvements?', options: ['B', 'D', 'E', 'F'], answer: 2 },
          { id: 'n6r17', type: 'single', prompt: '17. Which paragraph compares streets with heavy and light traffic?', options: ['A', 'C', 'D', 'F'], answer: 2 },
          { id: 'n6r18', type: 'single', prompt: '18. Long commutes are associated with …', options: ['higher salaries', 'lower life satisfaction', 'better health', 'more friends'], answer: 1 },
          { id: 'n6r19', type: 'single', prompt: '19. Hospital patients with a view of trees …', options: ['recovered slightly faster', 'needed more medicine', 'left earlier by a week', 'were happier with food'], answer: 0 },
          { id: 'n6r20', type: 'single', prompt: '20. What do critics say?', options: ['Design has no effect.', 'Design alone cannot solve deep social problems.', 'Parks are too expensive.', 'Cars make people happy.'], answer: 1 },
          { id: 'n6r21', type: 'single', prompt: '21. Small green spaces seem to have measurable benefits.', options: tfng, answer: 0 },
          { id: 'n6r22', type: 'single', prompt: '22. Residents of busy streets had more friends among neighbours.', options: tfng, answer: 1 },
          { id: 'n6r23', type: 'single', prompt: '23. Most cities have stopped building roads.', options: tfng, answer: 2 },
          { id: 'n6r24', type: 'single', prompt: '24. Improvements can push up property prices.', options: tfng, answer: 0 },
          { id: 'n6r25', type: 'fill', prompt: '25. Small green spaces are sometimes called ___ parks. (ONE WORD)', answer: 'pocket' },
          { id: 'n6r26', type: 'fill', prompt: '26. Some cities now measure residents’ well-being alongside economic ___. (ONE WORD)', answer: 'growth' },
        ],
      },
      {
        title: 'Passage 3 · The Science of Bilingualism',
        intro: 'Questions 27–40. You should spend about 20 minutes on this passage.',
        text: `More than half of the world's population uses two or more languages in daily life. In Uzbekistan, for example, many people move easily between Uzbek, Russian and, increasingly, English. Yet for much of the twentieth century, bilingualism was regarded with suspicion in some countries, and parents were sometimes advised to raise children with only one language to avoid confusing them.

Early studies seemed to support this view, finding that bilingual children performed worse on intelligence tests. Later researchers pointed out serious flaws in these studies: many of the bilingual children came from poorer families, and they were often tested in their weaker language. When these factors were controlled, the apparent disadvantage largely disappeared.

From the 1960s onwards, the picture changed dramatically. Studies began to report a "bilingual advantage" in so-called executive functions — mental skills such as ignoring distractions, switching between tasks and holding information in mind. The explanation offered was that bilinguals constantly have both languages active and must suppress the one they are not using, which provides a kind of continuous mental training.

More recently, this claim has itself been challenged. Several large studies have failed to find consistent advantages in executive function, and some researchers argue that earlier positive results were partly due to small sample sizes and the tendency of journals to publish striking findings. The debate remains unresolved, and many scientists now believe that any cognitive advantages are smaller and more dependent on circumstances than once thought.

Other benefits, however, are less controversial. Bilingual people have access to more cultures, literature and job opportunities. There is also some evidence that lifelong bilingualism may delay the appearance of symptoms of dementia by several years, although this too requires further research. What is clear is that learning two languages does not harm children's development, and that the old advice to avoid bilingualism was mistaken.`,
        questions: [
          { id: 'n6r27', type: 'single', prompt: '27. In the past, some parents were advised to …', options: ['teach three languages', 'use only one language with children', 'start languages at university', 'avoid English'], answer: 1 },
          { id: 'n6r28', type: 'single', prompt: '28. What was wrong with early studies?', options: ['They used too many children.', 'Bilingual children were often poorer and tested in their weaker language.', 'They were done in Uzbekistan.', 'They tested only adults.'], answer: 1 },
          { id: 'n6r29', type: 'single', prompt: '29. The suggested reason for a bilingual advantage is that bilinguals …', options: ['read more books', 'suppress the language they are not using', 'sleep more', 'learn faster at school'], answer: 1 },
          { id: 'n6r30', type: 'single', prompt: '30. Why may earlier positive results have been misleading?', options: ['small samples and publication of striking findings', 'poor translation', 'government pressure', 'lack of computers'], answer: 0 },
          { id: 'n6r31', type: 'single', prompt: '31. What does the writer conclude?', options: ['Bilingualism harms children.', 'Bilingualism does not harm development; cognitive benefits are debated.', 'The bilingual advantage is proven.', 'Only children should learn languages.'], answer: 1 },
          { id: 'n6r32', type: 'single', prompt: '32. More than half of the world’s population uses two or more languages.', options: tfng, answer: 0 },
          { id: 'n6r33', type: 'single', prompt: '33. Controlling for background removed most of the apparent disadvantage.', options: tfng, answer: 0 },
          { id: 'n6r34', type: 'single', prompt: '34. All recent large studies confirm the bilingual advantage.', options: tfng, answer: 1 },
          { id: 'n6r35', type: 'single', prompt: '35. Bilingual children learn to read earlier than monolingual children.', options: tfng, answer: 2 },
          { id: 'n6r36', type: 'single', prompt: '36. The link between bilingualism and dementia is fully proven.', options: tfng, answer: 1 },
          { id: 'n6r37', type: 'fill', prompt: '37. Skills like ignoring distractions are called executive ___. (ONE WORD)', answer: ['functions', 'function'] },
          { id: 'n6r38', type: 'fill', prompt: '38. Bilingualism was once regarded with ___. (ONE WORD)', answer: 'suspicion' },
          { id: 'n6r39', type: 'fill', prompt: '39. Lifelong bilingualism may delay symptoms of ___. (ONE WORD)', answer: 'dementia' },
          { id: 'n6r40', type: 'fill', prompt: '40. Bilinguals have access to more cultures, literature and job ___. (ONE WORD)', answer: ['opportunities', 'opportunity'] },
        ],
      },
    ],
  },
};
