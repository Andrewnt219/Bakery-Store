const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const storage = require('./public/database/storage');
const banners = require('./public/database/banners');

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
        // res.render('products', {
        //     isCategory: false,
        //     name: category.name,
        //     productsActive: true
        // })
    }

    res.render('products', {
        obj:obj,
        productsActive: true,
        title: obj.name
    })
})

app.post('/', (req,res) => {
    const {username, password, passwordAgain, phone, email} = req.body;
    const _username = "I like"
    const _password = "1102"
    res.render('form', {
        info:req.body
    })
})
