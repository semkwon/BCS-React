import { useState } from "react";

const Nfts = ({ page }) => {
  const [selectedPage, setSelectedPage] = useState(1);

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button
          className={`${i !== 0 && "ml-4"} ${
            i + 1 === selectedPage ? "text-black" : "text-gray-500"
          }`}
          key={i}
        >
          {i + 1} 페이지
        </button>
      );
    }
    return pageArray;
  };

  return (
    //
    <div>
      <div>{pageComp()}</div>
    </div>
  );
};

export default Nfts;
