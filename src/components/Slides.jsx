import { Link } from "react-router-dom";
import electronicsImg from "../assets/img/electronics.jpg";
import jeweleryImg from "../assets/img/jewelery.jpg";
import mensClothingImg from "../assets/img/mensclothing.jpg";
import womensClothingImg from "../assets/img/womensclothing.jpg";
import "../styles/slide.css";

const PrimarySlide = () => {
    return (
        <div className="slide landing-slide">
            <p>Welcome to</p>
            <h1>Fake Store</h1>
        </div>
    )
}

const SecondarySlide = () => {
    return (
        <div className="slide products-slide">
            <h2>Check out our products</h2>
            <p><Link to="shop">Shop Now</Link></p>
        </div>
    )
}

const TertiarySlide = () => {
    const categories = [
        {
            imageUrl: electronicsImg,
            description: "Electronics",
            link: "electronics",
        },
        {
            imageUrl: jeweleryImg,
            description: "Jewelery",
            link: "jewelery",
        },
        {
            imageUrl: mensClothingImg,
            description: "Men's Clothing",
            link: "men's clothing",
        },
        {
            imageUrl: womensClothingImg,
            description: "Women's Clothing",
            link: "women's clothing",
        }
    ]
    return (
        <div className="slide category-slide">
            <div className="heading-wrapper">
                <h2 className="category-heading">Categories</h2>
            </div>
            {categories.map((category, index) => (
                <div 
                    key={index}
                    className="category-col"
                    style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${category.imageUrl})`}}
                >
                  <Link key={category} to={`categories/${category.link}`}>
                    {category.description}
                  </Link>
                </div>
            ))}
        </div>
    )
}

export { 
    PrimarySlide,
    SecondarySlide,
    TertiarySlide
}