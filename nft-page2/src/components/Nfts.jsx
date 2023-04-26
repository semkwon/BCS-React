const Nfts = ({ page }) => {
  const pageComp = () => {
    let pageArray = [];

    for (let i = 0; i < page; i++) {
      pageArray.push(<button key={i}>{i + 1} 페이지</button>);
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
