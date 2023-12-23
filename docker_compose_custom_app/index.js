const express = require('express');
const app = express();
const port = 3000;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()}: ${req.method} ${req.url}`);
  next();
});

// Route to handle the root URL
app.get('/', (req, res) => {
  res.send('Hello, Dockerized World!');
});

// Route to handle a custom endpoint
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Greetings from the API!' });
});

// Route to handle 404 errors
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
