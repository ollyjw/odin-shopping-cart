import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
 
  return (
    <div className="home">
      <p>Welcome to</p>
      <h1>Fake Store</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        veritatis voluptas repudiandae magnam fugiat itaque quas beatae
        molestias sint facere vero blanditiis reiciendis, labore sit, sunt ipsa
        explicabo ipsum nobis.
      </p>
      <p><Link to="shop">Shop Now</Link></p>

    </div>
  );
};

export default Home;
