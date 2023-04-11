const express = require("express");

let todoData = require("../todoData.json");

const router = express.Router();

// 전체 투두리스트 조회
router.get("/", (req, res) => {
  //콘솔 백엔드에서 확인
  console.log(todoData);
  //insomnia 프론트엔드에서 확인
  // 전체 내용의 todoData 보여진다.
  res.json(todoData);
});

//특정 투두리스트 조회
router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.length) {
    return res.status(400).json({ error: "존재하지 않는 ID입니다." });
  }

  res.json(todoData[parseInt(id)]);
});

// 객체를 구조분해 함?
// 투두 생성
router.post("/", (req, res) => {
  const { title, desc } = req.body;

  // 둘중 하나라도 없다면 error
  if (!title || !desc) {
    return res
      .status(400)
      .json({ error: "타이틀과 설명을 입력하셔야 합니다." });
  }
  todoData.push({ title, desc, isDone: false }); // {title:title, desc:desc} 와 같음

  console.log(todoData);

  res.json(todoData); // json에 데이터 넣기
});

// put 투두 수정
router.put("/:id", (req, res) => {
  // id조회하기 위해서 parameter
  const { id } = req.params;
  //
  const { title, desc } = req.body;

  if (parseInt(id) >= todoData.length) {
    return res.status(400).json({ error: "존재하지 않는 ID입니다." });
  }

  //둘다 false일때 error
  if (!title && !desc) {
    return res
      .status(400)
      .json({ error: "타이틀이나 설명 중에 하나의 값은 입력해야 합니다." });
  }

  //title이 있으면 title, 없으면 기존에 있던 title가지고 와서 입력
  // 한개만 입력 되면 다른 값은 없어지기 때문에 3가지 다 들어가게 하려고
  todoData[parseInt(id)] = {
    title: title ? title : todoData[parseInt(id)].title,
    desc: desc ? desc : todoData[parseInt(id)].desc,
    isDone: todoData[parseInt(id)].isDone,
  };

  console.log(todoData);

  res.json(todoData);
});

//done 투두 완료 처리
// 주소로 오는건 params
router.put("/done/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.length) {
    return res.status(400).json({ error: "존재하지 않는 ID입니다." });
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

//delete 투두 삭제
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  if (parseInt(id) >= todoData.length) {
    return res.status(400).json({ error: "존재하지 않는 ID입니다." });
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
