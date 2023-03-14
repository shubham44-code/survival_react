import React from "react";

import ChallengesCard from "../../components/ChallengesCard";
import ChallengesRightCard from "../../components/ChallengesRightCard";

import "./PopularChallenges.css";

const ChallengesCardData = [
  {
    preTitle: "KEY SKILLS",
    title: "Friction-Based Fire Making",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.",
    buttonText: "FIND OUT MORE",
  },
  {
    preTitle: "KEY SKILLS",
    title: "Friction-Based Fire Making",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.",
    buttonText: "FIND OUT MORE",
  },
  {
    preTitle: "KEY SKILLS",
    title: "Friction-Based Fire Making",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem.",
    buttonText: "FIND OUT MORE",
  },
];

const PopularChallenges = () => {
  return (
    <section className="challenges__wrapper dsp-f">
      <div className="challenges__left">
        <h1 className="challenges__left__heading fnt-s60 color-b fnt-tsb">
          Popular challenges
        </h1>
        <div className="challenges__cards">
          <ChallengesCard cardData={ChallengesCardData} />
        </div>
      </div>
      <div className="challenges__right dsp-f fd-c jc-c ai-c">
        <ChallengesRightCard />
      </div>
    </section>
  );
};

export default PopularChallenges;
