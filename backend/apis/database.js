const mysql = require("mysql");
require("dotenv").config();//{ path: "./.env" }

parameters = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  multipleStatements: true,
};

const mysqlConnection = mysql.createConnection(parameters);

// now invoke the .connect method
mysqlConnection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    // if successful, write a message to the console
    console.log("Connected to MySQL");
  }
});

module.exports = { mysqlConnection };

// mysqlConnection.query(`SELECT * from books`, (err, results) => {
//   if (err) {
//   console.log(err);
//   } else {
//   console.log(results);
//   }
//   });
//   // mysqlConnection.query(`delete from customer where customer_id = ${id}`, (err, results) => {
//   // if (err) {
//   // console.log(err);
//   // } else {
//   // console.log("Deleted");
//   // }
//   // });
  

// function getSQL(){
//   alert('hi')
// }
