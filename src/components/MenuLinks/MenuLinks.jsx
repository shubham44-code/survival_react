import React from "react";

import "./MenuLinks.css";

const MenuLinks = ({ menuItems }) => {
  return (
    <nav className="nav dsp-f">
      <ul className="links dsp-f jc-sb ai-c">
        {menuItems.map((item, index) => {
          return (
            <li key={index} className="link__wrapper">
              <a href="#test" className="nav__link color-b fnt-tsb fnt-s17">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MenuLinks;
