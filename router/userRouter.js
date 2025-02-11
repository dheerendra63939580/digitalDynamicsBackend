const express = require("express");
const { signup, login, getProfile } = require("../controller/userController");
const { tokenValidation } = require("../middleware/tokenValidation");
const router = express.Router();
router.post("/signup", signup)
router.post("/login", login)
router.get("/profile", tokenValidation, getProfile);
module.exports = router;