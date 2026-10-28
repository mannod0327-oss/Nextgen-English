// Full-length IELTS Academic mock tests (original content): Listening 4 parts × 10, Reading 3 passages (13+13+14).
// Only single-answer types (single, fill) so the raw score is 0–40 like the real test and maps to bandTable.

const tfng = ['True', 'False', 'Not Given'];

export const mockTests = {
  listening: {
    title: 'IELTS Listening — Mock Test 1', minutes: 30,
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
    title: 'IELTS Academic Reading — Mock Test 1', minutes: 60,
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
};
