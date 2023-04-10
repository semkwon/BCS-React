const express = require("express");

// 가져 온 express를 함수로 사용하기 위해서 app에 변수로 담았다.
const app = express();

// react서버와 겹치지 않게 3010번 사용
const port = 3010;

// request, response
// http 메소드 CRUD : Create, Read, Update, Delete
app.get("/", (req, res) => {
  res.send("This is Get Request");
});

app.get("/abc", (req, res) => {
  res.send("This is Get abc Request");
});

app.post("/", (req, res) => {
  res.send("This is Post Request");
});

app.put("/", (req, res) => {
  res.send("This is Put Request");
});

app.delete("/", (req, res) => {
  res.send("This is Delete Request");
});

// 서버 시작하는 기능, 포트랑 화살표 함수
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
