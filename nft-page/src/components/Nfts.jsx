import { useState } from "react";

const Nfts = ({ page }) => {
  const [selectedPage, setSelectedPage] = useState(1);

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          key={i}
          className={`ml-4 text-2xl font-bold hover:text-white ${
            i + 1 === selectedPage ? "text-white" : "text-gray-400"
          }`}
        >
          {i + 1} <span className="text-base">페이지</span>
        </button>
      );
    }

    return pageArray;
  };

  return (
    <div>
      <div>{pageComp()}</div>
    </div>
  );
};

export default Nfts;
