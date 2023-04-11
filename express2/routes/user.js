const express = require("express");

//router 함수로 불러오기
const router = express.Router();

//dynamic?
router.get("/:id", (req, res) => {
  res.send("유저 조회");
});

//export
module.exports = router;
