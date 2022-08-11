const {User} = require('../models/user'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", async (req,res) => {
    res.send("pres")
})

router.post("/", async (req,res) => {
    console.log("1")
    let user = await User.find( { username: req.body.username } )
    if(user.length === 1)
    {
        console.log("2")
        try {
            const pwCheck = await bcrypt.compare(req.body.password,user[0].password);
            console.log(req.body.password,user[0].password)
            if(pwCheck){
                console.log("3")
                let userObject = {
                    uid:user[0]._id,
                    admin:false,
                    username:user[0].username,
                    types: user[0].types
                }
                console.log("userobject: " + process.env.FIRSTSECRET)

                const token = jwt.sign(userObject, process.env.FIRSTSECRET, {expiresIn:120000});
                res.cookie('token',token,{httpOnly:true,sameSite:'strict'});
                res.send(userObject);
            }
            else{
                res.redirect("/login?mes=loginError");
            }
        } catch (error) {
            res.send(error.message);
        }
    }
    else{
        res.send("user not found")
    }
});



module.exports = router; 
