import PropTypes from "prop-types";

export function ProductCard({ cardContent }) {
  return (
    <div className="card" id={cardContent.id}>
      <div className="img-container">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${cardContent.image})` }}
        ></div>
      </div>
      <div className="card-text">
        <label htmlFor={`product-${cardContent.id}-quantity`}>Quantity:</label>
        <input
          type="number"
          id={`product-${cardContent.id}-quantity`}
          name="quantity"
          className="quantity-input"
          placeholder="Enter number"
        />

        <button>Add to cart</button>
        <p>{cardContent.title}</p>
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