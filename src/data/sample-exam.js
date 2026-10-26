// Demo exam in the open "nge-exam" format — every question type at least once.

export const sampleExam = {
  format: 'nge-exam',
  version: 1,
  title: 'General English Mock Test (A2–B1)',
  passPercent: 70,
  timeLimitMin: 15,
  questions: [
    { id: 'q1', type: 'single', prompt: 'What time ___ the train leave?', options: ['do', 'does', 'is', 'has'], answer: 1, explanation: "'the train' = it → does." },
    { id: 'q2', type: 'single', prompt: 'I have lived in Bukhara ___ ten years.', options: ['since', 'for', 'during', 'ago'], answer: 1, explanation: "Davomiylik → for; boshlanish nuqtasi → since." },
    { id: 'q3', type: 'multiple', prompt: 'Select ALL the irregular verbs.', options: ['play', 'go', 'write', 'watch', 'eat'], answer: [1, 2, 4], explanation: 'go-went, write-wrote, eat-ate.' },
    { id: 'q4', type: 'fill', prompt: 'She ___ (be) at home yesterday evening.', answer: 'was', explanation: 'Past simple of be (I/he/she/it) → was.' },
    { id: 'q5', type: 'fill', prompt: 'Opposite of "cheap":', answer: ['expensive', 'dear'], explanation: 'cheap ↔ expensive.' },
    { id: 'q6', type: 'order', prompt: 'Put the words in order:', items: ['Have', 'you', 'ever', 'been', 'abroad?'], explanation: 'Have + subject + ever + V3.' },
    { id: 'q7', type: 'match', prompt: 'Match the word to its meaning:', pairs: [['journey', 'safar'], ['deadline', 'muddat'], ['luggage', 'yuk'], ['salary', 'maosh']], explanation: 'Visual vocabulary bo‘limidagi so‘zlar.' },
    { id: 'q8', type: 'single', prompt: 'If you ___ hard, you will pass the exam.', options: ['study', 'studied', 'will study', 'would study'], answer: 0, explanation: 'First conditional: If + present, will + V1.' },
    { id: 'q9', type: 'single', prompt: 'Choose the correct sentence.', options: ['He can to swim.', 'He cans swim.', 'He can swim.', 'He can swims.'], answer: 2, explanation: "Modal + V1 (to'siz, -s'siz)." },
    { id: 'q10', type: 'single', prompt: 'This is ___ most interesting book I have read.', options: ['a', 'an', 'the', '—'], answer: 2, explanation: 'Superlative → the.' },
  ],
};
