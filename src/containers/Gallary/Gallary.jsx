import React from "react";

import GallaryContent from "../../components/GallaryContent";
import GallaryCards from "../../components/GallaryCards";

import YoutubeIcon from "../../assets/images/ico_youtube.png";
import PicturesIcon from "../../assets/images/pictures.png";
import CampImg from "../../assets/images/camp.png";
import TeaImg from "../../assets/images/tea.png";
 
import "./Gallary.css";

const gallaryData = {
  gallaryContent: {
    title: "GALLERY",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    buttonText: "MORE",
  },
  cards: [
    {
      preTitle: "06.08.2019. | SHELTER MAKING",
      title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      icon: YoutubeIcon,
      bgImg: CampImg
    },
    {
      preTitle: "06.08.2019. | SHELTER MAKING",
      title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed",
      icon: PicturesIcon,
      bgImg: TeaImg
    }
  ]
};

const Gallary = () => {
  return (
    <section className="container gallary dsp-f">
      <GallaryCards content={gallaryData.cards}/>
      <GallaryContent content={gallaryData.gallaryContent} />
    </section>
  );
};

export default Gallary;
