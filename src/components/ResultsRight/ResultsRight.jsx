import React from "react";

import ManImg from "../../assets/images/man-with-bag.png";

import "./ResultsRight.css";

const ResultsRight = () => {
  return (
    <div className="results__right dsp-fc">
      <img src={ManImg} alt="man with bag" />
      <div className="results__right__content dsp-f ai-fe">
        <div className="results__right__content__inner">
          <p className="fnt-s60 fnt-tsb">SHARE YOUR RESULTS ON SOCIAL MEDIA</p>
          <p className="fnt-s36 fnt-tm">
            Lorem ipsum dolor sit amet, consetetur diam nonumy tempor.
          </p>
          <p className="dsp-f ai-c">
            <i className="fa-solid fa-xmark fnt-s26 color-p"></i>
            <span className="fnt-s17 fnt-tsb ml-10">
              SEE RESULTS FROM YOUR FRIENDS
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsRight;
