module.exports = {
	saveUninitialized: true,
	secret: "sessionSecret",
	resave: false,
	name: "session",
	rolling: true,
	cookie: {
		secure: false,
		httpOnly: false,
		maxAge: 360000,
	}
};