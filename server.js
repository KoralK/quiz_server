const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const questions = [
  {
    questionText: 'What is the capital of France?',
    answers: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    correctAnswerIndex: 2,
  },
  {
    questionText: 'What is 2 + 2?',
    answers: ['3', '4', '5', '6'],
    correctAnswerIndex: 1,
  },
  // Add more questions here
];

app.get('/questions', (req, res) => {
  res.json(questions);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
