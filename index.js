const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files from 'static' directory
app.use(express.static(path.join(__dirname, 'static')));

// Import and use the router from 'router/blog.js'
app.use('/', require (path.join(__dirname,'routes/blog.js')))

// Start the server
app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});
