const express = require("express");
const { signup, login, getProfile, updateProfile, addAddress } = require("../controller/userController");
const { tokenValidation } = require("../middleware/tokenValidation");
const router = express.Router();
router.post("/signup", signup)
router.post("/login", login)
router.get("/profile", tokenValidation, getProfile);
router.patch("/update_profile", tokenValidation, updateProfile)
router.post("/add_address/:id", tokenValidation, addAddress)
module.exports = router;