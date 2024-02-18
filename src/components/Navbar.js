import { Link } from "react-router-dom";
import Toggle from "./Toggle.js";
import logoIcon from "../image/logo.svg";

function Navbar({ enabled, setEnabled }) {
  return (
    <nav className="box-border top-0 flex flex-row items-center justify-between w-full h-20 text-white max-h-fit bg-blue-950 md:px-20 md:gap-16">
      <div className="flex flex-row items-center gap-8">
        <img src={logoIcon} alt="" width={130} height={80} />
        <div className="flex flex-row gap-4">
          <Link to="/" className="opacity-50 active:opacity-100">
            Home
          </Link>
          <Link to="/about/" className="opacity-50 active:opacity-100">
            About
          </Link>
        </div>
      </div>
      <div>
        <Toggle enabled={enabled} setEnabled={setEnabled} />
      </div>
    </nav>
  );
}

export default Navbar;
