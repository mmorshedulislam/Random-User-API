const express = require("express");
const userController = require("../controllers/users.controller");

const router = express.Router();

router.get("/random", userController.getRandomUser);
router.get("/all", userController.getUsers);
router.post("/save", userController.saveUser);

router
  .route("/:id")
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
router.patch("/bulk-update", userController.updateMultUser);

module.exports = router;
