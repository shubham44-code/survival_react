import React from "react";

import Arrow from "../../assets/images/arrow.svg"

import "./MainContent.css";

const MainContent = ({content}) => {
  return (
    <div className="main__content dsp-f jc-fe fd-c">
      <div className="main__content__text dsp-f">
        <div className="main__content__text__left dsp-f">
          <p className="fnt-s55 color-b fnt-tsb">{content.heading}</p>
        </div>
        <div className="main__content__text__right dsp-f fd-c jc-fe">
          <p className="fnt-s176 fnt-tsb color-p">{content.mainHeading}</p>
          <p className="color-b fnt-s14 fnt-ar">
            {content.desctiption}
          </p>
        </div>
        <img src={Arrow} alt="arrow" className="arrow__img" />
      </div>
    </div>
  );
};

export default MainContent;
