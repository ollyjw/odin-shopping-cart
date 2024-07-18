import { createContext, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

// context allows me to share state between deeply nested components without passing it as props through each component e.g. i don't have to put this in app.jsx and send it down shop > cardscontainer > card

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  const addToCart = (product, quantity) => {
    setCart((prevItems) => {
      // item exists if the input product id matches the id of an item in cart
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        // return previous items with updated quantity
        return prevItems.map(
          (item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity += Number(quantity)) } // add the new item quantity to existing quantity
              : item // if ids do not match, return unchanged
        );        
      } else {
        // if item is not already in cart, add the product and a quantity property to the product
        product.quantity = Number(quantity);
        const newCart = [...prevItems, product];
        // console.log(product);
        return newCart;
      }
    });    
    // console.log(cart);
  };

  console.log(cart);

  const removeFromCart = (item) => {
    // filter creates copy of portion of arr filtered to specified elements - every cart item id that isnt equal to clicked items id
    const updatedArr = cart.filter((cartItem) => cartItem.id != item.id);
    setCart(updatedArr);
  };

  const handleIncrementQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const handleDecrementQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity <= 1) {
      return;
    } else {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const getTotalPrice = (cart) => {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].quantity) {
        //if item has quantity prop
        total += cart[i].price * cart[i].quantity;
      } else {
        total += cart[i].price;
      }
    }
    return total.toFixed(2);
  };

  // update total quantity of items as new ones are added
  const getTotalItems = useCallback(() => {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      total += Number(cart[i].quantity);
    }

    console.log(total);
    
    setTotalItems(total);

    return total;
  }, [cart]);

  useEffect(() => {
    getTotalItems();
  }, [getTotalItems]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        handleIncrementQuantity,
        handleDecrementQuantity,
        totalItems,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.element,
};

export { CartContext, CartContextProvider };
