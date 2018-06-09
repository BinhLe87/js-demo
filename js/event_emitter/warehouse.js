var EvenEmitter = require('events').EvenEmitter;


exports = module.exports = WareHouse();

var self;

function WareHouse() {

    if (!self) {

        if (this instanceof WareHouse) {

            self = this;
        } else {

            return new WareHouse();
        }
    }

    self.products = [];
    
}

WareHouse.prototype.addProduct = function addProduct(product) {
    var Product = require('./product');

    if (product instanceof Product) {

    console.log(typeof product);

        self.products.push(product);

        console.log(`da them vao kho sp co name la '${product.name}'`);
        console.log(`tong so sp trong warehouse la ${self.products.length}`);
     }

    
}