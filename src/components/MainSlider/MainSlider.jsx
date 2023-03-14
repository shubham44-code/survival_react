import React, { useEffect, useRef, useState } from "react";

import ArrowImage from "../../assets/images/arrow.svg";
import ArrowImageBlack from "../../assets/images/arrow _black.svg";

import "./MainSlider.css";

const MainSlider = ({ sliderData }) => {
  const [bannerWidth, setBannerWidth] = useState();
  const [bannerImgCount, setBannerImgCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const BannerImages = useRef([]);
  const MainSliderRef = useRef(null);
  const nextButton = useRef(null);
  const prevButton = useRef(null);

  const NextSlide = () => {
    var mainSliderTransform = MainSliderRef.current.style.transform;
    var translateXValue = mainSliderTransform.replace(/[^\d.]/g, '');

    if(currentSlide < bannerImgCount) {
      setCurrentSlide((current) => {
        return current + 1;
      });
      MainSliderRef.current.style.transform = `translateX(-${+translateXValue + +bannerWidth}px)`;
    }
  };

  const PrevSlide = () => {
    var mainSliderTransform = MainSliderRef.current.style.transform;
    var translateXValue = mainSliderTransform.replace(/[^\d.]/g, '');
    
    if(currentSlide > 1) {
      setCurrentSlide((current) => {
        return current - 1;
      });
      MainSliderRef.current.style.transform = `translateX(-${+translateXValue - +bannerWidth}px)`;
    }
  };

  useEffect(() => {
    var bannerImages = {
      totalWidth: 0,
    };

    BannerImages.current.map((el) => {
      el.style.width = el.clientWidth + "px";
      var total = bannerImages.totalWidth;
      total += el.clientWidth;
      bannerImages.totalWidth += total;
      setBannerImgCount((prevCount) => {
        return prevCount + 1;
      })
      setBannerWidth(el.clientWidth);
      return null;
    });

    MainSliderRef.current.style.width = bannerImages.totalWidth + "px";
    MainSliderRef.current.style.display = "flex";
    MainSliderRef.current.style.transform = "translateX(0)";
  }, [BannerImages]);

  useEffect(() => {
    if(currentSlide === bannerImgCount) {
      nextButton.current.classList.add("disable");
    } else if(currentSlide === 1) {
      prevButton.current.classList.add("disable");
    } else {
      prevButton.current.classList.remove("disable");
      nextButton.current.classList.remove("disable");
    }
  }, [currentSlide, bannerImgCount]);

  return (
    <div className="main__slider__wrapper">
      <div className="main__slider owl-carousel owl-theme" ref={MainSliderRef}>
        {sliderData.map((image, index) => {
          return (
            <div
              className="slider__img item"
              ref={(el) => (BannerImages.current[index] = el)}
              key={index}
            >
              <img src={image} alt="banner" srcSet="" />
            </div>
          );
        })}
      </div>
      <button className="customNextBtn" onClick={NextSlide} ref={nextButton}>
        <img src={ArrowImage} alt="arrow" />
      </button>
      <button className="customPrevBtn" onClick={PrevSlide} ref={prevButton}>
        <img src={ArrowImageBlack} alt="arrow" />
      </button>
    </div>
  );
};

export default MainSlider;
