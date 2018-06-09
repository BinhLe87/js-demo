'use strict';

var warehouse = require('./warehouse');


class Product {

    constructor(name, price, description, eventEmitter) {

        this.name = name;
        this.price = price;
        this.description = description;
    }

    addToWarehouse() {

        warehouse.addProduct(this);
    }


}

module.exports = Product;
