const express = require("express");
const todoRouter = require("./routes/todo");

const app = express();

const port = 3010;

app.use(express.json()); //json 형식을 읽어오는 방법(미들웨어?)

app.use("/todo", todoRouter);

app.post("/", (req, res) => {
  res.send("투두 생성 🎉");
});

app.get("/", (req, res) => {
  res.send("전체 투두리스트");
});

app.get("/:id", (req, res) => {
  res.send("특정 투두리스트");
});

app.put("/:id", (req, res) => {
  res.send("투두 수정");
});

app.put("/done/:id", (req, res) => {
  res.send("완료여부");
});

app.delete("/:id", (req, res) => {
  res.send("투두 삭제");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🚀🚀🚀`);
});
