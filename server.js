const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const logger = require("morgan");
const session = require("express-session");
const cookieParser = require('cookie-parser');


const port = process.env.PORT || 8000;
const sessionConfig = require('./server/config/session-data');


app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser('wqeriouipxfovovnsoorqwoeriuouoifu'));
app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, "client-angular/dist")))



require("./server/config/database");
app.use("/api", require("./server/routes"));
app.use(require("./server/routes/catch-all.routes"));



app.listen(port, () => console.log(`server listening on port ${port}`));