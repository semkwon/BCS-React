import { useState } from "react";

const TodoCard = ({ title }) => {
  const [isDone, setIsDone] = useState(false);

  const onClickToggle = () => {
    setIsDone(!isDone);
  };
  return (
    <>
      {isDone ? (
        <li onClick={onClickToggle} className="flex my-4">
          <div className="relative">
            <div className="border-4 border-pink-400 w-8 h-8 rounded-2xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white bg-pink-400 w-6 h-6 rounded-2xl"></div>
          </div>
          <div className="text-2xl ml-4">{title}</div>
        </li>
      ) : (
        <li onClick={onClickToggle} className="flex my-4">
          <div className="border-4 border-pink-400 w-8 h-8 rounded-2xl"></div>
          <div className="text-2xl ml-4">{title}</div>
        </li>
      )}
    </>
  );
};

export default TodoCard;
