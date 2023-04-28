import React, { useState } from "react";
import airplane2 from "../images/airplane2.jpg";

export default function Intro() {
  const [content, setContent] = useState("");

  return (
    <div className="relative">
      <div className="absolute text-white font-bold text-3xl top-24 left-20">
        즐겨 찾는 여행 사이트를 빠르고 쉽게 검색하세요
      </div>
      <div className="absolute text-white font-bold text-lg top-40 left-20 flex">
        <div className="relative">
          <input
            className="pl-3 mr-1 w-48 h-16 rounded-l-xl text-black pt-5"
            type="text"
            placeholder="서울(모두)"
          />
          <span className="absolute top-1 left-3 text-gray-500 font-bold">
            출발지:
          </span>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="국가, 도시 또는 공항"
            className="pl-3 mr-1 w-48 h-16 text-black  pt-5"
          />
          <span className="absolute top-1 left-3 text-gray-500 font-bold">
            도착지:
          </span>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="날짜 입력"
            className="pl-3 mr-1 w-48 h-16 text-black  pt-5"
          />
          <span className="absolute top-1 left-3 text-gray-500 font-bold">
            가는 편:
          </span>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="날짜 입력"
            className="pl-3 mr-1 w-48 h-16 text-black  pt-5"
          />
          <span className="absolute top-1 left-3 text-gray-500 font-bold">
            오는 편:
          </span>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="1 성인, 일반석"
            className="pl-3 pr-1 w-48 h-16 rounded-r-xl text-black  pt-5"
          />
          <span className="absolute top-1 left-3 text-gray-500 font-bold">
            여행자 및 좌석 등급:
          </span>
        </div>
        <button className="bg-blue-600 h-16 ml-4 px-3 rounded-xl">
          검색하기
        </button>
      </div>

      <img src={airplane2} />
    </div>
  );
}
