class Storage {
    constructor(products) {
        this.products =  products || [];
        this.noOfProducts = 0; 
    }
    add(product) {
        this.products.push(product);
        return ++this.noOfProducts;
        
    }
    getProducts() {
        return this.products;
    }
    
}

class Product {
    constructor(name,price,bestSeller,link,category) {
        this.name = name || "Literally forgot to name";
        this.price = price || 0;
        this.bestSeller = bestSeller || false;
        this.link = link || '__err_404';
        this.category = category || 'other';
    }
}
class Category extends Storage {
    constructor(name,img,desc,products) {
        super();
        this.name = name || "Literally forgot to name";
        this.img = img || "";
        this.desc = desc || "";
        this.products = products || [];
        this.noOfProducts = this.products.length;
    }
    update() {
        let products = [...super.getProducts()];
        for(let product in products) {
            if(product.category === this.name)
                this.add(product);
        }
        return this.noOfProducts;
    }

}

const product0  = new Product(
    'Pancake Brownies',
    5.99,
    false,
    '/img/product/bn-0.jpg',
    'Brownies'
);
const product1  = new Product(
    'Coconut Brownies',
    4.99,
    false,
    '/img/product/bn-1.jpg',
    'Brownies'
);
const product2  = new Product(
    'Fruit Brownies',
    5.99,
    false,
    '/img/product/bn-2.jpg',
    'Brownies'
);
const product3  = new Product(
    'Chocolate Brownies',
    6.99,
    false,
    '/img/product/bn-3.jpg',
    'Brownies'
);
const product4  = new Product(
    'Mini Brownies',
    8.99,
    false,
    '/img/product/bn-4.jpg',
    'Brownies'
);
const product5  = new Product(
    'Nut Brownies',
    9.99,
    false,
    '/img/product/bn-5.jpg',
    'Brownies'
);
const product6  = new Product(
    'Moon Cheese',
    8.99,
    false,
    '/img/product/cc-0.jpg',
    'Cheese Cakes'
);
const product7  = new Product(
    'Fruit Cheese',
    8.99,
    false,
    '/img/product/cc-1.jpg',
    'Cheese Cakes'
);
const product8  = new Product(
    'Loaf Cheese',
    12.99,
    false,
    '/img/product/cc-2.jpg',
    'Cheese Cakes'
);
const product9  = new Product(
    'Pie Cheese',
    4.99,
    false,
    '/img/product/cc-3.jpg',
    'Cheese Cakes'
);
const product10  = new Product(
    'Cupcake',
    3.99,
    false,
    '/img/product/o-0.jpg',
    'Others'
);
const product11  = new Product(
    'Donut',
    3.99,
    false,
    '/img/product/o-1.jpg',
    'Others'
);
const product12  = new Product(
    'Apple Pie',
    3.99,
    false,
    '/img/product/o-2.jpg',
    'Others'
);
const product13  = new Product(
    'Chocolate Parfait 1',
    7.99,
    false,
    '/img/product/pf-0.jpg',
    'Parfait'
);
const product14  = new Product(
    'Chocolate Parfait 2',
    7.99,
    false,
    '/img/product/pf-0.jpg',
    'Parfait'
);
const product15  = new Product(
    'Cream Brownies',
    8.49,
    false,
    '/img/product/bn-6.jpg',
    'Brownies'
);
const product16  = new Product(
    'Brown Brownies',
    8.49,
    false,
    '/img/product/bn-7.jpg',
    'Brownies'
);
const product17  = new Product(
    'Toasty Yogurt',
    4.99,
    false,
    '/img/product/yg-0.jpg',
    'Yogurt'
);
const product18  = new Product(
    'Toasty Yogurt',
    4.99,
    false,
    '/img/product/yg-1.jpg',
    'Yogurt'
);
const product19  = new Product(
    'Toasty Yogurt',
    4.99,
    false,
    '/img/product/yg-2.jpg',
    'Yogurt'
);
const product20  = new Product(
    'Toasty Yogurt',
    4.99,
    false,
    '/img/product/yg-3.jpg',
    'Yogurt'
);
const product21  = new Product(
    'Toasty Yogurt',
    4.99,
    false,
    '/img/product/yg-4.jpg',
    'Yogurt'
);

const brownies = new Category('Brownies','category-brownies.jpg','A chocolate brownie is a square or rectangular, chocolate baked treat. Brownies come in a variety of forms and may be either fudgy or cakey, depending on their density');
const cheesecake = new Category('Cheese Cakes','category-cheese-cake.jpg','Cheesecake is a sweet dessert consisting of one or more layers. The main, and thickest layer, consists of a mixture of soft, fresh cheese, eggs, and sugar');
const parfait = new Category('Parfait','category-parfait.jpg','Parfait is two types of frozen dessert; in France, where the dish originated, parfait is made by boiling cream, egg, sugar and syrup to create a custard-like puree');
const yogurt = new Category('Yogurt','category-yogurt.jpg','Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore harum porro minus. Unde debitis iste quas enim sed quia, laboriosam velit nemo?');
const others = new Category('Others','category-others.jpg','Assorted desserts and more ...')

const storage = new Storage();
for(let i =0; i < 22; i++) {
    storage.add(eval(`product${i}`));
}
brownies.update();
cheesecake.update();
parfait.update();
yogurt.update();
others.update();

const categories = [brownies,cheesecake,parfait,yogurt,others]

module.exports = categories;