import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import "../styles/cart.css";

const Cart = () => { 
  const { cart, removeFromCart, handleDecrementQuantity, handleIncrementQuantity, getTotalPrice, totalItems } = useContext(CartContext);

  let checkoutText = `\nP U R C H A S E  C O M P L E T E . \n\nT H A N K  Y O U  F O R  Y O U R  M O N E Y . \n\nokseeyabye`;

  return (
    <div className="cart">
      <section className="cart-items">
        {cart.length === 0 ? (
          <h4>
            Your cart is currently empty. <br></br>{" "}
            <Link to="/shop" className="shop-link">
              Check out our shop and add some products
            </Link>
          </h4>
        ) : (
          <>
            <div className="cart-item-headers">
              <h3></h3>
              <h3>Product</h3>
              <h3>Quantity</h3>
              <h3>Price</h3>
              <h3></h3>
            </div>
            {cart.map((item, index) => (
              <div key={index} className="list-item">
                <div className="cart-item-col product-img">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-img"
                  />
                </div>
                <div className="cart-item-col product-details">
                  <h4 className="cart-item-category">
                    {item.category.slice(0, 1).toUpperCase() +
                      item.category.slice(1, item.category.length)}
                  </h4>
                  <p>
                    <strong>{item.title}</strong>
                  </p>
                </div>
                <div className="cart-item-col price">
                  <p>£{item.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-col quantity">
                  <button
                    onClick={() => handleDecrementQuantity(index)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    onClick={() => handleIncrementQuantity(index)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-col remove">
                  <button
                    onClick={() => removeFromCart(item)}
                    className="delete-btn"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
            <p>
              <Link to="/shop" className="shop-link">
                Click here to contine shopping
              </Link>
            </p>
          </>
        )}
      </section>
      <section className="summary">
        <h3 className="summary-header">Summary</h3>
        <p className="summary-list-item">
          <span className="summary-sub-heading">
            Subtotal ({totalItems} items)
          </span>
          <span className="summary-price">£{getTotalPrice(cart)}</span>
        </p>
        <p className="summary-list-item">
          <span className="summary-sub-heading">Shipping cost</span>
          <span className="summary-price">£0.00</span>
        </p>
        <hr />
        <p className="summary-list-item">
          <span className="summary-sub-heading">Total</span>
          <span className="summary-price">£{getTotalPrice(cart)}</span>
        </p>
        <button className="checkout-btn" onClick={() => alert(checkoutText)}>
          Checkout
        </button>
      </section>
    </div>
  );
};

export default Cart;
