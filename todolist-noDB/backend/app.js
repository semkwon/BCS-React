const express = require("express");
const todoRouter = require("./routes/todo"); // DB가 없는 경우여서 json파일을 사용

const app = express();

const port = 3010;

app.use(express.json()); //json 형식을 읽어오는 방법(미들웨어?)
app.use("/todo", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express");
});

app.listen(port, () => {
  console.log(`Server listening on port: ${port} 🦻`);
});
