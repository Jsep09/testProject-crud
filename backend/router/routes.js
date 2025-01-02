const express = require("express");
const router = express.Router();
const userService = require("../service/userService");

router
  .route("/users")
  .get(userService.getAllUsers)
  .post(userService.createUsers);

router
  .route("/users/:id")
  .get(userService.getUserByID)
  .patch(userService.updateUserByID)
  .delete(userService.deleteUserByID);
module.exports = router;
