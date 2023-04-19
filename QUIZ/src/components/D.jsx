import axios from "axios";
import { useState } from "react";

const D = () => {
  const [message, setMessage] = useState("");

  const onClickBtn = async () => {
    try {
      const response = await axios.get("https://green-bush-5824.fly.dev/");

      console.log(response);

      setMessage(response.data.message);
    } catch (error) {
      console.error(error);

      alert("에러");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button className="btn-style" onClick={onClickBtn}>
        요청
      </button>
      {message && <div className="mt-16 text-2xl font-bold">{message}</div>}
    </div>
  );
};

export default D;
