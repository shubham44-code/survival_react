import React from "react";

import MenuLinks from "../../components/MenuLinks/index";
import NavButtons from "../../components/NavButtons/index";

import Logo from "../../assets/images/logo.png";

import "./Header.css";

const MENU_ITEMS = ["OUR COMPETITORS", "FOR PROFESSIONALS", "CONTACT"];

const Header = () => {
  return (
    <div className="header">
      <div className="container header__wrapper dsp-f ai-fe jc-sb">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="nav__wrapper dsp-f">
        <MenuLinks menuItems={MENU_ITEMS} />
        <NavButtons />
      </div>
      </div>
    </div>
  );
};

export default Header;
