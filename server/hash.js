const bcrypt = require("bcryptjs");

bcrypt.hash("test24",12,(err,hash)=>{

    console.log(hash);

});