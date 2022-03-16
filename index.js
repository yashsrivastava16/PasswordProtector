const crypto = require("crypto");
const dotenv = require("dotenv");

dotenv.config();

// For encoding the simple password.

module.exports.Encode = (password, salt = process.env.SECRET_KEY) => {
  const hash = crypto.createHmac("sha512", salt).update(password).digest("hex");
  return hash;
};


// For validating the password.
module.exports.Validate = (Password , hashedPass) => {
    const validating = this.Encode(Password);
    if(hashedPass === validating){
        return true;
    }else{
        return false;
    }

}

