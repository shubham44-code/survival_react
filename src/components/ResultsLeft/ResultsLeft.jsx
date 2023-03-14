import React from "react";

import ArrowImg from "../../assets/images/arrow.svg";

import "./ResultsLeft.css";

const ResultsLeft = () => {
  return (
    <div className="results__left dsp-f ai-c">
      <div className="results__left__arrow__icon">
        <img src={ArrowImg} alt="arrow" />
      </div>
      <div className="results__left__bgtext__wrapper">
        <p className="results__left__bgtext fnt-s174 fnt-tsb">YOUR RESULTS</p>
      </div>
      <div className="results__left__content">
        <p className="fnt-s17 color-b fnt-tsb">COMPLETED CHALLENGES</p>
        <p className="fnt-s280 fnt-tsb color-p">13</p>
        <p className="fnt-s60 fnt-tsb">
          You have <span className="color-p">78%</span> chance for survival
        </p>
        <p className="dsp-f ai-c">
          <i className="fa-solid fa-xmark fnt-s26 color-p"></i>
          <span className="fnt-s17 fnt-tsb ml-10">FIND OUT MORE</span>
        </p>
      </div>
    </div>
  );
};

export default ResultsLeft;
