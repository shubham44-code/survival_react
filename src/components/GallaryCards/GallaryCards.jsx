import React from "react";

import "./GallaryCards.css";

const GallaryCards = ({ content }) => {
  return (
    <div className="gallary__cards dsp-f jc-sb">
      {content.map((data, index) => {
        return (
          <a
            href="https://www.youtube.com/watch?v=nnh-mQt78BU"
            target="_blank"
            className="card"
            rel="noreferrer"
            key={index}
          >
            <img src={data.bgImg} alt="camp" className="card__img" />
            <div className="card__content">
              <p className="fnt-s16 color-l fnt-tsb">{data.preTitle}</p>
              <p className="fnt-s36 color-l fnt-tm">{data.title}</p>
            </div>
            <img
              src={data.icon}
              className="card__icon"
              alt="youtube icon"
            />
          </a>
        );
      })}
    </div>
  );
};

export default GallaryCards;
