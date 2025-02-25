const { User } = require("../model/userModel")
module.exports.checkUserById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if(user)
            next() 
        else
            res.status(400).json({
                message: "Invalid user id"
            })
    } catch(err) {
        console.log(err)
    }
}