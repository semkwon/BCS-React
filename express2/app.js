// CRUD 라우팅 시작! : routes라는 폴더 내에 tweet.js, user.js 생성
const express = require("express");
const userRouter = require("./routes/user");
const tweetRouter = require("./routes/tweet");

const app = express();

const port = 3010;

// use는 미들웨어
app.use("/user", userRouter);
app.use("/tweet", tweetRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

//서버 켜졌을 때 실행됨
app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🚀🚀🚀`);
});
