const express = require('express');
const exphbs = require('express-handlebars');
const categories = require('./public/database/categories')
const bestSellers = require('./public/database/bestsellers')
const banners = require('./public/database/banners')

const app = express();
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Web Server is running at ' + PORT + ' ...'));

app.use(express.static('public'));

app.get('/',(req,res) => {
    res.render('home', {
        title: 'Home Page',
        categories:categories,
        bestSellers:bestSellers,
        banners:banners,
        homeActive: true
    });
})
 
app.get('/products',(req,res) => {
    res.render('products', {
        title: 'Products',
        productsActive: true,
        categories:categories,

    });
})
 
for (let category of categories) {
    app.get(`/products/:category`, (req,res) => {
        category
        res.render('products', {
            category: req.params.category,
            productsActive: true
        })
    })
}
/* app.get('/register',(req,res) => {
    res.render('register', {
        title: 'Register'
    });
})
 
app.get('/login',(req,res) => {
    res.render('login', {
        title: 'Login'
    });
}) */
 