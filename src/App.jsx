import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  const [storeCategoryData, setStoreCategoryData] = useState([]);

  useEffect(() => {
    async function fetchStoreCategories() {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories",
        { mode: "cors" }
      );
      const storeCategories = await response.json();
      console.log(storeCategories);
      setStoreCategoryData(storeCategories);
      return storeCategories;
    }

    fetchStoreCategories();
  }, []);

  return (
    <div className="app">
      <Header categories={storeCategoryData} />
      <p>Welcome to</p>
      <h1>Fake Store</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        veritatis voluptas repudiandae magnam fugiat itaque quas beatae
        molestias sint facere vero blanditiis reiciendis, labore sit, sunt ipsa
        explicabo ipsum nobis.
      </p>
      <Link to="shop">Shop Now</Link>
      <Outlet />
    </div>
  );
};

export default App;
