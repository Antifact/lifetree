// import jsonwebtoken
const jwt = require('jsonwebtoken');

// creates a token and uses a secret phrase thats defined in the .env file. 
// is valid for 5 days
const genToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: "5d",
  });
};

module.exports = genToken;