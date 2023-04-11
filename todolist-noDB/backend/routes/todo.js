const express = require("express");

let todoData = require("../todoData.json");

const router = express.Router();

router.get("/", (req, res) => {
  console.log(todoData);

  res.json(todoData);
});

// 객체를 구조분해 함?
router.post("/", (req, res) => {
  const { title, desc } = req.body;

  todoData.push({ title, desc, isDone: false }); // {title:title, desc:desc} 와 같음

  console.log(todoData);

  res.json(todoData); // json에 데이터 넣기
});

module.exports = router;
