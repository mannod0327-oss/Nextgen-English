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
};
for (const s of speakingBank) if (models[s.id]) s.part2.model = models[s.id];
