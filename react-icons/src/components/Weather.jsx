import { useEffect, useState } from "react";
import {
  FaSun,
  FaCloudSun,
  FaCloud,
  FaCloudMeatball,
  FaCloudSunRain,
  FaCloudShowersHeavy,
  FaPooStorm,
  FaSnowflake,
  FaSmog,
} from "react-icons/fa";
import axios from "axios";

// 리액트 아이콘 사용해서 return안에 넣어줌, 날씨 코드에 대한 정보 like json
const weatherIcon = {
  "01": <FaSun size={96} />,
  "02": <FaCloudSun size={96} />,
  "03": <FaCloud size={96} />,
  "04": <FaCloudMeatball size={96} />,
  "09": <FaCloudSunRain size={96} />,
  10: <FaCloudShowersHeavy size={96} />,
  11: <FaPooStorm size={96} />,
  13: <FaSnowflake size={96} />,
  50: <FaSmog size={96} />,
};

function Weather() {
  // 위도 경도 따로 받아오기
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [weatherInfo, setWeatherInfo] = useState();

  //위치 정보 가져오기ㅡ 웹 브라우저에 내장되어 있는 정보 사용
  const getGeolocation = () => {
    //동의 했을 경우 & 동의하지 않았을 경우
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      () => {
        alert("위치 정보에 동의 해주셔야 합니다.");
      }
    );
  };

  // 비동기처리 await가 async안에 있으면 요청이 마무리 되어야 다음으로 실행되는 구조
  const getWeatherInfo = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`
      );

      // 정상 상황이 아닌 200번이 아닌 경우에는 경고 메시지 보여주고 멈춘다.
      if (response.status !== 200) {
        alert("날씨 정보를 가져오지 못했습니다.");

        return;
      }

      // setWeatherInfo에 값을 저장해주고 결과에서 삼항 연산자로 고
      console.log(response.data);
      setWeatherInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGeolocation();
  }, []);

  // 둘 다 false일 때 if
  useEffect(() => {
    if (!lat || !lon) return;

    // 날씨 정보 가져오는 함수
    //처음 로딩이 된 시점엔 실행하면 안되고 lat&lon 둘 다 받은 시점에 고!
    getWeatherInfo();
  }, [lat, lon]);

  useEffect(() => console.log(lat), [lat]);
  useEffect(() => console.log(lon), [lon]);
  useEffect(() => console.log(process.env.REACT_APP_WEATHER_API), []);

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      {/* 날씨에 해당하는 아이콘 불러오기 
      01d 가 나오니까 잘라서 01만 씀 - 낮과 밤을 표시하는 부분은 제거*/}
      {weatherInfo ? (
        <div className="flex flex-col justify-center items-center">
          {weatherIcon[weatherInfo.weather[0].icon.substring(0, 2)]}
          <div className="mt-8 text-2xl">
            {weatherInfo.name}, {weatherInfo.main.temp.toFixed(1)} ℃{" "}
          </div>
        </div>
      ) : (
        "날씨 정보를 로딩중입니다 ..."
      )}
    </div>
  );
}

export default Weather;
