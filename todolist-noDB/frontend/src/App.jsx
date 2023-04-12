import axios from "axios"; // 새 터미널에서 npm i axios하고 import로 불러오기
import TodoCard from "./components/TodoCard";
import { useEffect, useState } from "react";
import CreateToDo from "./components/CreateToDo";

function App() {
  const [toDoList, setToDoList] = useState();

  const getToDoList = async () => {
    try {
      //axios 요청
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/todo`
      );

      if (response.status !== 200) {
        alert("요청을 불러오지 못했습니다.");
        return;
      }

      setToDoList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToDoList();
  }, []);

  return (
    <div className="min-h-screen bg-blue-200 flex flex-col justify-start items-center pt-16">
      <h1 className="text-4xl font-bold">AWESOME TO DO LIST 😎</h1>
      <div>
        <div className="mt-8 text-sm font-semibold">
          If I only had an hour to chop down a tree, I would spend the first 45
          minutes sharpening my axe, Abrabam Lincoln
        </div>
        <div className="text-xs">
          나무 베는데 한 시간이 주어진다면, 도끼를 가는데 45분을 쓰겠다,
          에비브러햄 링컨
        </div>
        <CreateToDo getToDoList={getToDoList} />
        <ul className="mt-16 flex flex-col w-1/2">
          {toDoList &&
            toDoList.map((v, i) => {
              return <TodoCard key={i} title={v.title} />;
            })}
        </ul>
      </div>
    </div>
  );
}

export default App;
