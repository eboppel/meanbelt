const authController = require("./../controllers/auth");
const router = require("express").Router();

module.exports = router
	.post("/login", authController.login)
	.delete("/logout", authController.logout)
	.post("/register", authController.register);