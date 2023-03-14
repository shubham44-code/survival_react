import React from "react";

import "./FooterLinks.css";

const FooterLinks = ({ links }) => {
  return (
    <div className="foooter__navigation dsp-f">
      <div className="challenges__footer">
        <p className="fnt-s36 color-p fnt-tm lh-37">CHALLENGES</p>
        <div className="challenges__footer__links dsp-f fd-c">
          {links.ChallengesLinks.map((link, index) => (
            <a href="#$" key={index}>
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="advices__footer">
        <p className="fnt-s36 color-p fnt-tm">ADVICES</p>
        <div className="advices__footer__links dsp-f fd-c">
          {links.AdvicesLinks.map((link, index) => (
            <a href="#$" key={index}>
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="gallery__footer">
        <p className="fnt-s36 color-p fnt-tm">GALLERY</p>
        <div className="gallery__footer__links dsp-f fd-c">
          {links.GalleryLinks.map((link, index) => (
            <a href="#$" key={index}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
