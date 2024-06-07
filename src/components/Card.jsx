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
        <div className="title">
          <h3>{cardContent.title}</h3>
        </div>
        <div className="quantity-box">
          <input
            type="number"
            id={`product-${cardContent.id}-quantity`}
            name="quantity"
            className="quantity-input"
            placeholder="Quantity"
          />
          <button className="add-item">Add to cart</button>
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