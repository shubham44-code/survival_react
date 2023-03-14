import React from "react";

import ServiveImg from "../../assets/images/img_servive.png";
import Arrow from "../../assets/images/arrow.svg";
import ArrowBlack from "../../assets/images/arrow _black.svg";

import useSlider from "../../Hooks/useSlider";

import "./AdviceCarousel.css";

const AdviceCarousel = ({ data }) => {
 const { MainSlider, ChildElement, childElCount,  nextButton, prevButton, NextSlide, PrevSlide } = useSlider();

  return (
    <div className="advice__right__wrapper">
      <div className="advice__right owl-carousel owl-theme" ref={MainSlider}>
        {data.map((dataitem, index) => {
          return (
            <div
              className="advice__right__img item"
              key={index}
              ref={(el) => (ChildElement.current[index] = el)}
            >
              <img src={ServiveImg} alt="servive" />
              <div className="advice__right__content dsp-f fd-c jc-c">
                <p className="fnt-s60 color-b fnt-tsb">{dataitem.title}</p>
                <p className="fnt-ar fnt-s14">{dataitem.description}</p>
                <p className="dsp-f ai-c">
                  <i className="fa-solid fa-xmark fnt-s26 color-p"></i>
                  <span className="fnt-s17 fnt-tsb ml-10">MORE</span>
                </p>
              </div>
              <div className="advice__right__index">
                <p className="fnt-s60 color-b fnt-tsb">{index + 1 < 9? "0" + (index + 1) : index + 1 }</p>
                <p className="fnt-s17 color-b fnt-tsb">{childElCount < 9? "0" + childElCount : childElCount}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="customNextBtn__advice" onClick={NextSlide} ref={nextButton}>
        <img src={Arrow} alt="arrow" />
      </button>
      <button className="customPrevBtn__advice" onClick={PrevSlide} ref={prevButton}>
        <img src={ArrowBlack} alt="arrow" />
      </button>
    </div>
  );
};

export default AdviceCarousel;
