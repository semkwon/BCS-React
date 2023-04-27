import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Coin() {
  const [coinPrice, setCoinPrice] = useState();

  const getCoinPrice = async () => {
    try {
      const response = await axios.get(
        "https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-ETH,%20KRW-MATIC"
      );

      setCoinPrice([
        { symbol: "BTC", price: response.data[0].trade_price },
        { symbol: "ETH", price: response.data[1].trade_price },
        { symbol: "MATIC", price: response.data[2].trade_price },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCoinPrice();
  }, []);

  return (
    <div className="flex justify-end max-w-screen-xl mx-auto">
      {coinPrice && (
        <ul className="flex items-center text-gray-400 text-sm">
          {coinPrice.map((v, i) => {
            return (
              <li key={i} className="mr-2">
                {v.symbol}: ₩ {(v.price / 1000).toLocaleString()}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
