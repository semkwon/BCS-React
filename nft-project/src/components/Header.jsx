import { BsAirplane } from "react-icons/bs";
import { RxDiscordLogo } from "react-icons/rx";
import { TfiTwitter } from "react-icons/tfi";
import { HiOutlineWallet } from "react-icons/hi2";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="max-w-screen-xl mx-auto py-4 pt-8 flex justify-between items-center text-blue-900 font-bold">
      <Link to="/">
        <div className="flex items-center ">
          <BsAirplane size={27} className="mr-3" />
          <div className="text-2xl">SKY PASS</div>
        </div>
      </Link>
      <div className="flex items-center">
        <div className="text-2xl mx-8">예매</div>
        <div className="text-2xl mx-8">공항</div>
        <div className="text-2xl mx-8">기내</div>
        <div className="text-2xl mx-8">Membership</div>
      </div>
      <div className="flex items-center">
        <RxDiscordLogo size={27} className="mx-4" />
        <TfiTwitter size={27} className="mx-4" />
        <HiOutlineWallet size={27} className="mx-4" />
      </div>
    </header>
  );
}
