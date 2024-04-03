import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <>
    <div className="header">
      <nav>
        <ul>
          <li>
            <Link to="/"><img src="" alt="store-logo" /></Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <span>Cart icon + no of items</span>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Header;
