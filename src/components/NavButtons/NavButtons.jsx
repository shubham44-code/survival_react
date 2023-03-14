import React from "react";

import ManImage from "../../assets/images/man.png";
import SearchIcon from "../../assets/images/search_icon.png";

import "./NavButtons.css";

const NavButtons = () => {
  return (
    <div className="nav__buttons dsp-f ai-c">
      <p className="fnt-s17 fnt-tsb color-b">ENG</p>
      <div className="profile dsp-fc">
        <img src={ManImage} alt="man" />
      </div>
      <button className="search__button bg-p dsp-fc">
        <img src={SearchIcon} alt="search_icon" />
      </button>
    </div>
  );
};

export default NavButtons;
