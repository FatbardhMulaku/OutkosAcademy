import React from "react";
import Slider from "../../Shared/Slider/Slider";
import SliderElement from "../../Shared/SliderElement/SliderElement";
import "./Styles/WhatWeOffer.scss";
import "../../../Assets/Home/City.png";
import img1 from "../../../Assets/web-programming.png";
import img2 from "../../../Assets/networking.png";
const data = {
  left: {
    img: img1,
    title: "Web and Mobile App Developer",
    paragraph: "Learn to build your own websites and applications from the best creators out there.",
    items: ["Database", "Programming", "E-commerce", "Web Analytics"],
  },
  right: {
    img: img2,
    title: "Network Administrator",
    paragraph: "Learn Professional Network knowledge to give you a huge advantage on the future.",
    items: ["Network Engineering", "System Analysis", "System Integration", "Cyber-Security"],
  },
};
const WhatWeOffer = () => {
  return (
    <div className="home__what-we-offer">
      <div className="main-container">
        <div className="title-group">
          <div className="line"></div>
          <h2 className="sub-title">What we offer</h2>
          <div className="line"></div>
        </div>
        <div className="content">
          <div className="img"></div>
          <Slider>
            <SliderElement {...data} />
            <SliderElement {...data} />
            <SliderElement {...data} />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
