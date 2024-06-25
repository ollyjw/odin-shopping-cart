import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardsContainer from "../components/CardsContainer";
import { ProductCard } from "../components/Card";
import "../styles/shop.css";

const Shop = () => {
  const [storeData, setStoreData] = useState([]);
  const { category } = useParams();
  
  useEffect(() => {
    async function fetchStoreProducts() {
      let response;

      if (category == undefined) {
        response = await fetch('https://fakestoreapi.com/products/', {mode: 'cors'});
      } else {
        response = await fetch(`https://fakestoreapi.com/products/category/${category}`, {mode: 'cors'});
      }

      const storeProducts = await response.json();
      console.log(storeProducts);
      setStoreData(storeProducts);
      return storeProducts;
    }

    fetchStoreProducts();
  }, [category]);

  return (
    <>
      <div className="shop">
        {category === undefined ? (
          <div>
            <h1>SHOP</h1>
          </div>
          ) : (
            <div>
              <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            </div>
          )
        }
        <CardsContainer 
          storeData={storeData}
          product={ProductCard}
        />
      </div>
      </>
  );
};

export default Shop;