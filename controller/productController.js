const { Product } = require("../model/productModel")
const { User } = require("../model/userModel")
const mongoose = require("mongoose")
module.exports.findAllProductsCategoryWise = async (req, res) => {
    try {
        const response = await Product.find({});
        // console.log(response)
        let ac = 0, mobile = 0, ref = 0, ad_vd = 0, laptop = 0, kitchen = 0;
        response.forEach((value) => {
            switch (value.category) {
                
                case 'air conditioner':
                    ac += 1;
                    break;
                case 'refrigerator':
                    ref += 1;
                    break;
                case 'audio video':
                    ad_vd += 1;
                    break;
                case 'laptop':
                    laptop += 1;
                    break;
                case 'kitchen appliances':
                    kitchen += 1;
                    break;
                case 'mobile':
                    mobile += 1;
                    break;
            }
        })
        const data = {
            "air conditioner": ac,
            mobile,
            refrigerator: ref,
            "audio video": ad_vd,
            "kitchen appliances": kitchen,
            laptop
        }
        res.status(200).json({
            message: "products found successfully",
            data: data,
        })

    } catch (err) {
        console.log(err)
    }
}

module.exports.getProductListing = async (req, res) => {
    const {category} = req.query;
    try {
        const data = await Product.find({category}).select('_id name ratings price image category');
        res.status(200).json({
            message: "product found successfully",
            data: data
        })
    } catch(err) {
        console.log(err)
    }
}
module.exports.findProductById = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await Product.findById(id);
        res.status(200).json({
            message: "product found successfully",
            data: data
        })
    } catch(err) {
        console.log(err)
    }
}
module.exports.purchaseProduct = async (req, res) => {
    try {
        const {products: allProducts, addressId} = req.body;
        const {id} = req.params;
        let purchasedProducts = [];
        let failedProducts = [];
        for(let {_id, quantity, price} of allProducts) {
            if (!mongoose.Types.ObjectId.isValid(_id)) {
                failedProducts.push({ _id, reason: "Invalid product ID" });
                continue;
            }
            const product = await Product.findById(_id);
            if(!product) {
                failedProducts.push({_id, reason: "Porduct does not exist"});
                continue;
            } else if(product?.stocks < quantity || price !== product.price) {
                failedProducts.push({ _id, reason: "Product is out of stocks or price has been changed" });
                continue;
            } else {
                if(product?.stocks >= quantity && price === product.price) {
                    await Product.findByIdAndUpdate(_id, {stocks: product?.stocks - quantity}, {new: true});
                    await User.findByIdAndUpdate(id, {$push: {order: {
                        _id,
                        quantity,
                        status: "Pending",
                        address: addressId,
                    }}})
                    purchasedProducts.push(_id);
                }
            }
        }
        res.status(200).json({
            message: purchasedProducts?.length ? "Products purchased successfully" : 
                "Either price of product is increased or product is out of stock",
            data: {failedProducts, purchasedProducts}
        })
        
    } catch(err) {
        console.log(err)
    }
}