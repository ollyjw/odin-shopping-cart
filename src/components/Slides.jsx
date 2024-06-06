import { Link } from "react-router-dom";
import "../styles/slide.css";

const PrimarySlide = () => {
    return (
        <div className="slide">
            <p>Welcome to</p>
            <h1>Fake Store</h1>
        </div>
    )
}

const SecondarySlide = () => {
    return (
        <div className="slide">
            <h2>Check out our products</h2>
            <p><Link to="shop">Shop Now</Link></p>
        </div>
    )
}

const TertiarySlide = () => {
    const categories = [
        {
            // imageUrl: ,
            description: "Electronics",
            link: "electronics",
        },
        {
            // imageUrl: ,
            description: "Jewelry",
            link: "jewelry",
        },
        {
            // imageUrl: ,
            description: "Men's Clothing",
            link: "men's clothing",
        },
        {
            // imageUrl: ,
            description: "Women's Clothing",
            link: "women's clothing",
        }
    ]
    return (
        <div className="slide">
            <h2>Categories</h2>
            {categories.map((category, index) => (
                <div 
                    key={index}
                    style={{}}
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