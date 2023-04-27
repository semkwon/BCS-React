import axios from "axios";
import React, { useEffect } from "react";

// const exchangeRateUrl = `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${process.env.REACT_APP_AUTH_KEY}&searchdate=20230410&data=AP01`;

export default function ExchangeRate() {
  // const [exchangeRate, setExchangeRate] = useState();

  const getExchangeRate = async () => {
    try {
      const { response } = await axios.get(
        `/api/site/program/financial/exchangeJSON?authkey=${process.env.REACT_APP_AUTH_KEY}&searchdate=20230410&data=AP01`
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getExchangeRate();
  }, []);

  return <div>ExchangeRate</div>;
}
