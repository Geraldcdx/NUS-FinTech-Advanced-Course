const express = require("express");

const service = express();

let router = express.Router();

router.get("/", (request, response) => {
  response.send("Backend service is up and running");
});

router.get("/sum", (request, response) => {
  const a = parseInt(request.query.num1);
  const b = parseInt(request.query.num2);
  let sum = a + b;
  response.send("Sum is " + sum);
});

service.use(router);

service.listen(3000, (error) => {
  if (error) {
    console.error("Error occurred while starting the service");
  } else {
    console.log("Server started on port 3000");
  }
});
