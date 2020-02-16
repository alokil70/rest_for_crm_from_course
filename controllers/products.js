const Product = require('../models/Product')

module.exports.getAll = function(req, res) {
    Product.findAll()
        .then(products => {
            res.json(products);
            res.status(200)
        })
}

module.exports.create = function(req, res) {
    Product.create()
        .then(products => {
            res.json(products);
            res.status(200)
        })
}

