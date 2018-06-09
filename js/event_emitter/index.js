var Product = require('./product');

var product_1 = new Product('sp-1', 100, 'desc sp-1');
var product_2 = new Product('sp-2', 200, 'desc sp-2');

product_1.addToWarehouse();
product_2.addToWarehouse();

