const express = require('express');
const app = express();
const router = express.Router();

app.set("view engine", "pug"); // showing which type for rendering using, example - pug
app.set("views", "views"); // directory

router.get("/", (req, res, next) => {
  res.status(200).render("login");
})

module.exports = router;