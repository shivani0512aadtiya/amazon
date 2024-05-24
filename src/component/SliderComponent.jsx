import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const slidesData = [
  {
    id: 1,
    image: "/img/amazon-main-hedding.jpeg",
    content: "Web development: building websites",
    content1:
      "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit.",
  },
  {
    id: 2,
    image: "/img/amazon-main-hedding.jpeg",
    content: "Slide 2 Content",
  },
  {
    id: 3,
    image: "/img/watch.jpg",
    content: "Slide 3 Content",
  },
  {
    id: 4,
    image: "/img/amazon-main-hedding.jpeg",
    content: "Slide 4 Content",
  },
];

const Slidercomponent
 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slidesData.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 3000); // Change slide every 2 seconds (2000 milliseconds)

    return () => clearInterval(interval);
  }, [slidesData.length]);

  return (
    <div className="slider-container">
      <div className="slides">
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={index === currentSlide ? "slide active" : "slide"}
            // style={{ backgroundImage: urlurl(${slide.image})}}
          >
            <div className="overlay">
              <div>
                <span
                  className="content"
                  style={{ textAlign: "center", alignItems: "center" }}
                >
                  {slide.content}
                </span>
                <br />
                <span className="content1">{slide.content1}</span>
              </div>
            </div>
          </div>
        ))}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slidercomponent
;