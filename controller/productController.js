const { Product } = require("../model/productModel")

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