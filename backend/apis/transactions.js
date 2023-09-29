express = require("express");
database = require("../database/database");

router = express.Router();

router.get("/get-all", (request, response) => {
  database.mysqlConnection.query(
    "SELECT * FROM transactions",
    (error, results) => {
      if (error) {
        console.error(error);
        response.status(500).send("Internal Server Error");
      } else {
        response.status(200).send(results);
      }
    }
  );
});

// SQL injection attacks
router.post("/add", (request, response) => {
  data = request.body;
  database.mysqlConnection.query(
    `insert into transactions (date,amount,category,description,account) values (?,?,?,?,?)`,
    [data.date, data.amount, data.category, data.description, data.account],
    (error, results) => {
      if (error) {
        console.error(error);
        response.status(500).send("Internal Server Error");
      } else {
        response.status(200).send("Transaction added successfully");
      }
    }
  );
});

module.exports = { router };
