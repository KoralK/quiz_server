const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint to get quiz questions
app.get('/questions', (req, res) => {
  const filePath = path.join(__dirname, 'questions.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading questions.json:', err);
      return res.status(500).json({ error: 'Failed to read questions file' });
    }

    try {
      const questions = JSON.parse(data);
      res.set('Cache-Control', 'no-store');
      res.json(questions);
    } catch (parseErr) {
      console.error('Error parsing JSON data:', parseErr);
      res.status(500).json({ error: 'Failed to parse questions data' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
