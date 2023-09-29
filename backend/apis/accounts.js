const { request } = require("express");

express = require("express");
database = require("../apis/database")

router = express.Router();

//http://127.0.0.1:3000/accounts/get-all
router.get("/get-all", (request, response) => {
  database.mysqlConnection.query("SELECT * FROM books", (error, results) => {
    if (error) {
      console.error(error);
      response.status(500).send("Internal Server Error");
    } else {
      response.status(200).send(results);
    }
  });
});

//http://127.0.0.1:3000/login/get-by-id?id=1
// router.get("/get-by-id", (request,response)=>{
//   database.mysqlConnection.query(`SELECT * FROM usernamelogin where username = ${request.query.id}`, (error, results) => {
//     if (error) {
//       console.error(error);
//       response.status(500).send("Internal Server Error");
//     } else {
//       response.status(200).send(results);
//     }
//   });
// });

module.exports = { router };
