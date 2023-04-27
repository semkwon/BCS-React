import { BsAirplane } from "react-icons/bs";
import { RxDiscordLogo } from "react-icons/rx";
import { TfiTwitter } from "react-icons/tfi";
import { HiOutlineWallet } from "react-icons/hi2";

import axios from "axios";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header({ account, setAccount }) {
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
    <header className="max-w-screen-xl mx-auto py-4 pt-8 flex justify-between items-center text-blue-900 font-bold">
      <Link to="/">
        <div className="flex items-center ">
          <BsAirplane size={27} className="mr-3" />
          <div className="text-2xl">SKY PASS</div>
        </div>
      </Link>
      <div className="flex">
        <div className="text-2xl p-1 mx-8">예매</div>
        <div className="text-2xl p-1 mx-8">공항</div>
        <div className="text-2xl p-1 mx-8">기내</div>
        <div className="text-2xl p-1 mx-8">Membership</div>
      </div>

      <div className="flex items-center">
        <RxDiscordLogo size={27} className="mx-4" />
        <TfiTwitter size={27} className="mx-4" />

        {account ? (
          <div className="flex items-center p-2 bg-blue-200 rounded-full">
            <div className="ml-1">
              {account.substring(0, 4)}...
              {account.substring(account.length - 4)}
            </div>
          </div>
        ) : (
          <button onClick={onClickAccount}>
            <HiOutlineWallet size={27} className="mx-4" />
          </button>
        )}
      </div>
    </header>
  );
}

// const getExchangeRate = async () => {
//   try {
//     const response = await axios.get(
//       `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${process.env.REACT_APP_AUTH_KEY}&searchdate=20230420&data=AP01`
//     );

//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// };
