import { useState } from "react";

const B = () => {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center">
      <button className="btn-style" onClick={onClickMinus}>
        -
      </button>
      <div className="text-main mx-4 text-bold text-4xl">{count}</div>
      <button className="btn-style" onClick={onClickPlus}>
        +
      </button>
    </div>
  );
};

export default B;
