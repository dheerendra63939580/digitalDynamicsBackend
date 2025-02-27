const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../model/userModel');
const { tokenGenerator } = require('../helper');
module.exports.signup = async (req, res) => {
   try {
        const {name, email, password, mobile} = req.body;
        const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: "Email already in use" });
            }
        bcrypt.hash(password, 11, async function(err, hash) {
            if(err) {
                console.log(err);
            } else {
                const newUser = new User({
                    name,
                    email,
                    password: hash,
                    mobile
                });
                await newUser.save();
                const token = tokenGenerator(name, email);
                res.status(201).json({
                    message: "Account Created Successfully",
                    data: {token}
                })
            }
        });
   } catch(err) {
    console.log(err)
   }

}
module.exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const existingUser = await User.findOne({email})
        if (!existingUser) {
            return res.status(400).json({ message: "Invaid Credentials" });
        }
        bcrypt.compare(password, existingUser.password, async function(err, result) {
            if(result) {
                const token = tokenGenerator(existingUser.name, existingUser.email);
                res.status(200).json({
                    message: "Logged in successfully",
                    data: {token}
                })
            }
            else {
                res.status(400).json({
                    message: "Invalid credentials"
                })
            }
        });
    } catch(err) {
        console.log(err)
    }
}

module.exports.getProfile = async (req, res) => {
    try {
        const token = req.headers["authorization"]?.split(" ")?.[1];
         const { email } = jwt.verify(token, process.env.JSONWEBTOKEN_SECRET);
         const data = await User.findOne({email}).select("name _id mobile email addresses");
         res.status(200).json({
            message: "Profile found successfully",
            data
         })
    } catch(err) {
        console.log(err)
    }
}
module.exports.updateProfile = async (req, res) => {
    try {
        const { isUpdatePassword, name, mobile, oldPassword, newPassword, id } = req.body;
        const existingUser = await User.findById(id)
        if(isUpdatePassword) {
            const isRight = bcrypt.compare(oldPassword, existingUser.password);
            if(!isRight) {
                res.status(400).json({
                    message: "Enter correct password to update the password"
                })
            }
           const hash = await bcrypt.hash(newPassword, 11);
           const data = await User.findByIdAndUpdate(id, {name, mobile, password: hash}, {new: true}).select("name mobile");
           res.status(200).json({
            message: "Details updated successfully",
            data
           });
        } else {
            const data = await User.findByIdAndUpdate(id, {name, mobile}, {new: true}).select("name mobile");
           res.status(200).json({
            message: "Details updated successfully",
            data
           });
        }



    } catch(err) {
        console.log(err)
    }
}

module.exports.addAddress = async (req, res) => {
    try { 
        const { id } = req.params;
        const data = await User.findByIdAndUpdate(id, {$push: {addresses: req.body}}, {new: true, runValidators: true});
        res.status(201).json({
            message: "Address added successfully",
        })
    } catch(err) {
        console.log(err)
    }
}

module.exports.updateAddress = (req, res) => {
    const {userId, addressId} = req.params;
    if(!userId || !addressId) {
        return res.status(400).json({
            message: "User id or address id is empty"
        })
    }
    User.findOneAndUpdate(
        {_id: userId, "addresses._id": addressId},
        {$set: {"addresses.$": {...req.body, _id: addressId}}},
        {runValidators: true}
    )
    .then((response) => {
        if (!response) {
            return res.status(404).json({ message: "User or address not found" });
        }
        res.status(200).json({
            message: "Address updated successfully"
        })
    }).catch((err) => {
        console.log(err)
    })
}


module.exports.deleteAddress = (req, res) => {
    const { userId, addressId } = req.params;

    if (!userId || !addressId) {
        return res.status(400).json({
            message: "User id or address id is empty"
        });
    }

    User.findOneAndUpdate(
        { _id: userId },
        { $pull: { addresses: { _id: addressId } } },
        { new: true }
    )
    .then((response) => {
        if (!response) {
            return res.status(404).json({ message: "User or address not found" });
        }
        res.status(200).json({
            message: "Address deleted successfully"
        });
    })
    .catch((err) => {
        console.log(err);
    });
};

module.exports.getOrders = async (req, res) => {
    try {
        const {userId} = req.params;
        const userData = await User.findById(userId);
        if(!userData) {
            res.status(400).json({
                message: "Invalid user id",
            })
        }
        console.log(userData)
    } catch(err) {
        console.log(err)
    }
}
