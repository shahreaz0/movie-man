const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const searchRoutes = require("./routes/search");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join("public")));

//Routes
app.get("/", (req, res) => {
	res.render("index", { title: "Movie Man" });
});

app.use(searchRoutes);

app.get("*", (req, res) => {
	res.render("error");
});

module.exports = app;
