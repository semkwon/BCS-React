import { ImHome } from "react-icons/im";
import { BiWallet } from "react-icons/bi";

import { Link } from "react-router-dom";
const Header = ({ account, setAccount }) => {
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
    <header className="max-w-screen-xl mx-auto p-4 flex justify-between font-bold">
      <Link to="/">
        <div className="flex items-center text-main">
          <ImHome size={28} />
          <div className="ml-4 text-xl">Block Chain School</div>
        </div>
      </Link>
      <div>
        {account ? (
          <div>{account}</div>
        ) : (
          <button
            className="flex items-center p-2 bg-gray-800 rounded-full"
            onClick={onClickAccount}
          >
            <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
              <BiWallet />
            </div>
            <div className="ml-1">Connect</div>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
