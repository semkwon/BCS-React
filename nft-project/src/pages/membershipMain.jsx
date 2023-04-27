import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../web3.config";
import { useEffect, useState } from "react";
import MembershipIntro from "../components/MembershipIntro";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

export default function MembershipMain() {
  const [totalNft, setTotalNft] = useState(0);

  const getTotalNft = async () => {
    try {
      if (!contract) return;

      const totalNft = await contract.methods.totalNft().call();
      setTotalNft(totalNft);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTotalNft();
  }, []);

  return (
    <div>
      <MembershipIntro totalNft={totalNft} />
      멤버쉽 메인 페이지
    </div>
  );
}
