import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardsContainer from "./CardsContainer";

const Shop = () => {
  const [storeData, setStoreData] = useState([]);
  
  useEffect(() => {
    async function fetchStoreProducts() {
      const response = await fetch('https://fakestoreapi.com/products/', {mode: 'cors'});
      const storeProducts = await response.json();
      console.log(storeProducts);
      setStoreData(storeProducts);
      return storeProducts;
    }

    fetchStoreProducts();
  }, [])

  return (
    <>
      <p>SHOP</p>
      <Link to="/">Click here to go back</Link>
      <CardsContainer 
        storeData={storeData}
      />
    </>
  );
};

export default Shop;

// NOTES - could go Home > Shop > Categories > Products