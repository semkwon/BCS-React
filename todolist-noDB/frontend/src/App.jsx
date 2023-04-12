import axios from "axios"; // 새 터미널에서 npm i axios하고 import로 불러오기
import TodoCard from "./components/TodoCard";
import { useEffect } from "react";

function App() {
  const getToDoList = async () => {
    try {
      //axios 요청
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/todo`
      );

      console.log(response);
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
        <form className="flex mt-2">
          <input
            className="grow border-2 border-pink-200 rounded-lg focus:outline-pink-400 px-2 py-1 text-lg"
            type="text"
          />
          <input
            className="ml-4 px-2 py-1 bg-pink-300 hover:bg-pink-400 rounded-lg text-gray-50"
            type="submit"
            value="새 투두 생성"
          />
        </form>
        <ul className="mt-16 flex flex-col w-1/2">
          <TodoCard title="🧘🏻‍♂️ 명상" />
          <TodoCard title="🧑‍💻 코딩 공부" />
          <TodoCard title="🏋️ 운동" />
        </ul>
      </div>
    </div>
  );
}

export default App;
