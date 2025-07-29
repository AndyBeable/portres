// This is the most basic Express server possible
const express = require('express');

// Create an Express app
const app = express();

// Define a port
const PORT = 5000;

// Create our first route
app.get('/', (req, res) => {
  res.json({ message: 'Hello! This is our first API endpoint' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 