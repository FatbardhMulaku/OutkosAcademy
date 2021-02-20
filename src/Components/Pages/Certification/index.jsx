import React from "react";
import Hero from "../../Shared/Banner/Hero";
import Features from "./Features";
import WhyOutkos from "../About/SectionA2";
import UseFeature from "./UseFeature";
import { Banner, FeaturesData, UseFeatures } from "./data";

const index = () => {
  return (
    <>
      <Hero key={Array.of(2)} img="CertificationBG Black-Hero" style={"md"} data={Banner} />
      <div className="minus-top mb-16">
        <Features data={FeaturesData} />
      </div>
      <WhyOutkos />
      <UseFeature
        title={UseFeatures.title}
        btn={UseFeatures.btn}
        img="Certification--img-1"
        style={"sm"}
      />
    </>
  );
};

export default index;
