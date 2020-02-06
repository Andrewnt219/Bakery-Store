class Category {
    constructor(name, img, desc, products, mode) {
        this.name = name || "Literally forgot to name";
        this.img = img || "";
        this.desc = desc || "";
        if(!mode)
        this.products = products.filter(product => this.name === product.category);
        else
        this.products = products.filter(product => product[mode]);
        this.size = this.products.length;
    }
    add(product) {
        for (let p of this.products) {
            if(product.name === p.name)
                return;
        }
        this.products.push(product);
    }

}

class Product {
    constructor(name, price, bestSeller, src, category) {
        this.name = name || "404";
        this.price = price || 0;
        this.bestSeller = bestSeller || false;
        this.src = src || '__err_404';
        this.category = category || 'other';
        this.link = encodeURI(`/products/${this.name}`);
        this.rating = this.bestSeller?(Math.random() * 1 + 4).toFixed(1):(Math.random() * 3 + 2).toFixed(1);
    }
}

const product0 = new Product(
    'Pancake Brownies',
    5.99,
    false,
    '/img/products/bn-0.jpg',
    'Brownies'
);
const product1 = new Product(
    'Coconut Brownies',
    4.99,
    false,
    '/img/products/bn-1.jpg',
    'Brownies'
);
const product2 = new Product(
    'Fruit Brownies',
    5.99,
    false,
    '/img/products/bn-2.jpg',
    'Brownies'
);
const product3 = new Product(
    'Chocolate Brownies',
    6.99,
    false,
    '/img/products/bn-3.jpg',
    'Brownies'
);
const product4 = new Product(
    'Mini Brownies',
    8.99,
    false,
    '/img/products/bn-4.jpg',
    'Brownies'
);
const product5 = new Product(
    'Nut Brownies',
    9.99,
    true,
    '/img/products/bn-5.jpg',
    'Brownies'
);
const product6 = new Product(
    'Moon Cheese',
    8.99,
    true,
    '/img/products/cc-0.jpg',
    'Cheese Cakes'
);
const product7 = new Product(
    'Fruit Cheese',
    8.99,
    false,
    '/img/products/cc-1.jpg',
    'Cheese Cakes'
);
const product8 = new Product(
    'Loaf Cheese',
    12.99,
    true,
    '/img/products/cc-2.jpg',
    'Cheese Cakes'
);
const product9 = new Product(
    'Pie Cheese',
    4.99,
    true,
    '/img/products/cc-3.jpg',
    'Cheese Cakes'
);
const product10 = new Product(
    'Cupcake',
    3.99,
    false,
    '/img/products/o-0.jpg',
    'Others'
);
const product11 = new Product(
    'Donut',
    3.99,
    true,
    '/img/products/o-1.jpg',
    'Others'
);
const product12 = new Product(
    'Apple Pie',
    3.99,
    true,
    '/img/products/o-2.jpg',
    'Others'
);
const product13 = new Product(
    'Chocolate Parfait 1',
    7.99,
    false,
    '/img/products/pf-0.jpg',
    'Parfait'
);
const product14 = new Product(
    'Chocolate Parfait 2',
    7.99,
    false,
    '/img/products/pf-1.jpg',
    'Parfait'
);
const product15 = new Product(
    'Cream Brownies',
    8.49,
    false,
    '/img/products/bn-6.jpg',
    'Brownies'
);
const product16 = new Product(
    'Brown Brownies',
    8.49,
    true,
    '/img/products/bn-7.jpg',
    'Brownies'
);
const product17 = new Product(
    'Toasty Yogurt',
    4.99,
    false,
    '/img/products/yg-0.jpg',
    'Yogurt'
);
const product18 = new Product(
    'Japanese Yogurt',
    4.99,
    true,
    '/img/products/yg-1.jpg',
    'Yogurt'
);
const product19 = new Product(
    'Fruit Yogurt',
    4.99,
    false,
    '/img/products/yg-2.jpg',
    'Yogurt'
);
const product20 = new Product(
    'Ice Cream Yogurt',
    4.99,
    false,
    '/img/products/yg-3.jpg',
    'Yogurt'
);
const product21 = new Product(
    'Hyouka',
    4.99,
    true,
    '/img/products/yg-4.jpg',
    'Yogurt'
);

const products = [];
for (let i = 0; i < 22; i++) {
    products.push(eval(`product${i}`));
}

const brownies = new Category('Brownies', 'category-brownies.jpg', 'A chocolate brownie is a square or rectangular, chocolate baked treat. Brownies come in a variety of forms and may be either fudgy or cakey, depending on their density',products);
const cheesecake = new Category('Cheese Cakes', 'category-cheese-cake.jpg', 'Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese, eggs, and sugar',products);
const parfait = new Category('Parfait', 'category-parfait.jpg', 'Parfait is two types of frozen dessert; in France, where the dish originated, parfait is made by boiling cream, egg, sugar and syrup to create a custard-like puree',products);
const yogurt = new Category('Yogurt', 'category-yogurt.jpg', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore harum porro minus. Unde debitis iste quas enim sed quia, laboriosam velit nemo?',products);
const others = new Category('Others', 'category-others.jpg', 'Assorted desserts and more ...',products)
const bestSellers = new Category('Best Sellers','','The most wanted desserts', products, 'bestSeller')

const categories = [brownies, cheesecake, parfait, yogurt, others]

module.exports.products = products;
module.exports.categories = categories;
module.exports.bestSellers = bestSellers;