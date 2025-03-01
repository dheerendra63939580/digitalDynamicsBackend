const jwt = require("jsonwebtoken")
module.exports.tokenGenerator = (name, email) => {
  const token = jwt.sign({name, email}, process.env.JSONWEBTOKEN_SECRET, { expiresIn: '8h' });
  return token;
}