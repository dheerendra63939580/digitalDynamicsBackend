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
         const data = await User.findOne({email}).select("name _id mobile email");
         res.status(200).json({
            message: "Profile found successfully",
            data
         })
    } catch(err) {
        console.log(err)
    }
}