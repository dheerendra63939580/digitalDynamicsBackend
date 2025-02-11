const jwt = require('jsonwebtoken')
module.exports.tokenValidation = (req, res, next) => {
    try {
        const token = req.headers["authorization"]?.split(" ")?.[1];
        const decoded = jwt.verify(token, process.env.JSONWEBTOKEN_SECRET);
        console.log({decoded});
        next();
      } catch(err) {
        console.log(err)
        res.status(401).json({
            message: "Token Expired"
        })
      }
}