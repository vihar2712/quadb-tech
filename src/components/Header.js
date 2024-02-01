import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="flex justify-between p-2">
      <Link to="/">
        <img src={LOGO_URL} className="w-52" />
      </Link>
    </div>
  );
};

export default Header;
