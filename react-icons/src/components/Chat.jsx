import axios from "axios";
import { useState } from "react";

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [content, setContent] = useState("");

  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.post(
        "https://holy-fire-2749.fly.dev/chat",
        {
          // 그냥 question만 써도 된다 - 키 값과 밸류값이 같을 때는 생략 가능 ( question: question,)
          // useState를 사용해서 question에 넣어줘 질문 값을 변경해준다.
          question,
        },
        {
          headers: {
            Authorization: "Bearer BLOCKCHAINSCHOOL3",
          },
        }
      );

      console.log(response);
      // 결과값 넣기
      setContent(response.data.choices[0].message.content);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white">
      <form onSubmit={onSubmitChat}>
        <input
          className="text-black"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input type="submit" value="검 색" />
      </form>
      {/* 결과값 넣기 왼쪽 값에 있을 때만 컴포넌트 내용이 실행*/}
      {content && <div className="mt-4 px-16">{content}</div>}
    </div>
  );
};

export default Chat;
