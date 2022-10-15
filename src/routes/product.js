const express = require('express');
const router = express.Router();
const productosControl=require('../controladores/productControl.js')

// Busqueda
router.route('/search?').get(productosControl.getProductsByFilters);

// Get Productos ID
router.route('/:id').get(productosControl.getProductById);

// Get Productos
router.route('/').get(productosControl.getAllProducts);


module.exports = router;