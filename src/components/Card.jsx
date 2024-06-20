import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";


export function ProductCard({ cardContent }) {
  const [product, setProduct] = useState(null);
  const [productAmount, setProductAmount] = useState(1);

  const { addToCart } = useContext(CartContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addToCart(product, productAmount);
    setProductAmount(1);
  }

  useEffect(() => {
    async function fetchStoreProductId() {
      let response = await fetch(`https://fakestoreapi.com/products/${cardContent.id}`, {mode: 'cors'});
      const storeProducts = await response.json();
      setProduct(storeProducts);
      return storeProducts;
    }

    fetchStoreProductId();
  }, [cardContent.id]);

  return (
    <div className="card" id={cardContent.id}>
      <div className="img-container">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${cardContent.image})` }}
        ></div>
      </div>
      <div className="card-text">
        <div className="title">
          <h3>{cardContent.title}</h3>
          {/* <p>{cardContent.description}</p> */}
          <p>Price: £{cardContent.price}</p>
          {/* <p>Rating: {cardContent.rating.rate}</p> */}
        </div>
        <div className="quantity-box">
          <form onSubmit={(e) => {
            handleFormSubmit(e, product, productAmount);
          }}>
            <input
              onChange={(e) => setProductAmount(e.target.value)}
              type="number"
              id={`product-${cardContent.id}-quantity`}
              name="quantity"
              className="quantity-input"
              placeholder="Quantity"
              value={productAmount}
              min={1}
              required
            />
            <button 
              type="submit"
              className="add-item"
            >
                Add to cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  cardContent: PropTypes.object,
};