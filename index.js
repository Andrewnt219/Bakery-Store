const fs = require('fs');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const storage = require('./public/database/storage');
const banners = require('./public/database/banners');
const users = require('./public/database/users')

const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Web Server is running at ' + PORT + ' ...'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        categories: storage.categories,
        bestSellers: storage.bestSellers.products,
        banners: banners,
        homeActive: true
    });
})

app.get('/products', (req, res) => {
    res.render('products', {
        title: 'Products',
        productsActive: true,
        obj: storage.products,
        categories: storage.categories
    });
})

app.get('/products/:name', (req, res) => {
    let isCategory = false;
    let obj;
    for (const _category of storage.categories) {
        if (req.params.name == _category.name) {
            obj = {..._category};
        }
    }

    if (!isCategory) {
        for (const _product of storage.products) {
            if (req.params.name == _product.name)
                obj = {..._product};
        }
    }
    res.render('products', {
        location:req.params.name,
        obj:obj,
        productsActive: true,
        title: obj.name,
        categories:storage.categories
    })
})

app.post('/login', (req,res) => {
    fs.appendFile('./public/database/login.txt', `${JSON.stringify(req.body)}\n`, (err) => {
        if(err) throw err;
    });
    
    let userInfo;
    for (user of users) {
        if (req.body.username === user.username && req.body.password === user.password) {
            userInfo = {...user};
        }
    }
    if(userInfo) {
        res.render('form', {
            user:userInfo,
        })
    } else {
        res.render('form', {
            error: 'User not found'
        })
    }
})

app.post('/register', (req,res) => {
    fs.appendFile('./public/database/register.txt', `${JSON.stringify(req.body)}\n`, (err) => {
        if(err) throw err;
    });
    res.render('form', {
        info:req.body,
    })
})
