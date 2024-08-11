const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint to get quiz questions
app.get('/questions', (req, res) => {
  fs.readFile('questions.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading questions file:', err);
      res.status(500).json({ error: 'Failed to load questions' });
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
