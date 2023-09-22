const express = require("express");

const database = require("../mock_data");

const router = express.Router();

router.get("/get-all", (request,response) => {
    const users = database.get_all_users();
    response.send(users);
}
)

module.exports = { router };