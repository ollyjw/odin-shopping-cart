import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/header.css";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Header = ({ categories }) => {
  const { totalItems } = useContext(CartContext);

  const hamburger = document.querySelector(".hamburger");
  const body = document.querySelector("body");
  const navMenu = document.querySelector(".nav-menu");

  function mobileMenu() {
    hamburger.classList.toggle("menu-active");
    navMenu.classList.toggle("menu-active");
    body.classList.toggle("no-scroll");
  }

  function closeMenu() {
    hamburger.classList.remove("menu-active");
    navMenu.classList.remove("menu-active");
    body.classList.remove("no-scroll");
  }

  return (
    <>
      <div className="header">
        <nav>
          <Link to="/" className="home-logo nav-link" onClick={closeMenu}>
            <h2>FAKE STORE</h2>
          </Link>
          <ul className="nav-menu">
            <li>
              <Link to="/" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link
                to="shop"
                className="nav-link dropdown-link"
                onClick={closeMenu}
              >
                Shop
              </Link>
              <div className="dropdown-links">
                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`categories/${category}`}
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link
                to="cart"
                className="nav-link cart-link"
                onClick={closeMenu}
              >
                <img
                  src="/src/assets/shopping-cart.svg"
                  alt="Cart"
                  className="cart-icon"
                />{" "}
                <span className="cart-quantity">{totalItems}</span>
              </Link>
            </li>
          </ul>
          <button className="hamburger" alt="menu" onClick={mobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
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
