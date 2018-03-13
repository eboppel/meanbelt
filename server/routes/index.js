const router = require("express").Router();

const authRouter = require('./auth.routes');

module.exports = router
	.use("/auth", authRouter)
