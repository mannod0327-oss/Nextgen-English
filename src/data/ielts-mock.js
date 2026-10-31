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

  'listening-7': {
    kind: 'listening', title: 'IELTS Listening — Mock Test 7', minutes: 30,
    sections: [
      {
        title: 'Part 1 · Reporting lost luggage at an airport',
        intro: 'You will hear a passenger talking to an airline employee. Questions 1–10.',
        script: `Agent: Good afternoon, baggage services. How can I help?
Passenger: Hello. My suitcase didn't arrive. I've just come in on the flight from Istanbul.
Agent: I'm sorry to hear that. Can I see your baggage tag? Thank you. Can you describe the suitcase?
Passenger: It's a large hard suitcase, dark green, with four wheels. There's a yellow ribbon tied to the handle.
Agent: Is there a name on it?
Passenger: Yes, there's a label with my name. It's Timur Rashidov. R-A-S-H-I-D-O-V.
Agent: And what's inside, roughly?
Passenger: Mostly clothes, but also a laptop charger and some presents for my family.
Agent: Where are you staying?
Passenger: At the Silk Way Hotel, on Navoi Street. I'll be there for six nights.
Agent: Fine. Most delayed bags arrive on the next flight, which lands at eleven tonight. If it's on that flight, we'll deliver it to your hotel tomorrow morning, free of charge.
Passenger: And if it doesn't come?
Agent: Then you can buy essential items and claim the money back. Please keep all your receipts. The maximum we can pay is seventy-five dollars per day.
Passenger: Can I check the progress online?
Agent: Yes, use this reference number: B as in bravo, K, four, seven, two, nine.`,
        questions: [
          { id: 'n7l1', type: 'fill', prompt: '1. Flight from: ___', answer: 'Istanbul' },
          { id: 'n7l2', type: 'single', prompt: '2. Colour of the suitcase:', options: ['dark green', 'black', 'yellow', 'dark blue'], answer: 0 },
          { id: 'n7l3', type: 'fill', prompt: '3. Tied to the handle: a yellow ___', answer: 'ribbon' },
          { id: 'n7l4', type: 'fill', prompt: '4. Surname: ___', answer: 'Rashidov' },
          { id: 'n7l5', type: 'fill', prompt: '5. Contents: clothes, a laptop ___ and presents', answer: 'charger' },
          { id: 'n7l6', type: 'fill', prompt: '6. Hotel: the Silk Way Hotel, ___ Street', answer: 'Navoi' },
          { id: 'n7l7', type: 'fill', prompt: '7. Length of stay: ___ nights', answer: ['6', 'six'] },
          { id: 'n7l8', type: 'single', prompt: '8. If the bag arrives tonight, it will be …', options: ['kept at the airport', 'delivered to the hotel tomorrow morning', 'sent back to Istanbul', 'delivered tonight for a fee'], answer: 1 },
          { id: 'n7l9', type: 'fill', prompt: '9. Maximum payment for essentials: $___ per day', answer: ['75', 'seventy-five'] },
          { id: 'n7l10', type: 'fill', prompt: '10. The next flight lands at ___ o’clock tonight.', answer: ['11', 'eleven'] },
        ],
      },
      {
        title: 'Part 2 · A city food festival',
        intro: 'You will hear a radio presenter giving information about a food festival. Questions 11–20.',
        script: `And now some news for food lovers. This year's City Food Festival takes place over three days, from Friday to Sunday, in Central Park, and for the first time entry is completely free.
The festival is divided into four zones. Near the main entrance you'll find the Street Food zone, with more than forty stalls selling dishes from around the country. Behind it is the Family zone, where children can take part in baking workshops — places are limited, so please book them in advance on the festival website.
The third zone, by the lake, is called Tastes of the World, with food from twelve different countries. And finally, in the Chef's Tent, well-known cooks will give demonstrations every two hours, starting at noon.
This year the organisers are focusing on reducing waste. All stalls will use plates made from recycled paper, and visitors are asked to bring their own cups. If you do, you'll get a ten per cent discount on drinks.
On Saturday evening there'll be a concert of traditional music on the main stage, starting at eight o'clock. Please note that the nearest metro station, Bunyodkor, will be closed for repairs that weekend, so we recommend using the extra buses that will run every fifteen minutes from the city centre.
And one last thing: if it rains, the festival will continue, but the concert will move indoors to the Youth Palace.`,
        questions: [
          { id: 'n7l11', type: 'single', prompt: '11. The festival lasts …', options: ['one day', 'two days', 'three days', 'a week'], answer: 2 },
          { id: 'n7l12', type: 'single', prompt: '12. What is new this year?', options: ['It is held in Central Park.', 'There is a concert.', 'It is held in winter.', 'Entry is free.'], answer: 3 },
          { id: 'n7l13', type: 'fill', prompt: '13. Street Food zone: more than ___ stalls', answer: ['40', 'forty'] },
          { id: 'n7l14', type: 'single', prompt: '14. Baking workshops should be …', options: ['booked in advance', 'paid for in cash', 'attended by adults only', 'held in the Chef’s Tent'], answer: 0 },
          { id: 'n7l15', type: 'fill', prompt: '15. Tastes of the World: food from ___ countries', answer: ['12', 'twelve'] },
          { id: 'n7l16', type: 'fill', prompt: '16. Chef demonstrations start at ___', answer: ['noon', '12'] },
          { id: 'n7l17', type: 'fill', prompt: '17. Plates are made from recycled ___', answer: 'paper' },
          { id: 'n7l18', type: 'single', prompt: '18. Visitors who bring their own cup get …', options: ['a free drink', 'a 10% discount on drinks', 'a free plate', 'a concert ticket'], answer: 1 },
          { id: 'n7l19', type: 'single', prompt: '19. Why should visitors take the extra buses?', options: ['Parking is expensive.', 'The buses are free.', 'The metro station will be closed.', 'The park is far away.'], answer: 2 },
          { id: 'n7l20', type: 'fill', prompt: '20. If it rains, the concert moves to the Youth ___', answer: 'Palace' },
        ],
      },
      {
        title: 'Part 3 · Planning a presentation on water saving',
        intro: 'You will hear two students, Dilnoza and Mark, discussing a presentation with their tutor. Questions 21–30.',
        script: `Tutor: So, you've chosen water saving in agriculture for your presentation. Why that topic?
Dilnoza: Because farming uses most of the water in our region — around ninety per cent, according to the report we read.
Tutor: Good. And how are you going to structure it?
Mark: We thought we'd start with the problem, then look at three solutions, and finish with a case study.
Tutor: Which solutions?
Dilnoza: Drip irrigation, changing to crops that need less water, and repairing old canals, because a lot of water is lost through leaks.
Tutor: And the case study?
Mark: A farm near Jizzakh that switched to drip irrigation four years ago. The owner told us they now use about half as much water, and their tomato harvest actually increased.
Tutor: That's a strong example. Did you get any figures on cost?
Dilnoza: Not yet. The equipment is expensive, so we want to find out whether there's government support.
Tutor: Yes, that's important — otherwise your audience will ask why everyone doesn't do it. How long is the presentation?
Mark: Fifteen minutes, plus five for questions. I'll present the problem and the case study, and Dilnoza will do the solutions.
Tutor: Fine. One suggestion: don't put too much text on the slides. Use a map and one or two charts instead.
Dilnoza: We were going to make a short video at the farm, too.
Tutor: Good idea, but keep it under two minutes. And please send me your slides by Wednesday so I can give you feedback.`,
        questions: [
          { id: 'n7l21', type: 'fill', prompt: '21. Farming uses around ___ % of the water in the region.', answer: ['90', 'ninety'] },
          { id: 'n7l22', type: 'single', prompt: '22. The presentation will end with …', options: ['a quiz', 'a video only', 'a list of problems', 'a case study'], answer: 3 },
          { id: 'n7l23', type: 'single', prompt: '23. Which is NOT one of their three solutions?', options: ['building a new dam', 'drip irrigation', 'less thirsty crops', 'repairing canals'], answer: 0 },
          { id: 'n7l24', type: 'fill', prompt: '24. Water is lost from old canals through ___', answer: ['leaks', 'leak'] },
          { id: 'n7l25', type: 'fill', prompt: '25. The farm is near ___', answer: 'Jizzakh' },
          { id: 'n7l26', type: 'single', prompt: '26. Since switching to drip irrigation, the farm …', options: ['uses twice as much water', 'uses about half as much water', 'has stopped growing tomatoes', 'has closed'], answer: 1 },
          { id: 'n7l27', type: 'single', prompt: '27. What do the students still need to find out?', options: ['the size of the farm', 'the price of tomatoes', 'whether there is government support', 'the farmer’s name'], answer: 2 },
          { id: 'n7l28', type: 'single', prompt: '28. Who will present the solutions?', options: ['Mark', 'the tutor', 'both students together', 'Dilnoza'], answer: 3 },
          { id: 'n7l29', type: 'single', prompt: '29. The tutor suggests using …', options: ['a map and charts', 'more text', 'handouts only', 'no slides'], answer: 0 },
          { id: 'n7l30', type: 'fill', prompt: '30. Send the slides by ___', answer: 'Wednesday' },
        ],
      },
      {
        title: 'Part 4 · Lecture: Desertification',
        intro: 'You will hear part of a lecture on environmental geography. Questions 31–40.',
        script: `Today's topic is desertification — the process by which fertile land in dry regions gradually turns into desert. It's important to understand that desertification is not the natural movement of existing deserts. Rather, it is the loss of productive land, and it is mainly caused by human activity combined with climate variability.
The first major cause is overgrazing. When too many sheep, goats or cattle feed on the same land, they remove the plants whose roots hold the soil together. The exposed soil is then easily carried away by wind.
The second cause is poor irrigation. In hot climates, when fields are watered without proper drainage, water evaporates and leaves salt behind. Over time the soil becomes too salty for most crops. This is called salinisation, and it affects large areas of irrigated land in Central Asia.
A third cause is deforestation, especially the cutting of trees and bushes for firewood.
The consequences are serious. Desertification reduces food production, increases dust storms, and can force people to leave their land and move to cities.
However, the process can be slowed and even reversed. One method is planting drought-resistant shrubs such as saxaul, which can survive with very little water and help to fix moving sand. Another is rotational grazing, where animals are moved regularly so that plants have time to recover. Some countries have also built "green walls" — long belts of trees designed to stop the advance of sand.
Finally, local communities are essential. Projects are most successful when farmers themselves are involved in planning, rather than having solutions imposed from outside.`,
        questions: [
          { id: 'n7l31', type: 'single', prompt: '31. Desertification is defined as …', options: ['the natural movement of deserts', 'the loss of productive land in dry regions', 'a type of sandstorm', 'the melting of glaciers'], answer: 1 },
          { id: 'n7l32', type: 'single', prompt: '32. It is mainly caused by …', options: ['volcanoes', 'earthquakes', 'human activity and climate variability', 'ocean currents'], answer: 2 },
          { id: 'n7l33', type: 'fill', prompt: '33. Too many animals feeding on the same land is called ___', answer: 'overgrazing' },
          { id: 'n7l34', type: 'fill', prompt: '34. Without plants, exposed soil is carried away by ___', answer: 'wind' },
          { id: 'n7l35', type: 'fill', prompt: '35. Poor irrigation leaves ___ behind in the soil.', answer: 'salt' },
          { id: 'n7l36', type: 'fill', prompt: '36. This process is called ___', answer: ['salinisation', 'salinization'] },
          { id: 'n7l37', type: 'single', prompt: '37. Trees and bushes are often cut for …', options: ['furniture', 'paper', 'building houses', 'firewood'], answer: 3 },
          { id: 'n7l38', type: 'fill', prompt: '38. A drought-resistant shrub that fixes sand: ___', answer: 'saxaul' },
          { id: 'n7l39', type: 'single', prompt: '39. In rotational grazing, animals are …', options: ['moved regularly', 'kept indoors', 'sold every year', 'fed only grain'], answer: 0 },
          { id: 'n7l40', type: 'single', prompt: '40. Projects are most successful when …', options: ['solutions come from outside', 'farmers are involved in planning', 'only trees are planted', 'people move to cities'], answer: 1 },
        ],
      },
    ],
  },

  'reading-7': {
    kind: 'reading', title: 'IELTS Academic Reading — Mock Test 7', minutes: 60,
    sections: [
      {
        title: 'Passage 1 · The Water Towers of Central Asia',
        intro: 'Questions 1–13. You should spend about 20 minutes on this passage.',
        text: `The high mountain ranges of the Pamir and the Tien Shan are often called the "water towers" of Central Asia. Their snowfields and thousands of glaciers store water in winter and release it slowly during the hot summer months, feeding the great rivers that flow down into the plains. Without this summer meltwater, farming in much of the region would be almost impossible.

Glaciers form where more snow falls each winter than melts each summer. Over many years, the snow is compressed into dense ice, which slowly flows downhill under its own weight. A glacier is therefore not a static block of ice but a moving river of ice, advancing or retreating depending on the balance between snowfall and melting.

Scientists have observed that most glaciers in the region have been shrinking for several decades. Rising temperatures mean that melting now exceeds snowfall on many glaciers, and smaller glaciers at lower altitudes are disappearing fastest. Measuring these changes is difficult, because many glaciers are in remote areas that can only be reached on foot. Increasingly, researchers rely on satellite images, which they compare with old maps and photographs.

In the short term, faster melting can actually increase the amount of water in rivers. In the long term, however, as glaciers become smaller, summer flows are expected to decline, just when water demand is highest. Rapid melting also creates new lakes behind natural walls of rock and ice, which can burst suddenly and cause dangerous floods in the valleys below.

Governments and scientists are responding in several ways. Monitoring stations have been installed on key glaciers, and early-warning systems have been set up for some of the most dangerous lakes. At the same time, experts argue that the most effective response lies downstream: reducing the amount of water lost in irrigation channels would ease pressure on the region's shrinking frozen reserves.`,
        questions: [
          { id: 'n7r1', type: 'single', prompt: '1. Mountain snow and glaciers release most of their water in summer.', options: tfng, answer: 0 },
          { id: 'n7r2', type: 'single', prompt: '2. A glacier is a block of ice that never moves.', options: tfng, answer: 1 },
          { id: 'n7r3', type: 'single', prompt: '3. Glaciers at lower altitudes are disappearing fastest.', options: tfng, answer: 0 },
          { id: 'n7r4', type: 'single', prompt: '4. The Pamir has more glaciers than the Tien Shan.', options: tfng, answer: 2 },
          { id: 'n7r5', type: 'single', prompt: '5. Faster melting always reduces the amount of water in rivers.', options: tfng, answer: 1 },
          { id: 'n7r6', type: 'single', prompt: '6. Early-warning systems have been installed for every glacial lake.', options: tfng, answer: 1 },
          { id: 'n7r7', type: 'single', prompt: '7. Tourism has increased in the mountain valleys.', options: tfng, answer: 2 },
          { id: 'n7r8', type: 'fill', prompt: '8. The mountains are called the "water ___" of Central Asia. (ONE WORD)', answer: 'towers' },
          { id: 'n7r9', type: 'fill', prompt: '9. Over time, snow is compressed into dense ___. (ONE WORD)', answer: 'ice' },
          { id: 'n7r10', type: 'fill', prompt: '10. Researchers increasingly rely on ___ images. (ONE WORD)', answer: 'satellite' },
          { id: 'n7r11', type: 'fill', prompt: '11. In the long term, summer ___ are expected to decline. (ONE WORD)', answer: 'flows' },
          { id: 'n7r12', type: 'fill', prompt: '12. New lakes can burst suddenly and cause dangerous ___. (ONE WORD)', answer: 'floods' },
          { id: 'n7r13', type: 'fill', prompt: '13. Experts say reducing water lost in ___ channels would help. (ONE WORD)', answer: 'irrigation' },
        ],
      },
      {
        title: 'Passage 2 · Farming in the City',
        intro: 'Questions 14–26. You should spend about 20 minutes on this passage.',
        text: `A. Growing food in cities is not a new idea. For centuries, households kept vegetable gardens, fruit trees and chickens in courtyards and on the edges of towns. What is new is the scale and variety of urban agriculture today, which ranges from community gardens on empty land to high-tech indoor farms in former warehouses.

B. Supporters argue that urban farming brings several benefits. Food grown close to where it is eaten needs less transport and packaging, and it can be sold fresher. Community gardens also give residents, especially in crowded neighbourhoods, a place to meet, exercise and learn practical skills. Several studies have found that children who take part in school gardening projects are more willing to try vegetables.

C. One of the fastest-growing forms is vertical farming, in which crops such as lettuce and herbs are grown in stacked layers indoors, under LED lights. Because the environment is fully controlled, these farms can produce crops all year round, use far less water than traditional fields and need no pesticides. Some companies claim they can grow the same amount of food on a fraction of the land.

D. Critics, however, point to serious limitations. Vertical farms consume large amounts of electricity for lighting and climate control, so their environmental benefits depend heavily on where that energy comes from. They are also expensive to build, and so far they are profitable only for a narrow range of high-value crops. Staple foods such as wheat and rice are still far cheaper to grow in open fields.

E. There are also practical concerns about outdoor city farming. Soil in former industrial areas can be contaminated with heavy metals, so it must be tested, and gardeners often grow crops in raised beds filled with clean soil. In addition, land in city centres is valuable, and community gardens are sometimes removed when developers want to build.

F. Most researchers conclude that urban agriculture will not replace rural farming, but it can play a useful supporting role — improving access to fresh food, strengthening communities and making cities more resilient during disruptions to supply chains.`,
        questions: [
          { id: 'n7r14', type: 'single', prompt: '14. Which paragraph explains how indoor stacked farms work?', options: ['A', 'B', 'C', 'E'], answer: 2 },
          { id: 'n7r15', type: 'single', prompt: '15. Which paragraph mentions polluted soil?', options: ['B', 'D', 'E', 'F'], answer: 2 },
          { id: 'n7r16', type: 'single', prompt: '16. Which paragraph gives a historical background?', options: ['A', 'C', 'D', 'F'], answer: 0 },
          { id: 'n7r17', type: 'single', prompt: '17. Which paragraph discusses the energy use of vertical farms?', options: ['B', 'C', 'D', 'E'], answer: 2 },
          { id: 'n7r18', type: 'single', prompt: '18. Children in school gardening projects are …', options: ['better at maths', 'less active', 'more willing to try vegetables', 'more interested in cooking'], answer: 2 },
          { id: 'n7r19', type: 'single', prompt: '19. Vertical farms are currently profitable mainly for …', options: ['wheat and rice', 'all crops', 'fruit trees', 'a narrow range of high-value crops'], answer: 3 },
          { id: 'n7r20', type: 'single', prompt: '20. What do most researchers conclude?', options: ['Urban farming can play a supporting role.', 'Urban farming will replace rural farming.', 'Urban farming has no value.', 'Vertical farms should be banned.'], answer: 0 },
          { id: 'n7r21', type: 'single', prompt: '21. Urban food can be sold fresher because it travels less.', options: tfng, answer: 0 },
          { id: 'n7r22', type: 'single', prompt: '22. Vertical farms need large amounts of pesticides.', options: tfng, answer: 1 },
          { id: 'n7r23', type: 'single', prompt: '23. Most vertical farms are owned by governments.', options: tfng, answer: 2 },
          { id: 'n7r24', type: 'single', prompt: '24. Community gardens are sometimes removed for building projects.', options: tfng, answer: 0 },
          { id: 'n7r25', type: 'fill', prompt: '25. Vertical farms grow crops under ___ lights. (ONE WORD)', answer: 'LED' },
          { id: 'n7r26', type: 'fill', prompt: '26. Gardeners often use raised ___ filled with clean soil. (ONE WORD)', answer: 'beds' },
        ],
      },
      {
        title: 'Passage 3 · Why We Put Things Off',
        intro: 'Questions 27–40. You should spend about 20 minutes on this passage.',
        text: `Almost everyone delays important tasks from time to time, but for some people procrastination becomes a serious problem that affects their studies, work and health. Surveys suggest that around a fifth of adults consider themselves chronic procrastinators, and the figure among university students is considerably higher.

For a long time, procrastination was seen simply as a problem of poor time management or laziness. Psychologists now believe this view is mistaken. Many procrastinators are not lazy at all: they may work very hard on other activities while avoiding one particular task. According to a widely supported theory, procrastination is better understood as a problem of emotion regulation. When a task makes us feel anxious, bored or insecure, putting it off provides immediate relief from those unpleasant feelings. The relief is short-lived, however, and the task usually returns with even more stress attached.

This explains why procrastination is so closely linked with perfectionism. People who fear that their work will not be good enough may avoid starting at all, since an unfinished task cannot be judged. It also explains the role of "present bias" — the human tendency to value immediate rewards much more highly than future ones. Checking a phone gives an instant reward, while the benefits of writing an essay lie weeks ahead.

Fortunately, research suggests several effective strategies. One is to break large tasks into small, specific steps, so that the first action feels manageable: "write the first paragraph" rather than "write the essay". Another is to make a concrete plan stating when and where a task will be done, a technique known as forming "implementation intentions". Removing distractions, such as keeping a phone in another room, also helps.

Perhaps surprisingly, self-compassion appears to be important too. In one study, students who forgave themselves for procrastinating before a first exam procrastinated less before the next one. Criticising ourselves harshly, it seems, only increases the negative emotions that cause procrastination in the first place.`,
        questions: [
          { id: 'n7r27', type: 'single', prompt: '27. Around what proportion of adults see themselves as chronic procrastinators?', options: ['a tenth', 'a fifth', 'a quarter', 'a half'], answer: 1 },
          { id: 'n7r28', type: 'single', prompt: '28. According to current theory, procrastination is mainly a problem of …', options: ['laziness', 'poor time management', 'emotion regulation', 'low intelligence'], answer: 2 },
          { id: 'n7r29', type: 'single', prompt: '29. Why may perfectionists avoid starting a task?', options: ['They have too much free time.', 'They prefer group work.', 'They forget deadlines.', 'An unfinished task cannot be judged.'], answer: 3 },
          { id: 'n7r30', type: 'single', prompt: '30. "Present bias" means people …', options: ['value immediate rewards more than future ones', 'prefer working in the morning', 'remember the past better', 'like presents'], answer: 0 },
          { id: 'n7r31', type: 'single', prompt: '31. What happened to students who forgave themselves?', options: ['They failed the exam.', 'They procrastinated less before the next exam.', 'They stopped studying.', 'They became perfectionists.'], answer: 1 },
          { id: 'n7r32', type: 'single', prompt: '32. The rate of procrastination is higher among university students.', options: tfng, answer: 0 },
          { id: 'n7r33', type: 'single', prompt: '33. Procrastinators are usually lazy in all areas of life.', options: tfng, answer: 1 },
          { id: 'n7r34', type: 'single', prompt: '34. The relief from putting off a task lasts for a long time.', options: tfng, answer: 1 },
          { id: 'n7r35', type: 'single', prompt: '35. Men procrastinate more than women.', options: tfng, answer: 2 },
          { id: 'n7r36', type: 'single', prompt: '36. Harsh self-criticism makes procrastination worse.', options: tfng, answer: 0 },
          { id: 'n7r37', type: 'fill', prompt: '37. Procrastination is closely linked with ___. (ONE WORD)', answer: 'perfectionism' },
          { id: 'n7r38', type: 'fill', prompt: '38. Large tasks should be broken into small, specific ___. (ONE WORD)', answer: 'steps' },
          { id: 'n7r39', type: 'fill', prompt: '39. A plan stating when and where is called forming implementation ___. (ONE WORD)', answer: ['intentions', 'intention'] },
          { id: 'n7r40', type: 'fill', prompt: '40. Keeping a phone in another room removes ___. (ONE WORD)', answer: ['distractions', 'distraction'] },
        ],
      },
    ],
  },

  'listening-8': {
    kind: 'listening', title: 'IELTS Listening — Mock Test 8', minutes: 30,
    sections: [
      {
        title: 'Part 1 · Booking student accommodation',
        intro: 'You will hear a student phoning the university accommodation office. Questions 1–10.',
        script: `Officer: Accommodation office, good morning.
Student: Hello. I'm starting a master's course in September and I'd like to book a room in one of the student residences.
Officer: Of course. We have two options: Riverside Hall, which is about fifteen minutes' walk from the main campus, and Park House, which is right next to the library.
Student: How much are they?
Officer: Riverside Hall is four hundred and twenty dollars a month. Park House is more expensive, at five hundred and sixty, because all the rooms there have a private bathroom.
Student: I'll take Riverside Hall, I think. Is there a kitchen?
Officer: Yes, there's a shared kitchen on each floor, for eight students. Can I have your name?
Student: It's Malika Yusupova. That's Y-U-S-U-P-O-V-A.
Officer: And your student number?
Student: It's two-three-zero-nine-one-six.
Officer: Thank you. You'll need to pay a deposit of two hundred dollars to keep the room. You can pay online by credit card.
Student: When can I move in?
Officer: From the twenty-eighth of August. And one more thing — the residence has a bicycle store in the basement, but you have to register your bike at reception.
Student: Great, I'm planning to bring one. And is the internet included?
Officer: Yes, the internet and all bills are included in the rent.`,
        questions: [
          { id: 'n8l1', type: 'fill', prompt: '1. Course: ___ course (starting in September)', answer: ["master's", 'masters'] },
          { id: 'n8l2', type: 'fill', prompt: '2. Riverside Hall: ___ minutes’ walk from campus', answer: ['15', 'fifteen'] },
          { id: 'n8l3', type: 'fill', prompt: '3. Park House is next to the ___', answer: 'library' },
          { id: 'n8l4', type: 'fill', prompt: '4. Riverside Hall rent: $___ a month', answer: ['420', 'four hundred and twenty'] },
          { id: 'n8l5', type: 'single', prompt: '5. Park House is more expensive because …', options: ['all rooms have a private bathroom', 'it is newer', 'it has a gym', 'it is in the city centre'], answer: 0 },
          { id: 'n8l6', type: 'fill', prompt: '6. Shared kitchen: one per floor, for ___ students', answer: ['8', 'eight'] },
          { id: 'n8l7', type: 'fill', prompt: '7. Surname: ___', answer: 'Yusupova' },
          { id: 'n8l8', type: 'fill', prompt: '8. Deposit: $___', answer: ['200', 'two hundred'] },
          { id: 'n8l9', type: 'single', prompt: '9. The student can move in from …', options: ['1 September', '28 August', '18 August', '8 September'], answer: 1 },
          { id: 'n8l10', type: 'fill', prompt: '10. Bikes must be registered at ___', answer: 'reception' },
        ],
      },
      {
        title: 'Part 2 · A visit to the botanical garden',
        intro: 'You will hear a guide talking to a group of visitors. Questions 11–20.',
        script: `Welcome to the City Botanical Garden. My name's Rustam and I'll be your guide this morning. The garden was founded in 1950 and today it covers about sixty hectares, with more than four thousand species of plants from around the world.
We're standing at the main gate. If you look at your maps, the garden is divided into several sections. Straight ahead is the Rose Garden, which is at its best in May and June. To the left of it you'll see the large glass greenhouse, where we keep tropical plants that couldn't survive our winters outside. It's quite hot and humid in there, so you might want to take off your jackets.
Behind the greenhouse is the Japanese Garden, with a small lake and a wooden bridge. It's the quietest part of the park, and photographers love it in autumn because of the red maple trees.
On the right-hand side of the main path is the Desert Collection, with plants from Central Asia, including saxaul and several kinds of tulips that grow wild in our mountains.
A couple of practical points. The café is next to the children's playground, near the east exit. Please don't pick any flowers or leaves, and keep to the paths. The garden closes at seven, but the greenhouse closes earlier, at five. And if you'd like to support our work, you can adopt a tree — the information is in the gift shop.`,
        questions: [
          { id: 'n8l11', type: 'fill', prompt: '11. The garden was founded in ___', answer: '1950' },
          { id: 'n8l12', type: 'fill', prompt: '12. Size: about ___ hectares', answer: ['60', 'sixty'] },
          { id: 'n8l13', type: 'single', prompt: '13. The Rose Garden is best in …', options: ['March and April', 'July and August', 'May and June', 'September'], answer: 2 },
          { id: 'n8l14', type: 'single', prompt: '14. Why might visitors take off their jackets in the greenhouse?', options: ['Jackets are not allowed.', 'It is very crowded.', 'There is a lake.', 'It is hot and humid.'], answer: 3 },
          { id: 'n8l15', type: 'single', prompt: '15. The Japanese Garden is …', options: ['behind the greenhouse', 'in front of the gate', 'next to the café', 'on the right of the main path'], answer: 0 },
          { id: 'n8l16', type: 'fill', prompt: '16. In autumn photographers like the red ___ trees.', answer: 'maple' },
          { id: 'n8l17', type: 'single', prompt: '17. The Desert Collection includes …', options: ['palm trees', 'saxaul and wild tulips', 'tropical orchids', 'roses'], answer: 1 },
          { id: 'n8l18', type: 'fill', prompt: '18. The café is next to the children’s ___', answer: 'playground' },
          { id: 'n8l19', type: 'fill', prompt: '19. The greenhouse closes at ___', answer: ['5', 'five'] },
          { id: 'n8l20', type: 'single', prompt: '20. Information about adopting a tree is in the …', options: ['café', 'greenhouse', 'gift shop', 'main gate'], answer: 2 },
        ],
      },
      {
        title: 'Part 3 · Planning fieldwork in a mountain village',
        intro: 'You will hear two geography students, Sardor and Anna, discussing a fieldwork project with their tutor. Questions 21–30.',
        script: `Tutor: So, you're both going to the mountain village of Sentob for your fieldwork. What's the focus of the project?
Anna: We want to look at how tourism has changed the village over the last ten years. Guest houses have opened, and more young people are staying instead of moving to the city.
Tutor: That's a good topic. How will you collect your data?
Sardor: We'll interview about twenty families, and we're going to count how many houses have been turned into guest houses.
Anna: We also want to compare old photos with the village today. The school has a collection from the 1990s.
Tutor: Excellent. Have you thought about the questions for the interviews?
Sardor: Yes, but we're worried that people might not want to talk about money, like how much they earn from tourists.
Tutor: That's a common problem. Instead of asking for exact figures, you could ask them to choose from income ranges. And always explain how you'll use the information.
Anna: We'll also need a translator for the older people, because some of them speak a local dialect.
Tutor: Yes, and remember to get written consent from everyone you interview. What about the timing?
Sardor: We're going for five days at the beginning of May, before the main tourist season starts.
Tutor: Good. Then you'll have time to write up your report. It should be around four thousand words, and you'll present your findings to the class in June.`,
        questions: [
          { id: 'n8l21', type: 'fill', prompt: '21. The village is called ___', answer: 'Sentob' },
          { id: 'n8l22', type: 'single', prompt: '22. The project studies how … has changed the village.', options: ['farming', 'a new road', 'the school', 'tourism'], answer: 3 },
          { id: 'n8l23', type: 'fill', prompt: '23. They will interview about ___ families.', answer: ['20', 'twenty'] },
          { id: 'n8l24', type: 'single', prompt: '24. The old photos come from …', options: ['the school', 'a museum', 'the internet', 'the families'], answer: 0 },
          { id: 'n8l25', type: 'single', prompt: '25. Sardor is worried that people may not want to talk about …', options: ['their families', 'money', 'the past', 'tourists'], answer: 1 },
          { id: 'n8l26', type: 'single', prompt: '26. The tutor suggests asking people to choose from …', options: ['exact figures', 'photos', 'income ranges', 'maps'], answer: 2 },
          { id: 'n8l27', type: 'fill', prompt: '27. Some older people speak a local ___', answer: 'dialect' },
          { id: 'n8l28', type: 'fill', prompt: '28. They must get written ___ from interviewees.', answer: 'consent' },
          { id: 'n8l29', type: 'single', prompt: '29. Why are they going at the beginning of May?', options: ['It is cheaper.', 'The weather is best.', 'The tutor is free then.', 'It is before the main tourist season.'], answer: 3 },
          { id: 'n8l30', type: 'fill', prompt: '30. The report should be around ___ words.', answer: ['4000', 'four thousand', '4,000'] },
        ],
      },
      {
        title: 'Part 4 · Lecture: How migrating birds find their way',
        intro: 'You will hear part of a zoology lecture. Questions 31–40.',
        script: `Every year, billions of birds migrate between their breeding grounds and the places where they spend the winter. Some species travel enormous distances: the Arctic tern, for example, may fly more than seventy thousand kilometres in a single year. Today I want to look at a question that has fascinated scientists for centuries: how do birds find their way?
The first point is that birds use several different systems, and they can switch between them depending on conditions. During the day, many birds navigate using the position of the sun. Experiments have shown that birds have an internal clock, which allows them to adjust for the sun's movement across the sky.
Birds that migrate at night use the stars instead. In a famous series of experiments in a planetarium, young birds were shown an artificial night sky. When the projected stars were rotated, the birds changed the direction in which they tried to fly.
Perhaps the most remarkable system is the magnetic sense. Birds can detect the Earth's magnetic field, which helps them on cloudy days when neither the sun nor the stars are visible. Researchers believe that special molecules in birds' eyes may allow them to "see" the magnetic field, although this is still being investigated.
Finally, birds also use landmarks such as coastlines, rivers and mountain ranges, and some species seem to use smell.
Unfortunately, human activity is making migration more difficult. Artificial light from cities can confuse birds that fly at night, and many collide with tall glass buildings. Some cities now switch off decorative lighting during the main migration seasons, which has been shown to reduce the number of deaths.`,
        questions: [
          { id: 'n8l31', type: 'fill', prompt: '31. The Arctic tern may fly more than ___ kilometres in a year.', answer: ['70000', '70,000', 'seventy thousand'] },
          { id: 'n8l32', type: 'single', prompt: '32. Birds can adjust for the sun’s movement because they have …', options: ['an internal clock', 'very good eyes', 'a map in their memory', 'a magnetic sense'], answer: 0 },
          { id: 'n8l33', type: 'single', prompt: '33. Night-migrating birds navigate mainly by …', options: ['the moon', 'the stars', 'city lights', 'sound'], answer: 1 },
          { id: 'n8l34', type: 'fill', prompt: '34. The star experiments took place in a ___', answer: 'planetarium' },
          { id: 'n8l35', type: 'single', prompt: '35. When the projected stars were rotated, the birds …', options: ['stopped flying', 'went to sleep', 'changed direction', 'followed the sun'], answer: 2 },
          { id: 'n8l36', type: 'single', prompt: '36. The magnetic sense is especially useful …', options: ['over cities', 'in summer', 'near rivers', 'on cloudy days'], answer: 3 },
          { id: 'n8l37', type: 'fill', prompt: '37. Special molecules in birds’ ___ may detect the magnetic field.', answer: ['eyes', 'eye'] },
          { id: 'n8l38', type: 'fill', prompt: '38. Some species also seem to use ___', answer: 'smell' },
          { id: 'n8l39', type: 'single', prompt: '39. Which problem caused by cities is mentioned?', options: ['artificial light and glass buildings', 'noise', 'air pollution', 'traffic'], answer: 0 },
          { id: 'n8l40', type: 'fill', prompt: '40. Some cities switch off decorative ___ during migration seasons.', answer: 'lighting' },
        ],
      },
    ],
  },

  'reading-8': {
    kind: 'reading', title: 'IELTS Academic Reading — Mock Test 8', minutes: 60,
    sections: [
      {
        title: 'Passage 1 · The Journey of Tea',
        intro: 'Questions 1–13. You should spend about 20 minutes on this passage.',
        text: `Tea is the most widely consumed drink in the world after water, and in Central Asia it is far more than a drink: it is a central part of hospitality. A guest in an Uzbek home is almost always offered a bowl of tea before anything else, and pouring it is a small ceremony with its own rules.

The tea plant originally comes from south-western China, where it has been cultivated for thousands of years. At first it was used mainly as a medicine, and only later became an everyday drink. Over the centuries, tea spread along trade routes to the west. Traders carried it in compressed bricks, which were easier to transport than loose leaves and less likely to be damaged on long journeys. In some regions, tea bricks were even used as a form of money.

In Central Asia two traditions developed. In most of Uzbekistan, green tea is the everyday drink, while black tea is more common in Tashkent, Khorezm and the north, partly as a result of Russian influence in the nineteenth century. In both traditions, tea is drunk without milk and is usually served in small bowls called piyola.

The way tea is poured carries meaning. A host fills the bowl only partly, so that it can be refilled often; this shows that the guest is welcome to stay. A full bowl, by contrast, may be understood as a hint that it is time to leave. Before serving, the host often pours tea back into the pot three times, a process that helps the leaves to release their flavour.

Today, the teahouse, or choyxona, remains an important social space, especially for men, who meet there to talk, play games and eat plov. Although cafés serving coffee are increasingly popular among young people in cities, tea is still drunk in large quantities throughout the region.`,
        questions: [
          { id: 'n8r1', type: 'single', prompt: '1. Tea is the most widely consumed drink in the world.', options: tfng, answer: 1 },
          { id: 'n8r2', type: 'single', prompt: '2. Tea was first used mainly as a medicine.', options: tfng, answer: 0 },
          { id: 'n8r3', type: 'single', prompt: '3. Tea bricks were sometimes used as money.', options: tfng, answer: 0 },
          { id: 'n8r4', type: 'single', prompt: '4. Black tea is more popular than green tea in all of Uzbekistan.', options: tfng, answer: 1 },
          { id: 'n8r5', type: 'single', prompt: '5. Central Asian tea is traditionally drunk with sugar.', options: tfng, answer: 2 },
          { id: 'n8r6', type: 'single', prompt: '6. A partly filled bowl shows that the guest is welcome.', options: tfng, answer: 0 },
          { id: 'n8r7', type: 'single', prompt: '7. Young people in cities no longer drink tea.', options: tfng, answer: 1 },
          { id: 'n8r8', type: 'fill', prompt: '8. The tea plant comes from south-western ___. (ONE WORD)', answer: 'China' },
          { id: 'n8r9', type: 'fill', prompt: '9. Traders carried tea in compressed ___. (ONE WORD)', answer: ['bricks', 'brick'] },
          { id: 'n8r10', type: 'fill', prompt: '10. Black tea in the north is partly the result of ___ influence. (ONE WORD)', answer: 'Russian' },
          { id: 'n8r11', type: 'fill', prompt: '11. Tea is served in small bowls called ___. (ONE WORD)', answer: 'piyola' },
          { id: 'n8r12', type: 'fill', prompt: '12. Pouring tea back into the pot helps the leaves release their ___. (ONE WORD)', answer: 'flavour' },
          { id: 'n8r13', type: 'fill', prompt: '13. A teahouse is called a ___. (ONE WORD)', answer: 'choyxona' },
        ],
      },
      {
        title: 'Passage 2 · The Hidden Cost of Noise',
        intro: 'Questions 14–26. You should spend about 20 minutes on this passage.',
        text: `A. Noise is often treated as a minor annoyance rather than a serious form of pollution. Yet the World Health Organization considers environmental noise one of the most important environmental threats to health in Europe, second only to air pollution. Road traffic is by far the largest source, followed by railways, aircraft and industry.

B. The most obvious effect of noise is on sleep. Even when people do not wake up, noise at night can cause the heart rate to rise and disturb the deeper stages of sleep. Over time, poor sleep is linked with tiredness, reduced concentration and a higher risk of accidents.

C. Long-term exposure to traffic noise has also been associated with high blood pressure and heart disease. Researchers believe the mechanism is stress: loud noise triggers the release of stress hormones, and when this happens repeatedly, the body does not have time to recover.

D. Children may be particularly affected. Several studies of schools near busy airports found that pupils exposed to aircraft noise performed worse on reading tests than pupils at quieter schools, even after differences in family background were taken into account. When one airport was moved, the reading scores of children near the old site improved.

E. There are many ways to reduce noise. Quieter road surfaces, lower speed limits and electric vehicles can all make a difference, as can noise barriers along motorways. Inside buildings, double-glazed windows help, and city planners can place bedrooms on the quieter side of new apartment blocks.

F. Some cities have also begun to protect "quiet areas", such as parks and old town squares, where people can escape the noise. Experts argue that quiet should be seen as a resource, like clean air or water, which needs to be managed and protected.`,
        questions: [
          { id: 'n8r14', type: 'single', prompt: '14. Which paragraph describes effects of noise on learning?', options: ['B', 'C', 'D', 'E'], answer: 2 },
          { id: 'n8r15', type: 'single', prompt: '15. Which paragraph lists sources of noise?', options: ['A', 'B', 'E', 'F'], answer: 0 },
          { id: 'n8r16', type: 'single', prompt: '16. Which paragraph explains why noise may cause heart disease?', options: ['A', 'B', 'C', 'D'], answer: 2 },
          { id: 'n8r17', type: 'single', prompt: '17. Which paragraph suggests treating quiet as a resource?', options: ['C', 'D', 'E', 'F'], answer: 3 },
          { id: 'n8r18', type: 'single', prompt: '18. According to the WHO, noise is …', options: ['the most important threat to health', 'second only to air pollution', 'less important than light pollution', 'a minor annoyance'], answer: 1 },
          { id: 'n8r19', type: 'single', prompt: '19. Noise at night can …', options: ['improve deep sleep', 'only affect children', 'raise the heart rate even if people do not wake', 'have no effect on sleep'], answer: 2 },
          { id: 'n8r20', type: 'single', prompt: '20. What happened when an airport was moved?', options: ['Schools closed.', 'Traffic increased.', 'Children moved away.', 'Reading scores near the old site improved.'], answer: 3 },
          { id: 'n8r21', type: 'single', prompt: '21. Road traffic is the largest source of environmental noise.', options: tfng, answer: 0 },
          { id: 'n8r22', type: 'single', prompt: '22. Differences in family background explained the lower reading scores.', options: tfng, answer: 1 },
          { id: 'n8r23', type: 'single', prompt: '23. Electric vehicles are louder than petrol cars at high speed.', options: tfng, answer: 2 },
          { id: 'n8r24', type: 'single', prompt: '24. Bedrooms can be placed on the quieter side of new buildings.', options: tfng, answer: 0 },
          { id: 'n8r25', type: 'fill', prompt: '25. Repeated noise triggers the release of stress ___. (ONE WORD)', answer: 'hormones' },
          { id: 'n8r26', type: 'fill', prompt: '26. Noise ___ along motorways can reduce noise. (ONE WORD)', answer: 'barriers' },
        ],
      },
      {
        title: 'Passage 3 · Volcanoes and the Climate',
        intro: 'Questions 27–40. You should spend about 20 minutes on this passage.',
        text: `When we think of the dangers of volcanoes, we usually imagine lava flows and clouds of ash destroying nearby towns. However, large eruptions can also affect the climate of the entire planet, sometimes for several years.

The key factor is not ash, which falls out of the atmosphere within days or weeks, but sulphur dioxide gas. In a powerful eruption, this gas is thrown high into the stratosphere, more than ten kilometres above the ground. There it reacts with water to form tiny droplets, known as aerosols, which reflect part of the sunlight back into space. Because there is no rain at that height to wash them out, the droplets can remain in the stratosphere for up to two or three years, cooling the surface of the Earth.

The best-known example is the eruption of Mount Tambora in Indonesia in 1815, the largest in recorded history. The following year became known in Europe and North America as "the year without a summer". There were snowfalls in June, crops failed across large areas, and food prices rose sharply. Historians have linked the resulting hunger to migration and social unrest in several countries.

A more recent example is the eruption of Mount Pinatubo in the Philippines in 1991. Scientists were able to measure its effects with satellites and found that average global temperatures fell by about half a degree Celsius over the next year or so. This natural experiment also allowed researchers to test their climate models, which had predicted a cooling of roughly this size.

Not every eruption has a global effect. Volcanoes near the equator have the greatest influence, because the aerosols can spread into both hemispheres. Eruptions that release little sulphur, or that do not reach the stratosphere, generally have only local consequences.

Some scientists have suggested that humans might deliberately copy this effect, by releasing similar particles into the stratosphere to slow global warming. Critics warn, however, that such "geoengineering" could change rainfall patterns in unpredictable ways and would do nothing to reduce the carbon dioxide that causes warming in the first place.`,
        questions: [
          { id: 'n8r27', type: 'single', prompt: '27. Which part of an eruption mainly affects the global climate?', options: ['sulphur dioxide gas', 'lava', 'ash', 'water vapour'], answer: 0 },
          { id: 'n8r28', type: 'single', prompt: '28. Why can the droplets stay in the stratosphere for years?', options: ['They are very heavy.', 'There is no rain to wash them out.', 'The wind is very strong.', 'They are frozen.'], answer: 1 },
          { id: 'n8r29', type: 'single', prompt: '29. What happened in 1816?', options: ['Tambora erupted.', 'Summer was unusually hot.', 'Crops failed and food prices rose.', 'Satellites were launched.'], answer: 2 },
          { id: 'n8r30', type: 'single', prompt: '30. The Pinatubo eruption was useful for scientists because it …', options: ['caused no damage', 'warmed the planet', 'happened in Europe', 'allowed them to test climate models'], answer: 3 },
          { id: 'n8r31', type: 'single', prompt: '31. What do critics say about geoengineering?', options: ['It could change rainfall and does not reduce carbon dioxide.', 'It is too cheap.', 'It has already been tested successfully.', 'It would stop all eruptions.'], answer: 0 },
          { id: 'n8r32', type: 'single', prompt: '32. Volcanic ash stays in the atmosphere for many years.', options: tfng, answer: 1 },
          { id: 'n8r33', type: 'single', prompt: '33. The Tambora eruption is the largest in recorded history.', options: tfng, answer: 0 },
          { id: 'n8r34', type: 'single', prompt: '34. More people died from hunger in 1816 than from the eruption itself.', options: tfng, answer: 2 },
          { id: 'n8r35', type: 'single', prompt: '35. Climate models predicted a cooling similar to what was measured after Pinatubo.', options: tfng, answer: 0 },
          { id: 'n8r36', type: 'single', prompt: '36. Volcanoes far from the equator have the greatest global influence.', options: tfng, answer: 1 },
          { id: 'n8r37', type: 'fill', prompt: '37. The tiny droplets are known as ___. (ONE WORD)', answer: ['aerosols', 'aerosol'] },
          { id: 'n8r38', type: 'fill', prompt: '38. In 1816 there were snowfalls in ___. (ONE WORD)', answer: 'June' },
          { id: 'n8r39', type: 'fill', prompt: '39. After Pinatubo, effects were measured with ___. (ONE WORD)', answer: ['satellites', 'satellite'] },
          { id: 'n8r40', type: 'fill', prompt: '40. Deliberately copying the volcanic effect is called ___. (ONE WORD)', answer: 'geoengineering' },
        ],
      },
    ],
  },

  'listening-9': {
    kind: 'listening', title: 'IELTS Listening — Mock Test 9', minutes: 30,
    sections: [
      {
        title: 'Part 1 · Booking a venue for a graduation party',
        intro: 'You will hear a student phoning a restaurant. Questions 1–10.',
        script: `Manager: Good afternoon, Garden Terrace Restaurant.
Student: Hi. I'm organising a graduation party for my class and I'd like to book your terrace.
Manager: Lovely. What date were you thinking of?
Student: Saturday the fourteenth of June, in the evening.
Manager: Let me check... yes, the terrace is free that evening. How many guests will there be?
Student: About thirty-five.
Manager: That's fine — the terrace holds up to forty people. We have two set menus. The standard menu is fifteen dollars per person, and the deluxe menu, which includes a dessert buffet, is twenty-two.
Student: We'll take the standard one, I think. Can we bring our own cake?
Manager: Yes, but there's a small charge of twenty dollars for serving it.
Student: OK. And is there any music?
Manager: We don't provide a band, but you can connect your own playlist to our sound system. Music has to finish by eleven o'clock, because of our neighbours.
Student: That's fine. What do you need from me to confirm?
Manager: Your name, a phone number, and a deposit of one hundred dollars by the end of next week.
Student: My name is Bekzod Tursunov. T-U-R-S-U-N-O-V.
Manager: And your number?
Student: Nine-oh-one, two-two-four, six-seven, eight-three.
Manager: Thank you. And one last thing — parking can be difficult on Saturdays, so I'd recommend your guests come by taxi or metro. The nearest station is Mustaqillik Square.`,
        questions: [
          { id: 'n9l1', type: 'fill', prompt: '1. Date: Saturday, ___ June', answer: ['14', '14th', 'fourteenth'] },
          { id: 'n9l2', type: 'fill', prompt: '2. Number of guests: about ___', answer: ['35', 'thirty-five'] },
          { id: 'n9l3', type: 'fill', prompt: '3. The terrace holds up to ___ people.', answer: ['40', 'forty'] },
          { id: 'n9l4', type: 'fill', prompt: '4. Standard menu: $___ per person', answer: ['15', 'fifteen'] },
          { id: 'n9l5', type: 'single', prompt: '5. The deluxe menu includes …', options: ['a dessert buffet', 'a band', 'free drinks', 'a cake'], answer: 0 },
          { id: 'n9l6', type: 'fill', prompt: '6. Charge for serving their own cake: $___', answer: ['20', 'twenty'] },
          { id: 'n9l7', type: 'fill', prompt: '7. Music must finish by ___ o’clock.', answer: ['11', 'eleven'] },
          { id: 'n9l8', type: 'fill', prompt: '8. Surname: ___', answer: 'Tursunov' },
          { id: 'n9l9', type: 'fill', prompt: '9. Deposit: $___', answer: ['100', 'one hundred'] },
          { id: 'n9l10', type: 'single', prompt: '10. Guests are advised to come by …', options: ['car', 'taxi or metro', 'bicycle', 'bus only'], answer: 1 },
        ],
      },
      {
        title: 'Part 2 · A summer language camp',
        intro: 'You will hear the director of a summer camp talking to parents. Questions 11–20.',
        script: `Good evening, parents, and thank you for coming. I'm the director of the Lakeside Summer Language Camp, and I'd like to explain how the three weeks will be organised.
The camp takes place near Charvak Lake, about two hours from the city by bus. Children aged ten to sixteen are divided into groups according to their level of English, not their age, after a short test on the first morning.
Each day begins with breakfast at eight. Lessons run from nine until half past twelve, with a short break in the middle. In the afternoon, students choose one activity: drama, sport or a project on the environment. On the last day, every group presents its work to the whole camp.
We have fourteen teachers, and most of them are native speakers or have international teaching qualifications. Each teacher works with no more than ten students.
Now, some practical information. Students sleep in wooden cabins, with six beds in each. Mobile phones are collected at nine in the evening and returned after breakfast, so please don't worry if your child doesn't answer late at night. A nurse is available at the camp twenty-four hours a day.
Please make sure your child brings a sun hat, a water bottle and comfortable shoes for hiking. There's no need to bring towels — we provide them.
Finally, the visiting day for parents is the second Sunday, from ten until four. There's a concert in the afternoon, and we'd love you to stay for it.`,
        questions: [
          { id: 'n9l11', type: 'fill', prompt: '11. The camp lasts ___ weeks.', answer: ['three', '3'] },
          { id: 'n9l12', type: 'single', prompt: '12. Children are put into groups according to …', options: ['their age', 'their school', 'their level of English', 'their interests'], answer: 2 },
          { id: 'n9l13', type: 'fill', prompt: '13. Lessons finish at half past ___', answer: ['twelve', '12'] },
          { id: 'n9l14', type: 'single', prompt: '14. Which afternoon activity is NOT offered?', options: ['drama', 'sport', 'an environment project', 'cooking'], answer: 3 },
          { id: 'n9l15', type: 'fill', prompt: '15. Each teacher has no more than ___ students.', answer: ['ten', '10'] },
          { id: 'n9l16', type: 'fill', prompt: '16. Each cabin has ___ beds.', answer: ['six', '6'] },
          { id: 'n9l17', type: 'single', prompt: '17. Mobile phones are …', options: ['collected in the evening', 'not allowed at all', 'kept by parents', 'used only in lessons'], answer: 0 },
          { id: 'n9l18', type: 'fill', prompt: '18. A ___ is available 24 hours a day.', answer: 'nurse' },
          { id: 'n9l19', type: 'single', prompt: '19. Students do NOT need to bring …', options: ['a sun hat', 'towels', 'a water bottle', 'hiking shoes'], answer: 1 },
          { id: 'n9l20', type: 'fill', prompt: '20. On visiting day there is a ___ in the afternoon.', answer: 'concert' },
        ],
      },
      {
        title: 'Part 3 · Analysing a survey on social media habits',
        intro: 'You will hear two students, Zarina and Tom, discussing survey results with their tutor. Questions 21–30.',
        script: `Tutor: So, how did the survey go?
Zarina: Really well. We got responses from two hundred and forty students, which is more than we expected.
Tom: Mainly because we shared it through the student union newsletter rather than just posting it on social media.
Tutor: Good. What were the main findings?
Zarina: On average, students spend about three and a half hours a day on social media. The most popular platform for sharing photos was used by nearly everyone, but for news, most students said they used video platforms.
Tom: What surprised me was that over sixty per cent said they'd tried to reduce their use in the last year.
Tutor: Interesting. Did they say why?
Zarina: The most common reason was that it affected their sleep. Concentration problems came second.
Tutor: And were they successful?
Tom: Not very. Only about a quarter said they'd managed to cut down for more than a month. The ones who succeeded mostly used app timers or turned off notifications.
Tutor: Are there any weaknesses in your method?
Zarina: Well, all the data is self-reported, so people may have underestimated their time. Next time we'd like to ask volunteers to share the screen-time data from their phones.
Tutor: That would be much more reliable. Make sure you discuss that limitation in your report. And I'd like to see a bar chart comparing first-year and final-year students.
Tom: We'll do that. The deadline is the twentieth, isn't it?
Tutor: That's right.`,
        questions: [
          { id: 'n9l21', type: 'fill', prompt: '21. Number of responses: ___', answer: ['240', 'two hundred and forty'] },
          { id: 'n9l22', type: 'single', prompt: '22. Why did they get so many responses?', options: ['They offered prizes.', 'The tutor helped.', 'They used the student union newsletter.', 'It was compulsory.'], answer: 2 },
          { id: 'n9l23', type: 'fill', prompt: '23. Average daily time on social media: about three and a half ___', answer: 'hours' },
          { id: 'n9l24', type: 'single', prompt: '24. For news, most students use …', options: ['newspapers', 'radio', 'photo apps', 'video platforms'], answer: 3 },
          { id: 'n9l25', type: 'fill', prompt: '25. Over ___ per cent tried to reduce their use.', answer: ['60', 'sixty'] },
          { id: 'n9l26', type: 'single', prompt: '26. The most common reason for cutting down was …', options: ['sleep', 'cost', 'exams', 'privacy'], answer: 0 },
          { id: 'n9l27', type: 'single', prompt: '27. How many succeeded for more than a month?', options: ['about half', 'about a quarter', 'almost all', 'nobody'], answer: 1 },
          { id: 'n9l28', type: 'single', prompt: '28. Successful students mostly …', options: ['deleted their accounts', 'bought new phones', 'used app timers or turned off notifications', 'studied in the library'], answer: 2 },
          { id: 'n9l29', type: 'fill', prompt: '29. A weakness: all the data is self-___', answer: 'reported' },
          { id: 'n9l30', type: 'fill', prompt: '30. The tutor wants a ___ chart comparing first-year and final-year students.', answer: 'bar' },
        ],
      },
      {
        title: 'Part 4 · Lecture: Coral reefs',
        intro: 'You will hear part of a marine biology lecture. Questions 31–40.',
        script: `Today we're looking at coral reefs, which are sometimes called the rainforests of the sea. Although they cover less than one per cent of the ocean floor, they are home to around a quarter of all marine species.
It's a common mistake to think of coral as a plant or a rock. In fact, each coral is a colony of tiny animals called polyps. Over thousands of years, these polyps build hard skeletons of calcium carbonate, and these slowly form the structure of the reef.
Most reef-building corals live in a close partnership with microscopic algae, which live inside their tissues. The algae use sunlight to produce food, and they give the coral most of its energy as well as its bright colours. In return, the coral provides the algae with shelter. This is why most reefs are found in shallow, clear water, where sunlight can reach them.
The greatest threat to reefs today is rising sea temperatures. When water becomes too warm for several weeks, the coral expels the algae. Without them, the coral turns white — a process known as bleaching. Bleached coral is not dead, but if temperatures remain high, it will starve.
Other threats include pollution from farms, which encourages seaweed to grow over the coral, overfishing, and the increasing acidity of the oceans, which makes it harder for polyps to build their skeletons.
Reefs are not only important for wildlife. They protect coastlines from storms by reducing the power of waves, and they support fishing and tourism for hundreds of millions of people. Scientists are now experimenting with growing coral in underwater nurseries and replanting it on damaged reefs, although this works only on a small scale.`,
        questions: [
          { id: 'n9l31', type: 'fill', prompt: '31. Reefs are sometimes called the ___ of the sea.', answer: ['rainforests', 'rainforest'] },
          { id: 'n9l32', type: 'single', prompt: '32. Coral reefs are home to around … of marine species.', options: ['one per cent', 'a tenth', 'half', 'a quarter'], answer: 3 },
          { id: 'n9l33', type: 'fill', prompt: '33. Each coral is a colony of tiny animals called ___', answer: ['polyps', 'polyp'] },
          { id: 'n9l34', type: 'fill', prompt: '34. Their skeletons are made of calcium ___', answer: 'carbonate' },
          { id: 'n9l35', type: 'single', prompt: '35. The algae give the coral …', options: ['energy and colour', 'shelter', 'its skeleton', 'protection from fish'], answer: 0 },
          { id: 'n9l36', type: 'single', prompt: '36. Most reefs are in shallow water because …', options: ['it is warmer', 'sunlight can reach them', 'there are fewer fish', 'waves are smaller'], answer: 1 },
          { id: 'n9l37', type: 'fill', prompt: '37. When coral expels the algae and turns white, it is called ___', answer: 'bleaching' },
          { id: 'n9l38', type: 'single', prompt: '38. Pollution from farms encourages … to grow over the coral.', options: ['algae inside the coral', 'new polyps', 'seaweed', 'sponges'], answer: 2 },
          { id: 'n9l39', type: 'fill', prompt: '39. Reefs protect coastlines from ___', answer: ['storms', 'storm'] },
          { id: 'n9l40', type: 'fill', prompt: '40. Coral is grown in underwater ___ and replanted.', answer: ['nurseries', 'nursery'] },
        ],
      },
    ],
  },

  'reading-9': {
    kind: 'reading', title: 'IELTS Academic Reading — Mock Test 9', minutes: 60,
    sections: [
      {
        title: 'Passage 1 · Knots and Colours: Carpet Weaving',
        intro: 'Questions 1–13. You should spend about 20 minutes on this passage.',
        text: `Hand-woven carpets have been made in Central Asia for many centuries, and for nomadic peoples they were far more than decoration. A carpet could serve as a floor covering, a wall hanging that kept a tent warm, a door, a saddle bag or even a cradle. Because carpets could be rolled up and carried, they were ideal for families who moved with their animals between summer and winter pastures.

A traditional carpet is made on a loom, a frame on which long threads called the warp are stretched tightly. The weaver ties short pieces of wool around pairs of warp threads, cutting each knot by hand, and after every row presses the knots down firmly. Between the rows of knots, horizontal threads known as the weft are passed through to hold everything together. The number of knots per square centimetre is one measure of quality: a fine carpet may contain hundreds of thousands of knots per square metre, and a large one can take a skilled weaver many months to complete.

Wool was traditionally coloured with natural dyes. Red, the most characteristic colour of the region, came from the roots of the madder plant, while blue was produced from indigo. Walnut shells and pomegranate skins gave shades of brown and yellow. Natural dyes fade gently over time, which many collectors consider part of an old carpet's beauty.

Each group developed its own designs. Many carpets feature a repeated central motif, often called a "gul", surrounded by a series of borders. Experts can sometimes identify the tribe or region where a carpet was made simply from the shape of its gul and the colours used.

In the twentieth century, factory production and synthetic dyes made carpets cheaper and more widely available, and many traditional skills declined. In recent decades, however, workshops have been set up to revive hand weaving with natural dyes, often employing women from rural areas.`,
        questions: [
          { id: 'n9r1', type: 'single', prompt: '1. Nomadic families used carpets for several purposes.', options: tfng, answer: 0 },
          { id: 'n9r2', type: 'single', prompt: '2. Carpets were too heavy to move between pastures.', options: tfng, answer: 1 },
          { id: 'n9r3', type: 'single', prompt: '3. Each knot is cut by hand.', options: tfng, answer: 0 },
          { id: 'n9r4', type: 'single', prompt: '4. Silk carpets are more valuable than wool carpets.', options: tfng, answer: 2 },
          { id: 'n9r5', type: 'single', prompt: '5. Natural dyes never change colour.', options: tfng, answer: 1 },
          { id: 'n9r6', type: 'single', prompt: '6. Experts can sometimes identify a carpet’s origin from its design.', options: tfng, answer: 0 },
          { id: 'n9r7', type: 'single', prompt: '7. Hand weaving disappeared completely in the twentieth century.', options: tfng, answer: 1 },
          { id: 'n9r8', type: 'fill', prompt: '8. Carpets are made on a frame called a ___. (ONE WORD)', answer: 'loom' },
          { id: 'n9r9', type: 'fill', prompt: '9. The long threads stretched on the frame are called the ___. (ONE WORD)', answer: 'warp' },
          { id: 'n9r10', type: 'fill', prompt: '10. The horizontal threads are known as the ___. (ONE WORD)', answer: 'weft' },
          { id: 'n9r11', type: 'fill', prompt: '11. Red dye came from the roots of the ___ plant. (ONE WORD)', answer: 'madder' },
          { id: 'n9r12', type: 'fill', prompt: '12. Blue was produced from ___. (ONE WORD)', answer: 'indigo' },
          { id: 'n9r13', type: 'fill', prompt: '13. A repeated central motif is often called a "___". (ONE WORD)', answer: 'gul' },
        ],
      },
      {
        title: 'Passage 2 · Why Do We Dream?',
        intro: 'Questions 14–26. You should spend about 20 minutes on this passage.',
        text: `A. Every night, most people spend around two hours dreaming, yet scientists still disagree about why we dream at all. Dreams occur in all stages of sleep, but the most vivid and story-like ones happen during rapid eye movement (REM) sleep, when the brain is almost as active as when we are awake.

B. For much of the twentieth century, the dominant explanation came from psychoanalysis, which saw dreams as disguised expressions of hidden wishes and fears. This theory was influential in art and literature, but most modern researchers consider it impossible to test scientifically.

C. A very different view emerged in the 1970s. According to the activation-synthesis theory, dreams are a side effect of random signals sent from the brainstem during REM sleep. The thinking parts of the brain try to make sense of these signals by weaving them into a story, which explains why dreams are often strange and illogical.

D. More recent research has focused on memory. Experiments show that people who sleep after learning a new task perform better the next day than those who stay awake, and that elements of the task sometimes appear in their dreams. This has led some scientists to suggest that dreaming is linked to the process by which the brain sorts and strengthens new memories.

E. Another theory proposes that dreams help us to process emotions. Because levels of stress chemicals in the brain are low during REM sleep, dreaming may allow us to revisit upsetting experiences in a safer state, gradually reducing their emotional impact. Supporters point out that people with certain sleep disorders that reduce REM sleep often have difficulty controlling their emotions.

F. A further suggestion is that dreams act as a kind of rehearsal, allowing us to practise responses to threats. This would explain why so many dreams involve being chased or facing danger. Most researchers now believe that dreaming may serve several of these functions at once.`,
        questions: [
          { id: 'n9r14', type: 'single', prompt: '14. Which paragraph describes a theory that cannot be tested scientifically?', options: ['A', 'B', 'C', 'D'], answer: 1 },
          { id: 'n9r15', type: 'single', prompt: '15. Which paragraph links dreaming to memory?', options: ['B', 'C', 'D', 'E'], answer: 2 },
          { id: 'n9r16', type: 'single', prompt: '16. Which paragraph explains why dreams are often illogical?', options: ['A', 'C', 'E', 'F'], answer: 1 },
          { id: 'n9r17', type: 'single', prompt: '17. Which paragraph suggests dreams help us practise reacting to danger?', options: ['C', 'D', 'E', 'F'], answer: 3 },
          { id: 'n9r18', type: 'single', prompt: '18. The most vivid dreams happen …', options: ['just before waking', 'in deep sleep only', 'after midnight', 'during REM sleep'], answer: 3 },
          { id: 'n9r19', type: 'single', prompt: '19. According to activation-synthesis theory, dreams begin with …', options: ['random signals from the brainstem', 'hidden wishes', 'new memories', 'stress chemicals'], answer: 0 },
          { id: 'n9r20', type: 'single', prompt: '20. People who sleep after learning a task …', options: ['forget it', 'perform better the next day', 'dream less', 'feel more stressed'], answer: 1 },
          { id: 'n9r21', type: 'single', prompt: '21. Most people spend around two hours dreaming each night.', options: tfng, answer: 0 },
          { id: 'n9r22', type: 'single', prompt: '22. Dreams only occur during REM sleep.', options: tfng, answer: 1 },
          { id: 'n9r23', type: 'single', prompt: '23. Children dream more than adults.', options: tfng, answer: 2 },
          { id: 'n9r24', type: 'single', prompt: '24. Stress chemicals are low during REM sleep.', options: tfng, answer: 0 },
          { id: 'n9r25', type: 'fill', prompt: '25. The brain during REM sleep is almost as ___ as when awake. (ONE WORD)', answer: 'active' },
          { id: 'n9r26', type: 'fill', prompt: '26. Many dreams involve being ___. (ONE WORD)', answer: 'chased' },
        ],
      },
      {
        title: 'Passage 3 · Should Public Transport Be Free?',
        intro: 'Questions 27–40. You should spend about 20 minutes on this passage.',
        text: `In recent years, a number of cities around the world have abolished fares on their buses and trams, and in a few cases an entire country has made public transport free. Supporters present the idea as a simple way to reduce traffic, cut pollution and help low-income residents. The results so far, however, suggest that the picture is more complicated.

The most consistent finding is that free transport increases the number of passengers, sometimes dramatically. Yet studies of several cities have found that many of the new passengers are not former drivers. Instead, they are people who previously walked or cycled, or who simply make additional trips. As a result, the reduction in car traffic has often been smaller than expected, and in some places almost no change was measured.

The social benefits are clearer. For households with low incomes, transport costs can represent a significant share of the monthly budget, and free travel makes it easier to reach jobs, schools and medical services. Some cities also report savings from no longer needing ticket machines and inspectors, although these rarely cover more than a fraction of the lost fare income.

The main concern is funding. Fares typically pay for a substantial part of running costs, so removing them requires money from taxes. Critics argue that this money might be better spent on improving the service itself: more frequent buses, new routes and modern vehicles. Research on travel behaviour suggests that speed, reliability and comfort influence people's decision to leave their cars at home far more than the price of a ticket.

Many transport experts therefore favour a combined approach. Free or heavily discounted travel can be targeted at those who need it most, such as students, pensioners and the unemployed, while investment focuses on making public transport fast and convenient. At the same time, measures that make driving less attractive, such as congestion charges or fewer parking spaces in city centres, appear to be essential if the aim is to reduce car use.`,
        questions: [
          { id: 'n9r27', type: 'single', prompt: '27. What is the most consistent result of free public transport?', options: ['fewer cars', 'lower taxes', 'more passengers', 'cleaner air'], answer: 2 },
          { id: 'n9r28', type: 'single', prompt: '28. Many new passengers previously …', options: ['drove cars', 'used taxis', 'worked from home', 'walked, cycled or travelled less'], answer: 3 },
          { id: 'n9r29', type: 'single', prompt: '29. Savings from removing ticket machines …', options: ['rarely cover more than a fraction of lost fares', 'cover all lost income', 'are larger than fares', 'are not mentioned'], answer: 0 },
          { id: 'n9r30', type: 'single', prompt: '30. According to research, what matters most to drivers?', options: ['the ticket price', 'speed, reliability and comfort', 'the colour of buses', 'advertising'], answer: 1 },
          { id: 'n9r31', type: 'single', prompt: '31. What approach do many experts favour?', options: ['free transport for everyone', 'higher fares', 'targeted discounts plus investment and limits on driving', 'banning cars completely'], answer: 2 },
          { id: 'n9r32', type: 'single', prompt: '32. Some entire countries have made public transport free.', options: tfng, answer: 0 },
          { id: 'n9r33', type: 'single', prompt: '33. Car traffic always fell sharply after fares were abolished.', options: tfng, answer: 1 },
          { id: 'n9r34', type: 'single', prompt: '34. Free transport helps low-income households reach services.', options: tfng, answer: 0 },
          { id: 'n9r35', type: 'single', prompt: '35. Most passengers prefer trams to buses.', options: tfng, answer: 2 },
          { id: 'n9r36', type: 'single', prompt: '36. Removing fares requires money from taxes.', options: tfng, answer: 0 },
          { id: 'n9r37', type: 'fill', prompt: '37. Free travel could be targeted at students, the unemployed and ___. (ONE WORD)', answer: 'pensioners' },
          { id: 'n9r38', type: 'fill', prompt: '38. Congestion ___ make driving less attractive. (ONE WORD)', answer: ['charges', 'charge'] },
          { id: 'n9r39', type: 'fill', prompt: '39. Cities save money by not needing ticket machines and ___. (ONE WORD)', answer: ['inspectors', 'inspector'] },
          { id: 'n9r40', type: 'fill', prompt: '40. Critics say money should improve the service, for example with more ___ buses. (ONE WORD)', answer: 'frequent' },
        ],
      },
    ],
  },

  'listening-10': {
    kind: 'listening', title: 'IELTS Listening — Mock Test 10', minutes: 30,
    sections: [
      {
        title: 'Part 1 · Registering for a city marathon',
        intro: 'You will hear a man phoning the organisers of a running event. Questions 1–10.',
        script: `Organiser: City Marathon office, how can I help?
Runner: Hi, I'd like to register for the race in October, but I'm not sure which distance to choose.
Organiser: We have three: the full marathon, the half marathon, and a ten-kilometre fun run.
Runner: I think the half marathon. I've never run more than fifteen kilometres before.
Organiser: Good choice. The half marathon starts at half past seven in the morning from Independence Park.
Runner: That's early! How much is the entry fee?
Organiser: It's forty thousand sum if you register before the end of August. After that it goes up to fifty-five thousand.
Runner: I'll register now, then. What do I get?
Organiser: A T-shirt, a medal at the finish, and a timing chip that you attach to your shoe. You collect everything on the day before the race at the Sports Palace.
Runner: Do I need a medical certificate?
Organiser: Yes, for the half and full marathons we need a certificate from your doctor, signed within the last three months.
Runner: OK.
Organiser: Can I have your details, please? Name?
Runner: Sherzod Karimov. K-A-R-I-M-O-V.
Organiser: Age?
Runner: Twenty-nine.
Organiser: And would you like to raise money for charity? This year we're supporting a children's hospital.
Runner: Yes, why not.
Organiser: Great. There are water stations every five kilometres, and the course closes after three hours, so make sure you can finish in that time.`,
        questions: [
          { id: 'n10l1', type: 'single', prompt: '1. Which distance does he choose?', options: ['half marathon', 'full marathon', '10 km fun run', '5 km walk'], answer: 0 },
          { id: 'n10l2', type: 'fill', prompt: '2. The longest distance he has run before: ___ km', answer: ['15', 'fifteen'] },
          { id: 'n10l3', type: 'fill', prompt: '3. Start time: half past ___', answer: ['seven', '7'] },
          { id: 'n10l4', type: 'fill', prompt: '4. The race starts from Independence ___', answer: 'Park' },
          { id: 'n10l5', type: 'fill', prompt: '5. Early entry fee: ___ thousand sum', answer: ['40', 'forty'] },
          { id: 'n10l6', type: 'single', prompt: '6. The timing chip is attached to …', options: ['the T-shirt', 'the shoe', 'the wrist', 'the medal'], answer: 1 },
          { id: 'n10l7', type: 'fill', prompt: '7. Collect the race pack at the Sports ___', answer: 'Palace' },
          { id: 'n10l8', type: 'fill', prompt: '8. The medical certificate must be signed within the last ___ months.', answer: ['three', '3'] },
          { id: 'n10l9', type: 'fill', prompt: '9. Surname: ___', answer: 'Karimov' },
          { id: 'n10l10', type: 'fill', prompt: '10. Water stations: every ___ kilometres', answer: ['five', '5'] },
        ],
      },
      {
        title: 'Part 2 · Welcome to the hostel',
        intro: 'You will hear the manager of a hostel talking to new guests. Questions 11–20.',
        script: `Hello everyone, and welcome to Old Town Hostel. I'm Malika, the manager, and I'll quickly explain how things work here.
Reception is open twenty-four hours, so if you have any problems, day or night, just come down. Your key card opens both your room and the main entrance, which is locked after midnight.
Breakfast is included in the price and is served in the courtyard from seven until ten. If it rains, we move it inside to the dining room on the ground floor.
There's a shared kitchen on the first floor that you're welcome to use. Please label your food with your name and the date before putting it in the fridge, and wash your dishes straight after using them.
Each dormitory has lockers. You'll need your own padlock, but if you haven't brought one, you can buy one at reception for a small price.
For your free time, we run a walking tour of the old town every day at four o'clock. It's free, but please sign up by lunchtime, because the group is limited to twelve people. On Friday evenings, we have a cooking class where you can learn to make plov, which costs fifteen dollars.
Finally, please keep noise to a minimum after eleven, as many guests have early trains. Checkout is at eleven in the morning, but you can leave your luggage at reception free of charge.`,
        questions: [
          { id: 'n10l11', type: 'single', prompt: '11. Reception is open …', options: ['from 7 to 10', 'until midnight', '24 hours', 'only in the morning'], answer: 2 },
          { id: 'n10l12', type: 'single', prompt: '12. The main entrance is locked after …', options: ['10 pm', '11 pm', '1 am', 'midnight'], answer: 3 },
          { id: 'n10l13', type: 'fill', prompt: '13. If it rains, breakfast is in the dining ___', answer: 'room' },
          { id: 'n10l14', type: 'fill', prompt: '14. The shared kitchen is on the ___ floor.', answer: 'first' },
          { id: 'n10l15', type: 'single', prompt: '15. Food in the fridge must be labelled with …', options: ['your name and the date', 'the room number', 'the price', 'nothing'], answer: 0 },
          { id: 'n10l16', type: 'fill', prompt: '16. For the lockers you need your own ___', answer: 'padlock' },
          { id: 'n10l17', type: 'fill', prompt: '17. The walking tour starts at ___ o’clock.', answer: ['four', '4'] },
          { id: 'n10l18', type: 'fill', prompt: '18. The tour group is limited to ___ people.', answer: ['twelve', '12'] },
          { id: 'n10l19', type: 'single', prompt: '19. The cooking class teaches how to make …', options: ['bread', 'plov', 'soup', 'samsa'], answer: 1 },
          { id: 'n10l20', type: 'single', prompt: '20. Luggage can be left at reception …', options: ['for a small fee', 'only until noon', 'free of charge', 'for one night'], answer: 2 },
        ],
      },
      {
        title: 'Part 3 · Planning a podcast episode',
        intro: 'You will hear two media students, Dilnoza and Sam, planning a podcast with their tutor. Questions 21–30.',
        script: `Tutor: So, what's the topic for your podcast episode?
Dilnoza: Street food in Tashkent — how it's changing and why it matters to people.
Tutor: Nice. How long will the episode be?
Sam: We were told between twenty and twenty-five minutes, so we're aiming for twenty-two.
Tutor: Good. Who are you going to interview?
Dilnoza: A woman who has sold samsa near the bazaar for thirty years, and a young chef who runs a food truck.
Sam: We wanted a food historian as well, but nobody replied, so we'll use a short extract from a lecture instead — with permission.
Tutor: Make sure you get that permission in writing. What about the structure?
Sam: We'll open with sounds recorded at the bazaar, then the two interviews, and finish with our own discussion.
Tutor: That sounds good, but I'd suggest putting the discussion between the interviews, so listeners hear the contrast more clearly.
Dilnoza: That makes sense.
Tutor: What equipment are you using?
Sam: The university's portable recorder. The main problem is background noise at the bazaar.
Tutor: Then record the interviews somewhere quieter and only use the bazaar recordings for atmosphere. Also, keep your questions short and open — avoid questions that can be answered with yes or no.
Dilnoza: When do you need the final version?
Tutor: Upload it by the third of December, together with a one-page written reflection on what you learned.`,
        questions: [
          { id: 'n10l21', type: 'fill', prompt: '21. Topic: street ___ in Tashkent', answer: 'food' },
          { id: 'n10l22', type: 'fill', prompt: '22. Planned length: ___ minutes', answer: ['22', 'twenty-two'] },
          { id: 'n10l23', type: 'fill', prompt: '23. The samsa seller has worked near the bazaar for ___ years.', answer: ['thirty', '30'] },
          { id: 'n10l24', type: 'single', prompt: '24. The second interviewee runs …', options: ['a restaurant', 'a bakery', 'a café', 'a food truck'], answer: 3 },
          { id: 'n10l25', type: 'single', prompt: '25. Why will they use a lecture extract?', options: ['A historian did not reply.', 'It is cheaper.', 'The tutor asked them to.', 'It is shorter.'], answer: 0 },
          { id: 'n10l26', type: 'single', prompt: '26. Permission must be obtained …', options: ['by phone', 'in writing', 'from the tutor', 'after uploading'], answer: 1 },
          { id: 'n10l27', type: 'single', prompt: '27. The tutor suggests putting the discussion …', options: ['at the start', 'at the end', 'between the interviews', 'in a separate episode'], answer: 2 },
          { id: 'n10l28', type: 'fill', prompt: '28. The main recording problem is background ___', answer: 'noise' },
          { id: 'n10l29', type: 'single', prompt: '29. Interview questions should be …', options: ['long and detailed', 'yes/no questions', 'written in advance only', 'short and open'], answer: 3 },
          { id: 'n10l30', type: 'fill', prompt: '30. Submit with a one-page written ___', answer: 'reflection' },
        ],
      },
      {
        title: 'Part 4 · Lecture: The printing press',
        intro: 'You will hear part of a history lecture. Questions 31–40.',
        script: `Today's lecture is about one of the most important inventions in history: the printing press with movable metal type, developed in Germany by Johannes Gutenberg around the middle of the fifteenth century.
Printing itself was not new. In China and Korea, people had printed texts using carved wooden blocks for centuries, and movable type made of clay and later metal had also been used there. What made Gutenberg's system so successful in Europe was the combination of several elements: metal letters that could be cast quickly in large numbers, a special oil-based ink that stuck to metal, and a press adapted from the machines used to make wine.
The effect on the cost of books was dramatic. Before printing, a book had to be copied by hand, usually by monks, and a single copy could take months to produce. Within fifty years of Gutenberg's invention, printing workshops had spread to more than two hundred cities, and millions of books had been produced.
The consequences were far-reaching. Ideas could now spread faster and more accurately than ever before, which helped scientists to share and check each other's results. Books were increasingly printed in local languages rather than Latin, which helped to standardise spelling and grammar. And as books became cheaper, literacy gradually increased among ordinary people.
Of course, printing could also spread false information and political propaganda — a reminder that every new communication technology, from the press to the internet, brings both opportunities and risks.`,
        questions: [
          { id: 'n10l31', type: 'fill', prompt: '31. Gutenberg worked in ___', answer: 'Germany' },
          { id: 'n10l32', type: 'single', prompt: '32. Before Gutenberg, printing in China and Korea used …', options: ['carved wooden blocks and movable type', 'only metal type', 'no printing at all', 'paper machines'], answer: 0 },
          { id: 'n10l33', type: 'fill', prompt: '33. Gutenberg used a special oil-based ___', answer: 'ink' },
          { id: 'n10l34', type: 'fill', prompt: '34. His press was adapted from machines used to make ___', answer: 'wine' },
          { id: 'n10l35', type: 'single', prompt: '35. Before printing, books were usually copied by …', options: ['students', 'monks', 'merchants', 'kings'], answer: 1 },
          { id: 'n10l36', type: 'fill', prompt: '36. Within fifty years, printing spread to more than ___ cities.', answer: ['200', 'two hundred'] },
          { id: 'n10l37', type: 'single', prompt: '37. Printing helped scientists to …', options: ['work alone', 'avoid Latin', 'share and check results', 'build machines'], answer: 2 },
          { id: 'n10l38', type: 'fill', prompt: '38. Books in local languages helped to standardise spelling and ___', answer: 'grammar' },
          { id: 'n10l39', type: 'fill', prompt: '39. As books became cheaper, ___ increased.', answer: 'literacy' },
          { id: 'n10l40', type: 'fill', prompt: '40. Printing could also spread political ___', answer: 'propaganda' },
        ],
      },
    ],
  },

  'reading-10': {
    kind: 'reading', title: 'IELTS Academic Reading — Mock Test 10', minutes: 60,
    sections: [
      {
        title: 'Passage 1 · Felt: The Fabric of the Steppe',
        intro: 'Questions 1–13. You should spend about 20 minutes on this passage.',
        text: `Felt is probably the oldest textile in the world, older even than woven cloth. Unlike most fabrics, it is not made by spinning and weaving threads. Instead, wool fibres are pressed together with water, heat and movement until they lock tightly into a dense, strong sheet. For the nomadic peoples of the Central Asian steppe, felt was essential: it was used to cover yurts, to make carpets, boots, hats and saddle cloths, and even to wrap newborn babies.

The traditional method requires no machines. First, sheep's wool is washed, dried and beaten with sticks to loosen the fibres. The wool is then spread in even layers on a large reed mat. If a pattern is wanted, pieces of coloured wool are laid on top in the desired design. Hot water is sprinkled over the wool, and the mat is rolled up tightly around a pole. For several hours, the roll is pushed back and forth along the ground, often by a group of women working together, or pulled behind a horse. Finally, the felt is unrolled, pressed again by hand and left to dry in the sun.

Because felt traps air between its fibres, it is an excellent insulator, keeping yurts warm in winter and cool in summer. It is also surprisingly resistant to water and wind. A well-made yurt cover can last for many years.

In Kyrgyzstan, two kinds of traditional felt carpets are especially well known: the "ala-kiyiz", in which the pattern is pressed into the felt, and the "shyrdak", in which pieces of felt in contrasting colours are cut out and sewn together. The making of shyrdak has been recognised by UNESCO as part of the world's intangible cultural heritage in need of urgent protection.

Today, felt is enjoying a revival. Designers use it for fashion, interior decoration and toys, and its natural, biodegradable qualities appeal to customers looking for alternatives to synthetic materials.`,
        questions: [
          { id: 'n10r1', type: 'single', prompt: '1. Felt is older than woven cloth.', options: tfng, answer: 0 },
          { id: 'n10r2', type: 'single', prompt: '2. Felt is made by spinning threads.', options: tfng, answer: 1 },
          { id: 'n10r3', type: 'single', prompt: '3. Felt was used to wrap newborn babies.', options: tfng, answer: 0 },
          { id: 'n10r4', type: 'single', prompt: '4. Felt-making requires modern machines.', options: tfng, answer: 1 },
          { id: 'n10r5', type: 'single', prompt: '5. Men traditionally made felt in Kyrgyzstan.', options: tfng, answer: 2 },
          { id: 'n10r6', type: 'single', prompt: '6. A yurt cover can last for many years.', options: tfng, answer: 0 },
          { id: 'n10r7', type: 'single', prompt: '7. Felt is easily damaged by wind.', options: tfng, answer: 1 },
          { id: 'n10r8', type: 'fill', prompt: '8. The wool is beaten with ___ to loosen the fibres. (ONE WORD)', answer: 'sticks' },
          { id: 'n10r9', type: 'fill', prompt: '9. Wool is spread on a large ___ mat. (ONE WORD)', answer: 'reed' },
          { id: 'n10r10', type: 'fill', prompt: '10. The roll is sometimes pulled behind a ___. (ONE WORD)', answer: 'horse' },
          { id: 'n10r11', type: 'fill', prompt: '11. Felt traps ___ between its fibres. (ONE WORD)', answer: 'air' },
          { id: 'n10r12', type: 'fill', prompt: '12. In a shyrdak, pieces of felt are cut out and ___ together. (ONE WORD)', answer: 'sewn' },
          { id: 'n10r13', type: 'fill', prompt: '13. Felt appeals to customers because it is natural and ___. (ONE WORD)', answer: 'biodegradable' },
        ],
      },
      {
        title: 'Passage 2 · Is Homework Worth It?',
        intro: 'Questions 14–26. You should spend about 20 minutes on this passage.',
        text: `A. Few aspects of school life cause as much argument as homework. Parents complain that their children have too much or too little; teachers disagree about its purpose; and children, unsurprisingly, rarely ask for more. Yet the research evidence is more nuanced than either side usually admits.

B. Large reviews of studies have found that the link between homework and achievement depends strongly on age. For secondary school students, moderate amounts of homework are associated with better results, particularly in subjects such as mathematics. For primary school children, however, the relationship is weak, and some studies find almost no academic benefit at all.

C. Quantity matters as much as age. Beyond a certain point, extra homework brings little improvement and may even be harmful. One frequently cited guideline suggests around ten minutes per night for each school year, so that a ten-year-old in the fifth year would do about fifty minutes. Students who regularly spend several hours a night on homework report higher stress, less sleep and fewer opportunities for exercise and family time.

D. The type of task is also important. Homework that asks students to practise something they have already learned, or to prepare for the next lesson, tends to be more useful than long projects that depend heavily on help from parents. Such projects may simply measure how much time and money a family has, rather than what the child knows.

E. Homework also raises questions of fairness. Students from homes with a quiet place to work, internet access and educated parents are better able to complete it, while others may struggle. Some schools have responded by offering supervised homework clubs after lessons.

F. Rather than abolishing homework, many experts recommend making it shorter, more purposeful and more carefully matched to students' age, with clear feedback from teachers so that the work is not wasted.`,
        questions: [
          { id: 'n10r14', type: 'single', prompt: '14. Which paragraph discusses the effect of age?', options: ['A', 'B', 'C', 'D'], answer: 1 },
          { id: 'n10r15', type: 'single', prompt: '15. Which paragraph gives a guideline for how long homework should take?', options: ['B', 'C', 'D', 'E'], answer: 1 },
          { id: 'n10r16', type: 'single', prompt: '16. Which paragraph mentions after-school homework clubs?', options: ['C', 'D', 'E', 'F'], answer: 2 },
          { id: 'n10r17', type: 'single', prompt: '17. Which paragraph criticises projects that depend on parents?', options: ['A', 'B', 'D', 'F'], answer: 2 },
          { id: 'n10r18', type: 'single', prompt: '18. For primary school children, homework …', options: ['has a strong benefit', 'is always harmful', 'is better than lessons', 'has little academic benefit'], answer: 3 },
          { id: 'n10r19', type: 'single', prompt: '19. According to the guideline, a child in the fifth school year would do about …', options: ['50 minutes', '10 minutes', '30 minutes', '2 hours'], answer: 0 },
          { id: 'n10r20', type: 'single', prompt: '20. What do many experts recommend?', options: ['abolishing homework', 'shorter, purposeful homework with feedback', 'more projects', 'homework only at weekends'], answer: 1 },
          { id: 'n10r21', type: 'single', prompt: '21. Moderate homework is linked with better results in secondary school.', options: tfng, answer: 0 },
          { id: 'n10r22', type: 'single', prompt: '22. More homework always leads to better results.', options: tfng, answer: 1 },
          { id: 'n10r23', type: 'single', prompt: '23. Girls do more homework than boys.', options: tfng, answer: 2 },
          { id: 'n10r24', type: 'single', prompt: '24. Some students lack a quiet place to work at home.', options: tfng, answer: 0 },
          { id: 'n10r25', type: 'fill', prompt: '25. Students with too much homework report higher ___. (ONE WORD)', answer: 'stress' },
          { id: 'n10r26', type: 'fill', prompt: '26. Teachers should give clear ___ so the work is not wasted. (ONE WORD)', answer: 'feedback' },
        ],
      },
      {
        title: 'Passage 3 · The Problem of Antibiotic Resistance',
        intro: 'Questions 27–40. You should spend about 20 minutes on this passage.',
        text: `When penicillin became widely available in the 1940s, it transformed medicine. Infections that had once been fatal, such as pneumonia or infected wounds, could suddenly be cured within days. Surgery, childbirth and cancer treatment all became much safer. Yet even then, scientists warned that bacteria might learn to survive the new drugs — and that warning has proved correct.

Antibiotic resistance develops through natural selection. In any large population of bacteria, a few individuals may carry random genetic changes that allow them to survive a particular drug. When an antibiotic kills the others, these resistant bacteria multiply and can pass their resistance on, sometimes even to bacteria of different species. The more often antibiotics are used, the more opportunities resistance has to spread.

Human behaviour has accelerated the process. Antibiotics are frequently prescribed for viral infections such as colds and flu, against which they have no effect. Patients often stop taking their medicine as soon as they feel better, rather than completing the course, which can leave the toughest bacteria alive. In many countries, antibiotics can be bought without a prescription. In addition, large quantities are given to farm animals, not only to treat illness but in some places to make them grow faster.

The consequences are already serious. Infections that were once easy to treat now sometimes require more expensive drugs with stronger side effects, and in some cases no effective treatment remains. Health organisations warn that without action, routine operations could once again become dangerous.

At the same time, few new antibiotics have been developed in recent decades, partly because they are less profitable for pharmaceutical companies than medicines that patients take for many years. Possible solutions include financial incentives for research, faster diagnostic tests that allow doctors to identify the exact cause of an infection, stricter controls on use in agriculture, and public campaigns encouraging people to use antibiotics only when necessary.`,
        questions: [
          { id: 'n10r27', type: 'single', prompt: '27. What did penicillin change in the 1940s?', options: ['It cured viral infections.', 'It replaced surgery.', 'It made many fatal infections curable.', 'It ended all disease.'], answer: 2 },
          { id: 'n10r28', type: 'single', prompt: '28. Resistance develops through …', options: ['vaccination', 'clean water', 'surgery', 'natural selection'], answer: 3 },
          { id: 'n10r29', type: 'single', prompt: '29. Why is stopping the medicine early a problem?', options: ['It can leave the toughest bacteria alive.', 'It costs more.', 'It causes viruses.', 'It is illegal.'], answer: 0 },
          { id: 'n10r30', type: 'single', prompt: '30. Why have few new antibiotics been developed?', options: ['They are illegal.', 'They are less profitable.', 'Bacteria have disappeared.', 'Scientists are not interested.'], answer: 1 },
          { id: 'n10r31', type: 'single', prompt: '31. Which solution is mentioned?', options: ['banning all antibiotics', 'using antibiotics for colds', 'faster diagnostic tests', 'more antibiotics for farm animals'], answer: 2 },
          { id: 'n10r32', type: 'single', prompt: '32. Scientists warned about resistance as early as the 1940s.', options: tfng, answer: 0 },
          { id: 'n10r33', type: 'single', prompt: '33. Antibiotics are effective against flu.', options: tfng, answer: 1 },
          { id: 'n10r34', type: 'single', prompt: '34. Resistance can pass between different species of bacteria.', options: tfng, answer: 0 },
          { id: 'n10r35', type: 'single', prompt: '35. Most antibiotics are now produced in Asia.', options: tfng, answer: 2 },
          { id: 'n10r36', type: 'single', prompt: '36. In some countries antibiotics can be bought without a prescription.', options: tfng, answer: 0 },
          { id: 'n10r37', type: 'fill', prompt: '37. Penicillin made surgery, childbirth and ___ treatment safer. (ONE WORD)', answer: 'cancer' },
          { id: 'n10r38', type: 'fill', prompt: '38. On some farms antibiotics are used to make animals grow ___. (ONE WORD)', answer: 'faster' },
          { id: 'n10r39', type: 'fill', prompt: '39. Some newer drugs have stronger side ___. (ONE WORD)', answer: 'effects' },
          { id: 'n10r40', type: 'fill', prompt: '40. Public ___ can encourage careful use of antibiotics. (ONE WORD)', answer: ['campaigns', 'campaign'] },
        ],
      },
    ],
  },

  'listening-11': {
    kind: 'listening', title: 'IELTS Listening — Mock Test 11', minutes: 30,
    sections: [
      {
        title: 'Part 1 · Ordering furniture',
        intro: 'You will hear a customer phoning a furniture shop. Questions 1–10.',
        script: `Assistant: Comfort Home Furniture, good morning.
Customer: Hello. I saw a sofa on your website and I'd like to order it. It's the Milano model.
Assistant: Certainly. The Milano comes in three colours: grey, dark blue and green. Which would you like?
Customer: Dark blue, please.
Assistant: And would you like the two-seater or the three-seater?
Customer: The three-seater. How much is it?
Assistant: It's six million four hundred thousand sum. At the moment there's a fifteen per cent discount on all sofas until the end of the month.
Customer: Great. When can you deliver it?
Assistant: The earliest date is next Thursday, the ninth. Deliveries are between nine and one o'clock.
Customer: That's fine. Is delivery free?
Assistant: It's free within the city. We also take away your old sofa for an extra hundred thousand.
Customer: Yes, please — I'd like that. And what about the guarantee?
Assistant: The frame has a five-year guarantee, and the fabric has two years. Can I take your name and address?
Customer: It's Nodira Alimova. A-L-I-M-O-V-A. The address is 27 Bogishamol Street, flat 14.
Assistant: Which floor is that on? Is there a lift?
Customer: It's the fifth floor, and yes, there's a lift.
Assistant: Perfect. We'll call you the day before to confirm the time.`,
        questions: [
          { id: 'n11l1', type: 'fill', prompt: '1. Model name: ___', answer: 'Milano' },
          { id: 'n11l2', type: 'single', prompt: '2. Colour chosen:', options: ['dark blue', 'grey', 'green', 'black'], answer: 0 },
          { id: 'n11l3', type: 'single', prompt: '3. Size:', options: ['two-seater', 'three-seater', 'armchair', 'corner sofa'], answer: 1 },
          { id: 'n11l4', type: 'fill', prompt: '4. Discount until the end of the month: ___ %', answer: ['15', 'fifteen'] },
          { id: 'n11l5', type: 'fill', prompt: '5. Delivery date: Thursday the ___', answer: ['ninth', '9th', '9'] },
          { id: 'n11l6', type: 'single', prompt: '6. Delivery is free …', options: ['everywhere', 'at weekends', 'within the city', 'for orders over 5 million'], answer: 2 },
          { id: 'n11l7', type: 'fill', prompt: '7. Taking away the old sofa costs an extra ___ thousand sum.', answer: ['100', 'hundred', 'one hundred'] },
          { id: 'n11l8', type: 'fill', prompt: '8. The frame has a ___-year guarantee.', answer: ['five', '5'] },
          { id: 'n11l9', type: 'fill', prompt: '9. Surname: ___', answer: 'Alimova' },
          { id: 'n11l10', type: 'fill', prompt: '10. The flat is on the ___ floor.', answer: ['fifth', '5th'] },
        ],
      },
      {
        title: 'Part 2 · A community clean-up day',
        intro: 'You will hear an organiser speaking to volunteers. Questions 11–20.',
        script: `Good morning, everyone, and thanks for joining our community clean-up day. My name is Bahodir, and I'm one of the organisers.
Today we're working along the canal between the old bridge and the sports stadium — about three kilometres in total. We'll split into four teams, and each team leader is wearing a yellow vest, so they're easy to find.
Team one will collect rubbish from the water's edge. Please don't go into the water — the banks can be slippery. Team two will clear the footpath, and team three will paint the benches near the stadium. Team four, which needs people who are good with tools, will repair the fence by the children's playground.
Everyone will get gloves and bags at the registration table. Please put plastic and glass in the blue bags and everything else in the black ones. If you find anything dangerous, such as needles or broken electrical items, don't touch it — tell your team leader.
We'll stop for lunch at half past twelve. A local café has kindly donated sandwiches and drinks, and lunch will be served under the big trees next to the bridge.
We plan to finish at three o'clock. At the end, we'll weigh all the rubbish we've collected, and the results will be posted on the city council's website. Last year we collected over four hundred kilos, so let's try to beat that!`,
        questions: [
          { id: 'n11l11', type: 'single', prompt: '11. The clean-up takes place along …', options: ['a river', 'a main road', 'the lake', 'the canal'], answer: 3 },
          { id: 'n11l12', type: 'fill', prompt: '12. Total distance: about ___ kilometres', answer: ['three', '3'] },
          { id: 'n11l13', type: 'fill', prompt: '13. Team leaders wear a yellow ___', answer: 'vest' },
          { id: 'n11l14', type: 'single', prompt: '14. Team three will …', options: ['paint benches', 'collect rubbish', 'clear the path', 'repair a fence'], answer: 0 },
          { id: 'n11l15', type: 'single', prompt: '15. Team four needs people who are …', options: ['strong swimmers', 'good with tools', 'good at painting', 'first-aid trained'], answer: 1 },
          { id: 'n11l16', type: 'fill', prompt: '16. Plastic and glass go in the ___ bags.', answer: 'blue' },
          { id: 'n11l17', type: 'single', prompt: '17. If you find something dangerous, you should …', options: ['put it in a bag', 'take it home', 'tell your team leader', 'call the police'], answer: 2 },
          { id: 'n11l18', type: 'fill', prompt: '18. Lunch is at half past ___', answer: ['twelve', '12'] },
          { id: 'n11l19', type: 'single', prompt: '19. Lunch was donated by …', options: ['the council', 'the stadium', 'a supermarket', 'a local café'], answer: 3 },
          { id: 'n11l20', type: 'fill', prompt: '20. Last year they collected over ___ kilos.', answer: ['400', 'four hundred'] },
        ],
      },
      {
        title: 'Part 3 · A project on solar panels for schools',
        intro: 'You will hear two engineering students, Aziz and Katya, discussing their project with their tutor. Questions 21–30.',
        script: `Tutor: So, your project is about installing solar panels on school roofs. How far have you got?
Katya: We've chosen a school in Chirchiq as our case study. It has a large flat roof that gets sun all day.
Aziz: We calculated that panels covering about two-thirds of the roof could produce around forty per cent of the school's electricity.
Tutor: Why not more?
Aziz: Mainly because schools use a lot of power in winter mornings, when the panels produce the least.
Tutor: Good point. What about the cost?
Katya: The installation would pay for itself in about seven years. We also looked at a government programme that pays thirty per cent of the cost for public buildings.
Tutor: Did you speak to the school?
Katya: Yes, the director was very positive. She suggested that students could monitor how much electricity the panels produce as part of their science lessons.
Tutor: That's a strong educational argument. Any problems?
Aziz: Dust. In our climate, panels get dusty quickly and lose efficiency, so they'd need cleaning about once a month.
Tutor: Who would do that?
Aziz: The school caretaker, with a simple brush system. It doesn't need special training.
Tutor: Right. For the final report, I'd like you to compare your figures with one other school, ideally an older building with a sloping roof. And please include a map showing which way the roofs face.
Katya: When's the deadline?
Tutor: The end of the month. And you'll present it at the department seminar the following week.`,
        questions: [
          { id: 'n11l21', type: 'fill', prompt: '21. The case-study school is in ___', answer: 'Chirchiq' },
          { id: 'n11l22', type: 'single', prompt: '22. The panels could produce around … of the school’s electricity.', options: ['20%', '40%', '60%', 'all'], answer: 1 },
          { id: 'n11l23', type: 'single', prompt: '23. Why can’t the panels produce more?', options: ['Schools use a lot of power on winter mornings.', 'The roof is too small.', 'The panels are old.', 'It is too cloudy.'], answer: 0 },
          { id: 'n11l24', type: 'fill', prompt: '24. The installation would pay for itself in about ___ years.', answer: ['seven', '7'] },
          { id: 'n11l25', type: 'fill', prompt: '25. A government programme pays ___ % of the cost.', answer: ['30', 'thirty'] },
          { id: 'n11l26', type: 'single', prompt: '26. The director suggested students could …', options: ['clean the panels', 'monitor electricity production in science lessons', 'sell electricity', 'design the panels'], answer: 1 },
          { id: 'n11l27', type: 'fill', prompt: '27. The main problem is ___', answer: 'dust' },
          { id: 'n11l28', type: 'single', prompt: '28. How often would the panels need cleaning?', options: ['every day', 'once a week', 'once a month', 'once a year'], answer: 2 },
          { id: 'n11l29', type: 'single', prompt: '29. The comparison school should ideally have …', options: ['a flat roof', 'no roof panels', 'more students', 'a sloping roof'], answer: 3 },
          { id: 'n11l30', type: 'fill', prompt: '30. The report must include a ___ showing which way the roofs face.', answer: 'map' },
        ],
      },
      {
        title: 'Part 4 · Lecture: How bridges stand up',
        intro: 'You will hear part of an engineering lecture. Questions 31–40.',
        script: `Today I'm going to introduce the main types of bridge and explain how each one deals with the forces acting on it. Every bridge must carry its own weight, known as the dead load, plus the changing weight of traffic and people, the live load. It must also resist wind and, in some places, earthquakes.
The simplest design is the beam bridge: a horizontal beam supported at each end. When a load is placed in the middle, the top of the beam is squeezed, which we call compression, while the bottom is stretched, which we call tension. Beam bridges are cheap and quick to build, but they are only practical for short spans, usually less than about eighty metres.
Arch bridges work differently. The curved shape turns the downward weight into compression that travels along the arch to the supports at each end, known as abutments. Because stone is very strong in compression, people have built arch bridges for thousands of years, and many Roman examples are still standing.
For the longest spans, engineers use suspension bridges. Here, the road deck hangs from vertical cables attached to two main cables, which pass over tall towers and are anchored firmly into the ground at each end. The main cables are in tension. The longest suspension bridges today have central spans of around two kilometres.
A more recent design is the cable-stayed bridge, in which cables run directly from the towers to the deck. These are cheaper than suspension bridges for medium spans and have become very popular since the 1970s.
Finally, wind is a serious challenge. Engineers now test models of new bridges in wind tunnels to make sure they will not shake dangerously in strong winds.`,
        questions: [
          { id: 'n11l31', type: 'fill', prompt: '31. The weight of the bridge itself is called the ___ load.', answer: 'dead' },
          { id: 'n11l32', type: 'fill', prompt: '32. The weight of traffic and people is the ___ load.', answer: 'live' },
          { id: 'n11l33', type: 'single', prompt: '33. In a loaded beam, the bottom is …', options: ['in tension', 'in compression', 'not affected', 'twisted'], answer: 0 },
          { id: 'n11l34', type: 'fill', prompt: '34. Beam bridges are practical for spans of less than about ___ metres.', answer: ['80', 'eighty'] },
          { id: 'n11l35', type: 'fill', prompt: '35. The supports at the ends of an arch are called ___', answer: ['abutments', 'abutment'] },
          { id: 'n11l36', type: 'single', prompt: '36. Arch bridges have been built of stone because stone is strong in …', options: ['tension', 'compression', 'wind', 'water'], answer: 1 },
          { id: 'n11l37', type: 'single', prompt: '37. In a suspension bridge, the main cables are anchored …', options: ['to the deck', 'to the river bed', 'into the ground at each end', 'to the arch'], answer: 2 },
          { id: 'n11l38', type: 'fill', prompt: '38. The longest suspension bridges have central spans of around ___ kilometres.', answer: ['two', '2'] },
          { id: 'n11l39', type: 'single', prompt: '39. Cable-stayed bridges are cheaper for …', options: ['short spans', 'the longest spans', 'railways only', 'medium spans'], answer: 3 },
          { id: 'n11l40', type: 'fill', prompt: '40. Models are tested in wind ___', answer: ['tunnels', 'tunnel'] },
        ],
      },
    ],
  },

  'reading-11': {
    kind: 'reading', title: 'IELTS Academic Reading — Mock Test 11', minutes: 60,
    sections: [
      {
        title: 'Passage 1 · The Pomegranate',
        intro: 'Questions 1–13. You should spend about 20 minutes on this passage.',
        text: `The pomegranate is one of the oldest cultivated fruits. It is thought to have originated in the region stretching from Iran to northern India, and it has been grown in Central Asia for thousands of years. The fruit appears frequently in the art and poetry of the region, where its many seeds have long been a symbol of fertility and abundance.

The pomegranate tree is well suited to dry climates. It tolerates heat, poor soil and drought, although it produces the best fruit when it receives regular water during the growing season. In areas with cold winters, farmers protect the trees by bending the branches down and covering them with soil in late autumn, a traditional technique still used in parts of Uzbekistan and Tajikistan.

Inside the tough skin, the fruit contains hundreds of seeds, each surrounded by juicy red pulp known as an aril. Separating the arils by hand is slow, which is one reason pomegranates are more expensive than many other fruits. In recent years, machines have been developed that break the fruit open in water: the arils sink, while the white membrane floats and can be removed.

Pomegranate juice is rich in antioxidants and vitamin C, and it has become fashionable as a "superfood". However, scientists caution that many health claims are based on laboratory studies rather than large trials in humans. The skin of the fruit has traditionally been used to dye textiles yellow and brown, and also in traditional medicine.

Today, the main producers include Iran, India, Turkey and the United States, and demand has grown strongly in Europe and East Asia. For farmers in Central Asia, the fruit offers a valuable export opportunity, but competition is strong and quality standards for exported fruit are strict.`,
        questions: [
          { id: 'n11r1', type: 'single', prompt: '1. The pomegranate probably originated in the region from Iran to northern India.', options: tfng, answer: 0 },
          { id: 'n11r2', type: 'single', prompt: '2. Pomegranate trees need a lot of rain all year.', options: tfng, answer: 1 },
          { id: 'n11r3', type: 'single', prompt: '3. Some farmers cover trees with soil to protect them in winter.', options: tfng, answer: 0 },
          { id: 'n11r4', type: 'single', prompt: '4. Separating arils by hand is quick.', options: tfng, answer: 1 },
          { id: 'n11r5', type: 'single', prompt: '5. All health claims about pomegranates have been proven in large human trials.', options: tfng, answer: 1 },
          { id: 'n11r6', type: 'single', prompt: '6. Uzbekistan is the world’s largest producer of pomegranates.', options: tfng, answer: 2 },
          { id: 'n11r7', type: 'single', prompt: '7. Demand for pomegranates has grown in East Asia.', options: tfng, answer: 0 },
          { id: 'n11r8', type: 'fill', prompt: '8. The many seeds are a symbol of fertility and ___. (ONE WORD)', answer: 'abundance' },
          { id: 'n11r9', type: 'fill', prompt: '9. The juicy pulp around each seed is called an ___. (ONE WORD)', answer: 'aril' },
          { id: 'n11r10', type: 'fill', prompt: '10. In the machines, the white ___ floats. (ONE WORD)', answer: 'membrane' },
          { id: 'n11r11', type: 'fill', prompt: '11. The juice is rich in antioxidants and vitamin ___. (ONE LETTER)', answer: 'C' },
          { id: 'n11r12', type: 'fill', prompt: '12. The skin was used to ___ textiles. (ONE WORD)', answer: 'dye' },
          { id: 'n11r13', type: 'fill', prompt: '13. Quality standards for exported fruit are ___. (ONE WORD)', answer: 'strict' },
        ],
      },
      {
        title: 'Passage 2 · Where Have All the Insects Gone?',
        intro: 'Questions 14–26. You should spend about 20 minutes on this passage.',
        text: `A. Drivers of a certain age often remember long summer journeys after which the car windscreen was covered in dead insects. Today, many say, the windscreen stays almost clean. This informal observation has been supported by scientific studies suggesting that insect populations have fallen sharply in many parts of the world.

B. One of the most widely reported studies came from nature reserves in Germany, where volunteers had collected flying insects in the same traps for nearly thirty years. The total weight of insects caught fell by more than three-quarters over the period. Because the traps were in protected areas, the decline was especially alarming.

C. Scientists point to several causes. The most important is probably the loss of habitat, as wild meadows, hedges and wetlands are replaced by large fields of a single crop or by buildings. Pesticides are another major factor, killing not only pests but also harmless and useful species. Climate change and artificial light at night add further pressure.

D. The consequences could be serious. Insects pollinate around three-quarters of the main food crops, break down dead plants and animals, and are an essential source of food for birds, bats, fish and many other animals. A decline in insects therefore affects whole ecosystems.

E. Not all experts agree on the scale of the problem. Long-term data exist for only a small number of places, mostly in Europe and North America, and some insect groups appear to be stable or even increasing. Critics warn against using dramatic phrases such as "insect apocalypse" before better global data are available.

F. Nevertheless, many of the proposed solutions would bring other benefits too. Planting wildflowers along roads and fields, reducing pesticide use, leaving areas of gardens uncut and switching off unnecessary lights at night are all relatively cheap measures that can help insects to recover.`,
        questions: [
          { id: 'n11r14', type: 'single', prompt: '14. Which paragraph describes a long-term study?', options: ['A', 'B', 'C', 'D'], answer: 1 },
          { id: 'n11r15', type: 'single', prompt: '15. Which paragraph explains the causes of insect decline?', options: ['B', 'C', 'D', 'E'], answer: 1 },
          { id: 'n11r16', type: 'single', prompt: '16. Which paragraph expresses doubts about the scale of the problem?', options: ['B', 'D', 'E', 'F'], answer: 2 },
          { id: 'n11r17', type: 'single', prompt: '17. Which paragraph describes the role of insects in ecosystems?', options: ['A', 'C', 'D', 'F'], answer: 2 },
          { id: 'n11r18', type: 'single', prompt: '18. In the German study, the weight of insects fell by …', options: ['more than three-quarters', 'about a quarter', 'about half', 'almost nothing'], answer: 0 },
          { id: 'n11r19', type: 'single', prompt: '19. What is probably the most important cause?', options: ['pesticides', 'loss of habitat', 'climate change', 'artificial light'], answer: 1 },
          { id: 'n11r20', type: 'single', prompt: '20. Why do critics warn against phrases like "insect apocalypse"?', options: ['Insects are increasing everywhere.', 'The phrase is too long.', 'Global data are limited.', 'Scientists disagree about pesticides.'], answer: 2 },
          { id: 'n11r21', type: 'single', prompt: '21. The German traps were placed in nature reserves.', options: tfng, answer: 0 },
          { id: 'n11r22', type: 'single', prompt: '22. Pesticides only kill harmful insects.', options: tfng, answer: 1 },
          { id: 'n11r23', type: 'single', prompt: '23. Butterflies have declined faster than beetles.', options: tfng, answer: 2 },
          { id: 'n11r24', type: 'single', prompt: '24. Some insect groups appear to be stable or increasing.', options: tfng, answer: 0 },
          { id: 'n11r25', type: 'fill', prompt: '25. Insects pollinate around three-quarters of the main food ___. (ONE WORD)', answer: 'crops' },
          { id: 'n11r26', type: 'fill', prompt: '26. Switching off unnecessary ___ at night can help insects. (ONE WORD)', answer: 'lights' },
        ],
      },
      {
        title: 'Passage 3 · The Sharing Economy',
        intro: 'Questions 27–40. You should spend about 20 minutes on this passage.',
        text: `Over the past fifteen years, digital platforms have made it easy for people to share things they own or services they can provide. Through apps, we can rent a stranger's flat for a weekend, get a lift in a private car, borrow a neighbour's drill or hire someone to assemble furniture. Supporters call this the "sharing economy" and argue that it allows resources to be used more efficiently.

The basic idea is simple. Many possessions are used only rarely: the average private car, for example, is parked for more than ninety per cent of the time, and a power drill may be used for only a few minutes in its entire life. By connecting people who have spare capacity with people who need it, platforms can reduce waste and give owners an extra source of income. Trust between strangers is maintained largely through online ratings and reviews.

However, the reality has turned out to be more complicated than the early optimism suggested. Some of the largest platforms are not really about sharing at all, but are commercial businesses in which professional landlords or full-time drivers provide services. In popular tourist cities, critics argue that short-term rental platforms have reduced the number of homes available for local residents and pushed up rents. Concerns have also been raised about the working conditions of drivers and delivery riders, who are usually classified as independent contractors and therefore lack sick pay, holidays and pensions.

Governments have responded in different ways. Some cities limit the number of nights a home can be rented to tourists each year, while others require hosts to register with the authorities. Several countries have introduced rules giving platform workers more rights, although the platforms often argue that this will reduce flexibility and increase prices.

The sharing economy, then, is neither the simple solution its supporters promised nor the pure threat its critics fear. Its effects depend heavily on how platforms are designed and regulated.`,
        questions: [
          { id: 'n11r27', type: 'single', prompt: '27. Supporters say the sharing economy …', options: ['creates more cars', 'replaces all shops', 'is only for tourists', 'uses resources more efficiently'], answer: 3 },
          { id: 'n11r28', type: 'single', prompt: '28. The average private car is parked for …', options: ['more than 90% of the time', 'about half the time', 'only at night', 'less than 10% of the time'], answer: 0 },
          { id: 'n11r29', type: 'single', prompt: '29. Trust between strangers is mainly maintained through …', options: ['contracts', 'ratings and reviews', 'the police', 'insurance'], answer: 1 },
          { id: 'n11r30', type: 'single', prompt: '30. What is a criticism of short-term rental platforms?', options: ['They are too cheap.', 'They are illegal everywhere.', 'They reduce homes for local residents.', 'They have no reviews.'], answer: 2 },
          { id: 'n11r31', type: 'single', prompt: '31. What is the writer’s conclusion?', options: ['The sharing economy is a simple solution.', 'It should be banned.', 'It only helps drivers.', 'Its effects depend on design and regulation.'], answer: 3 },
          { id: 'n11r32', type: 'single', prompt: '32. A power drill may be used for only a few minutes in its life.', options: tfng, answer: 0 },
          { id: 'n11r33', type: 'single', prompt: '33. All sharing platforms are run by non-profit organisations.', options: tfng, answer: 1 },
          { id: 'n11r34', type: 'single', prompt: '34. Platform drivers usually receive sick pay and pensions.', options: tfng, answer: 1 },
          { id: 'n11r35', type: 'single', prompt: '35. Most platform users are under thirty.', options: tfng, answer: 2 },
          { id: 'n11r36', type: 'single', prompt: '36. Some cities limit the number of nights a home can be rented to tourists.', options: tfng, answer: 0 },
          { id: 'n11r37', type: 'fill', prompt: '37. Platform workers are usually classified as independent ___. (ONE WORD)', answer: ['contractors', 'contractor'] },
          { id: 'n11r38', type: 'fill', prompt: '38. Some cities require hosts to ___ with the authorities. (ONE WORD)', answer: 'register' },
          { id: 'n11r39', type: 'fill', prompt: '39. Platforms argue new rules will reduce ___. (ONE WORD)', answer: 'flexibility' },
          { id: 'n11r40', type: 'fill', prompt: '40. Owners can gain an extra source of ___. (ONE WORD)', answer: 'income' },
        ],
      },
    ],
  },

  'listening-12': {
    kind: 'listening', title: 'IELTS Listening — Mock Test 12', minutes: 30,
    sections: [
      {
        title: 'Part 1 · Joining a language exchange club',
        intro: 'You will hear a student phoning a language exchange club. Questions 1–10.',
        script: `Coordinator: Talk Together Language Club, Diana speaking.
Student: Hi, I'd like to join your language exchange. A friend told me about it.
Coordinator: Great. So, the idea is that you meet a partner who speaks the language you want to learn, and you help them with your language. Which language would you like to practise?
Student: English, and I can offer Uzbek and Russian.
Coordinator: Perfect, we have several English speakers looking for Russian at the moment. Meetings are on Wednesday evenings, from six thirty to eight thirty, at the Bookworm café on Shota Rustaveli Street.
Student: Is there a membership fee?
Coordinator: It's free for the first month. After that, it's fifty thousand sum per month, which includes one hot drink at each meeting.
Student: That's reasonable. What happens at the meetings?
Coordinator: For the first hour you talk in one language, and then you switch. We also organise a cinema evening once a month, where we watch a film with subtitles.
Student: Sounds fun. What details do you need?
Coordinator: Your name, please.
Student: Kamron Yusupov. That's K-A-M-R-O-N.
Coordinator: And your level of English?
Student: I'd say intermediate.
Coordinator: OK. Could you also tell me what you'd like to talk about?
Student: Travel and technology, mainly.
Coordinator: Fine. I'll send you an email with your partner's details by Monday. Please bring a notebook to the first meeting.`,
        questions: [
          { id: 'n12l1', type: 'fill', prompt: '1. Language to practise: ___', answer: 'English' },
          { id: 'n12l2', type: 'single', prompt: '2. The student can offer …', options: ['Uzbek and Russian', 'Uzbek only', 'Russian and Kazakh', 'English'], answer: 0 },
          { id: 'n12l3', type: 'fill', prompt: '3. Meetings are on ___ evenings.', answer: 'Wednesday' },
          { id: 'n12l4', type: 'fill', prompt: '4. Place: the Bookworm ___', answer: 'café' },
          { id: 'n12l5', type: 'fill', prompt: '5. Fee after the first month: ___ thousand sum', answer: ['fifty', '50'] },
          { id: 'n12l6', type: 'single', prompt: '6. The fee includes …', options: ['a book', 'one hot drink per meeting', 'a cinema ticket', 'a T-shirt'], answer: 1 },
          { id: 'n12l7', type: 'single', prompt: '7. How often is there a cinema evening?', options: ['every week', 'twice a month', 'once a month', 'once a year'], answer: 2 },
          { id: 'n12l8', type: 'fill', prompt: '8. First name: ___', answer: 'Kamron' },
          { id: 'n12l9', type: 'fill', prompt: '9. Topics: travel and ___', answer: 'technology' },
          { id: 'n12l10', type: 'fill', prompt: '10. Bring a ___ to the first meeting.', answer: 'notebook' },
        ],
      },
      {
        title: 'Part 2 · A tour of a car factory',
        intro: 'You will hear a guide talking to visitors at a car factory. Questions 11–20.',
        script: `Good morning, and welcome to the factory. I'm Javlon, and I'll be guiding you today. Before we start, please put on the safety glasses and the visitor badges you received at the entrance, and keep them on throughout the tour.
The factory opened in 2008 and employs about three thousand people working in three shifts, so production continues day and night. At full capacity, we can produce up to six hundred cars a day.
Our first stop is the press shop, where large sheets of steel are pressed into doors, roofs and other body parts. It's very noisy, so we'll give you ear protection there. After that, we'll visit the welding area, where around two hundred robots join the parts together. Then we'll see the paint shop through a glass window — visitors can't go inside, because the air must be kept completely free of dust.
The final stop is the assembly line, where workers fit the engines, seats and electronics. Each car is tested for about four hours before it leaves the factory.
Please stay on the green path marked on the floor, and don't touch any machines. Photography is allowed everywhere except in the paint shop area.
The tour lasts about ninety minutes, and at the end you can visit our small museum, which shows the history of the factory's models, and the gift shop.`,
        questions: [
          { id: 'n12l11', type: 'single', prompt: '11. Visitors must wear …', options: ['helmets', 'gloves', 'special shoes', 'safety glasses and badges'], answer: 3 },
          { id: 'n12l12', type: 'fill', prompt: '12. The factory opened in ___', answer: '2008' },
          { id: 'n12l13', type: 'fill', prompt: '13. Number of employees: about ___', answer: ['3000', 'three thousand', '3,000'] },
          { id: 'n12l14', type: 'fill', prompt: '14. Maximum production: ___ cars a day', answer: ['600', 'six hundred'] },
          { id: 'n12l15', type: 'single', prompt: '15. What happens in the press shop?', options: ['Steel sheets are pressed into body parts.', 'Cars are painted.', 'Engines are fitted.', 'Cars are tested.'], answer: 0 },
          { id: 'n12l16', type: 'fill', prompt: '16. About ___ robots work in the welding area.', answer: ['200', 'two hundred'] },
          { id: 'n12l17', type: 'single', prompt: '17. Why can’t visitors enter the paint shop?', options: ['It is too hot.', 'The air must be free of dust.', 'It is closed today.', 'It is dangerous.'], answer: 1 },
          { id: 'n12l18', type: 'fill', prompt: '18. Each car is tested for about ___ hours.', answer: ['four', '4'] },
          { id: 'n12l19', type: 'fill', prompt: '19. Visitors must stay on the ___ path.', answer: 'green' },
          { id: 'n12l20', type: 'fill', prompt: '20. The tour lasts about ___ minutes.', answer: ['ninety', '90'] },
        ],
      },
      {
        title: 'Part 3 · Investigating food waste in the canteen',
        intro: 'You will hear two students, Shirin and Leo, discussing their project with their tutor. Questions 21–30.',
        script: `Tutor: So, how is the food waste project going?
Shirin: Well, we measured the waste in the university canteen for two weeks. On average, about eighteen per cent of the food served was thrown away.
Tutor: Which items were wasted most?
Leo: Bread, by far. Students take two or three pieces automatically and then leave them. Salad came second.
Tutor: Interesting. Did you find out why?
Shirin: We interviewed thirty students. Most said the portions were too big, especially at lunchtime.
Leo: Some also said they didn't like the taste of certain dishes, but that was less common.
Tutor: What solutions are you going to propose?
Shirin: First, offering two portion sizes, with the smaller one at a lower price. Second, putting bread at the end of the counter, so students only take it if they really want it.
Tutor: That's a clever idea. Have you discussed it with the canteen manager?
Leo: Yes. She agreed to try the bread idea for one week. We'll measure the waste again to compare.
Tutor: Excellent — that gives you a proper experiment. What about the food that's still left over?
Shirin: A local charity collects unused food from restaurants, so we're asking whether they could collect from the canteen too.
Tutor: Good. In your report, make sure you explain how you weighed the waste, so others could repeat the study. And include photographs if you can.
Leo: When should we present?
Tutor: At the sustainability fair in March.`,
        questions: [
          { id: 'n12l21', type: 'fill', prompt: '21. They measured waste for ___ weeks.', answer: ['two', '2'] },
          { id: 'n12l22', type: 'fill', prompt: '22. About ___ % of food served was thrown away.', answer: ['18', 'eighteen'] },
          { id: 'n12l23', type: 'single', prompt: '23. Which item was wasted most?', options: ['salad', 'rice', 'bread', 'soup'], answer: 2 },
          { id: 'n12l24', type: 'fill', prompt: '24. They interviewed ___ students.', answer: ['thirty', '30'] },
          { id: 'n12l25', type: 'single', prompt: '25. The main reason given for waste was …', options: ['bad taste', 'high prices', 'no time to eat', 'portions too big'], answer: 3 },
          { id: 'n12l26', type: 'single', prompt: '26. The smaller portion would be …', options: ['cheaper', 'free', 'only for staff', 'served at dinner'], answer: 0 },
          { id: 'n12l27', type: 'single', prompt: '27. Where will the bread be placed?', options: ['at the start of the counter', 'at the end of the counter', 'on every table', 'in the kitchen'], answer: 1 },
          { id: 'n12l28', type: 'single', prompt: '28. The manager agreed to try the idea for …', options: ['one day', 'one month', 'one week', 'a semester'], answer: 2 },
          { id: 'n12l29', type: 'fill', prompt: '29. A local ___ might collect leftover food.', answer: 'charity' },
          { id: 'n12l30', type: 'fill', prompt: '30. They will present at the sustainability fair in ___', answer: 'March' },
        ],
      },
      {
        title: 'Part 4 · Lecture: First impressions',
        intro: 'You will hear part of a psychology lecture. Questions 31–40.',
        script: `Today we're looking at first impressions — how quickly we judge other people, and how accurate those judgements are.
Research suggests that we form impressions extremely fast. In one well-known set of experiments, participants saw photographs of faces for just a tenth of a second, and their judgements of how trustworthy the person looked were very similar to judgements made with no time limit. In other words, extra time made people more confident, but it didn't change their opinion much.
What influences these rapid judgements? Facial expression is important: people who smile slightly are usually seen as more trustworthy. Clothing and posture also play a role, and so does the voice — a calm, steady voice tends to be associated with competence.
The problem is that first impressions are often wrong. Studies show that our judgements of trustworthiness based on faces are only slightly better than chance. Even so, they can have real consequences. Some research has found that candidates who look more competent are more likely to win elections, and similar effects have been found in job interviews.
Once formed, impressions are hard to change, partly because of something called confirmation bias: we pay more attention to information that supports our first opinion and tend to ignore information that contradicts it.
So what can we do? Being aware of these biases helps. Organisations can also reduce their influence — for example, by using structured interviews in which every candidate is asked the same questions and scored against clear criteria, rather than relying on a general feeling.`,
        questions: [
          { id: 'n12l31', type: 'fill', prompt: '31. Participants saw faces for just a ___ of a second.', answer: 'tenth' },
          { id: 'n12l32', type: 'single', prompt: '32. With more time, people became …', options: ['more accurate', 'less sure', 'more positive', 'more confident'], answer: 3 },
          { id: 'n12l33', type: 'single', prompt: '33. People who smile slightly are seen as more …', options: ['trustworthy', 'intelligent', 'attractive', 'nervous'], answer: 0 },
          { id: 'n12l34', type: 'single', prompt: '34. A calm, steady voice is associated with …', options: ['kindness', 'competence', 'humour', 'age'], answer: 1 },
          { id: 'n12l35', type: 'fill', prompt: '35. Judgements of trustworthiness from faces are only slightly better than ___', answer: 'chance' },
          { id: 'n12l36', type: 'fill', prompt: '36. Candidates who look more competent are more likely to win ___', answer: ['elections', 'election'] },
          { id: 'n12l37', type: 'fill', prompt: '37. Similar effects have been found in job ___', answer: ['interviews', 'interview'] },
          { id: 'n12l38', type: 'fill', prompt: '38. Paying attention only to supporting information is called confirmation ___', answer: 'bias' },
          { id: 'n12l39', type: 'single', prompt: '39. Structured interviews ask every candidate …', options: ['different questions', 'no questions', 'the same questions', 'personal questions'], answer: 2 },
          { id: 'n12l40', type: 'fill', prompt: '40. Candidates are scored against clear ___', answer: 'criteria' },
        ],
      },
    ],
  },

  'reading-12': {
    kind: 'reading', title: 'IELTS Academic Reading — Mock Test 12', minutes: 60,
    sections: [
      {
        title: 'Passage 1 · Saffron: Red Gold',
        intro: 'Questions 1–13. You should spend about 20 minutes on this passage.',
        text: `Saffron is the most expensive spice in the world by weight. It consists of the dried red stigmas — the thread-like parts of the flower that collect pollen — of the saffron crocus. Each flower produces only three stigmas, and around 150,000 flowers are needed to make a single kilogram of the spice. Because the flowers must be picked and the stigmas removed by hand, production requires a great deal of labour.

The saffron crocus flowers for only a few weeks in autumn, and each flower lasts just one or two days. Pickers therefore start early in the morning, before the sun becomes strong, and collect the flowers as soon as they open. Later the same day, the stigmas are carefully separated and dried, either in the sun or over gentle heat. Drying reduces the weight by around four-fifths.

Saffron has been used for thousands of years, not only to flavour and colour food but also as a dye and in traditional medicine. Today it is an important ingredient in dishes such as Persian rice, Spanish paella and Indian desserts. Only a tiny amount is needed: a few threads soaked in warm water are enough to give a whole dish a golden colour and a distinctive aroma.

Iran produces the great majority of the world's saffron, and smaller quantities come from Afghanistan, India, Spain and Greece. In recent years, farmers in parts of Central Asia have begun experimenting with the crop, attracted by its high value and low water needs compared with crops such as cotton.

Its price makes saffron a target for fraud. Dishonest sellers may mix it with dyed flower petals or with the yellow parts of the flower, which have no flavour. Buyers are advised to purchase whole threads rather than powder, since powder is easier to fake.`,
        questions: [
          { id: 'n12r1', type: 'single', prompt: '1. Saffron is the most expensive spice by weight.', options: tfng, answer: 0 },
          { id: 'n12r2', type: 'single', prompt: '2. Each saffron flower produces five stigmas.', options: tfng, answer: 1 },
          { id: 'n12r3', type: 'single', prompt: '3. Machines are now used to remove the stigmas.', options: tfng, answer: 1 },
          { id: 'n12r4', type: 'single', prompt: '4. Each flower lasts only one or two days.', options: tfng, answer: 0 },
          { id: 'n12r5', type: 'single', prompt: '5. Spanish saffron is of higher quality than Iranian saffron.', options: tfng, answer: 2 },
          { id: 'n12r6', type: 'single', prompt: '6. Saffron needs less water than cotton.', options: tfng, answer: 0 },
          { id: 'n12r7', type: 'single', prompt: '7. Saffron powder is easier to fake than whole threads.', options: tfng, answer: 0 },
          { id: 'n12r8', type: 'fill', prompt: '8. About ___ flowers are needed for one kilogram. (NUMBER)', answer: ['150,000', '150000'] },
          { id: 'n12r9', type: 'fill', prompt: '9. The crocus flowers in ___. (ONE WORD)', answer: 'autumn' },
          { id: 'n12r10', type: 'fill', prompt: '10. Drying reduces the weight by around four-___. (ONE WORD)', answer: 'fifths' },
          { id: 'n12r11', type: 'fill', prompt: '11. Saffron gives dishes a golden colour and a distinctive ___. (ONE WORD)', answer: 'aroma' },
          { id: 'n12r12', type: 'fill', prompt: '12. ___ produces most of the world’s saffron. (ONE WORD)', answer: 'Iran' },
          { id: 'n12r13', type: 'fill', prompt: '13. Saffron may be mixed with dyed flower ___. (ONE WORD)', answer: 'petals' },
        ],
      },
      {
        title: 'Passage 2 · The Return of the Night Train',
        intro: 'Questions 14–26. You should spend about 20 minutes on this passage.',
        text: `A. For much of the late twentieth century, overnight sleeper trains seemed to belong to the past. As cheap flights spread and high-speed rail made daytime journeys shorter, many routes were closed because they were unprofitable. Yet in recent years, night trains have made a surprising comeback in several countries.

B. The main reason is environmental. A passenger travelling by train produces far less carbon dioxide than one flying the same distance, and for journeys of up to around a thousand kilometres, an overnight train can compete with air travel on convenience. Travellers can leave in the evening, sleep on board and arrive in the city centre the next morning, avoiding airport security queues and the journey from the airport.

C. Changing attitudes also play a role. Some travellers, particularly younger people, have chosen to avoid flying for environmental reasons, and others simply enjoy the experience of a slower journey. Social media has helped to make sleeper trains fashionable again, with images of comfortable cabins and views from the window.

D. However, operating night trains remains difficult. The carriages are expensive to build and can only be used once a day, unlike daytime trains, which may complete several journeys. Track access charges, which train companies pay to use the railway, can also be high, especially when a route crosses several countries with different rules. As a result, tickets are often more expensive than budget flights.

E. Governments have begun to offer support, for example by reducing track charges or funding new rolling stock. Some operators have also introduced new types of compartment, including small private "pods" for solo travellers, which are cheaper than a full cabin but more private than a shared couchette.

F. Whether the revival lasts will depend on prices, reliability and political support. Supporters argue that night trains could play an important role in reducing short-haul flights, but only if they are integrated into a well-coordinated international network.`,
        questions: [
          { id: 'n12r14', type: 'single', prompt: '14. Which paragraph explains why night trains are costly to run?', options: ['A', 'B', 'D', 'E'], answer: 2 },
          { id: 'n12r15', type: 'single', prompt: '15. Which paragraph mentions the role of social media?', options: ['B', 'C', 'D', 'F'], answer: 1 },
          { id: 'n12r16', type: 'single', prompt: '16. Which paragraph describes the decline of night trains?', options: ['A', 'B', 'C', 'D'], answer: 0 },
          { id: 'n12r17', type: 'single', prompt: '17. Which paragraph mentions new types of compartment?', options: ['C', 'D', 'E', 'F'], answer: 2 },
          { id: 'n12r18', type: 'single', prompt: '18. Night trains compete with flights for journeys of up to around …', options: ['200 km', '500 km', '1,000 km', '5,000 km'], answer: 2 },
          { id: 'n12r19', type: 'single', prompt: '19. Why can night-train carriages earn less money?', options: ['They are slower.', 'They are smaller.', 'They need more staff.', 'They can only be used once a day.'], answer: 3 },
          { id: 'n12r20', type: 'single', prompt: '20. What will the future of night trains depend on?', options: ['prices, reliability and political support', 'only ticket prices', 'airport rules', 'the weather'], answer: 0 },
          { id: 'n12r21', type: 'single', prompt: '21. Many night-train routes were closed because they lost money.', options: tfng, answer: 0 },
          { id: 'n12r22', type: 'single', prompt: '22. Night-train tickets are usually cheaper than budget flights.', options: tfng, answer: 1 },
          { id: 'n12r23', type: 'single', prompt: '23. Most night-train passengers are business travellers.', options: tfng, answer: 2 },
          { id: 'n12r24', type: 'single', prompt: '24. Some governments have reduced track charges.', options: tfng, answer: 0 },
          { id: 'n12r25', type: 'fill', prompt: '25. Night trains avoid airport security ___. (ONE WORD)', answer: ['queues', 'queue'] },
          { id: 'n12r26', type: 'fill', prompt: '26. Small private compartments for solo travellers are called ___. (ONE WORD)', answer: ['pods', 'pod'] },
        ],
      },
      {
        title: 'Passage 3 · Can We Detect a Lie?',
        intro: 'Questions 27–40. You should spend about 20 minutes on this passage.',
        text: `Popular culture is full of supposedly reliable signs that someone is lying: avoiding eye contact, touching the face, fidgeting or speaking hesitantly. Many people, including professionals such as police officers, believe they can recognise these signals. Yet decades of psychological research suggest that most of us are surprisingly poor lie detectors.

In laboratory studies, people asked to judge whether others are telling the truth typically perform only slightly better than chance, identifying lies correctly about fifty-four per cent of the time. Professionals often do no better than students, although they tend to be more confident. One reason is that many of the behaviours associated with lying are also caused by nervousness, which honest people may feel when they fear they will not be believed.

The polygraph, or "lie detector", measures physical signs of stress such as heart rate, breathing and sweating. However, these reactions are not specific to lying, and a nervous innocent person may produce the same pattern as a calm liar. For this reason, polygraph results are not accepted as evidence in courts in many countries, although they are still used in some workplaces and investigations.

More promising approaches focus on what people say rather than on how they behave. Telling a lie is often mentally demanding, because the liar must invent a story, remember it and watch the listener's reaction. Researchers have found that increasing this "cognitive load" — for example, by asking people to tell their story in reverse order or to answer unexpected questions — can make differences between liars and truth-tellers more noticeable. Truthful accounts also tend to contain more specific, checkable details.

Some technology companies now claim that artificial intelligence can detect lies from video or voice recordings. Scientists remain cautious, pointing out that such systems have rarely been tested independently and may reflect the same biases as the human judgements on which they were trained.`,
        questions: [
          { id: 'n12r27', type: 'single', prompt: '27. How accurate are people at detecting lies in laboratory studies?', options: ['about 90%', 'about 75%', 'about 54%', 'about 20%'], answer: 2 },
          { id: 'n12r28', type: 'single', prompt: '28. Compared with students, professionals are …', options: ['much more accurate', 'more confident but not more accurate', 'less confident', 'always correct'], answer: 1 },
          { id: 'n12r29', type: 'single', prompt: '29. Why are many "lying" behaviours unreliable?', options: ['They are rare.', 'Only children show them.', 'Nervous honest people show them too.', 'They are hard to see.'], answer: 2 },
          { id: 'n12r30', type: 'single', prompt: '30. Increasing cognitive load can …', options: ['calm the speaker', 'replace interviews', 'stop people lying', 'make differences between liars and truth-tellers clearer'], answer: 3 },
          { id: 'n12r31', type: 'single', prompt: '31. What is the scientists’ view of AI lie detection?', options: ['They remain cautious.', 'It is proven.', 'It is banned.', 'It is better than humans.'], answer: 0 },
          { id: 'n12r32', type: 'single', prompt: '32. Many police officers believe they can recognise signs of lying.', options: tfng, answer: 0 },
          { id: 'n12r33', type: 'single', prompt: '33. The polygraph measures brain activity.', options: tfng, answer: 1 },
          { id: 'n12r34', type: 'single', prompt: '34. Polygraph results are accepted in courts in every country.', options: tfng, answer: 1 },
          { id: 'n12r35', type: 'single', prompt: '35. Women are better lie detectors than men.', options: tfng, answer: 2 },
          { id: 'n12r36', type: 'single', prompt: '36. Truthful accounts tend to contain more specific details.', options: tfng, answer: 0 },
          { id: 'n12r37', type: 'fill', prompt: '37. Telling a lie is often mentally ___. (ONE WORD)', answer: 'demanding' },
          { id: 'n12r38', type: 'fill', prompt: '38. People may be asked to tell their story in ___ order. (ONE WORD)', answer: 'reverse' },
          { id: 'n12r39', type: 'fill', prompt: '39. Truthful accounts contain details that can be ___. (ONE WORD)', answer: 'checkable' },
          { id: 'n12r40', type: 'fill', prompt: '40. AI systems may reflect the same ___ as human judgements. (ONE WORD)', answer: 'biases' },
        ],
      },
    ],
  },

  'listening-13': {
    kind: 'listening', title: 'IELTS Listening — Mock Test 13', minutes: 30,
    sections: [
      {
        title: 'Part 1 · Reporting a problem in a rented flat',
        intro: 'You will hear a tenant phoning a property management company. Questions 1–10.',
        script: `Agent: City Homes, maintenance department. How can I help?
Tenant: Hello. I'm renting one of your flats, and there's a problem with the heating.
Agent: I'm sorry to hear that. Can I have the address?
Tenant: It's 45 Navoi Avenue, flat 31.
Agent: Thank you. And your name?
Tenant: Gulnoza Saidova. S-A-I-D-O-V-A.
Agent: What exactly is the problem?
Tenant: The radiator in the bedroom has been cold for three days. The ones in the living room and kitchen are working.
Agent: Have you checked that the valve is open?
Tenant: Yes, I have. I also noticed a small leak under the radiator — there's water on the floor.
Agent: OK, that sounds like a job for our plumber. He can come on Friday morning, between eight and twelve. Will someone be at home?
Tenant: I'll be at work, but my neighbour has a key. She lives in flat 32.
Agent: That's fine, but we need her phone number.
Tenant: It's ninety-three, seven-four-one, eighteen, fifty.
Agent: Thank you. In the meantime, please put a towel under the radiator and don't try to repair it yourself. There's no charge for this repair — it's included in your contract.
Tenant: Great. One more thing — the light in the entrance hall isn't working either.
Agent: I'll add that to the report. The electrician will check it on the same visit.`,
        questions: [
          { id: 'n13l1', type: 'fill', prompt: '1. Problem with the ___', answer: 'heating' },
          { id: 'n13l2', type: 'fill', prompt: '2. Address: 45 Navoi Avenue, flat ___', answer: ['31', 'thirty-one'] },
          { id: 'n13l3', type: 'fill', prompt: '3. Surname: ___', answer: 'Saidova' },
          { id: 'n13l4', type: 'single', prompt: '4. Which radiator is cold?', options: ['bedroom', 'living room', 'kitchen', 'bathroom'], answer: 0 },
          { id: 'n13l5', type: 'fill', prompt: '5. It has been cold for ___ days.', answer: ['three', '3'] },
          { id: 'n13l6', type: 'fill', prompt: '6. There is a small ___ under the radiator.', answer: 'leak' },
          { id: 'n13l7', type: 'fill', prompt: '7. The plumber will come on ___ morning.', answer: 'Friday' },
          { id: 'n13l8', type: 'single', prompt: '8. Who will let the plumber in?', options: ['the tenant', 'the neighbour', 'the landlord', 'the agent'], answer: 1 },
          { id: 'n13l9', type: 'single', prompt: '9. How much will the repair cost?', options: ['half the price', 'one month’s rent', 'nothing', 'it depends'], answer: 2 },
          { id: 'n13l10', type: 'fill', prompt: '10. The light in the entrance ___ is not working.', answer: 'hall' },
        ],
      },
      {
        title: 'Part 2 · A half-day city bus tour',
        intro: 'You will hear a radio presenter describing a bus tour. Questions 11–20.',
        script: `If you've got visitors this weekend, why not take them on the new open-top bus tour of the city? Tours run every day from April to October, departing every forty-five minutes from nine in the morning, and the whole route takes about three and a half hours if you stay on the bus.
The tour starts at Independence Square. From there it goes past the TV tower, which at three hundred and seventy-five metres is one of the tallest structures in the region, and then on to the Chorsu Bazaar, where many passengers get off to explore. You can rejoin the bus at any stop with the same ticket, which is valid for twenty-four hours.
Other highlights include the Minor Mosque, with its white marble walls, and the Japanese Garden, which is particularly beautiful in spring. The final stop is the Tashkent City Park, where there are plenty of cafés.
Commentary is available through headphones in eight languages, including English, Russian and Chinese. Tickets cost one hundred and twenty thousand sum for adults, and children under twelve travel at half price. Children under five go free.
You can buy tickets online, at the hotel reception desks of partner hotels, or directly from the driver, although paying online gives you a ten per cent discount. On hot afternoons, don't forget a hat — the top deck has no roof!`,
        questions: [
          { id: 'n13l11', type: 'single', prompt: '11. Tours run …', options: ['all year', 'only at weekends', 'in summer only', 'from April to October'], answer: 3 },
          { id: 'n13l12', type: 'fill', prompt: '12. Buses depart every ___ minutes.', answer: ['forty-five', '45'] },
          { id: 'n13l13', type: 'fill', prompt: '13. The tour starts at Independence ___', answer: 'Square' },
          { id: 'n13l14', type: 'fill', prompt: '14. The TV tower is ___ metres tall.', answer: ['375', 'three hundred and seventy-five'] },
          { id: 'n13l15', type: 'single', prompt: '15. The ticket is valid for …', options: ['24 hours', 'one ride', '12 hours', 'two days'], answer: 0 },
          { id: 'n13l16', type: 'fill', prompt: '16. The Japanese Garden is particularly beautiful in ___', answer: 'spring' },
          { id: 'n13l17', type: 'fill', prompt: '17. Commentary is available in ___ languages.', answer: ['eight', '8'] },
          { id: 'n13l18', type: 'single', prompt: '18. Children under twelve pay …', options: ['nothing', 'half price', 'full price', '10% less'], answer: 1 },
          { id: 'n13l19', type: 'single', prompt: '19. Where can you get a discount?', options: ['from the driver', 'at hotels', 'online', 'at the TV tower'], answer: 2 },
          { id: 'n13l20', type: 'fill', prompt: '20. On hot afternoons, bring a ___', answer: 'hat' },
        ],
      },
      {
        title: 'Part 3 · An experiment on plant growth',
        intro: 'You will hear two biology students, Nilufar and Ben, discussing an experiment with their tutor. Questions 21–30.',
        script: `Tutor: So, tell me about your experiment.
Ben: We wanted to see whether the colour of light affects how fast bean plants grow. We grew thirty plants in three groups — under red, blue and white light.
Tutor: How long did it run?
Nilufar: Four weeks. We measured the height of each plant every two days.
Tutor: And the results?
Nilufar: The plants under blue light were the shortest, but they had the thickest stems and the darkest leaves. The ones under red light grew tallest, but they were quite thin and weak.
Ben: The white light group was in the middle for height, but looked the healthiest overall.
Tutor: Interesting. Did you control the other variables?
Ben: We tried to. All the plants had the same soil and the same amount of water, and we kept them at the same temperature.
Nilufar: The one problem was that the red lamp was slightly brighter than the others. We only noticed that in the second week.
Tutor: That's an important limitation. You must mention it in your report, and ideally repeat the experiment with lamps of equal brightness.
Ben: We were thinking of measuring the weight of the plants as well, not just the height.
Tutor: Good idea — height alone doesn't show how healthy a plant is. Dry weight would be even better, although you'd have to destroy the plants to measure it.
Nilufar: When do we need to hand in the report?
Tutor: In two weeks. And please present your data in a line graph showing the average height of each group over time.`,
        questions: [
          { id: 'n13l21', type: 'fill', prompt: '21. They grew ___ plants.', answer: ['thirty', '30'] },
          { id: 'n13l22', type: 'fill', prompt: '22. The experiment ran for ___ weeks.', answer: ['four', '4'] },
          { id: 'n13l23', type: 'single', prompt: '23. Plants under blue light were …', options: ['the tallest', 'thin and weak', 'dead', 'the shortest with thick stems'], answer: 3 },
          { id: 'n13l24', type: 'single', prompt: '24. Plants under red light were …', options: ['tallest but thin', 'shortest', 'the healthiest', 'the same as white'], answer: 0 },
          { id: 'n13l25', type: 'single', prompt: '25. Which group looked healthiest overall?', options: ['red', 'white', 'blue', 'none'], answer: 1 },
          { id: 'n13l26', type: 'single', prompt: '26. Which variable was NOT the same for all plants?', options: ['soil', 'water', 'brightness of the lamps', 'temperature'], answer: 2 },
          { id: 'n13l27', type: 'fill', prompt: '27. The red lamp was slightly ___ than the others.', answer: 'brighter' },
          { id: 'n13l28', type: 'fill', prompt: '28. They also want to measure the ___ of the plants.', answer: 'weight' },
          { id: 'n13l29', type: 'single', prompt: '29. Measuring dry weight requires …', options: ['more light', 'a new lamp', 'more water', 'destroying the plants'], answer: 3 },
          { id: 'n13l30', type: 'fill', prompt: '30. Data should be shown in a ___ graph.', answer: 'line' },
        ],
      },
      {
        title: 'Part 4 · Lecture: The umbrella',
        intro: 'You will hear part of a lecture on the history of everyday objects. Questions 31–40.',
        script: `Today I'd like to look at an object we rarely think about: the umbrella. It's worth remembering that the umbrella was first used not for rain but for protection from the sun. The word itself comes from the Latin "umbra", meaning shade. In ancient Egypt, China and Persia, sunshades were often a sign of high status, carried by servants above the heads of kings and important officials.
In China, people are believed to have waterproofed paper umbrellas with wax and oil, making them useful in the rain. In Europe, however, umbrellas were mainly used by women for many centuries, and a man carrying one in the rain was often laughed at. This changed in the eighteenth century, partly thanks to a London traveller named Jonas Hanway, who carried an umbrella in public for about thirty years until it became acceptable for men.
Early European umbrellas were heavy, with frames made of wood or whalebone. A major improvement came in 1852, when the steel-ribbed design was introduced, making umbrellas much lighter and stronger. The folding pocket umbrella, which can be carried in a bag, became popular in the twentieth century.
Today, billions of umbrellas are sold every year, but they are also a significant source of waste, because cheap umbrellas break easily and are difficult to recycle, since they combine metal, plastic and fabric. Some designers are now experimenting with umbrellas made from a single recyclable material, and several cities have introduced umbrella-sharing schemes at metro stations.`,
        questions: [
          { id: 'n13l31', type: 'single', prompt: '31. Umbrellas were first used for protection from …', options: ['the sun', 'rain', 'wind', 'snow'], answer: 0 },
          { id: 'n13l32', type: 'fill', prompt: '32. "Umbra" in Latin means ___', answer: 'shade' },
          { id: 'n13l33', type: 'single', prompt: '33. In ancient times, sunshades were a sign of …', options: ['poverty', 'high status', 'bad weather', 'religion'], answer: 1 },
          { id: 'n13l34', type: 'fill', prompt: '34. In China, paper umbrellas were waterproofed with wax and ___', answer: 'oil' },
          { id: 'n13l35', type: 'single', prompt: '35. In Europe, umbrellas were mainly used by …', options: ['soldiers', 'children', 'women', 'kings'], answer: 2 },
          { id: 'n13l36', type: 'fill', prompt: '36. Jonas Hanway carried an umbrella for about ___ years.', answer: ['thirty', '30'] },
          { id: 'n13l37', type: 'fill', prompt: '37. Early frames were made of wood or ___', answer: 'whalebone' },
          { id: 'n13l38', type: 'fill', prompt: '38. The steel-ribbed design was introduced in ___', answer: '1852' },
          { id: 'n13l39', type: 'single', prompt: '39. Why are cheap umbrellas hard to recycle?', options: ['They are too big.', 'They are made of paper.', 'Nobody collects them.', 'They combine metal, plastic and fabric.'], answer: 3 },
          { id: 'n13l40', type: 'fill', prompt: '40. Some cities have umbrella-sharing schemes at ___ stations.', answer: 'metro' },
        ],
      },
    ],
  },

  'reading-13': {
    kind: 'reading', title: 'IELTS Academic Reading — Mock Test 13', minutes: 60,
    sections: [
      {
        title: 'Passage 1 · The Story of Cotton',
        intro: 'Questions 1–13. You should spend about 20 minutes on this passage.',
        text: `Cotton is the world's most widely used natural fibre. The soft fibres grow around the seeds of the cotton plant, inside a protective capsule called a boll. When the boll ripens, it splits open to reveal a white, fluffy mass, which is then picked and processed into thread and cloth.

People have grown cotton for thousands of years in several parts of the world, including South Asia, Africa and the Americas, apparently independently of one another. In Central Asia, cotton was cultivated in the oases along the great rivers long before the modern era, and cotton cloth was traded along the Silk Road.

The crop requires a long, warm growing season, plenty of sunshine and a large amount of water. In dry regions, this water must be supplied by irrigation, which has made cotton a controversial crop. In the twentieth century, a huge expansion of irrigated cotton farming in Central Asia drew so much water from the region's rivers that the Aral Sea, once one of the largest lakes in the world, shrank dramatically.

Processing cotton also involves several stages. After picking, the fibres must be separated from the seeds, a process called ginning. The invention of the mechanical cotton gin in the late eighteenth century greatly increased the speed of this work. The fibres are then cleaned, combed and spun into yarn, which is woven or knitted into fabric.

Today, many producers are trying to make cotton more sustainable. Drip irrigation can reduce water use considerably, and some farmers are switching to organic methods that avoid synthetic pesticides. Recycled cotton, made from old clothes and factory waste, is also becoming more common, although recycled fibres are shorter and usually need to be mixed with new cotton to make strong thread.`,
        questions: [
          { id: 'n13r1', type: 'single', prompt: '1. Cotton is the most widely used natural fibre.', options: tfng, answer: 0 },
          { id: 'n13r2', type: 'single', prompt: '2. Cotton was first grown only in South Asia and spread from there.', options: tfng, answer: 1 },
          { id: 'n13r3', type: 'single', prompt: '3. Cotton cloth was traded along the Silk Road.', options: tfng, answer: 0 },
          { id: 'n13r4', type: 'single', prompt: '4. Cotton needs little water.', options: tfng, answer: 1 },
          { id: 'n13r5', type: 'single', prompt: '5. The Aral Sea has now fully recovered.', options: tfng, answer: 2 },
          { id: 'n13r6', type: 'single', prompt: '6. Recycled cotton fibres are longer than new ones.', options: tfng, answer: 1 },
          { id: 'n13r7', type: 'single', prompt: '7. Drip irrigation can reduce water use.', options: tfng, answer: 0 },
          { id: 'n13r8', type: 'fill', prompt: '8. The fibres grow inside a capsule called a ___. (ONE WORD)', answer: 'boll' },
          { id: 'n13r9', type: 'fill', prompt: '9. In dry regions, water is supplied by ___. (ONE WORD)', answer: 'irrigation' },
          { id: 'n13r10', type: 'fill', prompt: '10. Separating fibres from seeds is called ___. (ONE WORD)', answer: 'ginning' },
          { id: 'n13r11', type: 'fill', prompt: '11. The cotton gin was invented in the late ___ century. (ONE WORD)', answer: 'eighteenth' },
          { id: 'n13r12', type: 'fill', prompt: '12. Fibres are spun into ___. (ONE WORD)', answer: 'yarn' },
          { id: 'n13r13', type: 'fill', prompt: '13. Organic methods avoid synthetic ___. (ONE WORD)', answer: 'pesticides' },
        ],
      },
      {
        title: 'Passage 2 · Robots in Elderly Care',
        intro: 'Questions 14–26. You should spend about 20 minutes on this passage.',
        text: `A. In many countries, populations are ageing rapidly. As people live longer and birth rates fall, the number of older adults who need care is rising, while the number of younger workers available to provide it is shrinking. Some governments and companies see robots as part of the solution.

B. The robots currently being tested take many forms. Some are designed for physical tasks, such as helping carers lift patients out of bed, which can reduce back injuries among staff. Others are "social robots" — often small and friendly-looking — that can hold simple conversations, remind people to take their medicine or lead group exercises. Robotic pets, which respond to touch and sound, have been used with people with dementia.

C. Early results are mixed. Studies of robotic pets suggest they can reduce anxiety and agitation in some patients with dementia. Lifting robots have been welcomed by some staff, but others find them slow and complicated to use. In several trials, expensive robots ended up unused in cupboards because carers did not have time to learn how to operate them.

D. There are also ethical concerns. Critics worry that robots could be used as a cheap replacement for human contact, increasing loneliness rather than reducing it. Others raise questions about privacy, since many devices collect data through cameras and microphones, and about whether it is acceptable to give a person with dementia a robot animal that they may believe is real.

E. Most researchers argue that robots should support carers rather than replace them. By taking over repetitive or physically demanding tasks, robots could give human carers more time for the conversation and personal attention that technology cannot provide.

F. For this to happen, experts say, older people and carers must be involved in designing the technology from the beginning, and robots must be tested in real care homes rather than only in laboratories.`,
        questions: [
          { id: 'n13r14', type: 'single', prompt: '14. Which paragraph describes different types of care robots?', options: ['A', 'B', 'C', 'D'], answer: 1 },
          { id: 'n13r15', type: 'single', prompt: '15. Which paragraph mentions robots that were not used?', options: ['B', 'C', 'D', 'E'], answer: 1 },
          { id: 'n13r16', type: 'single', prompt: '16. Which paragraph raises privacy concerns?', options: ['B', 'C', 'D', 'F'], answer: 2 },
          { id: 'n13r17', type: 'single', prompt: '17. Which paragraph explains why demand for care is rising?', options: ['A', 'C', 'E', 'F'], answer: 0 },
          { id: 'n13r18', type: 'single', prompt: '18. Lifting robots can reduce …', options: ['back injuries among staff', 'loneliness', 'medicine costs', 'dementia'], answer: 0 },
          { id: 'n13r19', type: 'single', prompt: '19. Robotic pets may reduce … in some patients with dementia.', options: ['memory', 'anxiety and agitation', 'sleep', 'appetite'], answer: 1 },
          { id: 'n13r20', type: 'single', prompt: '20. What do most researchers recommend?', options: ['replacing carers with robots', 'banning care robots', 'robots supporting carers', 'using robots only at night'], answer: 2 },
          { id: 'n13r21', type: 'single', prompt: '21. The number of younger workers available for care is falling.', options: tfng, answer: 0 },
          { id: 'n13r22', type: 'single', prompt: '22. All staff found lifting robots easy to use.', options: tfng, answer: 1 },
          { id: 'n13r23', type: 'single', prompt: '23. Japan uses more care robots than any other country.', options: tfng, answer: 2 },
          { id: 'n13r24', type: 'single', prompt: '24. Many care devices collect data through cameras and microphones.', options: tfng, answer: 0 },
          { id: 'n13r25', type: 'fill', prompt: '25. Social robots can remind people to take their ___. (ONE WORD)', answer: 'medicine' },
          { id: 'n13r26', type: 'fill', prompt: '26. Robots should be tested in real care homes, not only in ___. (ONE WORD)', answer: ['laboratories', 'laboratory'] },
        ],
      },
      {
        title: 'Passage 3 · Do Video Games Make Us Smarter?',
        intro: 'Questions 27–40. You should spend about 20 minutes on this passage.',
        text: `Video games have often been blamed for a range of problems, from poor school results to aggressive behaviour. In recent years, however, researchers have also begun to investigate whether certain types of games might improve mental abilities. The results have been surprising, though they are frequently exaggerated in the media.

The strongest evidence concerns fast-paced action games, in which players must track many moving objects and react quickly. Several studies have found that regular players of such games perform better than non-players on tests of visual attention, such as noticing a target among distracting objects or switching quickly between tasks. In some experiments, non-players who were trained on action games for a few weeks also showed improvements, which suggests that the games themselves may cause the change rather than people with good attention simply choosing to play them.

Claims about "brain-training" games are more doubtful. These games, often marketed to older adults, promise to improve memory and general intelligence through short daily exercises. While players usually get better at the specific games, there is little reliable evidence that these improvements transfer to everyday tasks or to general intelligence. In some countries, companies have been fined for making misleading claims.

Researchers also point out that the effects depend heavily on the amount and type of play. Moderate gaming may have some benefits, but excessive gaming can reduce time for sleep, exercise and homework, which may outweigh any cognitive gains. A small proportion of players develop serious problems controlling how much they play.

Overall, the research suggests that games are neither the threat sometimes portrayed nor a miracle tool for intelligence. Like many activities, their effects depend on what is played, how much and by whom.`,
        questions: [
          { id: 'n13r27', type: 'single', prompt: '27. Which games show the strongest evidence of benefits?', options: ['puzzle games', 'brain-training games', 'sports games', 'fast-paced action games'], answer: 3 },
          { id: 'n13r28', type: 'single', prompt: '28. Action-game players perform better on tests of …', options: ['visual attention', 'vocabulary', 'mathematics', 'long-term memory'], answer: 0 },
          { id: 'n13r29', type: 'single', prompt: '29. Why are the training experiments important?', options: ['They were cheap.', 'They suggest games may cause the improvement.', 'They used older adults.', 'They lasted many years.'], answer: 1 },
          { id: 'n13r30', type: 'single', prompt: '30. What is true of brain-training games?', options: ['They clearly raise intelligence.', 'They are banned.', 'Players improve at the games, but transfer is doubtful.', 'They only work for children.'], answer: 2 },
          { id: 'n13r31', type: 'single', prompt: '31. What is the writer’s overall conclusion?', options: ['Games are dangerous.', 'Games are a miracle tool.', 'Games have no effect.', 'Effects depend on what, how much and who plays.'], answer: 3 },
          { id: 'n13r32', type: 'single', prompt: '32. Media reports often exaggerate the benefits of games.', options: tfng, answer: 0 },
          { id: 'n13r33', type: 'single', prompt: '33. Brain-training games are mainly marketed to teenagers.', options: tfng, answer: 1 },
          { id: 'n13r34', type: 'single', prompt: '34. Some companies have been fined for misleading claims.', options: tfng, answer: 0 },
          { id: 'n13r35', type: 'single', prompt: '35. Girls benefit more from action games than boys.', options: tfng, answer: 2 },
          { id: 'n13r36', type: 'single', prompt: '36. Excessive gaming can reduce time for sleep.', options: tfng, answer: 0 },
          { id: 'n13r37', type: 'fill', prompt: '37. Games have been blamed for aggressive ___. (ONE WORD)', answer: 'behaviour' },
          { id: 'n13r38', type: 'fill', prompt: '38. Non-players were trained on action games for a few ___. (ONE WORD)', answer: 'weeks' },
          { id: 'n13r39', type: 'fill', prompt: '39. Improvements may not ___ to everyday tasks. (ONE WORD)', answer: 'transfer' },
          { id: 'n13r40', type: 'fill', prompt: '40. A small proportion of players have problems ___ how much they play. (ONE WORD)', answer: 'controlling' },
        ],
      },
    ],
  },

  'listening-14': {
    kind: 'listening', title: 'IELTS Listening — Mock Test 14', minutes: 30,
    sections: [
      {
        title: 'Part 1 · Renting a car',
        intro: 'You will hear a customer phoning a car rental company. Questions 1–10.',
        script: `Agent: Good morning, Silk Road Car Rental.
Customer: Hi, I'd like to rent a car for next weekend.
Agent: Certainly. Where would you like to pick it up?
Customer: At the airport, if possible. My flight lands on Friday at about six in the evening.
Agent: No problem. And when will you return it?
Customer: On Monday morning, before ten.
Agent: That's three days. What size of car do you need?
Customer: Something small but comfortable. There are only two of us.
Agent: Then I'd recommend our economy model. It's thirty-five dollars a day, including basic insurance.
Customer: Is it automatic?
Agent: Yes. A manual one is five dollars cheaper per day, if you prefer.
Customer: No, automatic is fine. Is there a limit on how far I can drive?
Agent: You can drive up to three hundred kilometres a day. After that it's ten cents per kilometre.
Customer: OK. What documents do I need?
Agent: Your passport, a driving licence you've held for at least two years, and a credit card for the deposit of two hundred dollars.
Customer: Fine. Can I add a child seat?
Agent: Yes, that's four dollars a day. Can I have your surname?
Customer: It's Hakimov. H-A-K-I-M-O-V.
Agent: And please return the car with a full tank, otherwise there's a refuelling charge.`,
        questions: [
          { id: 'n14l1', type: 'fill', prompt: '1. Pick-up place: the ___', answer: 'airport' },
          { id: 'n14l2', type: 'single', prompt: '2. The flight lands on …', options: ['Friday', 'Thursday', 'Saturday', 'Monday'], answer: 0 },
          { id: 'n14l3', type: 'fill', prompt: '3. Rental period: ___ days', answer: ['three', '3'] },
          { id: 'n14l4', type: 'fill', prompt: '4. Price: $___ a day', answer: ['35', 'thirty-five'] },
          { id: 'n14l5', type: 'single', prompt: '5. The customer chooses …', options: ['a manual car', 'an automatic car', 'a large car', 'a van'], answer: 1 },
          { id: 'n14l6', type: 'fill', prompt: '6. Daily distance limit: ___ km', answer: ['300', 'three hundred'] },
          { id: 'n14l7', type: 'fill', prompt: '7. The licence must be held for at least ___ years.', answer: ['two', '2'] },
          { id: 'n14l8', type: 'fill', prompt: '8. Deposit: $___', answer: ['200', 'two hundred'] },
          { id: 'n14l9', type: 'fill', prompt: '9. Surname: ___', answer: 'Hakimov' },
          { id: 'n14l10', type: 'single', prompt: '10. The car must be returned with …', options: ['a clean interior', 'the child seat removed', 'a full tank', 'the keys at reception'], answer: 2 },
        ],
      },
      {
        title: 'Part 2 · The new tram line',
        intro: 'You will hear a city official describing a new tram line. Questions 11–20.',
        script: `Good evening. I'm here to tell you about the new tram line, which opens on the first of September.
The line runs for twelve kilometres, from the railway station in the south to the university campus in the north, and it has fifteen stops. Trams will run every six minutes during rush hours and every ten minutes at other times, from half past five in the morning until midnight.
The trams are fully accessible. They have low floors, so passengers with wheelchairs or pushchairs can board easily, and there are screens and announcements in Uzbek, Russian and English.
Fares are the same as on the metro: you can pay with a transport card or by tapping a bank card at the door. A single journey costs two thousand sum, and you can change to the metro or buses within forty minutes without paying again.
To encourage people to try the tram, travel will be free for the whole of the first week.
Along the route, the old road has been narrowed to one lane in each direction, and the space has been used for new trees and a protected cycle lane. There will also be a bike parking area at six of the stops.
We know that the construction caused a lot of disruption for local shops, so the city is running a campaign to support businesses along the route, including a street festival on the opening weekend.`,
        questions: [
          { id: 'n14l11', type: 'fill', prompt: '11. Opening date: the first of ___', answer: 'September' },
          { id: 'n14l12', type: 'fill', prompt: '12. Length of the line: ___ km', answer: ['twelve', '12'] },
          { id: 'n14l13', type: 'fill', prompt: '13. Number of stops: ___', answer: ['fifteen', '15'] },
          { id: 'n14l14', type: 'fill', prompt: '14. Rush-hour frequency: every ___ minutes', answer: ['six', '6'] },
          { id: 'n14l15', type: 'single', prompt: '15. Low floors make the trams easy to board for …', options: ['cyclists', 'tourists', 'children', 'wheelchair and pushchair users'], answer: 3 },
          { id: 'n14l16', type: 'fill', prompt: '16. A single journey costs ___ thousand sum.', answer: ['two', '2'] },
          { id: 'n14l17', type: 'fill', prompt: '17. Free changes are possible within ___ minutes.', answer: ['forty', '40'] },
          { id: 'n14l18', type: 'single', prompt: '18. Travel will be free …', options: ['for the first week', 'for students', 'at weekends', 'after midnight'], answer: 0 },
          { id: 'n14l19', type: 'single', prompt: '19. The space from the narrowed road was used for …', options: ['car parks', 'trees and a cycle lane', 'new shops', 'bus stops'], answer: 1 },
          { id: 'n14l20', type: 'fill', prompt: '20. On the opening weekend there will be a street ___', answer: 'festival' },
        ],
      },
      {
        title: 'Part 3 · Designing a vocabulary app',
        intro: 'You will hear two computer science students, Asal and Mike, discussing their app with their tutor. Questions 21–30.',
        script: `Tutor: So, your project is a vocabulary app for language learners. Who's the target user?
Asal: Secondary school students preparing for English exams. We interviewed twenty of them before we started.
Tutor: What did they tell you?
Mike: Most of them already use flashcards, but they find them boring. They wanted something more like a game, and they wanted to practise on the bus, so short sessions are important.
Tutor: How have you responded to that?
Asal: Each session lasts about five minutes. Users earn points and can compete with friends in weekly leagues.
Tutor: How do you decide which words to show?
Mike: We use spaced repetition: words the user gets wrong appear again sooner, and words they know well appear less often.
Tutor: Good. What did your first test show?
Asal: We tested it with a class for two weeks. Students used it more than we expected — on average twelve minutes a day. But some of them were just guessing quickly to earn points.
Tutor: That's a common problem with game design. How will you fix it?
Mike: We'll give fewer points for very fast answers, and we'll add a short sentence for each word, so students have to think about the meaning.
Tutor: Sensible. What about the teachers?
Asal: Several asked for a dashboard where they can see their students' progress, so we're adding that next.
Tutor: Make sure you think about privacy — students should know what data teachers can see. Your final presentation is on the fifteenth, and I'd like a short demo video too.`,
        questions: [
          { id: 'n14l21', type: 'single', prompt: '21. The app is aimed at …', options: ['university students', 'teachers', 'secondary school students', 'adults at work'], answer: 2 },
          { id: 'n14l22', type: 'fill', prompt: '22. They interviewed ___ students.', answer: ['twenty', '20'] },
          { id: 'n14l23', type: 'single', prompt: '23. Students find flashcards …', options: ['too difficult', 'expensive', 'useful for speaking', 'boring'], answer: 3 },
          { id: 'n14l24', type: 'fill', prompt: '24. Each session lasts about ___ minutes.', answer: ['five', '5'] },
          { id: 'n14l25', type: 'single', prompt: '25. In spaced repetition, wrong words appear …', options: ['sooner', 'less often', 'never again', 'at the end'], answer: 0 },
          { id: 'n14l26', type: 'fill', prompt: '26. Average daily use in the test: ___ minutes', answer: ['twelve', '12'] },
          { id: 'n14l27', type: 'single', prompt: '27. What problem did they notice?', options: ['The app crashed.', 'Some students guessed quickly to earn points.', 'Students did not use it.', 'Teachers disliked it.'], answer: 1 },
          { id: 'n14l28', type: 'single', prompt: '28. How will they fix it?', options: ['remove points', 'make sessions longer', 'give fewer points for very fast answers', 'add more leagues'], answer: 2 },
          { id: 'n14l29', type: 'fill', prompt: '29. Teachers asked for a ___ to see progress.', answer: 'dashboard' },
          { id: 'n14l30', type: 'fill', prompt: '30. The tutor also wants a short demo ___', answer: 'video' },
        ],
      },
      {
        title: 'Part 4 · Lecture: How desert plants survive',
        intro: 'You will hear part of a botany lecture. Questions 31–40.',
        script: `Deserts are among the harshest environments on Earth, with very little rain, intense sunlight and huge differences in temperature between day and night. Yet many plants not only survive there but thrive. Today I want to look at the three main strategies they use.
The first strategy is to store water. Succulent plants, such as cacti, have thick stems or leaves that hold large amounts of water, sometimes enough to last for months. Their surface is often covered with a waxy layer that reduces water loss, and many have spines instead of leaves, which provide shade and protect them from animals.
The second strategy is to find water. Some desert shrubs have extremely long roots that reach deep underground water. The roots of some species have been found more than thirty metres below the surface. Other plants spread their roots widely just below the surface, so they can quickly absorb water after even a light shower.
The third strategy is to avoid drought altogether. Many desert flowers are annuals that spend most of their lives as seeds in the soil. After heavy rain, they germinate, grow, flower and produce new seeds within a few weeks, before the ground dries out again. These events can turn a desert briefly into a carpet of colour.
Many desert plants also have a special way of taking in carbon dioxide. Instead of opening the small pores in their leaves during the hot day, they open them at night, when it is cooler, which greatly reduces the amount of water they lose.
Understanding these adaptations is becoming increasingly important, as scientists try to develop crops that can grow with less water in a warming climate.`,
        questions: [
          { id: 'n14l31', type: 'single', prompt: '31. The lecture describes … main strategies.', options: ['two', 'three', 'four', 'five'], answer: 1 },
          { id: 'n14l32', type: 'fill', prompt: '32. Succulents store water in thick stems or ___', answer: 'leaves' },
          { id: 'n14l33', type: 'fill', prompt: '33. A ___ layer reduces water loss.', answer: 'waxy' },
          { id: 'n14l34', type: 'single', prompt: '34. Spines provide shade and protection from …', options: ['wind', 'insects only', 'cold', 'animals'], answer: 3 },
          { id: 'n14l35', type: 'fill', prompt: '35. Some roots reach more than ___ metres deep.', answer: ['thirty', '30'] },
          { id: 'n14l36', type: 'single', prompt: '36. Shallow, wide roots help plants to …', options: ['absorb water quickly after light rain', 'store salt', 'avoid animals', 'grow taller'], answer: 0 },
          { id: 'n14l37', type: 'fill', prompt: '37. Many desert flowers spend most of their lives as ___', answer: ['seeds', 'seed'] },
          { id: 'n14l38', type: 'single', prompt: '38. After heavy rain, annuals complete their life cycle within …', options: ['a few days', 'a few weeks', 'a year', 'several years'], answer: 1 },
          { id: 'n14l39', type: 'fill', prompt: '39. Some plants open their pores at ___', answer: 'night' },
          { id: 'n14l40', type: 'fill', prompt: '40. Scientists want crops that grow with less ___', answer: 'water' },
        ],
      },
    ],
  },

  'reading-14': {
    kind: 'reading', title: 'IELTS Academic Reading — Mock Test 14', minutes: 60,
    sections: [
      {
        title: 'Passage 1 · The Camel',
        intro: 'Questions 1–13. You should spend about 20 minutes on this passage.',
        text: `For thousands of years, camels made life and trade possible in the deserts of Asia and Africa. The two-humped Bactrian camel, native to Central Asia, carried goods along the Silk Road, while the one-humped dromedary served traders across Arabia and North Africa.

Contrary to popular belief, a camel's hump does not contain water. It is a store of fat, which the animal can use as a source of energy when food is scarce. When a camel goes without food for a long time, the hump shrinks and may even fall to one side.

Camels are nevertheless remarkably good at managing water. They can go for more than a week without drinking in hot weather, and when water is available, a thirsty camel can drink over a hundred litres in about ten minutes. Their kidneys produce very concentrated urine, and their body temperature can rise by several degrees during the day before they start to sweat, which saves water.

Their bodies are also adapted to sand and extreme temperatures. Long eyelashes and nostrils that can close protect them from sandstorms, and wide, padded feet stop them from sinking into soft sand. Bactrian camels grow a thick coat for the bitterly cold Central Asian winter and shed it in spring.

Today, the number of wild Bactrian camels is very small, and the species is classified as critically endangered. Domestic camels, however, remain important in many regions, providing milk, meat, wool and transport. Camel milk, which is lower in fat than cow's milk and rich in vitamin C, is increasingly sold in shops and cafés far from the desert.`,
        questions: [
          { id: 'n14r1', type: 'single', prompt: '1. Bactrian camels have two humps.', options: tfng, answer: 0 },
          { id: 'n14r2', type: 'single', prompt: '2. A camel’s hump contains water.', options: tfng, answer: 1 },
          { id: 'n14r3', type: 'single', prompt: '3. The hump can shrink when food is scarce.', options: tfng, answer: 0 },
          { id: 'n14r4', type: 'single', prompt: '4. Camels can live for fifty years.', options: tfng, answer: 2 },
          { id: 'n14r5', type: 'single', prompt: '5. Camels start sweating as soon as the temperature rises.', options: tfng, answer: 1 },
          { id: 'n14r6', type: 'single', prompt: '6. Wild Bactrian camels are critically endangered.', options: tfng, answer: 0 },
          { id: 'n14r7', type: 'single', prompt: '7. Camel milk contains more fat than cow’s milk.', options: tfng, answer: 1 },
          { id: 'n14r8', type: 'fill', prompt: '8. The one-humped camel is called the ___. (ONE WORD)', answer: 'dromedary' },
          { id: 'n14r9', type: 'fill', prompt: '9. The hump is a store of ___. (ONE WORD)', answer: 'fat' },
          { id: 'n14r10', type: 'fill', prompt: '10. A thirsty camel can drink over a hundred ___ in ten minutes. (ONE WORD)', answer: 'litres' },
          { id: 'n14r11', type: 'fill', prompt: '11. Long ___ protect camels from sandstorms. (ONE WORD)', answer: 'eyelashes' },
          { id: 'n14r12', type: 'fill', prompt: '12. Wide, padded ___ stop them sinking into sand. (ONE WORD)', answer: 'feet' },
          { id: 'n14r13', type: 'fill', prompt: '13. Camel milk is rich in vitamin ___. (ONE LETTER)', answer: 'C' },
        ],
      },
      {
        title: 'Passage 2 · Changing the Clocks',
        intro: 'Questions 14–26. You should spend about 20 minutes on this passage.',
        text: `A. Twice a year, in many countries, people move their clocks forward one hour in spring and back again in autumn. The practice, known as daylight saving time, was introduced widely during the First World War to save fuel by making better use of evening daylight. More than a century later, however, its benefits are increasingly questioned.

B. The original argument was about energy. With lighter evenings, people would need less artificial light. Modern studies, though, suggest that any savings today are very small. Lighting is now a much smaller share of energy use, and in hot countries lighter evenings may even increase the use of air conditioning.

C. Supporters point to other advantages. Lighter evenings encourage people to spend more time outdoors, exercising or shopping, which can benefit both health and the economy. Some research has also linked lighter evenings with fewer road accidents involving pedestrians.

D. Critics focus on the effects of the change itself. Losing an hour of sleep in spring disrupts the body clock, and studies have found small increases in heart attacks and traffic accidents in the days after the clocks go forward. Sleep scientists argue that permanent standard time, with lighter mornings, matches the body's natural rhythm better.

E. Several countries, including some in Central Asia, have stopped changing their clocks, and in Europe there has been a long debate about ending the practice. The difficulty is agreeing which time to keep permanently: summer time, with lighter evenings, or standard time, with lighter mornings.

F. Because neighbouring countries trade and travel across borders, many governments prefer to coordinate their decisions, so that a single change does not create confusion in timetables, broadcasting and business.`,
        questions: [
          { id: 'n14r14', type: 'single', prompt: '14. Which paragraph explains the original reason for changing clocks?', options: ['A', 'B', 'C', 'D'], answer: 0 },
          { id: 'n14r15', type: 'single', prompt: '15. Which paragraph describes health risks of the change?', options: ['B', 'C', 'D', 'E'], answer: 2 },
          { id: 'n14r16', type: 'single', prompt: '16. Which paragraph mentions the need to coordinate between countries?', options: ['C', 'D', 'E', 'F'], answer: 3 },
          { id: 'n14r17', type: 'single', prompt: '17. Which paragraph lists benefits of lighter evenings?', options: ['A', 'B', 'C', 'E'], answer: 2 },
          { id: 'n14r18', type: 'single', prompt: '18. Daylight saving was introduced widely during …', options: ['the 1800s', 'the 1970s', 'the First World War', 'the Second World War'], answer: 2 },
          { id: 'n14r19', type: 'single', prompt: '19. Why may energy savings be small today?', options: ['Clocks are digital.', 'People sleep more.', 'Days are shorter.', 'Lighting is a smaller share of energy use.'], answer: 3 },
          { id: 'n14r20', type: 'single', prompt: '20. What do sleep scientists prefer?', options: ['permanent standard time', 'permanent summer time', 'changing clocks four times a year', 'no clocks'], answer: 0 },
          { id: 'n14r21', type: 'single', prompt: '21. In hot countries lighter evenings may increase air-conditioning use.', options: tfng, answer: 0 },
          { id: 'n14r22', type: 'single', prompt: '22. Heart attacks decrease after the clocks go forward.', options: tfng, answer: 1 },
          { id: 'n14r23', type: 'single', prompt: '23. Most people prefer lighter mornings.', options: tfng, answer: 2 },
          { id: 'n14r24', type: 'single', prompt: '24. Some Central Asian countries have stopped changing their clocks.', options: tfng, answer: 0 },
          { id: 'n14r25', type: 'fill', prompt: '25. Lighter evenings are linked with fewer accidents involving ___. (ONE WORD)', answer: 'pedestrians' },
          { id: 'n14r26', type: 'fill', prompt: '26. Uncoordinated changes cause confusion in timetables, business and ___. (ONE WORD)', answer: 'broadcasting' },
        ],
      },
      {
        title: 'Passage 3 · What Really Motivates Us?',
        intro: 'Questions 27–40. You should spend about 20 minutes on this passage.',
        text: `For much of the twentieth century, employers and teachers relied on a simple model of motivation: reward the behaviour you want and punish the behaviour you don't. Bonuses, grades and prizes were assumed to make people work harder. Psychological research since the 1970s has shown that the picture is considerably more complex.

Psychologists distinguish between extrinsic motivation, which comes from external rewards such as money or praise, and intrinsic motivation, which comes from the activity itself — curiosity, enjoyment or a sense of purpose. Extrinsic rewards work well for simple, routine tasks. However, a number of experiments have found that offering rewards for activities people already enjoy can sometimes reduce their interest. In one classic study, children who were promised a certificate for drawing later chose to draw less in their free time than children who had not been promised anything.

According to self-determination theory, one of the most influential frameworks in this field, people are most motivated when three basic needs are met: autonomy, the feeling of having choice and control; competence, the sense of becoming more skilled; and relatedness, feeling connected to other people. Workplaces and classrooms that support these needs tend to produce greater persistence, creativity and wellbeing.

This does not mean that rewards are useless. Fair pay remains essential, and recognition can be powerful when it is unexpected or when it gives useful information about performance rather than simply trying to control behaviour. Problems arise mainly when rewards are made conditional on completing interesting tasks, or when people feel that they are being manipulated.

For learners, the implications are practical. Setting personal goals, tracking progress and choosing topics that are genuinely interesting may sustain effort far longer than external pressure alone.`,
        questions: [
          { id: 'n14r27', type: 'single', prompt: '27. The traditional model of motivation relied on …', options: ['curiosity', 'rewards and punishments', 'self-determination', 'friendship'], answer: 1 },
          { id: 'n14r28', type: 'single', prompt: '28. Extrinsic rewards work well for …', options: ['creative work', 'children only', 'simple, routine tasks', 'all tasks'], answer: 2 },
          { id: 'n14r29', type: 'single', prompt: '29. In the classic study, children promised a certificate …', options: ['drew more later', 'stopped going to school', 'won prizes', 'drew less in their free time'], answer: 3 },
          { id: 'n14r30', type: 'single', prompt: '30. When can recognition be powerful?', options: ['when it is unexpected or informative', 'when it is expected', 'when it is large', 'when it is public'], answer: 0 },
          { id: 'n14r31', type: 'single', prompt: '31. What is the writer’s advice for learners?', options: ['rely on external pressure', 'set goals, track progress, choose interesting topics', 'avoid rewards completely', 'study alone'], answer: 1 },
          { id: 'n14r32', type: 'single', prompt: '32. Research since the 1970s has shown motivation is more complex.', options: tfng, answer: 0 },
          { id: 'n14r33', type: 'single', prompt: '33. Rewards always increase interest in enjoyable activities.', options: tfng, answer: 1 },
          { id: 'n14r34', type: 'single', prompt: '34. Self-determination theory was developed in Japan.', options: tfng, answer: 2 },
          { id: 'n14r35', type: 'single', prompt: '35. Fair pay remains essential.', options: tfng, answer: 0 },
          { id: 'n14r36', type: 'single', prompt: '36. Feeling manipulated can reduce the effect of rewards.', options: tfng, answer: 0 },
          { id: 'n14r37', type: 'fill', prompt: '37. Motivation from the activity itself is called ___ motivation. (ONE WORD)', answer: 'intrinsic' },
          { id: 'n14r38', type: 'fill', prompt: '38. The feeling of having choice and control is ___. (ONE WORD)', answer: 'autonomy' },
          { id: 'n14r39', type: 'fill', prompt: '39. Feeling connected to other people is called ___. (ONE WORD)', answer: 'relatedness' },
          { id: 'n14r40', type: 'fill', prompt: '40. Supportive workplaces produce greater persistence, creativity and ___. (ONE WORD)', answer: 'wellbeing' },
        ],
      },
    ],
  },
};
