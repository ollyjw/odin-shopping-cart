import PropTypes from 'prop-types';

export default function Card({ cardContent }) {
    
    return (
        <div className="card" id={cardContent.id}>
            <div className="img-container">
                <div className='card-image' style={{backgroundImage: `url(${cardContent.image})` }}></div>
                {/* <img 
                    key={cardContent.id} 
                    src={cardContent.image} 
                    alt={cardContent.title} 
                    className="card-img"
                /> */}
            </div>
            <div className="card-text">
                <div className="quantity">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" name="quantity" />
                </div>
                <button>Add to cart</button>
                <p>{cardContent.title}</p>  
            </div>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    cardContent: PropTypes.object,
};
