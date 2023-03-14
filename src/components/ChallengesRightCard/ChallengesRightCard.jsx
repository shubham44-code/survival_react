import React from "react";

import ShoeImg from "../../assets/images/img_shoes.png";

import "./ChallengesRightCard.css";

const ChallengesRightCard = () => {
  return (
    <>
      <div className="challenges__right__heading fnt-s174 fnt-tsb">
        ENDURANCE
      </div>
      <img
        src={ShoeImg}
        alt="img_shoes"
        className="img__shoes"
      />
      <div className="challenges__right__content">
        <p className="fnt-s60 fnt-tsb">Mission</p>
        <p className="fnt-s36 fnt-tm">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy tempor.
        </p>
        <p className="fnt-s14 color-b fnt-ar">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </p>
        <p className="dsp-f ai-c">
          <i className="fa-solid fa-xmark fnt-s26 color-p"></i>
          <span className="fnt-s17 fnt-tsb ml-10">FIND OUT MORE</span>
        </p>
      </div>
    </>
  );
};

export default ChallengesRightCard;
