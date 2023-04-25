import Web3 from "web3";
import Intro from "../components/Intro";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useEffect } from "react";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

console.log(contract);

const Main = ({ account }) => {
  const getTotalNft = async () => {
    try {
      if (!contract) return;
      const totalNft = await contract.methods.totalNft().call();

      console.log(totalNft);
    } catch (error) {
      console.error(error);
    }
  };

  const getMintedNft = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  const getMyNft = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTotalNft();
  }, []);

  return (
    <div>
      <Intro />
    </div>
  );
};

export default Main;
