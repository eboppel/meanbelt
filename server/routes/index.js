const router = require("express").Router();

const authRoutes = require('./auth.routes');
const surveyRoutes = require('./survey.routes');

module.exports = router
	.use("/auth", authRoutes)
	.use('/survey', surveyRoutes)
