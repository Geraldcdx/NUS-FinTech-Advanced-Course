express = require("express");
database = require("./database")
// const bodyParser = require('body-parser');

router = express.Router();

// router.use(bodyParser.json());
//http://127.0.0.1:3000/login/add-user?username=x&password=y
router.get("/add-user", (request, response) => {
  //const { username, password } = request.body;
  //console.log(request.query.username,request.query.password, "access")
  database.mysqlConnection.query(
    `INSERT INTO usernamelogin (username, password, remarks) 
    VALUES ('${request.query.username}', '${request.query.password}', 'null');`
    , (error, results) => {
    if (error) {
      console.error(error);
      response.status(500).send("Internal Server Error");
    } else {
      response.status(200).send("User added successfully");
    }
  });
  // console.log(username,password, "access")
  // response.send("User added successfully");
});

//http://127.0.0.1:3000/login/get-by-username-password
//e.g. http://127.0.0.1:3000/login/get-by-username-password?username=bb&password=cc
router.get("/get-by-username-password", (request,response)=>{
  database.mysqlConnection.query(
    `SELECT * FROM usernamelogin 
    where username = '${request.query.username}'
    and password = '${request.query.password}'`
    , (error, results) => {
    if (error) {
      console.error(error);
      response.status(500).send("Internal Server Error");
    } else {
      console.log(results)
      if (results.length == 0) {
        console.log("empty array")
        response.status(200).send("Not Logged in");
      }
      else
      {
        console.log("some data") 
        response.status(200).send("Logged In");
      }
    }
  });
});




// a GET API to fetch all the accounts
// router.get("/get-all", (request, response) => {
//   database.mysqlConnection.query("SELECT * FROM usernamelogin", (error, results) => {
//     if (error) {
//       console.error(error);
//       response.status(500).send("Internal Server Error");
//     } else {
//       response.status(200).send(results);
//       console.log("Success in pulling financial data")
//     }
//   });
// });
module.exports = { router };