const express = require('express');
const router = express.Router();
const categoriaControl= require('../controladores/categoryControl.js');

// Get categories
router.route('/').get(categoriaControl.getAllCategories);

module.exports = router; 