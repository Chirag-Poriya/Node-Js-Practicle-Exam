// const express = require('express');

// const app = express()

// const port = 8081;

// const cookieParser = require('cookie-parser');
// app.use(cookieParser());
// app.set('view engine', 'ejs');

// app.use('/',(req,res)=>{

// })

// app.listen(port,(err)=>{
//     if(!err){
//         console.log("server start on http://localhost:"+port);
//     }
// })


const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const port =3000;

const app = express()

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'assets'))); 
app.set('view engine', 'ejs');

app.use('/',require('./routers/index')); 


app.listen(port,(err)=>{
        if(!err){
            connectDB.db
            console.log("server start on http://localhost:"+port);
        }
    })
