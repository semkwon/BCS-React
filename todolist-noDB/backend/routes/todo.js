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

//done
// 주소로 오는건 params
router.put("/done/:id", (req, res) => {
  const { id } = req.params;

  todoData[parseInt(id)] = {
    title: todoData[parseInt(id)].title,
    desc: todoData[parseInt(id)].desc,
    //json 배열이라서 id 0으로 하시면 0번방 의 isdone이 바뀐다
    // 느낌표 사용해서 true, false를 바꿔준다
    isDone: !todoData[parseInt(id)].isDone,
  };

  console.log(todoData);

  res.json(todoData);
});

module.exports = router;
