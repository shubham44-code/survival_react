import React from "react";

import SunImage from "../../assets/images/fire_and_sun.png";

import "./ChallengesCard.css";

const ChallengesCard = ({ cardData }) => {
  return (
    <>
      {cardData.map((cardItem, index) => {
        return (
          <div className="challenges__card dsp-f" key={index}>
            <img
              src={SunImage}
              alt="fire and sun"
              className="challenges__card__img"
            />
            <div className="challenges__card__content dsp-f fd-c jc-c">
              <p className="fnt-s17 color-p fnt-tsb">{cardItem.preTitle}</p>
              <p className="fnt-s36 color-b fnt-tm">
                {cardItem.title}
              </p>
              <p className="fnt-s14 fnt-ar ls-28 color-b">
                {cardItem.description}
              </p>
              <p className="dsp-f ai-c">
                <i className="fa-solid fa-xmark fnt-s26 color-p"></i>
                <span className="fnt-s17 fnt-tsb ml-10">{cardItem.buttonText}</span>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ChallengesCard;
