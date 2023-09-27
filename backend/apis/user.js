// File will contain all the APIs related to the User handling
const express = require('express');
const database = require('../mock_data');
//const db = require('database')

const router = express.Router();

router.get('/get-all', (request, response) => {
  const users = database.get_all_users();
  response.send(users);
});

// define a GET API to get user by id
router.get('/get-user-by-id', (request, response) => {
    const users = database.get_user_by_user_id(request.query.id);
    response.send(users);
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

  // define a GET API to get user by id
// router.get('/db', (request, response) => {
//     const db = db.getSQL()
//     response.send('getSQL')
// });

// Practical Exercise: Create a POST request for this API and show that it is running

module.exports = { router };
