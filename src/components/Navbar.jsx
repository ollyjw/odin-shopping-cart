import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="shop">Shop</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;




