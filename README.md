# PasswordProtector

PasswordProtector is a JS package that will help you to easily encode or decode your passwords or messages.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/password_protector) to install PasswordProtector.

```bash
npm install password_protector
        or
npm i password_protector
```

## Usage

```Node.js
const password = require("password_protect");

You will require the .env file to use this package..

use exactly....
|-> .env
        |> SECRET_KEY = "Any string you want to pass".


//For encoding the password
const rawPassword = "Yash@1234";

const hashedPass = password.Encrypt(rawPassword); // this will return a hashed value that you can save inside your DB.


//For validating the password

password.Check(Arg1 , Arg2) // this function will return true/false value.

where Arg1 == the password you want to match(raw password)
      Arg2 == the password comes from the database ( something like user.password)


// For validating the strenght of your password

const password = "xyz@example" // This password is given by the user

password.Validate(password)

This Check funtion will validate your password on the behalf of
Alleast 8 characters in length
Alleast 1 letters in Upper Case
Alleast 1 Special Character (!@#$&*)
Alleast 1 numerals (0-9)
Alleast 1 letters in Lower Case

After validating this Check function will return true/false.


```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
