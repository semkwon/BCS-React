import { useState } from "react";

const CreateToDo = () => {
  const [title, setTitle] = useState("");

  // submit 눌렀을 때 새로고침 안되게
  const onSubmitCreateToDo = (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex mt-2" onSubmit={onSubmitCreateToDo}>
      <input
        className="grow border-2 border-pink-200 rounded-lg focus:outline-pink-400 px-2 py-1 text-lg"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} //값이 들어가게 된다. setTitle을 e.target.value로 바꾼다
      />
      <input
        className="ml-4 px-2 py-1 bg-pink-300 hover:bg-pink-400 rounded-lg text-gray-50"
        type="submit"
        value="새 투두 생성"
      />
    </form>
  );
};

export default CreateToDo;
