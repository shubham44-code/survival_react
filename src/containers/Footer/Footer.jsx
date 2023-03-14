import React from "react";

import FooterLinks from "../../components/FooterLinks";

import Logo from "../../assets/images/logo_white.svg";

import "./Footer.css";

const footerLinks = {
  ChallengesLinks: ["Endurance", "Survival", "Key skills", "Survival kit", "Shelter making", "Food challenges"],
  AdvicesLinks: ["Mountain survival", "Forest challenges", "How to make your shelter", "What to eat in forest", "How to stay safe", "What to wear"],
  GalleryLinks: ["Foto gallery", "Video gallery"] 
}

const Footer = () => {
  return (
    <footer className="footer container dsp-f ai-c">
      <div className="footer__logo">
        <img src={Logo} alt="logo" />
      </div>
      <FooterLinks links={footerLinks}/>
    </footer>
  );
};

export default Footer;
