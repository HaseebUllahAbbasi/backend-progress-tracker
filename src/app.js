const express = require("express");
const app = new express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
var cors = require("cors");
app.use(express.static("public"));

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use(cors());
const errorMiddleware = require("./middleware/middleware");

app.use(errorMiddleware);

module.exports = app;
