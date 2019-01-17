const express = require("express");
const router = express.Router();

let book = [
  { id: 1, title: "The Wicked King" },
  { id: 2, title: "The Lord of the Ring" }
];

router.get("/", (req, res) => {
  res.send("book");
});

router.get("/getall", (req, res) => {
  res.send("get all");
});

module.exports = router;
