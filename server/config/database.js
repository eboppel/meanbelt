const mongoose = require("mongoose");
const path = require("path");
const fs = require('fs');
const regex = new RegExp('\\.js$', 'i');


const modelsPath = path.resolve("server/models");

mongoose.connect('mongodb://localhost/mean_beltexam');
mongoose.connection.on("connected", () => console.log("mongodb connected"));
mongoose.Promise = global.Promise;

fs.readdirSync(modelsPath).forEach(model => {
	if ( regex.test(model) ) {
		require(path.join(modelsPath, model));
	}    
});
