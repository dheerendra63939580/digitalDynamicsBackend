const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()
const productRouter = require('./router/productRouter')
const userRouter = require('./router/userRouter');
const { User } = require('./model/userModel');
const app = express();
const mongoUri = process.env.MONGO_URI;
app.use(express.json())
app.use(cors())
app.use("/product", productRouter);
app.use("/user", userRouter)
mongoose.connect(mongoUri)
.then(() => {
    app.listen(3001, () => {
        console.log("server is listening to port 3001");
    })
})
.catch((err) => {
    console.log(err)
})
