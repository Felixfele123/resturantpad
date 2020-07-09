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

    let userExists = await User.find( { username: req.body.username } )
    if(userExists.length === 1)
    {
        try {
            const pwCheck = await bcrypt.compare(req.body.password,userExists[0].password);
            if(pwCheck){
                let userObject = {
                    uid:userExists[0]._id,
                    admin:false,
                    username:userExists[0].username
                }
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
