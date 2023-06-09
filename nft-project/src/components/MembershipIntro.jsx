import React from "react";
import { BsAirplaneFill } from "react-icons/bs";
import { CONTRACT_ADDRESS } from "../web3.config";

const ranNum = Math.floor(Math.random() * 30) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

export default function MembershipIntro({ totalNft, mintedNft, myNft }) {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-900 text-9xl truncate opacity-40 point-event-none">
          SKY PASS
        </div>
        <div className="relative mt-2 pt-7">
          <img
            className="absolute w-40 h-40 rounded-full"
            src={imgSrc}
            alt="NFT"
          />
          <div className="w-40 h-40 rounded-full bg-white text-gray-950 flex justify-center items-center">
            Loading...
          </div>
        </div>
        <div className="mt-4 text-2xl font-bold flex items-center">
          SKY PASS NFT
          <div className="bg-blue-500 w-6 h-6 rounded-full flex justify-center items-center ml-4 text-gray-950">
            <BsAirplaneFill size={16} />
          </div>
        </div>
        <div className="mt-2 flex items-center">
          by
          <div className="text-blue-900 ml-2">{CONTRACT_ADDRESS}</div>
        </div>
        <div className="mt-2">
          SKY PASS NFT는 대한항공은 물론 델타 항공, 에어 프랑스 등의 스카이팀
          회원사들과 마일리지 교차 적립 및 사용할 수 있으며 월 3회 최대 50%
          항공권 할인 혜택을 받을 수 있다.
        </div>
        <div className="py-4 text-center flex">
          <div>
            <div className="font-bold ">{totalNft}</div>
            <div>총 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{mintedNft}</div>
            <div>발행된 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{myNft}</div>
            <div>나의 NFT</div>
          </div>
        </div>
      </div>
    </div>
  );
}
