import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsAirplaneFill } from "react-icons/bs";

export default function Detail() {
  const [metadata, setMetadata] = useState();

  // tokenId 받기
  const { tokenId } = useParams();

  const getNft = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNft();
  }, []);

  return (
    <div className="flex flex-col xl:flex-row justify-center items-center py-16 bg-blue-100">
      {metadata ? (
        <>
          <div className="max-w-[380px]">
            <img className="rounded-t-2xl" src={metadata.image} alt="NFT" />
            <ul className="grid grid-cols-4 gap-8 py-8 bg-blue-800 rounded-b-2xl text-center">
              {metadata.attributes.map((v, i) => {
                return (
                  <li key={i} className="mx-4 text-white">
                    <div>{v.trait_type}</div>
                    <div className="mt-1 border-t-2 font-bold">{v.value}</div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="m-8">
            <div className="text-4xl flex items-center">
              <div>SKY PASS</div>
              <div className="bg-blue-500 w-8 h-8 rounded-full flex justify-center items-center ml-4 text-gray-950">
                <BsAirplaneFill size={18} />
              </div>
            </div>
            <div className="mt-8 text-2xl">Membership NFT</div>
          </div>
        </>
      ) : (
        <div>로딩중입니다...</div>
      )}
    </div>
  );
}
