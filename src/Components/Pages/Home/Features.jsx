import React from "react";
import "./Styles/Features.scss";
import img1 from "../../../Assets/Home/real-world-insights.png";
/* import img2 from "../../../Assets/Home/practical-skills.png";
import img3 from "../../../Assets/Home/unique-learning.png"; */
import Feature from "../../Shared/Features/Features";
import { FormattedMessage } from "react-intl";

const data = [
  {
    title: <FormattedMessage id="home.FeatureData.title1" defaultMessage="Real-world insights"/>,
    title2: <FormattedMessage id="home.FeatureData.title21" defaultMessage="Build Up Your Consulting or Corporate Skills."/>,
    paragraph: <FormattedMessage id="home.FeatureData.paragraph1" defaultMessage="Say goodbye to generic instructions. Start learning practical skills that earn you raises and advance your career."/>,
    to: "/",
    link: <FormattedMessage id="home.FeatureData.link1" defaultMessage="Read More"/>,
    img: img1,
  },
 /*  {
    title: "Practical Skills",
    title2: "Win Decisions, Trust and Promotions",
    paragraph:
      "Learn practical skills to help you win and influence decisionsm save time, wow your cliends or company leaders and earn raises and promotions",
    to: "/",
    link: "Read More",
    img: img2,
    styles: "reverse",
  },
  {
    title: "Unique Learning",
    title2: "Get Expert Instructions from Leading Consulants",
    paragraph:
      "All courses are taught by top-tier independent consulants and subject matter experts who make a living using these skills. This provides a unique learning environment.",
    to: "/",
    link: "Read More",
    img: img3,
  }, */
];
const Features = () => {
  return (
    <div className="home__features">
      <div className="main-container">
        {data.map((d, i) => {
          return <Feature {...d} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Features;
