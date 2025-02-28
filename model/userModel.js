const mongoose = require("mongoose");


const AddressSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  })

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name cannot be empty"]
    },
    email: {
        type: String,
        required: [true, "email cannot be empty"],
        unique: true
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
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            },
            status: {
                type: String,
                enum: ["Pending", "Shipped", "Delivered", "Cancelled"]
            },
            date: {
                type: Date,
                default: Date.now()
            },
            quantity: {
                type: Number,

            },
            address: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            }
        }
    ],
    addresses: [AddressSchema]

});

const User = mongoose.model("User", userSchema);
module.exports = {User}