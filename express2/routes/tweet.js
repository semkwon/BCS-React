const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("전체 tweet");
});

router.get("/:id", (req, res) => {
  console.log(req.params); // 백엔드에서 확인

  res.send("tweet");
});

module.exports = router;
