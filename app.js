const express = require("express");
const app = express();
const path = require("node:path");

// app.get("/", (req, res) => res.send("Hello, world!"));
app.get("/", (req, res) => {
    res.render("index", { message: "EJS rocks!" });
  });
  

const PORT = 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
