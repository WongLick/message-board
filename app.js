const express = require("express");
const app = express();
const path = require("node:path");
const formRouter = require("./form");

const messages = [];

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use((req, res, next) => {
  req.messages = messages;
  next();
});

app.get("/", (req, res) => {
  const title = "First message wow";
  res.render("index", { messages, title });
});

app.use("/form", formRouter);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`My first Express app - listening on port ${PORT}!`)
);
