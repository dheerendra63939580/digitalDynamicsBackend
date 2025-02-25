const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name cannot be empty"]
    },
    description: {
        type: String, 
        required: [true, "description cannot be empty"]
    },
    price: {
        type: Number,
        required: [true, "price cannot be empty"],
    },
    category: {
        type: String,
        required: [true, "category cannot be empty"],
        enum: ["air conditioner", "mobile", "refrigerator", "laptop", "audio video", "kitchen appliances"]
    },
    brand: {
        type: String,
        required: [true, "brand cannot be empty"]
    },
    stocks: {
        type: Number,
        required: [true, "stocks cannot be empty"]
    },
    image: {
        type: String,
        required: [true, "image cannot be empty"]
    },
    ratings: {
        type: Number,
        default: 0
    },
    specifications: {
        type: Map,
        of: String
    },
    reviews: [
        {
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            comment: {
                type: String,
                required: [true, "comment cannot be empty"]
            },
            rating: {
                type: Number,
                required: [true, "rating cannot be empty"],
                min: 1,
                max: 5
            },
            date: {
                type: Date,
                default: Date.now()
            }
        }
    ]
});
module.exports.Product = mongoose.model("Product", productSchema);