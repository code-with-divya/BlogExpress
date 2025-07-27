const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// Set up Handlebars view engine (compatible with v6+)
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



// Serve static files from 'static' directory
app.use(express.static(path.join(__dirname, 'static')));

// Use blog router
app.use('/', require(path.join(__dirname, 'routes/blog.js')));

// Start server
app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});
