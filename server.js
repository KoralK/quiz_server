const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Path to the questions JSON file
const questionsFilePath = path.join(__dirname, 'questions.json');

// Endpoint to get quiz questions
app.get('/questions', (req, res) => {
    // Read the questions from the JSON file
    fs.readFile(questionsFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading questions file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        // Set headers to disable caching
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');

        // Send the questions as a JSON response
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
