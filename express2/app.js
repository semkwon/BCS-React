// CRUD 라우팅 시작! : routes라는 폴더 내에 tweet.js, user.js 생성
const express = require("express");
const userRouter = require("./routes/user");

const app = express();

const port = 3010;

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🚀🚀🚀`);
});
