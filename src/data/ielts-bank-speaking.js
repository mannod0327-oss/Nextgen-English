// IELTS Speaking topic bank (original): Part 1 questions, Part 2 cue card, Part 3 discussion.
// Same schema as `speaking` in ielts.js; the app merges both lists.

const sp = (id, topic, part1, card, points, part3) => ({ id: `b-${id}`, topic, part1, part2: { card, points }, part3 });

export const speakingBank = [
  sp('family', 'Family', ['Do you have a large or small family?', 'Who are you closest to in your family?', 'How often do you see your relatives?', 'What do you usually do together as a family?'],
    'Describe a family member you spend a lot of time with.', ['who this person is', 'what you do together', 'how often you see them', 'and explain why you enjoy spending time with them.'],
    ['How have families changed in your country in recent years?', 'Should grandparents help to raise children?', 'Are family values more important than personal freedom?']),
  sp('friends', 'Friends', ['How do you usually meet new friends?', 'Do you prefer having many friends or a few close ones?', 'What do you and your friends do at weekends?', 'Have you kept in touch with your school friends?'],
    'Describe a friend who has influenced you.', ['who the friend is', 'how you met', 'what kind of person they are', 'and explain how they have influenced you.'],
    ['Can social media friendships be as strong as real-life ones?', 'Why do some friendships last a lifetime?', 'Is it easy for adults to make new close friends?']),
  sp('food', 'Food & cooking', ['What is your favourite dish?', 'Can you cook?', 'Do you prefer eating at home or in restaurants?', 'Has your diet changed since you were a child?'],
    'Describe a traditional meal from your country.', ['what the meal is', 'how it is prepared', 'when people usually eat it', 'and explain why it is important in your culture.'],
    ['Why is fast food so popular?', 'Should schools teach children how to cook?', 'How does globalisation affect traditional food?']),
  sp('music', 'Music', ['What kind of music do you like?', 'Do you play a musical instrument?', 'When do you usually listen to music?', 'Have your musical tastes changed over time?'],
    'Describe a song or piece of music that is special to you.', ['what it is', 'when you first heard it', 'what it is about', 'and explain why it is special to you.'],
    ['Should music be a compulsory school subject?', 'Why do young and old people often like different music?', 'How has the internet changed the music industry?']),
  sp('sport', 'Sport & fitness', ['Do you play any sports?', 'What sports are popular in your country?', 'Did you do sport at school?', 'Do you prefer watching or playing sport?'],
    'Describe a sporting event you watched or took part in.', ['what the event was', 'where and when it happened', 'who was involved', 'and explain how you felt about it.'],
    ['Why do governments spend money on international sports events?', 'Are professional athletes paid too much?', 'How can people be encouraged to exercise more?']),
  sp('books', 'Books & reading', ['Do you enjoy reading?', 'What kind of books do you read?', 'Do you prefer paper books or e-books?', 'Did your parents read to you as a child?'],
    'Describe a book you have recently read.', ['what the book was', 'what it was about', 'why you read it', 'and explain whether you would recommend it.'],
    ['Will printed books disappear in the future?', 'Why do fewer young people read for pleasure?', 'Should libraries still be funded by governments?']),
  sp('films', 'Films & TV', ['How often do you watch films?', 'Do you prefer watching films at home or in the cinema?', 'What kind of TV programmes do you like?', 'Do you watch films in English?'],
    'Describe a film that made a strong impression on you.', ['what the film was', 'when you saw it', 'what it was about', 'and explain why it impressed you.'],
    ['Do violent films have a negative effect on viewers?', 'Why are foreign films popular in your country?', 'Will streaming services replace cinemas?']),
  sp('shopping', 'Shopping', ['Do you enjoy shopping?', 'Do you prefer shopping online or in shops?', 'Where do you usually buy clothes?', 'Do you compare prices before buying?'],
    'Describe something expensive you bought.', ['what it was', 'where you bought it', 'why you chose it', 'and explain whether it was worth the money.'],
    ['Why do people buy things they do not need?', 'How has online shopping affected small businesses?', 'Should advertising aimed at children be banned?']),
  sp('weather', 'Weather & seasons', ['What is the weather like in your hometown?', 'Which season do you like best?', 'Does the weather affect your plans?', 'Do you check the weather forecast?'],
    'Describe a time when the weather affected your plans.', ['when it happened', 'what you had planned', 'what the weather was like', 'and explain what you did instead.'],
    ['How might climate change affect daily life?', 'Do people in hot and cold countries have different lifestyles?', 'Is it the government’s job to prepare for extreme weather?']),
  sp('transport', 'Transport', ['How do you usually travel around your city?', 'Do you have a driving licence?', 'Is public transport good in your city?', 'Do you prefer travelling by train or by plane?'],
    'Describe a journey you remember well.', ['where you went', 'how you travelled', 'who you were with', 'and explain why you remember it.'],
    ['How can cities reduce traffic congestion?', 'Should cars be banned from city centres?', 'Will self-driving cars become common?']),
  sp('home', 'Home & accommodation', ['Do you live in a house or a flat?', 'What is your favourite room at home?', 'Would you like to move to a different home?', 'Who do you live with?'],
    'Describe your ideal home.', ['where it would be', 'what it would look like', 'who would live there', 'and explain why it would be ideal for you.'],
    ['Why are house prices so high in big cities?', 'Is it better to rent or to buy a home?', 'Should young adults live with their parents?']),
  sp('neighbours', 'Neighbours & community', ['Do you know your neighbours?', 'Do neighbours help each other where you live?', 'Have you ever had a problem with a neighbour?', 'Is your neighbourhood quiet or noisy?'],
    'Describe a helpful person in your community.', ['who this person is', 'what they do', 'how you know them', 'and explain why they are helpful.'],
    ['Are communities weaker in cities than in villages?', 'How can local communities be strengthened?', 'Should volunteering be compulsory for students?']),
  sp('childhood', 'Childhood', ['Where did you grow up?', 'What games did you play as a child?', 'Did you have a favourite toy?', 'What did you want to be when you grew up?'],
    'Describe a happy childhood memory.', ['what happened', 'when and where it happened', 'who was with you', 'and explain why it was a happy memory.'],
    ['Do children today have a better childhood than in the past?', 'Should children have more free time to play?', 'How do toys influence children’s development?']),
  sp('holidays', 'Holidays & festivals', ['What is the most important festival in your country?', 'How do you usually celebrate your birthday?', 'Do you prefer relaxing or active holidays?', 'Where did you go on your last holiday?'],
    'Describe a celebration you enjoyed.', ['what the celebration was', 'where it took place', 'what people did', 'and explain why you enjoyed it.'],
    ['Are traditional festivals losing their meaning?', 'Why do people spend so much money on celebrations?', 'Should national holidays be longer?']),
  sp('art', 'Art & museums', ['Do you like visiting museums?', 'Have you ever painted or drawn anything?', 'Is there a famous artist from your country?', 'Do you have any art in your home?'],
    'Describe a museum or gallery you have visited.', ['where it is', 'what you saw there', 'who you went with', 'and explain what you learned from the visit.'],
    ['Should museums be free to enter?', 'Is art important in a modern economy?', 'How can young people be encouraged to appreciate art?']),
  sp('photos', 'Photography', ['Do you like taking photos?', 'What do you usually take photos of?', 'Do you print your photos or keep them on your phone?', 'Do you like being photographed?'],
    'Describe a photograph that is important to you.', ['what the photo shows', 'when it was taken', 'who took it', 'and explain why it is important to you.'],
    ['Has smartphone photography made people less careful about photos?', 'Should people be allowed to photograph strangers?', 'Do edited photos on social media cause problems?']),
  sp('clothes', 'Clothes & fashion', ['What kind of clothes do you usually wear?', 'Do you follow fashion?', 'Did you wear a uniform at school?', 'Do you prefer comfortable or stylish clothes?'],
    'Describe a piece of clothing you like wearing.', ['what it is', 'where you got it', 'when you wear it', 'and explain why you like it.'],
    ['Should employers be allowed to set dress codes?', 'What are the environmental effects of fast fashion?', 'Why do some people spend a lot on designer brands?']),
  sp('time', 'Time management', ['Are you usually on time?', 'How do you plan your day?', 'Do you ever feel you do not have enough time?', 'What do you do when you have free time?'],
    'Describe a time when you were very busy.', ['when it was', 'what you had to do', 'how you managed', 'and explain how you felt afterwards.'],
    ['Why do people today feel busier than in the past?', 'Should companies offer a four-day working week?', 'Is it possible to have a good work–life balance?']),
  sp('internet', 'The internet', ['How often do you use the internet?', 'What websites do you visit most?', 'Do you think you use the internet too much?', 'How did you first learn to use it?'],
    'Describe a website or app you use often.', ['what it is', 'how you found it', 'what you use it for', 'and explain why it is useful.'],
    ['Should children’s internet use be limited?', 'How has the internet changed education?', 'Is privacy possible online?']),
  sp('news', 'News & media', ['How do you get the news?', 'Do you trust the news you read online?', 'What kind of news interests you most?', 'Do you read newspapers?'],
    'Describe a piece of news that surprised you.', ['what the news was', 'how you heard about it', 'what happened', 'and explain why it surprised you.'],
    ['How can people recognise fake news?', 'Should the media focus more on good news?', 'Do journalists have too much power?']),
  sp('languages', 'Languages', ['How many languages can you speak?', 'Why are you learning English?', 'What is the hardest part of learning a language?', 'Would you like to learn another language?'],
    'Describe a time you used a foreign language successfully.', ['where you were', 'who you spoke to', 'what you talked about', 'and explain how you felt.'],
    ['Should children start learning foreign languages early?', 'Will translation apps make language learning unnecessary?', 'Why do some languages disappear?']),
  sp('school', 'School days', ['What was your favourite school subject?', 'Did you like your school?', 'Who was your favourite teacher?', 'What do you remember about your first day at school?'],
    'Describe a teacher who influenced you.', ['who the teacher was', 'what they taught', 'what they were like', 'and explain how they influenced you.'],
    ['What makes a good teacher?', 'Should school days be shorter?', 'Are exams the best way to assess students?']),
  sp('university', 'University life', ['What are you studying, or what would you like to study?', 'Why did you choose this subject?', 'Do you prefer lectures or seminars?', 'Where do you usually study?'],
    'Describe a subject you would like to study in the future.', ['what the subject is', 'why it interests you', 'where you would study it', 'and explain how it could help your career.'],
    ['Should university education be free?', 'Is a degree necessary for success?', 'Should students work part-time while studying?']),
  sp('jobs', 'Jobs', ['What job do you do, or want to do?', 'What is the most popular job in your country?', 'Would you prefer to work for a big or small company?', 'What did your parents do for a living?'],
    'Describe a job you would like to do.', ['what the job is', 'what skills it needs', 'how you could get it', 'and explain why you would like it.'],
    ['Should people choose jobs for money or for interest?', 'Which jobs will be most important in the future?', 'Is it better to be self-employed?']),
  sp('money', 'Money & saving', ['Do you save money?', 'What do you usually spend money on?', 'Did you get pocket money as a child?', 'Do you prefer cash or card?'],
    'Describe something you saved money to buy.', ['what it was', 'how long you saved', 'how you saved', 'and explain how you felt when you bought it.'],
    ['Should schools teach financial skills?', 'Is a cashless society a good idea?', 'Does money make people happy?']),
  sp('health', 'Health', ['What do you do to stay healthy?', 'How often do you go to the doctor?', 'Do you think you sleep enough?', 'Is healthy food expensive in your country?'],
    'Describe a habit that helps you stay healthy.', ['what the habit is', 'when you started it', 'how often you do it', 'and explain how it helps you.'],
    ['Should unhealthy food be taxed?', 'Who is responsible for people’s health: individuals or governments?', 'Why do people find it hard to change unhealthy habits?']),
  sp('stress', 'Stress & relaxation', ['What do you do to relax?', 'What makes you feel stressed?', 'Do you prefer relaxing alone or with others?', 'Is your life more stressful now than before?'],
    'Describe a place where you go to relax.', ['where it is', 'how often you go there', 'what you do there', 'and explain why it helps you relax.'],
    ['Why are mental-health problems increasing?', 'Should employers help reduce employees’ stress?', 'Is technology a cause of stress?']),
  sp('animals', 'Animals & pets', ['Do you have a pet?', 'What animals are common in your country?', 'Did you have pets as a child?', 'Do you like visiting zoos?'],
    'Describe an animal you find interesting.', ['what the animal is', 'where it lives', 'what it is like', 'and explain why you find it interesting.'],
    ['Should zoos exist?', 'How can endangered animals be protected?', 'Is it wrong to keep animals in cities?']),
  sp('nature', 'Nature & the outdoors', ['Do you spend much time outdoors?', 'Are there mountains or rivers near your home?', 'Do you prefer the sea or the mountains?', 'Have you ever been camping?'],
    'Describe a natural place you have visited.', ['where it is', 'when you went there', 'what you did', 'and explain why you liked it.'],
    ['Why is contact with nature important for children?', 'Should tourism be limited in natural areas?', 'How can cities include more green space?']),
  sp('city', 'Cities', ['What is your favourite city?', 'Would you prefer to live in a city or the countryside?', 'What are the problems of your city?', 'How has your city changed?'],
    'Describe a city you would like to visit.', ['which city it is', 'what you know about it', 'what you would do there', 'and explain why you want to visit it.'],
    ['Why do people move from villages to cities?', 'What makes a city a good place to live?', 'Should historic buildings be replaced with modern ones?']),
  sp('buildings', 'Buildings & architecture', ['What is the most famous building in your city?', 'Do you like modern architecture?', 'What kind of building do you live in?', 'Are there many old buildings where you live?'],
    'Describe a building you find beautiful.', ['what the building is', 'where it is', 'what it looks like', 'and explain why you find it beautiful.'],
    ['Should governments protect old buildings?', 'Is it better to build high or low in cities?', 'How does architecture affect people’s mood?']),
  sp('volunteering', 'Volunteering & helping', ['Have you ever done voluntary work?', 'Do people in your country help strangers?', 'Do you give money to charity?', 'Would you like to volunteer abroad?'],
    'Describe a time you helped someone.', ['who you helped', 'what you did', 'why you helped', 'and explain how you felt.'],
    ['Why do some people volunteer and others do not?', 'Should charities rely on governments or donations?', 'Can volunteering help young people find jobs?']),
  sp('advice', 'Advice & decisions', ['Who do you ask for advice?', 'Do you like giving advice?', 'Is it easy for you to make decisions?', 'Do you make decisions quickly or slowly?'],
    'Describe a piece of good advice you received.', ['who gave it', 'what the advice was', 'when you received it', 'and explain how it helped you.'],
    ['Do young people listen to advice from older people?', 'Should people follow advice from the internet?', 'What important decisions do young people face?']),
  sp('goals', 'Goals & achievements', ['What are your goals for this year?', 'Do you write down your goals?', 'What is your biggest achievement so far?', 'Do you like challenges?'],
    'Describe an achievement you are proud of.', ['what you achieved', 'when it happened', 'how you achieved it', 'and explain why you are proud of it.'],
    ['Is success mainly about hard work or luck?', 'Should children be praised for effort or results?', 'Why do some people give up on their goals?']),
  sp('change', 'Change & routines', ['Do you like change?', 'What is your daily routine?', 'Would you like to change anything about your life?', 'Do you prefer routine or variety?'],
    'Describe an important change in your life.', ['what the change was', 'when it happened', 'how it affected you', 'and explain whether it was positive.'],
    ['Why do people resist change?', 'How has daily life changed in the last 20 years?', 'Is it good for young people to move abroad?']),
  sp('gifts', 'Gifts', ['Do you like giving gifts?', 'What was the last gift you received?', 'Do you prefer handmade or bought gifts?', 'Is it difficult to choose gifts?'],
    'Describe a gift you gave to someone.', ['what the gift was', 'who you gave it to', 'why you chose it', 'and explain how they reacted.'],
    ['Are people too materialistic today?', 'Should gifts be expensive to be meaningful?', 'Why do companies give gifts to customers?']),
  sp('phones', 'Mobile phones', ['How old were you when you got your first phone?', 'What do you use your phone for most?', 'Could you live without your phone for a week?', 'Do you play games on your phone?'],
    'Describe a time when your phone was very useful.', ['when it was', 'where you were', 'what happened', 'and explain how the phone helped you.'],
    ['At what age should children have phones?', 'Are phones damaging face-to-face communication?', 'Should phones be banned in schools?']),
  sp('ai', 'Artificial intelligence', ['Have you used any AI tools?', 'Do you think AI is helpful?', 'Would you trust a computer to make decisions for you?', 'Are you interested in technology news?'],
    'Describe a new technology you would like to have.', ['what it is', 'what it would do', 'how you heard about it', 'and explain why you want it.'],
    ['Which jobs could AI replace?', 'Should AI be regulated by governments?', 'Can machines ever be creative?']),
  sp('recycling', 'Saving energy & recycling', ['Do you recycle?', 'Do you try to save electricity?', 'Is recycling common in your country?', 'Do you use plastic bags?'],
    'Describe something you do to protect the environment.', ['what you do', 'when you started', 'why you do it', 'and explain whether others should do the same.'],
    ['Should plastic packaging be banned?', 'Are individuals or companies more responsible for pollution?', 'How can governments encourage recycling?']),
  sp('water', 'Water', ['Do you drink enough water?', 'Do you like swimming?', 'Is water expensive where you live?', 'Do you live near a river or lake?'],
    'Describe a river, lake or sea you have visited.', ['where it is', 'when you went', 'what you did there', 'and explain how you felt about it.'],
    ['Why is clean water a global issue?', 'How can farmers use less water?', 'Should water be free for everyone?']),
  sp('traffic', 'Traffic & safety', ['Is traffic a problem where you live?', 'How long does your daily journey take?', 'Do you feel safe walking at night?', 'Do you cycle?'],
    'Describe a time you were stuck in traffic.', ['where you were going', 'how long you waited', 'what you did', 'and explain how you felt.'],
    ['How can road accidents be reduced?', 'Should public transport be free?', 'Will people drive less in the future?']),
  sp('celebrities', 'Famous people', ['Who is a famous person you admire?', 'Would you like to be famous?', 'Do you follow celebrities on social media?', 'Are there famous people from your hometown?'],
    'Describe a famous person you would like to meet.', ['who the person is', 'why they are famous', 'what you would ask them', 'and explain why you want to meet them.'],
    ['Are celebrities good role models?', 'Should famous people have a private life?', 'Why are young people attracted to fame?']),
  sp('history', 'History', ['Did you like history at school?', 'Is there a historical period you find interesting?', 'Do you visit historical places?', 'Do you know the history of your family?'],
    'Describe a historical place you have visited.', ['where it is', 'what you saw', 'what you learned', 'and explain why it is important.'],
    ['Why should people learn history?', 'Can we learn from the mistakes of the past?', 'How should history be taught in schools?']),
  sp('science', 'Science', ['Were you good at science at school?', 'What scientific discovery interests you?', 'Do you watch science programmes?', 'Would you like to be a scientist?'],
    'Describe a scientific discovery that changed people’s lives.', ['what the discovery was', 'when it was made', 'how it is used', 'and explain why it is important.'],
    ['Should governments fund space exploration?', 'Why do fewer girls choose science careers?', 'Is science always good for society?']),
  sp('rules', 'Rules & laws', ['Did your school have many rules?', 'Is there a rule you disagree with?', 'Do you always follow rules?', 'What rules did your parents have?'],
    'Describe a rule that you think is important.', ['what the rule is', 'where it applies', 'why it exists', 'and explain why you think it is important.'],
    ['Why do some people break rules?', 'Should punishments be stricter?', 'Do young people need more freedom or more rules?']),
  sp('noise', 'Noise & quiet', ['Is your home noisy or quiet?', 'Do you prefer working in silence?', 'What noises do you dislike?', 'Do you listen to music while studying?'],
    'Describe a quiet place you like.', ['where it is', 'how you found it', 'what you do there', 'and explain why you like it.'],
    ['Is noise pollution a serious problem?', 'Should there be laws about noise?', 'Why do some people need noise to concentrate?']),
  sp('colours', 'Colours', ['What is your favourite colour?', 'Do colours affect your mood?', 'What colour is your bedroom?', 'Do you wear bright colours?'],
    'Describe a colourful place you have visited.', ['where it is', 'what colours you saw', 'when you went', 'and explain how it made you feel.'],
    ['Why do companies care about colours in advertising?', 'Do colours have the same meaning in all cultures?', 'Should cities use more colour?']),
  sp('writing', 'Writing & handwriting', ['Do you write by hand often?', 'Is your handwriting good?', 'Do you keep a diary?', 'Do you prefer writing emails or messages?'],
    'Describe a letter or message that was important to you.', ['who wrote it', 'what it said', 'when you received it', 'and explain why it was important.'],
    ['Should children still learn handwriting?', 'Is letter writing disappearing?', 'How has texting changed language?']),
  sp('sleep', 'Sleep', ['How many hours do you sleep?', 'Do you take naps?', 'Are you a morning person?', 'What helps you fall asleep?'],
    'Describe a time you did not get enough sleep.', ['when it was', 'why you could not sleep', 'how you felt the next day', 'and explain what you learned.'],
    ['Why do teenagers often sleep badly?', 'Should schools start later?', 'How does technology affect sleep?']),
  sp('skills', 'Learning new skills', ['What skill would you like to learn?', 'Do you prefer learning online or in class?', 'Have you learned anything from YouTube?', 'Is it easier to learn when you are young?'],
    'Describe a skill you taught someone.', ['what the skill was', 'who you taught', 'how you taught it', 'and explain how successful you were.'],
    ['Should adults keep learning throughout life?', 'Are practical skills more useful than academic knowledge?', 'Who should pay for adult education?']),
  sp('competition', 'Competition', ['Are you a competitive person?', 'Did you take part in competitions at school?', 'Do you like watching competitions on TV?', 'Is competition good for children?'],
    'Describe a competition you took part in.', ['what it was', 'when it was', 'how you prepared', 'and explain how you felt about the result.'],
    ['Is competition or cooperation more important at work?', 'Should schools reduce competition between students?', 'Why are reality TV competitions popular?']),
  sp('tradition', 'Traditions', ['What traditions does your family have?', 'Are traditions important to you?', 'Do young people follow traditions?', 'What is a typical wedding like in your country?'],
    'Describe a tradition in your country.', ['what the tradition is', 'when it happens', 'what people do', 'and explain why it is important.'],
    ['Why are some traditions disappearing?', 'Should traditions change over time?', 'How can tourism help preserve traditions?']),
  sp('plans', 'Future plans', ['What are your plans for next year?', 'Where would you like to live in the future?', 'Do you plan ahead or act spontaneously?', 'Would you like to study abroad?'],
    'Describe a place you would like to live in the future.', ['where it is', 'why you would like to live there', 'what you would do there', 'and explain what could prevent you.'],
    ['Why do many young people want to work abroad?', 'Is it good for a country when young people emigrate?', 'How will people live in 50 years?']),
  sp('maps', 'Directions & maps', ['Are you good at finding your way?', 'Do you use paper maps?', 'Have you ever got lost?', 'Do you give directions to tourists?'],
    'Describe a time you got lost.', ['where you were', 'how you got lost', 'what you did', 'and explain how you found your way.'],
    ['Has GPS made people worse at navigation?', 'Should cities have more signs for tourists?', 'How do people explore new places today?']),
  sp('parties', 'Parties & socialising', ['Do you like parties?', 'When was the last party you went to?', 'Do you prefer small or large gatherings?', 'Do you like meeting new people?'],
    'Describe a party you enjoyed.', ['whose party it was', 'where it was', 'what you did', 'and explain why you enjoyed it.'],
    ['Why do people celebrate with parties?', 'Are introverts disadvantaged in society?', 'How has socialising changed among young people?']),
  sp('crafts', 'Handicrafts', ['Can you make anything by hand?', 'Are handicrafts popular in your country?', 'Have you bought handmade products?', 'Did you do crafts at school?'],
    'Describe a handmade object you own.', ['what it is', 'who made it', 'how you got it', 'and explain why you value it.'],
    ['Why are handmade products often expensive?', 'Should governments support traditional crafts?', 'Can machines replace craftspeople?']),
  sp('presentations', 'Communication at work', ['Do you prefer phone calls or messages?', 'How many emails do you receive a day?', 'Do you like speaking in public?', 'How do you communicate with classmates or colleagues?'],
    'Describe a time you gave a presentation.', ['what it was about', 'who the audience was', 'how you prepared', 'and explain how it went.'],
    ['Why are communication skills important at work?', 'Should people be able to switch off work messages at night?', 'Will video calls replace business travel?']),
  sp('kindness', 'Kindness & manners', ['Are people in your city polite?', 'What good manners did your parents teach you?', 'Have you received help from a stranger?', 'Do you say thank you often?'],
    'Describe a time someone was kind to you.', ['who it was', 'what they did', 'why they did it', 'and explain how it made you feel.'],
    ['Are people less polite than in the past?', 'Should manners be taught in schools?', 'Does kindness bring any benefits at work?']),
  sp('weekends', 'Weekends & free time', ['What do you usually do at weekends?', 'Do you prefer busy or relaxing weekends?', 'Do you ever work or study at weekends?', 'What did you do last weekend?'],
    'Describe a perfect weekend you had.', ['when it was', 'where you were', 'what you did', 'and explain why it was perfect.'],
    ['Do people have less free time than in the past?', 'Should shops be open on Sundays?', 'How do free-time activities differ between generations?']),
  sp('space', 'Space & inventions', ['Are you interested in space?', 'Would you like to travel to space?', 'Do you look at the stars?', 'Have you visited a planetarium?'],
    'Describe something you would like to invent.', ['what it would be', 'how it would work', 'who would use it', 'and explain how it would change the world.'],
    ['Is space exploration a waste of money?', 'Will humans live on other planets?', 'Who should own resources in space?']),
];

// Band 7 Part 2 sample answers (original, spoken style — contractions and fillers are normal in Speaking).
const models = {
  'b-family': `I'd like to talk about my grandmother, who I probably spend more time with than anyone else in my family. She's seventy-two, but she's still incredibly active, and she lives with us in our house in Tashkent, so I see her every single day.

We do lots of things together. In the mornings, if I don't have early classes, we have breakfast together and she tells me stories about what life was like when she was young. At weekends we often go to the bazaar together, because she insists on choosing the vegetables herself — she says the supermarket ones have no taste! And in the evenings she sometimes teaches me how to cook traditional dishes. Last month she finally showed me her secret recipe for plov, which was a big moment for me.

The reason I enjoy spending time with her is that she's extremely calm and wise. Whenever I'm stressed about exams or something at university, she listens without interrupting and then gives me really practical advice. She also has a great sense of humour, so we laugh a lot together. I think I've learned a lot of patience from her, and I feel very lucky that she's part of my daily life.`,

  'b-friends': `The friend I'd like to describe is Sardor, who I've known for about six years now. We met in our first year of secondary school, when the teacher put us at the same desk, and to be honest, at first we didn't get on at all, because he was very serious and I was quite lazy back then.

Sardor is one of the most disciplined people I know. He gets up at six every morning, he plans his week on Sunday evening, and he always does what he says he's going to do. At the same time, he's very generous with his time — if someone in our class didn't understand maths, he would stay after school and explain it again and again.

He's influenced me in a few important ways. The biggest one is that he showed me how to study properly. Before I met him, I used to leave everything until the night before an exam. He convinced me to try studying for just thirty minutes every day, and after a couple of months my grades improved dramatically. He also got me interested in reading, because he was always lending me books. Even now that we study at different universities, we still talk every week, and I'd say a lot of my good habits come from him.`,

  'b-holidays': `I'd like to describe Navruz, the spring festival, which I celebrated last March with my whole extended family in my grandparents' village near Samarkand. It's the beginning of the new year in the traditional calendar, and it's probably the most joyful celebration of the year in Uzbekistan.

The celebration took place mainly in my grandparents' courtyard, although the whole village was involved. Preparations started a day earlier, when the women gathered to cook sumalak, a sweet dish made from sprouted wheat. It has to be stirred for almost twenty-four hours, so people take turns all through the night, singing songs and telling stories. The next day, everyone visited their neighbours, children received small presents, and in the afternoon there was a concert with traditional music and dancing in the village square.

I enjoyed it for several reasons. First of all, it was the first time in years that all my cousins were together in one place, so it felt like a big reunion. Secondly, I loved the atmosphere — everyone was in a good mood, and even people who didn't know each other were wishing each other a happy new year. And finally, I actually took a turn stirring the sumalak, so I felt I'd contributed to the celebration rather than just watching it.`,

  'b-city': `A city I've wanted to visit for a long time is Kyoto in Japan. It was the capital of the country for more than a thousand years, so it's full of history, but it's also a modern city with excellent public transport.

From what I've read and seen in documentaries, Kyoto has around two thousand temples and shrines, beautiful traditional wooden houses, and a district where you can still sometimes see people wearing traditional clothes. It's also famous for its gardens, especially in spring when the cherry trees are in blossom, and in autumn when the leaves turn red.

If I went there, I'd definitely visit some of the most famous temples early in the morning, before the crowds arrive. I'd also like to stay one night in a traditional guesthouse, sleep on a mattress on the floor, and try a proper Japanese breakfast. Food is a big part of travelling for me, so I'd try to eat at local markets rather than in tourist restaurants.

The main reason I want to go is that I'm fascinated by how Japan has kept its traditions while becoming one of the most technologically advanced countries in the world. I think Uzbekistan is facing a similar challenge right now, so it would be interesting to see how another culture has managed it.`,

  'b-goals': `An achievement I'm really proud of is getting a band seven in my first IELTS test, which happened about a year ago, when I was in my final year of school.

It was a big goal for me because I needed that score to apply to a foundation programme abroad, and when I started preparing, my level was only around band five. So I had roughly eight months to improve quite a lot.

I achieved it mainly through a very strict routine. Every day I spent at least an hour on English: I did one listening or reading test, learned around fifteen new words, and wrote a short essay twice a week, which my teacher corrected. For speaking, I recorded myself answering questions on my phone and then listened back, which was painful at first, because I hated the sound of my own voice! I also changed the language on my phone and started watching films with English subtitles instead of Uzbek ones.

I'm proud of it not only because of the result, but because it was the first time I'd worked towards something so consistently for such a long time. There were many days when I wanted to give up, especially with writing, but I kept going. Now, whenever I face a difficult task, I remind myself that I've done something hard before and I can do it again.`,

  'b-gifts': `I'd like to talk about a gift I gave to my younger brother on his fifteenth birthday last autumn. It was a set of beginner's oil paints, a few brushes and a small wooden easel.

I chose it because, for about a year, I'd noticed that he was always drawing — in his school notebooks, on napkins, even on the back of receipts. But he only ever used a simple pencil, and he once mentioned that he'd love to try painting with real colours. Our parents are quite practical people, and they thought he should spend more time on maths and physics, so I knew they probably wouldn't buy him art supplies. I'd saved some money from my part-time job, so I decided to surprise him.

To be honest, I was a bit nervous before I gave it to him, because he's at an age where he pretends not to care about things. But when he opened the box, his face completely changed — he didn't say much, but he spent the rest of the evening setting up the easel in his room. A week later, he showed me his first painting, a view of the mountains from a photo of our summer trip, and it was surprisingly good. Since then he's joined an art club at school, and our parents have become much more supportive, which makes me feel the gift was really worth it.`,

  'b-skills': `A skill I taught someone recently was how to drive a car — I taught my older sister last summer. It might sound strange that the younger sibling taught the older one, but she'd been afraid of driving for years, and she finally decided she wanted to learn before her first child was born.

I've been driving for about three years, so I felt fairly confident. We practised in the early mornings, around six o'clock, when the roads near our house were almost empty. At first, we didn't even leave the car park of a big shopping centre that was closed at that time. I started with very basic things, like adjusting the mirrors, finding the right seat position and moving off smoothly without stalling the engine.

I tried to be patient and break everything into small steps. Every lesson we focused on just one new thing — turning, reversing, or using the roundabout — and we always finished with something she was already good at, so she'd go home feeling positive. The hardest part for me was staying calm when she made mistakes, because I'm naturally quite impatient!

In the end, it was quite successful. She passed her driving test on the second attempt, and now she drives to work every day. She still jokes that I was a strict teacher, but I think she's grateful.`,

  'b-tradition': `A tradition that's very important in Uzbekistan is the custom of "hashar", which means people working together voluntarily to help a neighbour or the whole community.

It doesn't happen on a fixed date; it can happen at any time when someone needs help. For example, when a family is building a new house, or when a street needs cleaning before a holiday, someone announces a hashar, and neighbours, relatives and friends turn up to help. In spring, there are often large hashars in towns and villages where people plant trees and clean parks and canals.

What people do depends on the task. Men usually do the heavy physical work, such as carrying bricks or digging, while others prepare food for everyone — and there is always food! At the end of the day, the family who received the help usually invites everyone to share a big meal, often plov, so it becomes a social event as well as hard work. Nobody gets paid, and it's understood that if you help others today, they will help you in the future.

I think it's important because it keeps communities connected. In big cities, people sometimes don't even know their neighbours' names, but a hashar brings them together. It also teaches children that helping others is a normal part of life, not something special.`,

  'b-childhood': `One of my happiest childhood memories is a fishing trip with my father and my uncle when I was about eight years old. We went to Charvak, a large reservoir in the mountains about two hours' drive from Tashkent, at the beginning of the summer holidays.

We left really early, while it was still dark, which felt like a big adventure to me, because I'd never been awake at that time before. I remember my father bought me my first proper fishing rod at a small shop on the way, and I was so excited that I held it on my lap for the rest of the journey.

At the lake, my uncle showed me how to put the bait on the hook and how to wait quietly without moving. For hours I caught absolutely nothing, and I was starting to get bored and upset. Then, just before lunch, I felt a strong pull, and with my father's help I pulled out a fish that was nearly as long as my arm. Everyone around us clapped, and my uncle took a photo, which is still on the wall in my grandparents' house.

I think it was such a happy memory because it was the first time I felt treated like one of the adults. My father and uncle let me do everything myself, and I was incredibly proud of that fish for the rest of the summer.`,

  'b-internet': `The app I use most often, apart from messaging apps, is a language-learning app with flashcards. I found it about two years ago, when a classmate showed me how she was using it to learn vocabulary for the IELTS exam, and I downloaded it the same evening.

Basically, you create sets of digital flashcards, with a word on one side and the meaning and an example on the other. The clever part is that the app uses something called spaced repetition: it shows you the words you find difficult more often, and the ones you know well less often, so you don't waste time. I use it every day, usually on the bus on my way to university, for about fifteen or twenty minutes. At the moment I have around two thousand words saved, and I've also added sets for my economics course, with key terms and definitions.

I find it extremely useful for a few reasons. First, it fits into small gaps in my day, so I don't need to find a special time to study. Second, it keeps statistics, so I can see my progress, which really motivates me. And third, it works offline, which is important because the mobile signal on my route isn't always reliable. I'd say it's probably the main reason my vocabulary has improved so much recently.`,

  'b-food': `I'd like to talk about plov, which is probably the most famous traditional dish in Uzbekistan. It's a rice dish, but it's much more than that, because it's cooked with meat, carrots, onions and a lot of oil, and every region has its own version.

The preparation is quite a long process. First, the cook heats the oil in a huge metal pot called a kazan and fries the meat and onions. Then come the carrots, which are cut into long thin strips, and after that the rice is added and cooked slowly with water and spices like cumin. Some people also put in chickpeas, raisins or a whole head of garlic. In my family it's always my father who makes it, and he's quite strict about how the carrots should be cut.

People eat plov on all kinds of occasions. It's a typical Thursday or Friday lunch for many families, but it's also served at weddings and big celebrations, where men sometimes cook it for hundreds of guests early in the morning.

The reason it's so important in our culture is that plov is really about sharing. It's usually served on one big plate in the middle of the table, and everyone eats together. When someone invites you for plov, it means they're inviting you into their life, so for me it's a symbol of hospitality and of being part of a community.`,

  'b-music': `The piece of music I'd like to describe is an old Uzbek folk song that my grandmother used to sing to me when I was a small child. I don't actually know who wrote it, because it's one of those songs that has been passed down from generation to generation.

I first heard it when I was about four or five. My grandmother would sing it in the evenings while she was making bread or sewing, and I remember sitting next to her and trying to join in, even though I didn't understand all the words.

The song is about a young man who leaves his village to work in a faraway city and misses his mother and the mountains where he grew up. The melody is quite slow and a little sad, but at the end it becomes more hopeful, because he promises to return home one day.

It's special to me for a couple of reasons. First, it reminds me of my grandmother, who passed away a few years ago, so whenever I hear it I feel as if she's still with me. Second, when I moved to Tashkent to study, I suddenly understood the meaning of the song much better, because I was also living far from my family. Now I sometimes listen to a recording of it on my phone when I feel homesick, and it always makes me feel calmer.`,

  'b-sport': `I'm going to talk about a local football final that I watched about two years ago in my home town. It wasn't a professional match, but it was one of the most exciting sporting events I've ever seen.

It took place at the town stadium on a warm evening at the end of May. The two teams were from neighbouring districts, and there's always been a friendly rivalry between them, so almost the whole town came to watch. I went with my father and my younger brother, and we had to arrive an hour early to find seats.

The players were mostly young men in their twenties, and quite a few of them were people I knew personally. In fact, my cousin was the goalkeeper for our team, which made the whole experience even more nerve-racking for us.

The match itself was really dramatic. Our team was losing one–nil until the last ten minutes, and then they scored twice. When the final whistle blew, everyone ran onto the pitch, and people were hugging complete strangers.

As for how I felt, I remember being incredibly tense during most of the game, and then feeling a huge sense of joy and relief at the end. What I liked most, though, was the atmosphere. It showed me how sport can bring a whole community together, regardless of age or background.`,

  'b-books': `The book I'd like to describe is a popular science book about sleep, which I finished reading about a month ago. It was written by a researcher who has spent many years studying how the brain works at night.

The book explains why we need sleep, what happens in our body during different stages of sleep, and how a lack of sleep affects our memory, mood and health. What surprised me was how much evidence there is that even one bad night can make it harder to learn new things the following day. The author also gives practical advice, for example about avoiding screens late in the evening and keeping a regular bedtime.

I decided to read it because I was having real problems with my own sleep. I was preparing for exams, and I often stayed up until two or three in the morning, which meant I felt exhausted during the day. A friend of mine had read the book and said it had completely changed her habits, so I thought I'd give it a try.

I would definitely recommend it, especially to students. It's written in a clear and engaging style, with lots of interesting examples, so you don't need a background in science to understand it. Since reading it, I've started going to bed much earlier, and I honestly feel more focused in my classes, so in my case it's been genuinely useful rather than just interesting.`,

  'b-films': `I'd like to talk about a documentary I saw last year about the Aral Sea. I watched it at a small film club at my university, where students meet every Friday to watch a film and discuss it afterwards.

The documentary tells the story of how one of the largest lakes in the world almost disappeared within a few decades. It uses old film footage, satellite photographs and interviews with people who live in the region. There's one scene I'll never forget, where an old fisherman walks across sand to the place where his boat used to be in the water, and now there's just a rusty ship in the middle of a desert.

The reason it impressed me so much is that I had heard about the Aral Sea at school, but only as a fact in a geography textbook. The film made the problem feel real and personal. It showed how the disaster affected people's health, their jobs and even their sense of identity, and it explained clearly how decisions about water and farming led to it.

It also made me think about my own behaviour, for example how much water I waste every day without noticing. After the screening we had a long discussion, and a few of us later joined a volunteer group that plants trees in the region. So for me it wasn't just a film; it actually changed what I do.`,

  'b-transport': `The journey I remember best is a train trip I took from Tashkent to Khiva with two of my closest friends last summer, right after we finished our final exams.

We travelled by overnight train, which took about fourteen hours. We'd booked a compartment with four beds, and the fourth bed belonged to a retired teacher from Urgench, who turned out to be the most interesting part of the whole journey.

We left in the early evening, and at first we just played cards and ate the snacks we'd brought. Then the teacher started telling us stories about the history of the places we were passing through, and we ended up talking with him until after midnight. He even taught us a few words of the local dialect and gave us a list of places to visit that most tourists never see.

When I woke up the next morning, the landscape outside had completely changed. There was desert on both sides of the train, and the sunrise over the sand was absolutely beautiful.

I think I remember this journey so well for two reasons. Firstly, it was the first long trip I'd ever made without my parents, so it felt like the beginning of adult life. Secondly, it taught me that the journey itself can be as valuable as the destination, especially if you're open to talking to the people you meet along the way.`,

  'b-home': `My ideal home would be a two-storey house on the edge of a small town in the foothills of the mountains, perhaps somewhere near Chimgan, so that I'd have fresh air and beautiful views but still be within driving distance of Tashkent.

In terms of what it would look like, I'd like it to be built in a modern style but with some traditional features, like a covered terrace and a courtyard with a fruit garden in the middle. Inside, I'd want large windows, a big open kitchen, because cooking together is important in my family, and a quiet study with lots of bookshelves where I could work from home.

As for who would live there, I imagine living there with my own family in the future, and I'd also like to have a separate guest room for my parents, so they could come and stay for long periods. And I'd definitely have a dog, because there'd be plenty of space for it to run around.

The reason this would be ideal for me is that it combines two things I really value: peace and connection. At the moment I live in a flat in the city centre, which is convenient but very noisy, and I rarely see any greenery. A house like this would give me a calm place to rest and think, but it would also be big enough to bring the whole family together at weekends and on holidays.`,

  'b-school': `The teacher I'd like to describe is my English teacher from secondary school, Mrs Karimova, who taught me for four years, from the age of thirteen until I finished school.

She taught English, of course, but in a way she taught us much more than the language. Her lessons were never just about grammar exercises. She brought in songs, short stories and newspaper articles, and every Friday we had a debate on a topic we had chosen ourselves, which was something no other teacher did.

As a person, she was strict but very fair. She expected everyone to do their homework and to speak only English in class, but she never made anyone feel stupid for making a mistake. In fact, she used to say that a mistake simply shows you're brave enough to try. She also stayed after school twice a week to help students who were struggling, without being paid for it.

She influenced me in two important ways. The first is that she made me love English. Before her classes I found it boring, but she showed me that a language opens the door to other cultures and ideas. The second is that she gave me confidence. I used to be extremely shy, and those Friday debates taught me how to express my opinion in front of other people. I'm sure that's one of the reasons I'm now studying international relations.`,

  'b-jobs': `The job I'd really like to do in the future is to work as a software developer for a company that builds educational apps, especially tools that help children in rural areas learn more effectively.

This kind of job needs a mixture of technical and personal skills. On the technical side, you obviously need to be good at programming and to keep learning new technologies, because the industry changes so quickly. But you also need to understand how people learn, so knowledge of education and psychology would be really helpful. And because developers usually work in teams, you need good communication skills and the ability to accept criticism of your work.

As for how I could get this job, I'm currently studying computer science at university, and I'm planning to do an internship at an IT company next summer. I've also started building a small vocabulary app as a personal project, which I hope will show employers what I can do. Improving my English is part of the plan too, because most documentation and online courses in this field are in English.

The main reason I'd like this job is that it would allow me to combine my two interests: technology and education. I grew up in a small village where we didn't have many good teachers or books, and I know how much a well-designed app could have helped me. So I'd like to do work that is creative, well paid and, most importantly, useful for other people.`,

  'b-nature': `The natural place I'd like to describe is Lake Aydarkul, a large lake in the middle of the desert in the north of Uzbekistan. It's about a four-hour drive from Samarkand, and it's quite surprising to suddenly see so much blue water surrounded by sand.

I went there two years ago in early autumn with a group of students from my university. Our geography lecturer organised the trip, and we stayed for two nights in a yurt camp near the shore.

We did all sorts of things while we were there. During the day we swam in the lake, which was still warm, and we went for a short camel ride across the dunes, which was a completely new experience for most of us. In the evenings, the people who ran the camp cooked dinner over an open fire, and afterwards someone played a traditional instrument while we sat and talked.

There are several reasons why I liked this place so much. The first is the contrast between the desert and the water, which made the landscape feel almost unreal. The second is the silence. Living in a big city, I'd forgotten what real quiet sounds like. But the best moment was at night, when we lay on the sand and looked at the sky. There was no light pollution at all, so we could see thousands of stars and even the Milky Way, and I remember feeling very small but also very peaceful.`,
};
for (const s of speakingBank) if (models[s.id]) s.part2.model = models[s.id];
const part3Models = {
  'b-family': [
    "I'd say the biggest change is that families have become smaller. My grandparents' generation often had six or seven children, whereas most young couples now have two or three. Another change is that more young people move to the city for study or work, so extended families don't always live together any more. That said, family ties are still very strong — people visit relatives often and help each other a lot.",
    "Yes, I think grandparents can play a really valuable role. They have time, patience and experience, and children usually learn a lot of traditions and stories from them. It also helps working parents, because childcare is expensive. On the other hand, grandparents shouldn't be expected to do everything — they deserve to rest too, and parents should still make the main decisions about how their children are raised.",
  ],
  'b-food': [
    "Mainly because it's fast, cheap and convenient. People work long hours and often don't have time or energy to cook when they get home, so a burger or a pizza seems like an easy option. Advertising also plays a part — fast-food chains spend huge amounts on adverts aimed at young people. And to be honest, it's designed to taste good, with lots of salt, sugar and fat, which makes people want more.",
    "I strongly believe they should. Cooking is a basic life skill, and if children learn to make simple, healthy meals, they're less likely to depend on fast food when they grow up. It could also teach them about nutrition and even maths, for example when they measure ingredients. The main difficulty is that schools would need proper kitchens and trained teachers, which costs money, but I think it would be a worthwhile investment.",
  ],
  'b-sport': [
    "I think there are several reasons. Hosting an event like the Olympics or a world championship brings international attention, so it can improve a country's image and attract tourists. Governments also hope it will encourage ordinary people, especially children, to take up sport. However, these events are extremely expensive, and in some cases the new stadiums are hardly used afterwards, so the benefits aren't always as great as politicians claim.",
    "In some cases, perhaps. When a footballer earns more in a week than a nurse earns in several years, it does seem unfair. But we should remember that professional careers are very short and athletes risk serious injuries. Their salaries are paid by clubs and sponsors, and they reflect how much money the sport generates from tickets and television. So I'd say the problem isn't really the athletes, it's how society values different kinds of work.",
  ],
  'b-books': [
    "I don't think they'll disappear completely, at least not in the near future. E-books are convenient, especially when you travel, but many people still prefer the feel of a real book and find it easier to concentrate when they're reading on paper. Printed books might become more of a niche product, like vinyl records, but I imagine there will always be a market for them, particularly for children's books and beautifully designed editions.",
    "One obvious reason is competition from phones and social media. Short videos give instant entertainment, so a long novel can seem slow in comparison. Another reason is pressure at school — students have so much required reading and homework that they don't feel like reading in their free time. I think if young people were allowed to choose books that genuinely interest them, rather than only the classics, more of them would rediscover reading for pleasure.",
  ],
  'b-transport': [
    "There are a few effective approaches. The most important is investing in good public transport, so that buses and the metro are fast, frequent and affordable enough that people actually prefer them to driving. Cities can also build safe cycle lanes and make streets more pleasant for walking. Some cities charge drivers to enter the centre at busy times, which can work well, although it's usually unpopular at first.",
    "I wouldn't support a complete ban, because some people, such as disabled people or delivery drivers, really need vehicle access. But I think limiting cars in historic centres makes a lot of sense. Pedestrian streets are quieter, cleaner and safer, and they often become more attractive for shops and cafés. The key is to introduce changes gradually and make sure there are good alternatives before cars are restricted.",
  ],
  'b-home': [
    "The main reason is that demand is much higher than supply. Big cities offer more jobs, better universities and better services, so more and more people want to live there, but the amount of land is limited. Investors also buy flats simply to make money rather than to live in them, which pushes prices up further. As a result, many young people find it almost impossible to buy a home without help from their parents.",
    "It really depends on your situation. Buying is usually better in the long term, because instead of paying rent to someone else you're investing in your own property. But renting gives you more flexibility — if you're young or your job might require you to move, it makes more sense not to be tied to one place. Personally, I'd rent while I'm studying and then try to buy once my career is more settled.",
  ],
  'b-school': [
    "In my opinion, the most important quality is the ability to explain things clearly and patiently, so that every student can follow. A good teacher also knows their subject well, of course, but knowledge alone isn't enough. They need to be fair, to motivate students and to notice when someone is struggling. The best teachers I've had made us feel that our ideas mattered, and that encouraged us to work harder.",
    "I think there's a case for it. In many schools, students sit in lessons from early morning until the afternoon and then do several hours of homework, which leaves very little time for sport, hobbies or rest. Research suggests that tired students don't learn effectively. Rather than simply cutting hours, though, I'd prefer schools to use time more efficiently, with fewer but more focused lessons and more practical activities.",
  ],
  'b-jobs': [
    "Ideally, I think people should find a balance between the two. If you only think about money, you might end up in a job you hate, and that can affect your health and happiness. On the other hand, interest alone doesn't pay the bills, especially if you have a family to support. In my view, the best approach is to choose a field you genuinely enjoy and then look for ways to build a well-paid career within it.",
    "I'd expect jobs related to technology, such as software development and data analysis, to keep growing, as well as roles connected with renewable energy. At the same time, as populations age, there will be more demand for healthcare workers and carers. Interestingly, jobs that require human qualities like empathy and creativity, such as teaching and counselling, may become even more valuable, because they're much harder to automate.",
  ],
  'b-city': [
    "Mostly for economic reasons. Cities offer far more job opportunities and usually higher salaries than rural areas. Young people also move to study at universities, and many of them stay after they graduate. Better access to hospitals, shopping and entertainment is another attraction. The downside is that villages lose their young population, and the cities become crowded, with problems like traffic and expensive housing.",
    "For me, the most important factors are good public transport, clean air and plenty of green spaces where people can relax. Safety matters a lot, too, and so does affordable housing, because a city isn't really liveable if ordinary workers can't afford to live there. I'd also add a lively cultural life — museums, theatres and markets give a city its character and make people feel proud of where they live.",
  ],
  'b-internet': [
    "Yes, I think some limits are necessary, especially for younger children. Spending too many hours online can affect their sleep, their eyesight and their ability to concentrate, and there's also the risk of seeing harmful content or being bullied. However, I don't think a strict ban works, because children need digital skills for school and later for work. It's better for parents to set clear rules and talk openly with their children about how they use the internet.",
    "It's changed education enormously. Students can now find information on almost any topic in seconds, watch lectures from top universities for free and learn languages with apps. During the pandemic, online lessons allowed schools to keep teaching. The challenge is that not all information online is reliable, so students need to learn how to evaluate sources. Also, not every family can afford good devices and internet access, which can make inequality worse.",
  ],
};
for (const s of speakingBank) if (part3Models[s.id]) s.part3Models = part3Models[s.id];

// Part 1 sample answers: 2–3 sentences each — answer, reason, small example (aligned with part1).
const part1Models = {
  'b-family': [
    "It's quite a big family, actually. I have two brothers and a sister, and we live with my grandparents, so the house is never quiet.",
    "Probably my older sister. We're only two years apart, so we share a lot of interests, and I usually ask her for advice first.",
    "Very often, because most of them live nearby. We get together almost every weekend, and for holidays like Navruz the whole family meets.",
    "Mostly we eat together and chat. On Fridays we often cook plov, and in summer we sometimes go to the mountains for a picnic.",
  ],
  'b-friends': [
    "Mainly through university and my sports club. I find it's easier to make friends when you're doing an activity together.",
    "I'd say a few close ones. I prefer friends I can really trust, rather than lots of people I only know a little.",
    "We usually go to a café or play football in the park. Sometimes we just stay at someone's house and watch a film.",
    "Yes, with a few of them. We have a group chat, and we try to meet at least once a year, usually in the summer.",
  ],
  'b-food': [
    "My favourite dish is definitely manti. I love it because my grandmother makes it with pumpkin, and it reminds me of home.",
    "Yes, I can cook a few simple things, like eggs, soups and pasta. I'm trying to learn more traditional dishes from my mother.",
    "I prefer eating at home, because it's healthier and cheaper. But eating out with friends is nice for special occasions.",
    "Yes, quite a lot. As a child I ate a lot of sweets, but now I try to eat more vegetables and drink less sugary tea.",
  ],
  'b-music': [
    "I like all kinds of music, but I mostly listen to pop and some Uzbek folk songs. It depends on my mood, really.",
    "Not really. I had a few guitar lessons at school, but I gave up. I'd like to try again one day.",
    "Mainly when I'm travelling, for example on the metro. I also listen while I'm studying, as long as the songs don't have words.",
    "Yes, definitely. When I was a teenager I only listened to loud rock music, but now I enjoy calmer songs.",
  ],
  'b-sport': [
    "Yes, I play football with my friends twice a week. In the summer I also go swimming, because it's too hot to run around.",
    "Football is by far the most popular. Wrestling and boxing are also big, partly because our athletes do so well internationally.",
    "Yes, we had PE lessons twice a week. I enjoyed them, especially when we played volleyball.",
    "I prefer playing, because it keeps me fit and I enjoy being part of a team. Watching is fun, but only for big matches.",
  ],
  'b-books': [
    "Yes, I do, although I don't have as much time as I'd like. I usually read for half an hour before bed.",
    "Mostly novels and books about history. Recently I've also started reading simple English books to improve my vocabulary.",
    "I prefer paper books, because I find it easier to concentrate. But e-books are very convenient when I'm travelling.",
    "Yes, my mother read fairy tales to me almost every night. I think that's why I still enjoy reading now.",
  ],
  'b-films': [
    "Probably once or twice a week. I usually watch at the weekend, when I have more free time.",
    "I prefer the cinema for big action films, because the screen and sound are much better. For other films, home is more comfortable.",
    "I like documentaries, especially about nature and history. I sometimes watch cooking programmes too, because they give me ideas.",
    "Yes, I try to. I usually watch with English subtitles, which really helps my listening.",
  ],
  'b-shopping': [
    "Not really, to be honest. I only go shopping when I need something, and I like to finish quickly.",
    "For electronics I prefer online shopping, because it's cheaper and there's more choice. But for clothes I like shops, so I can try things on.",
    "Usually in a shopping centre near my home. Sometimes I go to the bazaar instead, because prices there are lower.",
    "Yes, always, especially for expensive things. I check a few websites and read reviews before I decide.",
  ],
  'b-weather': [
    "We have very hot summers and quite cold winters. In summer it can be over forty degrees, so most people stay inside at midday.",
    "I like spring best, because it's warm but not too hot. Everything is green, and the parks are full of flowers.",
    "Yes, quite often. If it's very hot, I go out in the evening instead, and when it snows I usually stay at home.",
    "Yes, I check it on my phone every morning. It's especially useful in spring, because the weather can change very quickly.",
  ],
  'b-transport': [
    "Mostly by metro, because it's fast and cheap. For short distances I sometimes walk or take a taxi.",
    "Not yet, but I'm planning to take driving lessons next year. It would be really useful for my future job.",
    "It's quite good in the centre, especially the metro. But in the suburbs buses can be crowded and not very frequent.",
    "For long distances I prefer the train, because it's comfortable and you can see the countryside. Planes are faster, but I don't enjoy airports.",
  ],
};
for (const s of speakingBank) if (part1Models[s.id]) s.part1Models = part1Models[s.id];
