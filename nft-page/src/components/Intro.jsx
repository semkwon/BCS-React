import { FaChessRook } from "react-icons/fa";

const ranNum = Math.floor(Math.random() * 1000) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const Intro = () => {
  return (
    <div className="bg-gradient-to-b from-transparent to-red-400 pt-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="relative">
          <img
            className="absolute w-40 h-40 rounded-full"
            src={imgSrc}
            alt="NFT"
          />
          <div className="w-40 h-40 rounded-full bg-white text-gray-950 flex justify-center items-center">
            Loading...
          </div>
        </div>
        <div className="mt-4 text-2xl font-bold flex items-center">
          Da Den Bu
          <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center ml-4 text-gray-950">
            <FaChessRook size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
