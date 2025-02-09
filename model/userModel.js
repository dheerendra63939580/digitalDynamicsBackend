const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name cannot be empty"]
    },
    email: {
        type: String,
        required: [true, "email cannot be empty"]
    },
    password: {
        type: String,
        required: [true, "password cannot be empty"]
    },
    mobile: {
        type: String,
        required: [true, "mobile cannot be empty"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    order: [
        {
            orderId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            status: {
                type: String,
                enum: ["Pending", "Shipped", "Delivered", "Cancelled"]
            },
            date: {
                type: Date,
                default: Date.now
            },
            quantity: {
                type: Number,

            }
        }
    ]

});

const User = mongoose.model("User", userSchema);
module.exports = {User}