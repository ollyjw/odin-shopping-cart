import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import "../styles/notification.css";

const Notification = ({product, amount}) => {
    const {totalItems} = useContext(CartContext);

    return (
        <Link
            to="/cart"
        >
            <div className="notification">
                <div className="notification-col">
                    <img src={product.image} alt={product.title}className="notification-item-img" />
                </div>
                <div className="notification-col">
                    <span>x{amount} {product.title.slice(0,30) + "..."} added to the cart</span>
                    <span>{totalItems} total  {totalItems > 1 ? "items" : "item"} in the cart. View Cart?</span>
                </div>
            </div>
        </Link>        
    )
}

export default Notification;

Notification.propTypes = {
    product: PropTypes.object,
    amount: PropTypes.number,
};