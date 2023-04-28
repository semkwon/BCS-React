import axios from "axios";
import { useEffect, useState } from "react";
import NftCard from "./NftCard";

const Nfts = ({ page, mintedNft }) => {
  const [selectedPage, setSelectedPage] = useState("1");
  const [nfts, setNfts] = useState();

  const getNfts = async (p) => {
    try {
      let nftArray = [];
      setNfts();

      for (let i = 0; i < 12; i++) {
        const tokenId = i + 1 + (p - 1) * 12;

        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );

        nftArray.push({ tokenId, metadata: response.data });
      }
      setNfts(nftArray);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickPage = (p) => () => {
    setSelectedPage(p);
    getNfts(p);
  };

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          key={i}
          className={`mr-4 text-2xl font-bold hover:text-blue-600 ${
            i + 1 === selectedPage ? "text-blue-600" : "text-blue-900"
          }`}
          onClick={onClickPage(i + 1)}
        >
          {i + 1} <span className="text-base">페이지</span>
        </button>
      );
    }
    return pageArray;
  };

  useEffect(() => {
    getNfts(1);
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto pt-4 mb-3">{pageComp()}</div>
      <div className="max-w-screen bg-white">
        <div className="max-w-screen-xl mx-auto pt-1 ">
          <ul className="mt-8 grid grid-cols-1 xl:grid-cols-3 justify-items-center gap-16 ">
            {nfts ? (
              nfts.map((v, i) => {
                return (
                  <NftCard
                    key={i}
                    tokenId={v.tokenId}
                    metadata={v.metadata}
                    mintedNft={mintedNft}
                  />
                );
              })
            ) : (
              <div>로딩중입니다...</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nfts;
