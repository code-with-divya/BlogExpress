const express = require('express')
const path = require('path')
const blogs = require('../Data/blogs')
const router = express.Router()

// router create
router.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../templete/index.html'))
})

router.get('/blog', (req, res) => {
      // blogs.forEach(e => {
      //       console.log(e.title)

      // });
      res.sendFile(path.join(__dirname, '../templete/bloghome.html'))
})
router.get('/blogpost/:slug', (req, res) => {
      myBlog = blogs.filter((e)=>{  
            return e.slug == req.params.slug
      })

      res.sendFile(path.join(__dirname, '../templete/blogpage.html'));
});

module.exports = router