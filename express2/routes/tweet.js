const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("전체 트윗 조회");
});

router.get("/:id", (req, res) => {
  console.log(req.params);

  res.send("특정 트윗 조회");
});

// 프론트엔드로 부터 ID를 받아온다
// 프론트에서 백엔드에게 request ID:20 이라고하면
// 백엔드에서 Response가 온다.
router.post("/", (req, res) => {
  res.send("트윗 게시물 생성");
});

router.put("/:id", (req, res) => {
  res.send("트윗 게시물 수정");
});

router.delete("/:id", (req, res) => {
  res.send("트윗 게시물 삭제");
});

module.exports = router;
