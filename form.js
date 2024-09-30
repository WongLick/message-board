const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("form"));

router.post("/", (req, res) => {
  const { user, text } = req.body;
  req.messages.push({ text: text, user: user, added: new Date() });
  res.redirect("/"); 
});

router.get("/message/:index", (req, res) => {
    const index = req.params.index;
    const message = req.messages[index];
    if (message) {
      res.render("messageDetail", { message });
    } else {
      res.status(404).send("Message not found");
    }
  });

module.exports = router;
