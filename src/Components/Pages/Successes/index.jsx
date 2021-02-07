import React from "react";
import Hero from "../../Shared/Banner/Hero";
import Features from "../Certification/Features";
import WhyOutkos from "../About/SectionA2";
import SuccessStories from "./SuccessStories";
import UseFeature from "../Certification/UseFeature";
import { Banner, FeaturesData, UseFeatures } from "./data";

const index = () => {
  return (
    <>
      <Hero
        img="SuccessBG White-Hero"
        style={`md`}
        data={Banner}
      />
      <div className="minus-top mb-16">
        <Features data={FeaturesData} />
      </div>
      <SuccessStories />
      <WhyOutkos />
      <UseFeature
        title={UseFeatures.title}
        btn={UseFeatures.btn}
        img="Certification--img-1"
        style={`md`}
      />
    </>
  );
};

export default index;
