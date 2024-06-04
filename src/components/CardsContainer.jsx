import { ProductCard } from "./Card";
import PropTypes from 'prop-types';
import "../styles/card.css";

export default function CardsContainer({ storeData }) {

    return (
        <div className="cards-container">
           
            {storeData.map((item) => (
                <div 
                    key={item.id}
                    className="col"
                >
                    <ProductCard 
                        key={item.id}
                        cardContent={item}
                    />
                </div>
            ))}
        </div>
    )
}

CardsContainer.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    storeData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            image: PropTypes.string,
            title: PropTypes.string,
        })
    )
};