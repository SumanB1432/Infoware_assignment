const express = require("express");
const app = express();
require("dotenv").config();
const mysql = require("../db/config")

app.use(express.json())








app.listen(process.env.PORT,(err,val)=>{
    if(!err){
        console.log(`SERVER RUN ON PORT NO ${process.env.PORT}`)
    }
})