import { useEffect, useState } from "react";
import Web3 from "web3";
import {
  CONTRACT_ABI,
  CONTRACT_ADDRESS,
  NFT_ABI,
  NFT_ADDRESS,
} from "./web3.config";
import axios from "axios";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
const nftContract = new web3.eth.Contract(NFT_ABI, NFT_ADDRESS);

function App() {
  const [account, setAccount] = useState("");
  const [myBalance, setMyBalance] = useState();
  const [nftMetadata, setNftMetadata] = useState();

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };
  const onClickLogOut = () => {
    setAccount("");
  };
  const onClickBalance = async () => {
    try {
      if (!account || !contract) return;

      const balance = await contract.methods.balanceOf(account).call();

      setMyBalance(web3.utils.fromWei(balance));
    } catch (error) {
      console.error(error);
    }
  };
  const onClickMint = async () => {
    try {
      if (!account) return;

      const uri =
        "https://gateway.pinata.cloud/ipfs/QmZ5ynCXHF5LyFwehgMxQQuxrq3x1hs7zcgo1bQ2QsRCmH";

      const result = await nftContract.methods
        .mintNft(uri)
        .send({ from: account });

      if (!result.status) return;

      // const balanceOf = await nftContract.methods.balanceOf(account).call();

      // const tokenOfOwnerByIndex = await nftContract.methods
      //   .tokenOfOwnerByIndex(account, parseInt(balanceOf) - 1)
      //   .call();

      // const tokenURI = await nftContract.methods
      //   .tokenURI(tokenOfOwnerByIndex)
      //   .call();

      const response = await axios.get(uri);

      setNftMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(nftContract);
  }, []);

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      {account ? (
        <div>
          <div className="text-main font-semibold text-2xl">
            {account.substring(0, 4)}...
            {account.substring(account.length - 4)}
            <button className="ml-4 btn-style" onClick={onClickLogOut}>
              로그아웃
            </button>
          </div>
          <div className="flex items-center mt-4">
            {myBalance && <div>{myBalance} tMatic</div>}
            <button className="ml-2 btn-style" onClick={onClickBalance}>
              잔액 조회
            </button>
          </div>
          <div className="flex items-center mt-4">
            {nftMetadata && (
              <div>
                <img src={nftMetadata.image} alt="NFT" />
                <div>Name : {nftMetadata.name}</div>
                <div>Description : {nftMetadata.description}</div>
                {nftMetadata.attributes.map((v, i) => {
                  return (
                    <div key={i}>
                      <span>{v.trait_type} : </span>
                      <span>{v.value}</span>
                    </div>
                  );
                })}
              </div>
            )}
            <button className="ml-2 btn-style" onClick={onClickMint}>
              민팅
            </button>
          </div>
        </div>
      ) : (
        <button className="btn-style" onClick={onClickAccount}>
          <img
            className="w-12"
            src={`${process.env.PUBLIC_URL}/images/metamask.png`}
          />
        </button>
      )}
    </div>
  );
}

export default App;
