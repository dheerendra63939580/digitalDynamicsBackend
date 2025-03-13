const { findAllProductsCategoryWise, getProductListing, findProductById, purchaseProduct, cancelOrder } = require("../controller/productController");
const { checkUserById } = require("../middleware/isUserExist")
const { tokenValidation } = require("../middleware/tokenValidation")

const express = require('express');
const router = express.Router();

router.get('/category-data', findAllProductsCategoryWise);
router.get('/', getProductListing);
router.get('/:id', findProductById);
router.post("/purchase/:id", tokenValidation, checkUserById, purchaseProduct)
router.delete('/:productId', tokenValidation, cancelOrder)

module.exports = router;