import React from "react";

import AdviceCarousel from "../../components/AdviceCarousel";

import "./Advice.css";

const adviceData = [
  {
    title: "SURVIVAL 1",
    description:
      "Lorem ipsum dolor sit amet",
  },
  {
    title: "SURVIVAL 2",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    title: "SURVIVAL 3",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
];

const Advice = () => {
  return (
    <section className="container advice dsp-f ai-fe">
      <div className="advice__heading dsp-f jc-c">
        <p className="fnt-s174 color-p fnt-tsb">ADVICE</p>
      </div>
      <AdviceCarousel data={adviceData} />
    </section>
  );
};

export default Advice;
