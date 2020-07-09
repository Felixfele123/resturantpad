const express = require("express");
const app = express()
const cookieParser = require("cookie-parser");
const auth = require('./routes/auth')
const menu = require('./routes/menu');
const login = require('./routes/login')
const logout = require('./routes/logout')
const mongoose = require("mongoose")
const cors = require('cors')
require('dotenv').config();


mongoose.connect('mongodb://localhost/vaxtorpspizzeria', { useUnifiedTopology: true, useNewUrlParser: true})
.then(() => console.log('connected to MongoDB..'))
.catch(err => console.error('could not connect', err))

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(cors({origin: true, credentials: true}))
app.use('/menu', menu);
app.use('/login', login)
app.use('/secret', auth)
app.use('/logout', logout)



const server = app.listen(3456, () => console.log("port 3456"));

