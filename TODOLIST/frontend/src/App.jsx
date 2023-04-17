import { useEffect, useState } from "react";
import LogIn from "./components/LogIn";
import TodoCard from "./components/TodoCard";
import axios from "axios";

function App() {
  // 로그인 했을 때 & 안했을 때 구분할 useState 선언
  const [user, setUser] = useState();

  const getTodos = async () => {
    try {
      if (!user) return;

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/todo/${user.id}`
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickLogOut = () => {
    setUser(undefined);
  };

  // 투두리스트 가져오기 (유저가 없으면 if문, 있으면 아래에서 투두리스트를 가져오게 되는 useEffect)
  useEffect(() => {
    getTodos();
  }, [user]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (!user) {
    return <LogIn setUser={setUser} />;
  }

  return (
    <div className="min-h-screen flex flex-col justify-start items-center pt-16">
      <h1 className="text-4xl font-bold flex items-center">
        {user.account}님 환영합니다~ 😎
        <button
          className="ml-4 px-2 py-1 bg-pink-300 hover:bg-pink-400 rounded-lg text-gray-50 text-base"
          onClick={onClickLogOut}
        >
          로그아웃
        </button>
      </h1>
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
            className="ml-4 px-2 py-1 bg-pink-400 rounded-lg text-gray-50"
            type="submit"
            value="새 투두 생성"
          />
        </form>
      </div>
      <div className="mt-16 flex flex-col w-1/2">
        <TodoCard />
      </div>
    </div>
  );
}

export default App;
