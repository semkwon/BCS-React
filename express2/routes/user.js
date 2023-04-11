const express = require("express");

//router 함수로 불러오기
const router = express.Router();

// Create: post
// Read: get
// Update: put
// Delete: delete

//dynamic?
router.get("/:id", (req, res) => {
  res.send("유저 조회");
});

router.post("/", (req, res) => {
  res.send("신규 유저 생성");
});

router.put("/:id", (req, res) => {
  res.send("유저 정보 수정");
});

router.delete("/:id", (req, res) => {
  res.send("유저 정보 삭제");
});

//export
module.exports = router;
