import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../styles/cart.css";

const Cart = () => { 
  const { cart, removeFromCart, handleDecrementQuantity, handleIncrementQuantity, getTotalPrice } = useContext(CartContext);
   

  return (
    <div className="cart">      
      <section className="cart-items">
        <div className="cart-item-headers">
          <h3></h3>
          <h3>Product</h3>
          <h3>Quantity</h3>
          <h3>Price</h3>
          <h3></h3>
        </div>
        {cart.map((item, index) => (
          <div key={index} className="list-item">
            <div className="cart-item-col">
              <img src={item.image} alt={item.title} className="cart-item-img"/>
            </div>
            <div className="cart-item-col product-details">
              <h4 className="cart-item-category">{item.category.slice(0,1).toUpperCase()+item.category.slice(1,item.category.length)}</h4>
              <p><strong>{item.title}</strong></p>
            </div>
            <div className="cart-item-col quantity">
              <button 
                onClick={() => handleDecrementQuantity(index)} 
                className="quantity-btn"
              >-</button>
              <p>{item.quantity}</p>
              <button 
                onClick={() => handleIncrementQuantity(index)} 
                className="quantity-btn"
              >+</button>
            </div>
            <div className="cart-item-col price">
              <p>£{item.price.toFixed(2)}</p>
            </div>
            <div className="cart-item-col">
              <button onClick={() => removeFromCart(item)} className="delete-btn">X</button>
            </div>
          </div>
        ))}
      </section>
      <section className="summary">
        <p>Summary</p>
        <p><span>Subtotal (# items)</span> <span>£{getTotalPrice(cart)}</span></p>
        <p><span>Shipping cost</span> <span>£0.00</span></p>
        <hr />
        <p><span>Total</span> <span>£{getTotalPrice(cart)}</span></p>
        <button>Checkout</button>
      </section>
    </div>
  );
};

export default Cart;
