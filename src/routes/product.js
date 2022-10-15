const express = require('express');
const router = express.Router();
const productosControl=require('../controladores/productControl.js')

// Busqueda
router.route('/search?').get(productosControl.getProductbyFilter);

// Get Productos ID
router.route('/:id').get(productosControl.getProductbyId);

// Get Productos
router.route('/').get(productosControl.getProduct);


module.exports = router;