import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardsContainer from "../components/CardsContainer";
import { ProductCard } from "../components/Card";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/shop.css";

const Shop = () => {
  const [storeData, setStoreData] = useState([]);
  const { category } = useParams();

  const isMobile = window.innerWidth <= 600;
  const toastLimit = isMobile ? "3" : "6";

  useEffect(() => {
    async function fetchStoreProducts() {
      let response;

      if (category == undefined) {
        response = await fetch("https://fakestoreapi.com/products/", {
          mode: "cors",
        });
      } else {
        response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`,
          { mode: "cors" }
        );
      }

      const storeProducts = await response.json();
      // console.log(storeProducts);
      setStoreData(storeProducts);
      return storeProducts;
    }

    fetchStoreProducts();
  }, [category]);

  return (
    <>
      <div className="shop">
        <ToastContainer limit={toastLimit} />
        {category === undefined ? (
          <div 
            className="banner"
            style={{backgroundImage: `linear-gradient(rgba(31, 80, 98, 0.8), rgba(31, 80, 98, 0.8)), url(/src/assets/img/building.jpg)`}}
          >
            <h1>SHOP</h1>
          </div>
        ) : (
          <div 
            className="banner"
            id={category.replace(/'| /g, '')}
            style={{backgroundImage: `linear-gradient(rgba(31, 80, 98, 0.8), rgba(31, 80, 98, 0.8)), url(/src/assets/img/${category.replace(/'| /g, '')}.jpg)`}}
          >
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
          </div>
        )}
        <CardsContainer storeData={storeData} product={ProductCard} />
      </div>
    </>
  );
};

export default Shop;
