import React from "react";

import Arrow from "../../assets/images/arrow.svg";

import "./GallaryContent.css";

const GallaryContent = ({ content }) => {
  return (
    <div className="gallary__content dsp-fc">
      <div className="gallary__content__arrow" id="gallary__content__arrow">
        <img src={Arrow} alt="arrow" />
      </div>
      <div className="gallary__content__inner">
        <p className="fnt-s106 color-b fnt-tsb">{content.title}</p>
        <p className="fnt-s14 color-b fnt-ar">{content.desc}</p>
        <p className="dsp-f ai-c">
          <i className="fa-solid fa-xmark fnt-s26 color-p"></i>
          <span className="fnt-s17 fnt-tsb ml-10">{content.buttonText}</span>
        </p>
      </div>
    </div>
  );
};

export default GallaryContent;
