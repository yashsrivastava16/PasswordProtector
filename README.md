# PasswordProtector

PasswordProtector is a JS package that will help you to easily encode or decode your passwords or messages.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/) to install PasswordProtector.

```bash
npm install PasswordProtector
        or
npm i Passwordprotector
```

## Usage

```Node.js
const password = require("PasswordProtect");

You will require the .env file to use this package..

use exactly....
|-> .env
        |> SECRET_KEY = "Any string you want to pass".


//For encoding the password
password.Encode("Yash@1234") // this will return a hashed value that you can save inside your DB.

const hashedPass = password.Encode("Yash@1234");


//For validating the password

password.Validate(Arg1 , Arg2) // this function will return true/false value.

where Arg1 == the password you want to match(raw password)
      Arg2 == the password comes from the database ( something like user.password)



```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
