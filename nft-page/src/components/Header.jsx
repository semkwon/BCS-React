import { ImHome } from "react-icons/im";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="max-w-screen-xl mx-auto p-4 flex justify-between font-bold">
      <Link to="/">
        <div className="flex items-center text-main">
          <ImHome size={28} />
          <div className="ml-4 text-xl">Block Chain School</div>
        </div>
      </Link>
      <div>wallet</div>
    </header>
  );
};

export default Header;
