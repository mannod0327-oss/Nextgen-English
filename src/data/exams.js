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

export const exams = [a1, sampleExam, b1, b2];
