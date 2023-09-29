express = require("express");
database = require("./database")

router = express.Router();

// a GET API to fetch all the accounts
router.get("/get-all", (request, response) => {
  database.mysqlConnection.query("SELECT * FROM usernamelogin", (error, results) => {
    if (error) {
      console.error(error);
      response.status(500).send("Internal Server Error");
    } else {
      response.status(200).send(results);
      console.log("Success in pulling financial data")
    }
  });
});


// Write an API to add a new user
router.post('/add', (request, response) => {
    const { first_name, last_name, email, user_id, phone, plan_id, signup_date } = request.body;
    database.add_user({
      first_name: first_name,
      last_name: last_name,
      email: email,
      user_id: user_id,
      phone: phone,
      plan_id: plan_id,
      signup_date: signup_date
    });

    
    response.send("User added successfully");
  });

module.exports = { router };