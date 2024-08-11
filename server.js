const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Sample questions
const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  }
];

// Endpoint to get quiz questions
app.get('/questions', (req, res) => {
  res.json(questions);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
