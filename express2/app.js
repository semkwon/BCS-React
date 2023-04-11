const express = require("express");

const app = express();

const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/user/:id", (req, res) => {
  res.send("유저 정보 조회");
});

app.get("/todos", (req, res) => {
  res.send("투두리스트 조회");
});

app.post("/", (req, res) => {
  res.send("Hello, Post!");
});

app.put("/", (req, res) => {
  res.send("Hello, Put!");
});

app.delete("/", (req, res) => {
  res.send("Hello, Delete!");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🚀`);
});
