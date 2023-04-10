import axios from "axios";
import { useState } from "react";

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitChat = async (e) => {
    try {
      e.preventDefault();

      // 검색 중 alert 창 띄우기
      if (isLoading) {
        alert("검색중입니다...");

        return;
      }

      if (!question) {
        alert("질문을 입력해주세요.");

        return;
      }

      //로딩중을 true로 변경 : response 받기 전에
      setIsLoading(true);
      setContent("");

      //await로 대기를 하는 중에는 true인 상태로 다시 올라가서 alert로 검색중입니다가 뜬다.
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

      // 오류 발생 코드
      if (response.status !== 200) {
        alert("오류가 발생했습니다.");

        // 여기도 오류 발생했을 때 false로 변경
        setIsLoading(false);

        return;
      }

      console.log(response);
      // 결과값 넣기
      setContent(response.data.choices[0].message.content);

      // 로딩중 false로 변경
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      // error가 났을 때도 로딩중 false로 변경
      setIsLoading(false);
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
      {/* 결과값 넣기, 왼쪽 값이 있을 때(즉 값이 true일 때)만 컴포넌트 내용이 실행된다.
      오른쪽은 항상 true임으로 왼쪽만 보면 됨*/}
      {content && <div className="mt-4 px-16">{content}</div>}
    </div>
  );
};

export default Chat;
