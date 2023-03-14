import React from "react";

import MainContent from "../../components/MainContent";
import MainSlider from "../../components/MainSlider";

import BannerImage from "../../assets/images/banner_img.png"

import "./MainSection.css";

const MainSectionData = {
  content: {
    mainHeading: "SU RVI VE",
    heading: "Find out if you can",
    desctiption:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labor.",
  },
  sliderData: [BannerImage, BannerImage, BannerImage, BannerImage]
};

const MainSection = () => {
  return (
    <div className="main dsp-f">
      <MainContent content={MainSectionData.content} />
      <MainSlider sliderData={MainSectionData.sliderData} />
    </div>
  );
};

export default MainSection;
