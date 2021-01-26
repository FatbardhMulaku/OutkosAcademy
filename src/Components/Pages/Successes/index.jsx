import React from "react";
import HeroBanner from "../../Shared/Banner/HeroBanner";
import Img from "../../../Assets/Certification/baners.jpg";
import Features from "../Certification/Features";
import WhyOutkos from "../About/SectionA2";
import SuccessStories from "./SuccessStories";
import { Banner, FeaturesData } from "./data";

const index = () => {
  return (
    <>
      <HeroBanner
        img={Img}
        style={`md`}
        title={Banner.title}
        desc={Banner.desc}
        btn={Banner.btn}
      />
	  <Features data={FeaturesData}/>
	  <SuccessStories />
	  <WhyOutkos />
    </>
  );
};

export default index;
