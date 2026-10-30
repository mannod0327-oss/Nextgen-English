// Ready-made mock tests for the exam simulator, in the open "nge-exam" format (see core/exam.js).
import { sampleExam } from './sample-exam.js';

const exam = (title, level, timeLimitMin, questions) => ({
  format: 'nge-exam', version: 1, title, level, passPercent: 70, timeLimitMin, questions,
});

const a1 = exam('Starter Test (A1)', 'A1', 10, [
  { id: 'a1q1', type: 'single', prompt: 'My name ___ Aziz.', options: ['am', 'is', 'are', 'be'], answer: 1 },
  { id: 'a1q2', type: 'single', prompt: '___ you a student?', options: ['Is', 'Do', 'Are', 'Am'], answer: 2 },
  { id: 'a1q3', type: 'single', prompt: 'She ___ in a hospital.', options: ['work', 'works', 'working', 'is work'], answer: 1 },
  { id: 'a1q4', type: 'fill', prompt: 'I have two ___ (child).', answer: 'children', explanation: "child → children (noto'g'ri ko'plik)." },
  { id: 'a1q5', type: 'single', prompt: 'There ___ a cat on the sofa.', options: ['is', 'are', 'be', 'has'], answer: 0 },
  { id: 'a1q6', type: 'single', prompt: "We have lunch ___ one o'clock.", options: ['in', 'on', 'at', 'to'], answer: 2 },
  { id: 'a1q7', type: 'match', prompt: "So'zni tarjimasi bilan juftlang:", pairs: [['apple', 'olma'], ['bread', 'non'], ['water', 'suv'], ['tea', 'choy']] },
  { id: 'a1q8', type: 'order', prompt: 'Put the words in order:', items: ['I', 'get', 'up', 'at', 'seven'] },
  { id: 'a1q9', type: 'fill', prompt: 'The opposite of "big" is ___.', answer: ['small', 'little'] },
  { id: 'a1q10', type: 'single', prompt: 'This is ___ umbrella.', options: ['a', 'an', 'the', '—'], answer: 1, explanation: 'Unli tovush oldidan → an.' },
]);

const b1 = exam('Intermediate Test (B1)', 'B1', 15, [
  { id: 'b1q1', type: 'single', prompt: 'I ___ in Tashkent since 2015.', options: ['live', 'lived', 'have lived', 'am living'], answer: 2 },
  { id: 'b1q2', type: 'single', prompt: 'When I arrived, they ___ dinner.', options: ['had', 'were having', 'have', 'have had'], answer: 1 },
  { id: 'b1q3', type: 'single', prompt: 'If it ___ tomorrow, we will stay at home.', options: ['rains', 'will rain', 'rained', 'would rain'], answer: 0 },
  { id: 'b1q4', type: 'fill', prompt: 'The new school ___ (build) last year.', answer: 'was built' },
  { id: 'b1q5', type: 'single', prompt: 'She asked me where I ___.', options: ['live', 'lived', 'am living', 'do live'], answer: 1 },
  { id: 'b1q6', type: 'multiple', prompt: "Qaysi gaplar to'g'ri?", options: ['I have seen him yesterday.', 'I saw him yesterday.', 'I have never been to Paris.', 'Did you went out?'], answer: [1, 2] },
  { id: 'b1q7', type: 'single', prompt: "You ___ smoke here. It's not allowed.", options: ["don't have to", "mustn't", "needn't", "shouldn't to"], answer: 1 },
  { id: 'b1q8', type: 'fill', prompt: 'This is ___ (good) restaurant in town.', answer: 'the best' },
  { id: 'b1q9', type: 'order', prompt: 'Put the words in order:', items: ['How', 'long', 'have', 'you', 'been', 'waiting?'] },
  { id: 'b1q10', type: 'match', prompt: "Fe'lni 3-shakli bilan juftlang:", pairs: [['write', 'written'], ['go', 'gone'], ['buy', 'bought'], ['speak', 'spoken']] },
]);

const b2 = exam('Upper-Intermediate Test (B2)', 'B2', 20, [
  { id: 'b2q1', type: 'single', prompt: 'By the end of next year, I ___ my degree.', options: ['will finish', 'will have finished', 'finish', 'am finishing'], answer: 1 },
  { id: 'b2q2', type: 'single', prompt: 'If I ___ about the traffic, I would have left earlier.', options: ['knew', 'had known', 'have known', 'would know'], answer: 1 },
  { id: 'b2q3', type: 'single', prompt: 'He denied ___ the money.', options: ['to take', 'taking', 'take', 'took'], answer: 1 },
  { id: 'b2q4', type: 'fill', prompt: 'I wish I ___ (can) speak Chinese.', answer: 'could' },
  { id: 'b2q5', type: 'single', prompt: 'The man ___ car was stolen called the police.', options: ['who', 'whose', 'which', 'whom'], answer: 1 },
  { id: 'b2q6', type: 'single', prompt: 'She is used to ___ long hours.', options: ['work', 'working', 'worked', 'works'], answer: 1 },
  { id: 'b2q7', type: 'fill', prompt: 'The report must ___ (finish) by Friday.', answer: 'be finished' },
  { id: 'b2q8', type: 'multiple', prompt: "Qaysi fe'llardan keyin V-ing ishlatiladi?", options: ['enjoy', 'decide', 'avoid', 'hope', 'suggest'], answer: [0, 2, 4] },
  { id: 'b2q9', type: 'single', prompt: '___ the rain, the match went ahead.', options: ['Although', 'Despite', 'However', 'Even'], answer: 1, explanation: 'Despite + ot; although + gap.' },
  { id: 'b2q10', type: 'order', prompt: 'Put the words in order:', items: ['She', 'had', 'never', 'seen', 'such', 'a', 'beautiful', 'city'] },
]);

// IELTS-style language practice: word formation, collocations, linking words, academic grammar.
const ielts = exam('IELTS-style Practice (B2–C1)', 'B2–C1', 20, [
  { id: 'iq1', type: 'fill', prompt: 'There has been a significant ___ (grow) in online learning.', answer: 'growth' },
  { id: 'iq2', type: 'fill', prompt: 'Many scientists are ___ (convince) that the climate is changing.', answer: 'convinced' },
  { id: 'iq3', type: 'single', prompt: 'Governments should ___ measures to reduce pollution.', options: ['make', 'take', 'do', 'put'], answer: 1, explanation: 'Kollokatsiya: take measures.' },
  { id: 'iq4', type: 'single', prompt: 'The number of tourists ___ sharply between 2015 and 2020.', options: ['raised', 'rose', 'arose', 'risen'], answer: 1, explanation: 'rise (o‘timsiz) — rose — risen; raise (o‘timli) narsani ko‘tarmoq.' },
  { id: 'iq5', type: 'single', prompt: '___ the cost is high, the benefits are greater.', options: ['Despite', 'Although', 'However', 'Because of'], answer: 1 },
  { id: 'iq6', type: 'single', prompt: 'The graph shows a steady ___ in unemployment.', options: ['decline', 'declining', 'declined', 'declines'], answer: 0 },
  { id: 'iq7', type: 'multiple', prompt: "Qaysilari qarama-qarshilik bildiruvchi bog'lovchilar?", options: ['however', 'moreover', 'nevertheless', 'whereas', 'therefore'], answer: [0, 2, 3] },
  { id: 'iq8', type: 'fill', prompt: 'It is widely ___ (believe) that education reduces poverty.', answer: 'believed' },
  { id: 'iq9', type: 'single', prompt: 'Not only ___ cheaper, but public transport is also greener.', options: ['it is', 'is it', 'it was', 'does it'], answer: 1 },
  { id: 'iq10', type: 'match', prompt: 'Match the academic word with its meaning:', pairs: [['crucial', 'hal qiluvchi'], ['decline', 'kamayish'], ['benefit', 'foyda'], ['approach', 'yondashuv']] },
  { id: 'iq11', type: 'order', prompt: 'Put the words in order:', items: ['The', 'data', 'suggest', 'that', 'prices', 'will', 'rise'] },
  { id: 'iq12', type: 'single', prompt: 'If the government ___ more in schools, results would improve.', options: ['invests', 'invested', 'will invest', 'has invested'], answer: 1 },
]);

const c1 = exam('Advanced Test (C1)', 'C1', 25, [
  { id: 'c1q1', type: 'single', prompt: 'Hardly ___ the station when the train left.', options: ['we had reached', 'had we reached', 'we reached', 'did we reached'], answer: 1, explanation: 'Hardly bilan inversiya: Hardly had we…' },
  { id: 'c1q2', type: 'single', prompt: 'If I had taken that job, I ___ in London now.', options: ['would live', 'would be living', 'will live', 'had lived'], answer: 1, explanation: "Mixed conditional: o'tmish sabab → hozirgi natija." },
  { id: 'c1q3', type: 'single', prompt: 'It is essential that every applicant ___ a copy of their passport.', options: ['submits', 'submit', 'submitted', 'will submit'], answer: 1 },
  { id: 'c1q4', type: 'single', prompt: '___ the noise, she managed to concentrate.', options: ['Although', 'In spite of', 'Even though', 'However'], answer: 1 },
  { id: 'c1q5', type: 'single', prompt: 'What I find most frustrating ___ the lack of information.', options: ['are', 'is', 'were', 'be'], answer: 1, explanation: "What-cleft — what-qism birlik: is." },
  { id: 'c1q6', type: 'single', prompt: 'She ___ the email; she replied within minutes.', options: ["can't have read", 'must have read', 'might not read', "mustn't have read"], answer: 1 },
  { id: 'c1q7', type: 'single', prompt: '___ by the results, the team decided to continue the research.', options: ['Encouraging', 'Encouraged', 'To encourage', 'Having encouraging'], answer: 1 },
  { id: 'c1q8', type: 'fill', prompt: 'The new policy had a ___ (significance) impact on unemployment.', answer: 'significant' },
  { id: 'c1q9', type: 'fill', prompt: 'His argument was completely ___ (convince) — nobody believed him.', answer: 'unconvincing' },
  { id: 'c1q10', type: 'fill', prompt: 'There has been widespread ___ (oppose) to the plan.', answer: 'opposition' },
  { id: 'c1q11', type: 'fill', prompt: 'The ___ (reliable) of the data has been questioned.', answer: 'reliability' },
  { id: 'c1q12', type: 'single', prompt: 'The company has ___ a decision to close two factories.', options: ['done', 'taken', 'made up', 'put'], answer: 1, explanation: 'take / make a decision — ikkalasi ham bor, variantlarda faqat taken.' },
  { id: 'c1q13', type: 'single', prompt: 'The government must ___ the problem of youth unemployment.', options: ['tackle', 'solve out', 'make', 'deal'], answer: 0 },
  { id: 'c1q14', type: 'single', prompt: 'Choose the closest meaning: "The evidence is inconclusive."', options: ['The evidence proves the theory.', 'The evidence does not lead to a firm conclusion.', 'There is no evidence.', 'The evidence is false.'], answer: 1 },
  { id: 'c1q15', type: 'single', prompt: 'Choose the closest meaning: "She was reluctant to comment."', options: ['She was eager to comment.', 'She did not want to comment.', 'She commented loudly.', 'She forgot to comment.'], answer: 1 },
  { id: 'c1q16', type: 'single', prompt: 'The meeting was ___ off because the director was ill.', options: ['called', 'put', 'turned', 'given'], answer: 0 },
  { id: 'c1q17', type: 'single', prompt: 'I can\'t ___ with his rudeness any longer.', options: ['put off', 'put up', 'get over', 'come up'], answer: 1 },
  { id: 'c1q18', type: 'single', prompt: "\"The findings, while preliminary, suggest a link between sleep and memory.\" What does the writer imply?", options: ['The link is proven.', 'More research is needed.', 'There is no link.', 'Sleep harms memory.'], answer: 1 },
  { id: 'c1q19', type: 'single', prompt: "\"Far from reducing traffic, the new road attracted even more cars.\" What happened?", options: ['Traffic fell.', 'Traffic increased.', 'The road was closed.', 'Nothing changed.'], answer: 1 },
  { id: 'c1q20', type: 'multiple', prompt: 'Which TWO sentences are grammatically correct?', options: ['Never have I seen such a view.', 'Never I have seen such a view.', 'Rarely does she complain.', 'Rarely she complains.'], answer: [0, 2] },
  { id: 'c1q21', type: 'single', prompt: "It's high time the government ___ something about pollution.", options: ['does', 'did', 'will do', 'has done'], answer: 1 },
  { id: 'c1q22', type: 'single', prompt: 'The proposal was rejected on the ___ that it was too expensive.', options: ['reason', 'grounds', 'cause', 'basis of'], answer: 1, explanation: 'Barqaror ibora: on the grounds that.' },
  { id: 'c1q23', type: 'match', prompt: 'Match the word with its synonym:', pairs: [['substantial', 'considerable'], ['obtain', 'acquire'], ['diminish', 'decrease'], ['crucial', 'vital']] },
  { id: 'c1q24', type: 'order', prompt: 'Put the words in order:', items: ['Not', 'only', 'did', 'he', 'win,', 'but', 'he', 'also', 'broke', 'the', 'record.'] },
  { id: 'c1q25', type: 'fill', prompt: 'The results were ___ (expect): nobody had predicted them.', answer: 'unexpected' },
]);

export const exams = [a1, sampleExam, b1, b2, ielts, c1];
