import { useState } from "react";

function App() {
  const [account, setAccount] = useState("");

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      {account ? (
        <div>{account}</div>
      ) : (
        <button onClick={onClickAccount}>지갑로그인</button>
      )}
    </div>
  );
}

export default App;
