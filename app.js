const express = require('express');
const app = express();
const port = 3030; // порт для запуска проекта 
const middleware = require('./middleware');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("./database");
const session = require("express-session");

const server = app.listen(port, () => console.log("Server listening on port " + port));

app.set("view engine", "pug"); // showing which type for rendering using, example - pug
app.set("views", "views"); // directory

app.use(bodyParser.urlencoded({ extended: false }))
// path to static folder
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
  secret: "formula 1 forever=)",
  resave: true,
  saveUninitialized: false
}))

// Routes
const loginRoute = require('./routes/loginRoutes');
const registerRoute = require('./routes/registerRoutes');
const logoutRoute = require('./routes/logout');

app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/logout", logoutRoute);

app.get("/", middleware.requireLogin, (req, res, next) => {

  var payload = {
    pageTitle: "Home",
    userLoggedIn: req.session.user
  }

  res.status(200).render("home", payload);
})
