import { useState } from "react";

const Chat = () => {
  const [question, setQuestion] = useState("abc");

  const onSubmitChat = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center text-white">
      <form onSubmit={onSubmitChat}>
        <input
          className="text-black"
          type="text"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        <input type="submit" value="검 색" />
      </form>
    </div>
  );
};

export default Chat;
