const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

const client = new PrismaClient();

// 유저생성
router.post("/", async (req, res) => {
  try {
    const { account } = req.body;

    // 중복된 어카운트 생성 못하게 Unique
    const existUser = await client.user.findUnique({
      where: {
        account,
      },
    });

    // 어카운트가 있으면 error!
    if (existUser) {
      return res
        .status(400)
        .json({ ok: false, error: "Already exist account." });
    }

    const user = await client.user.create({
      data: {
        account,
      },
    });

    res.json({ ok: true, user });
  } catch (error) {
    console.error(error);
  }
});

// 유저조회
router.get("/:account", async (req, res) => {
  try {
    // body로 가능하지만 params로 쓴다 -> todo/abcd
    const { account } = req.params;

    // 쿼리로 값을 받아오는 방법 -> todo/abcd?age=18&height=176
    // const {age, height} = req.query;
    // console.log(`age: ${age}, height: ${height}`)

    // account가 유니크한 값이기 때문에 findUnique
    const user = await client.user.findUnique({
      where: {
        account,
      },
    });

    // account 잘못 입력했을 때 에러 생성
    if (!user) {
      return res.status(400).json({
        ok: false,
        error: "Not exist user.",
      });
    }

    // 에러 없이 다 통과 됐을 때 여기서 값이 나온다
    res.json({
      ok: true,
      user,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
