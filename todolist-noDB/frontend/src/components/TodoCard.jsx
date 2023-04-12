import { useState } from "react";

const TodoCard = () => {
  const [isDone, setIsDone] = useState(false);
  return (
    <>
      <li className="flex my-4">
        <div className="border-4 border-pink-400 w-8 h-8 rounded-2xl"></div>
        <div className="text-2xl ml-4">🧑‍💻 코딩 공부하기</div>
      </li>
      <li className="flex my-4">
        <div className="relative">
          <div className="border-4 border-pink-400 w-8 h-8 rounded-2xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white bg-pink-400 w-6 h-6 rounded-2xl"></div>
        </div>
        <div className="text-2xl ml-4">🧘🏻‍♂️ 명상</div>
      </li>
    </>
  );
};

export default TodoCard;
