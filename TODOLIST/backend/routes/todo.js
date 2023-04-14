const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

const client = new PrismaClient();

// 1. 투두 생성
router.post("/", async (req, res) => {
  try {
    const { todo, userId } = req.body;

    if (!todo) {
      return res.status(400).json({ ok: false, error: "Not exist todo." });
    }
    if (!userId) {
      return res.status(400).json({ ok: false, error: "Not exist userId." });
    }

    const user = await client.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });

    if (!user) {
      return res.status(400).json({ ok: false, error: "Not exist user." });
    }

    res.send("임시");
  } catch (error) {
    console.error(error);
  }
});

// 2. 투두 조회
// router.get

// 3. 투두 완료(수정)
// router.put

// 4. 투두 삭제
// router.delete

module.exports = router;
