import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/header.css";

const Header = ({ categories }) => {
  return (
    <>
      <div className="header">
        <nav>
          <Link to="/" className="home-logo">
            <h2>FAKE STORE</h2>
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="dropdown">
              <Link to="shop">Shop</Link>
              <div className="dropdown-links">
                {categories.map((category) => (
                  <Link key={category} to={`categories/${category}`}>
                    {category}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link>Cart icon + no of items</Link>
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
