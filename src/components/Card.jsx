import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { toast, Slide } from "react-toastify";
import Notification from "../components/Notification";

export function ProductCard({ cardContent }) {
  const [product, setProduct] = useState(null);
  const [productAmount, setProductAmount] = useState(1);

  const [isActive, setActive] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);

  const { cart, addToCart, getTotalItems } = useContext(CartContext);
  const delay = 2000;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addToCart(product, productAmount);
    setProductAmount(1);
  };

  const toggleClass = () => {
    if (btnDisabled === true) {
      return;
    }
    setBtnDisabled(true);
    setActive(!isActive);
  };

  const currentTotalItems = () => {
    if (cart.length === 0) {
      console.log("WAS EMPTY");
      return Number(productAmount);
    } else {
      console.log("was not empty");
      // console.log(totalItems);
      return Number(getTotalItems());
      // * "BUG" * : returns correct total item count when adding existing items to cart, but new items return the previous total value.
    }
  }

  const isMobile = window.innerWidth <= 600;

  const notification = () => {
    toast.success(
      <Notification
        product={product}
        amount={Number(productAmount)}
        currentTotalItems={currentTotalItems()}
      />,
      isMobile
        ? {
            position: "top-center",
            autoClose: true,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Slide,
          }
        : {
            position: "bottom-right",
            autoClose: true,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
          }
    );
  };

  useEffect(() => {
    async function fetchStoreProductId() {
      let response = await fetch(
        `https://fakestoreapi.com/products/${cardContent.id}`,
        { mode: "cors" }
      );
      const storeProducts = await response.json();
      setProduct(storeProducts);
      return storeProducts;
    }

    fetchStoreProductId();

    if (isActive) setTimeout(() => setActive(false), delay);

    if (!btnDisabled) return;

    const handle = setTimeout(() => {
      setBtnDisabled(false);
    }, delay);

    return () => clearTimeout(handle);
  }, [cardContent.id, isActive, btnDisabled]);

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
          <p className="price">
            <span>Price:</span> <strong>£{cardContent.price.toFixed(2)}</strong>
          </p>
          {/* <p>Rating: {cardContent.rating.rate}</p> */}
        </div>
        <div className="quantity-box">
          <form
            onSubmit={(e) => {
              handleFormSubmit(e, product, productAmount);
              notification();
            }}
          >
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
              className={isActive ? `add-item btn-active` : `add-item`}
              onClick={toggleClass}
            >
              <span className="to-add">Add to cart</span>
              <span className="added">Item added</span>
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
