const crypto = require("crypto");
const dotenv = require("dotenv");

dotenv.config();

const encryptPass = (password, salt = process.env.SECRET_KEY) => {
  const hash = crypto.createHmac("sha512", salt).update(password).digest("hex");
  return {
    password,
    hash,
  };
};

const hashedPass = encryptPass("yash@1234");
const savedPass = hashedPass.hash;

if (savedPass == encryptPass("yash@124").hash) {
  console.log("Password Matched");
} else {
  console.log("Incorrect Password!!");
}
