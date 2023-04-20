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
  const onClickLogOut = () => {
    setAccount("");
  };

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      {account ? (
        <div className="text-main font-semibold text-2xl">
          {account.substring(0, 4)}...
          {account.substring(account.length - 4)}
          <button className="ml-4 btn-style text" onClick={onClickLogOut}>
            로그아웃
          </button>
        </div>
      ) : (
        <button className="btn-style" onClick={onClickAccount}>
          <img
            className="w-12"
            src={`${process.env.PUBLIC_URL}/images/metamask.png`}
          />
        </button>
      )}
    </div>
  );
}

export default App;
