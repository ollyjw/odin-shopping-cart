import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardsContainer from "../components/CardsContainer";
import { ProductCard } from "../components/Card";

const Shop = () => {
  const [storeData, setStoreData] = useState([]);
  const { category } = useParams();
  
  useEffect(() => {
    async function fetchStoreProducts() {
      let response;

      if (category == undefined) {
        response = await fetch('https://fakestoreapi.com/products/', {mode: 'cors'});
      } else {
        response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
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
      <p>SHOP</p>
      {/* <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1> breaks when shop category is unspecified*/}
      <Link to="/">Click here to go back</Link>
      <CardsContainer 
        storeData={storeData}
        product={ProductCard}
      />
    </>
  );
};

export default Shop;