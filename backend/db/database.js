const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// connect database
con.connect((err) => {
  if (err) {
    console.log("Connect failed !", err);
  } else {
    console.log("Connect success !");
  }
});

module.exports = con;
