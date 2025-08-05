const express = require('express');
const router = express.Router();
const products = require('../data/products');

router.get('/', (req, res) => {
    res.json(products);
});

router.get('/:id', (req, res) => {
    const product = products.find(product => product.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
});

router.get('/category/:category', (req, res) => {
    const category = req.params.category;
    const filteredProducts = products.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
    );
    if (filteredProducts.length === 0) {
        return res.status(404).json({ message: 'No products found in this category' });
    }
    res.json(filteredProducts);
});



module.exports = router;
