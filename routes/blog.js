const express = require('express');
const path = require('path');
const blogs = require('../Data/blogs');
const router = express.Router();

// Route: Home Page
router.get('/', (req, res) => {
    res.render('home'); // views/home.handlebars
});

// Route: Blog Home Page - list of blogs
router.get('/blog', (req, res) => {
    res.render('bloghome', { blogs }); // views/bloghome.handlebars
});

// Route: Single Blog Page
router.get('/blogpost/:slug', (req, res) => {
    const myBlog = blogs.find((e) => e.slug === req.params.slug);

    if (myBlog) {
        res.render('blogpage', { blog: myBlog }); // views/blogpage.handlebars
    } else {
        res.status(404).send('Blog not found');
    }
});

module.exports = router;
