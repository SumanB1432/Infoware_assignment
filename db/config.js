const mysql = require("mysql2");
require("dotenv").config()

var con = mysql.createConnection({
    host: "localhost",
    user: `${process.env.USER}`,
    password: `${process.env.PASSWORD}`,
    database:`${process.env.DB}`,
    insecureAuth : true
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

