import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/header.css";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Header = ({ categories }) => {
  const {totalItems} = useContext(CartContext);

  return (
    <>
      <div className="header">
        <nav>
          <Link to="/" className="home-logo nav-link">
            <h2>FAKE STORE</h2>
          </Link>
          <ul>
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="dropdown">
              <Link to="shop" className="nav-link dropdown-link">Shop &gt;</Link>
              <div className="dropdown-links">
                {categories.map((category) => (
                  <Link key={category} to={`categories/${category}`} className="nav-link">
                    {category}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link to="cart" className="nav-link cart-link">
                <img src="/src/assets/shopping-cart.svg" alt="Cart" className="cart-icon"/> <span className="cart-quantity">{totalItems}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

Header.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  categories: PropTypes.array,
};

export default Header;
