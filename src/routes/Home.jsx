import "../styles/home.css";
import  Carousel from "../components/Carousel";
import { PrimarySlide, SecondarySlide, TertiarySlide } from "../components/Slides";

const Home = () => {
  const slides = [
    <PrimarySlide key="Primary" />,
    <SecondarySlide key="Secondary" />,
    <TertiarySlide key="Tertiary" />,
  ];
 
  return (
    <div className="home">      
      <Carousel slides={slides} />
      <section className="opening-para">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error est similique rem laboriosam laborum quis facilis facere id esse amet nulla dignissimos non nisi repellendus aut qui, sed commodi alias?
      </section>
    </div>
  );
};

export default Home;
