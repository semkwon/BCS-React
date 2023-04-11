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

// put
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, desc } = req.body;

  if (parseInt(id) >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 ID입니다." });
  }

  if (!title && !desc) {
    res
      .status(400)
      .json({ error: "타이틀이나 설명 중에 하나의 값은 입력해야 합니다." });
  }

  todoData[parseInt(id)] = {
    title,
    desc,
    isDone: todoData[parseInt(id)].isDone,
  };

  console.log(todoData);

  res.json(todoData);
});

//done
// 주소로 오는건 params
router.put("/done/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 ID입니다." });
  }

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

//delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.length) {
    res.status(400).json({ error: "존재하지 않는 ID입니다." });
  }

  todoData = todoData.filter((v, i) => {
    // i= 배열의 길이가 같으면 삭제한다, 같지 않으면 true임으로 배열에 더해진다.
    // !== -> 다른가? 응 달라 그럼 -> true
    // 겹치는값은 삭제해 없앤다.
    return parseInt(id) !== i;
  });

  console.log(todoData);

  res.json(todoData);
});

module.exports = router;
