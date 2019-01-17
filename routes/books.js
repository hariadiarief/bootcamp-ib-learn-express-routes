const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("book");
});

router.get("/getall", (req, res) => {
  res.send("get all");
});

module.exports = router;
