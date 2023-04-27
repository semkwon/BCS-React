import { useEffect } from "react";

const Nfts = ({ page }) => {
  useEffect(() => {
    console.log(page);
  }, [page]);

  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(
        <button key={i}>
          {i + 1} <span>페이지</span>
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
