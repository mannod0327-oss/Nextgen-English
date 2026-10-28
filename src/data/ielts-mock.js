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
};
