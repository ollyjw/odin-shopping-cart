import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

// context allows me to share state between deeply nested components without passing it as props through each component e.g. i don't have to put this in app.jsx and send it down shop > cardscontainer > card

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [amountOfItems, setAmountOfItems] = useState(0);
  
    const addToCart = (product, quantity) => {
      setCart(prevItems => {
        // if the input product id matches the id of an item in cart
        // "The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned."
        const existingItem = prevItems.find(item => item.id === product.id);
        
        // console.log(product.id);
        // console.log(existingItem);

        if (existingItem) {
          const latestCartUpdate = prevItems.map(item =>
            item.id === product.id 
            ? {...item, quantity: item.quantity + 1} // add the new item quantity to existing quantity
            : item // if current item doesn't exist, return unchanged
          );   
          
          console.log('existing item');
          return latestCartUpdate;
        } else { //if not in cart, add the product and an quantity prop
          product.quantity = quantity;
          const newCart = [...prevItems, product]
          console.log(product);
          console.log('new item');
          
          return newCart;
        }
      })     
      
      console.log(cart);
    }

    console.log(cart);

    const removeFromCart = (item) => {
      // filter creates copy of portion of arr filtered to specified elements - every cart item id that isnt equal to clicked items id
      const updatedArr = cart.filter((cartItem) => cartItem.id != item.id);
      setCart(updatedArr);
      
      console.log('remove');
    }
  
    const handleIncrementQuantity = (index) => {
      const updatedCart = [...cart];
      updatedCart[index].quantity += 1;

      setCart(updatedCart);
      
      console.log("increment quantity");
    }

    const handleDecrementQuantity = (index) => {
      const updatedCart = [...cart];
      if (updatedCart[index].quantity <= 1) {
        return;
      } else {
        updatedCart[index].quantity -= 1;
        setCart(updatedCart);
      }

      console.log("decrement quantity");
    }

    const getTotalPrice = (cart) => {
      let total = 0;

      for (let i = 0; i < cart.length; i++) {
        if (cart[i].quantity) { //if item has quantity prop
          total += cart[i].price * cart[i].quantity;
        } else {
          total += cart[i].price;
        }
      }
      return total.toFixed(2);
    }

    useEffect(() => {
      // update total quantity of items as new ones are added
        let total = 0;
    
        for (let i = 0; i < cart.length; i++) {
          total += Number(cart[i].quantity);
        }
    
        setAmountOfItems(total);

    },[cart]);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                handleIncrementQuantity,
                handleDecrementQuantity,
                amountOfItems,
                getTotalPrice
            }}
        >
            { children }
        </CartContext.Provider>
    )
}

CartContextProvider.propTypes = {
  children: PropTypes.element,
};

export {CartContext, CartContextProvider};