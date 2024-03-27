import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ slides, windowWidth }) => {
  console.log("Render started");

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    console.log("useEffect started");

    // Preload next and previous images
    const preloadImages = [currentIndex - 1, currentIndex + 1];
    preloadImages.forEach((index) => {
      if (index >= 0 && index < slides.length) {
        new Image().src = slides[index].image;
      }
    });

    // Automatically go to the next slide every 3 seconds
    const intervalId = setInterval(goToNext, 3000);

    return () => {
      console.log("unMounted");
      clearInterval(intervalId);
    };
  }, [currentIndex, slides]);

  return (
    <div
      className={`mx-auto mb-12 
      lg:w-[1010px] min-[641px]:w-[750px] 
      lg:h-[450px] min-[641px]:h-[335px]
    ${windowWidth <= 640 ? "w-[390px] h-[390px]" : ""} relative shadow-lg`}
    >
      <div
        className="absolute top-[55%] translate-y-[-55%] left-[22px] text-[35px] text-[#242424] cursor-pointer"
        onClick={goToPrevious}
      >
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          style={{
            "--fa-primary-color": "#51361f",
            "--fa-primary-opacity": "0.2",
            "--fa-secondary-color": "white",
            "--fa-secondary-opacity": "0.2",
          }}
        />
      </div>
      <div
        className="absolute top-[55%] translate-y-[-55%] right-[22px] text-[35px] text-[#242424] cursor-pointer"
        onClick={goToNext}
      >
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          style={{
            "--fa-primary-color": "#51361f",
            "--fa-primary-opacity": "0.2",
            "--fa-secondary-color": "white",
            "--fa-secondary-opacity": "0.2",
          }}
        />
      </div>

      {/* Updated image tag with lazy loading */}
      <img
        loading="lazy"
        src={slides[currentIndex].image}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full bg-center bg-cover transition-all duration-[1000ms]"
      />

      <div className="flex justify-center">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="my-[24px] cursor-pointer text-[20px]"
            onClick={() => goToSlide(slideIndex)}
          >
            <FontAwesomeIcon
              icon={faCircle}
              className="text-[10px] text-white mr-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

/**
 

const ImageSlider = ({ slides, windowWidth }) => {
  console.log("Render started");

  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    console.log("gotoNext started");
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    console.log(newIndex);
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    console.log("useEffect started");
    // Automatically go to the next slide every 3 seconds
    const intervalId = setInterval(goToNext, 3000);

    // Clear the interval when the component unmounts
    return () => {
      console.log("unMounted");
      clearInterval(intervalId);
    };
  }, [currentIndex]); // Re-run the effect when currentIndex changes

  return (
    <div
      className={`mx-auto mb-12 
      lg:w-[1010px] min-[641px]:w-[750px] 
      lg:h-[450px] min-[641px]:h-[335px]
    ${windowWidth <= 640 ? "w-[390px] h-[390px]" : ""} relative shadow-lg`}
    >
      <div
        className="absolute top-[55%] translate-y-[-55%] left-[22px] text-[35px] text-[#242424] cursor-pointer"
        onClick={goToPrevious}
      >
        <FontAwesomeIcon
          icon={faCircleChevronLeft}
          style={{
            "--fa-primary-color": "#51361f",
            "--fa-primary-opacity": "0.2",
            "--fa-secondary-color": "white",
            "--fa-secondary-opacity": "0.2",
          }}
        />
      </div>
      <div
        className="absolute top-[55%] translate-y-[-55%] right-[22px] text-[35px] text-[#242424] cursor-pointer"
        onClick={goToNext}
      >
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          style={{
            "--fa-primary-color": "#51361f",
            "--fa-primary-opacity": "0.2",
            "--fa-secondary-color": "white",
            "--fa-secondary-opacity": "0.2",
          }}
        />
      </div>

      <div
        className="w-full h-full bg-center bg-cover transition-all duration-[1000ms]"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      ></div>

      <div className="flex justify-center">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="my-[3px] cursor-pointer text-[20px]"
            onClick={() => goToSlide(slideIndex)}
          >
            <FontAwesomeIcon icon={faCircle} className="text-[8px] mr-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

 */
