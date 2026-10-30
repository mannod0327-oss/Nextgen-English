// Linking words trainer (original). Coherence & cohesion in IELTS Writing depends on choosing the
// linker that fits the grammar after it: although + clause, despite + noun/-ing, because of + noun…
// Row: [id, sentence with ___, answer, uz explanation, options].

const C = ['However', 'Although', 'Despite', 'Because'];
const c = ['however', 'although', 'despite', 'because'];

export const linkerSets = [
  {
    id: 'linkers', title: "Bog'lovchi so'zlar",
    rules: [
      ['zidlik', 'although + gap · despite / in spite of + ot yoki -ing · however, (yangi gap boshida, vergul bilan)', 'Although it rained, we went out. Despite the rain… It rained. However, we went out.'],
      ['sabab', 'because + gap · because of / due to + ot', 'because it was late · because of the traffic'],
      ['natija', 'so (gap ichida) · therefore / as a result / consequently (yangi gap boshida)', 'It was late, so we left. As a result, …'],
      ['qo\'shimcha', 'moreover / furthermore / in addition (yangi gap) · as well as + ot', 'In addition, it is cheap.'],
      ['misol', 'for example / for instance + gap · such as + ot', 'cities such as Bukhara'],
    ],
    items: [
      ['lk1', '___ it was raining, we played football.', 'Although', "although + to'liq gap (ega + fe'l).", C],
      ['lk2', '___ the rain, we played football.', 'Despite', 'despite + ot (the rain).', C],
      ['lk3', 'The hotel was expensive. ___, the rooms were small.', 'Moreover', "Qo'shimcha salbiy fikr → Moreover.", ['However', 'Moreover', 'Therefore', 'For example']],
      ['lk4', 'The hotel was expensive. ___, the service was excellent.', 'However', 'Zid fikr, yangi gap boshida → However.', ['However', 'Moreover', 'Therefore', 'Because']],
      ['lk5', 'The flight was cancelled ___ the storm.', 'because of', 'because of + ot.', ['because', 'because of', 'so', 'although']],
      ['lk6', 'The flight was cancelled ___ there was a storm.', 'because', 'because + gap.', ['because', 'because of', 'due to', 'despite']],
      ['lk7', 'Prices rose sharply. ___, many families spent less on food.', 'As a result', 'Natija → As a result.', ['As a result', 'Although', 'For instance', 'Despite']],
      ['lk8', 'Many cities, ___ Tashkent and Almaty, are growing fast.', 'such as', 'such as + ot (misol).', ['such as', 'for example', 'because of', 'however']],
      ['lk9', 'Public transport has many benefits. ___, it reduces traffic.', 'For example', "Misol + to'liq gap → For example,", ['For example', 'Such as', 'Despite', 'Although']],
      ['lk10', 'She was tired, ___ she went to bed early.', 'so', 'Gap ichida natija → so.', ['so', 'because', 'although', 'however']],
      ['lk11', '___ working hard, he failed the exam.', 'Despite', 'despite + -ing.', C],
      ['lk12', 'Some people prefer cities, ___ others prefer the countryside.', 'whereas', "Ikki guruhni qarama-qarshi qo'yish → whereas.", ['whereas', 'because', 'so', 'despite']],
      ['lk13', 'The project was delayed ___ a lack of funding.', 'due to', 'due to + ot.', ['due to', 'because', 'although', 'so']],
      ['lk14', 'Online learning is flexible. ___, it is often cheaper.', 'In addition', "Qo'shimcha afzallik → In addition.", ['In addition', 'However', 'Despite', 'Although']],
      ['lk15', '___, I believe that the advantages outweigh the disadvantages.', 'In conclusion', 'Xulosa abzasi → In conclusion.', ['In conclusion', 'For example', 'Moreover', 'Because']],
      ['lk16', 'The museum is popular ___ it is free.', 'because', 'because + gap.', c],
      ['lk17', '___ the high price, the phone sold well.', 'Despite', 'despite + ot.', C],
      ['lk18', 'It was very cold. ___, the children played outside.', 'However', 'Kutilmagan natija, yangi gap → However.', C],
      ['lk19', 'Fewer people drive to work. ___, air quality has improved.', 'Consequently', 'Natija → Consequently.', ['Consequently', 'Although', 'Whereas', 'Despite']],
      ['lk20', 'He speaks English ___ Russian and Uzbek.', 'as well as', 'as well as + ot.', ['as well as', 'moreover', 'in addition', 'furthermore']],
      ['lk21', '___ he is only twelve, he can speak four languages.', 'Although', 'although + gap.', C],
      ['lk22', 'The roads were icy. ___, many accidents happened.', 'Therefore', 'Natija → Therefore.', ['Therefore', 'However', 'Although', 'Such as']],
      ['lk23', 'Exercise is good for the body. ___, it improves mood.', 'Furthermore', "Qo'shimcha → Furthermore.", ['Furthermore', 'However', 'Because', 'Despite']],
      ['lk24', 'I stayed at home ___ I had a cold.', 'because', 'because + gap.', ['because', 'because of', 'despite', 'so']],
      ['lk25', 'I stayed at home ___ my cold.', 'because of', 'because of + ot.', ['because', 'because of', 'although', 'so']],
      ['lk26', '___ the fact that it was late, the shop was still open.', 'Despite', 'despite the fact that + gap.', C],
      ['lk27', 'Some jobs, ___ nursing, are hard to automate.', 'such as', 'such as + ot.', ['such as', 'for instance', 'although', 'therefore']],
      ['lk28', 'The city has a lot of parks. ___, there are few cycle lanes.', 'On the other hand', "Boshqa tomondan → On the other hand.", ['On the other hand', 'For example', 'As a result', 'In addition']],
      ['lk29', 'Wait here ___ I come back.', 'until', 'until — "…guncha".', ['until', 'despite', 'because of', 'however']],
      ['lk30', 'Take an umbrella ___ it rains.', 'in case', 'in case — ehtimolga qarshi.', ['in case', 'despite', 'although', 'so']],
      ['lk31', '___ you study every day, you will improve quickly.', 'If', 'Shart → If.', ['If', 'Although', 'Despite', 'However']],
      ['lk32', 'You will not pass ___ you practise more.', 'unless', 'unless = if … not.', ['unless', 'if', 'because', 'so']],
      ['lk33', 'She saved money ___ she could buy a laptop.', 'so that', 'Maqsad → so that + gap.', ['so that', 'because of', 'although', 'despite']],
      ['lk34', 'He left early ___ catch the train.', 'in order to', 'Maqsad → in order to + V1.', ['in order to', 'so that', 'because', 'despite']],
      ['lk35', '___ I was walking home, I met an old friend.', 'While', 'Bir vaqtda → While.', ['While', 'Despite', 'Because of', 'Therefore']],
      ['lk36', 'Tourism creates jobs. ___, it can damage the environment.', 'Nevertheless', 'Zidlik → Nevertheless.', ['Nevertheless', 'Furthermore', 'For example', 'Because']],
      ['lk37', 'Firstly, cars are expensive. ___, they cause pollution.', 'Secondly', 'Sanash → Secondly.', ['Secondly', 'However', 'Although', 'Despite']],
      ['lk38', 'Prices fell in 2020; ___, they rose again in 2021.', 'however', 'Nuqtali verguldan keyin → however,', ['however', 'although', 'despite', 'because of']],
      ['lk39', 'Public transport is cheap, clean and fast. ___, cities should invest more in it.', 'To sum up', 'Xulosa → To sum up (In conclusion).', ['To sum up', 'For example', 'Such as', 'Despite']],
      ['lk40', '___ of the bad weather, the match was cancelled.', 'Because', 'because of + ot (bosh harf).', ['Because', 'Although', 'Despite', 'However']],
      ['lk41', 'Women live longer than men, ___ in every country in the table.', 'especially', 'Ayniqsa → especially.', ['especially', 'whereas', 'although', 'so']],
      ['lk42', 'The number of cars increased, ___ the number of bicycles fell.', 'while', 'Zid taqqoslash → while / whereas.', ['while', 'because', 'so that', 'in case']],
    ],
  },
];
