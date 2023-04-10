const mysql = require("mysql2");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SQLFORJOB",
    database:"infoware_assignemnt",
    insecureAuth : true
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

