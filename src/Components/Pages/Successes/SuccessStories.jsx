import React from "react";
import Slider from "../../Shared/Slider/Slider";
import SliderElement from "../../Shared/SliderElement/SliderElement";
import Divider from "../../Shared/Divider"
import "../Home/Styles/WhatWeOffer.scss";
import "../../../Assets/Home/City.png";
import { Stories } from "./data";

const SuccessStories = () => {
  return (
    <div className="home__what-we-offer">
      <div className="main-container">
        <div className="flex flex-col mb-48">
    
		  <Divider width="13%" />
          <h2 className="text-3xl md:text-5xl text-gray-800 font-bold text-center pb-2 pt-2">Success Stories</h2>
         
        </div>
        <div className="content">
          <div className="img"></div>
          <Slider>
            <SliderElement {...Stories} />
            <SliderElement {...Stories} />
            <SliderElement {...Stories} />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
