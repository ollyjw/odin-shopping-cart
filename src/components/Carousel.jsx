import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/carousel.css";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = slides.length;

  const handlePrevious = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <section className="carousel-wrapper">
      <ul className="carousel">
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`carousel-li ${currentIndex === index ? "active" : ""}`}
            style={{ translate: `${-100 * currentIndex}%` }}
          >
            {slide}
          </li>
        ))}
      </ul>

      <button
        aria-label="Go to next slide"
        onClick={handlePrevious}
        className="carousel-nav prev"
      >
        {<span className="chevron-left"></span>}
      </button>
      <button
        aria-label="Go to next slide"
        onClick={handleNext}
        className="carousel-nav next"
      >
        {<span className="chevron-right"></span>}
      </button>
    </section>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        url: PropTypes.string,
        description: PropTypes.string,
      }),
      PropTypes.elementType,
    ])
  ),
};

export default Carousel;
