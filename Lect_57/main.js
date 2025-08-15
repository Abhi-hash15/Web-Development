const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let sitename = "Adidas";
    let searchtext = "Search Now";
    let arr = ["Hey", 54, 65];
    res.render("main", { sitename, searchtext, arr });
});

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas Shoes";
    let blogContent = "Adidas shoes are known for their quality and style.";
    res.render("blogpost", { blogTitle, blogContent });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
