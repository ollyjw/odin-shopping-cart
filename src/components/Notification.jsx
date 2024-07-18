import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/notification.css";

const Notification = ({ product, amount, currentTotalItems }) => {
  
  return (
    <Link to="/cart">
      <div className="notification">
        <div className="notification-col">
          <img
            src={product.image}
            alt={product.title}
            className="notification-item-img"
          />
        </div>
        <div className="notification-col">
          <span>
            x{amount} {product.title.slice(0, 30) + "..."} added to the cart
          </span>
          <span>
            {currentTotalItems} total {currentTotalItems > 1 ? "items" : "item"}{" "} in the cart. <br></br><strong>View Cart?</strong>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Notification;

Notification.propTypes = {
  product: PropTypes.object,
  amount: PropTypes.number,
  currentTotalItems: PropTypes.number,
};
