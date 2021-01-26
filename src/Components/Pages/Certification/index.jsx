import React from 'react';
import HeroBanner from "../../Shared/Banner/HeroBanner";
import Img from "../../../Assets/Certification/banner.jpg";
import Features from "./Features";
import WhyOutkos from "../About/SectionA2";
import UseFeature from "./UseFeature";
import { Banner, FeaturesData, UseFeatures } from "./data";

const index = () => {
  return (
    <>
      <HeroBanner
        img={Img}
        style="md"
        title={Banner.title}
        desc={Banner.desc}
        btn={Banner.btn}
      />
      <Features data={FeaturesData}/>
      <WhyOutkos />
      <UseFeature
        title={UseFeatures.title}
        btn={UseFeatures.btn}
        img="Certification--img-1"
        style="sm"
      />
    </>
  );
};

export default index;
