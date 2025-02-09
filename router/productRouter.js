const { findAllProductsCategoryWise, getProductListing, findProductById } = require("../controller/productController");

const express = require('express');
const router = express.Router();

router.get('/category-data', findAllProductsCategoryWise);
router.get('/', getProductListing);
router.get('/:id', findProductById);

module.exports = router;