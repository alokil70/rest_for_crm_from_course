const Sequelize = require('sequelize')
const db = require('../config/database')

const Product = db.define('product', {

    productName: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DOUBLE
    },
    imageName: {
        type: Sequelize.STRING
    }
});

Product.sync()

module.exports = Product;
