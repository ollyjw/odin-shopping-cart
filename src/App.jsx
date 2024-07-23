import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [storeCategoryData, setStoreCategoryData] = useState([]);

  useEffect(() => {
    async function fetchStoreCategories() {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories",
        { mode: "cors" }
      );
      const storeCategories = await response.json();
      // console.log(storeCategories);
      setStoreCategoryData(storeCategories);
      return storeCategories;
    }

    fetchStoreCategories();
  }, []);

  return (
    <>
      <div className="app-wrap">
        <div className="app">
          <Header categories={storeCategoryData} />
          <Outlet />
        </div>
      </div>    
      <Footer />
    </>
  );
};

export default App;
