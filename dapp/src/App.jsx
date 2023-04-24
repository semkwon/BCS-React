import { useState } from "react";

function App() {
  const [account, setAccount] = useState("");

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log(accounts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <button onClick={onClickAccount}>지갑로그인</button>
    </div>
  );
}

export default App;
