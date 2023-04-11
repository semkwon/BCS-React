const express = require("express");

let todoData = require("../todoData.json");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(todoData);

  res.json(todoData);
});

router.post("/", (req, res) => {
  console.log(req);

  res.send("임시로 투두 생성.");
});

module.exports = router;
