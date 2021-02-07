import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import WhatWeOffer from "./WhatWeOffer";
import UseFeature from "../Certification/UseFeature";
import Courses from "./Courses";
import Teachers from "./Teachers";
import { UseFeatures } from "./data";

const index = () => {
  return (
    <>
      <Hero />
      <div className="minus-top mb-16">
        <Features />
      </div>
      <Courses />
      <Teachers />
      <WhatWeOffer />
      <UseFeature
        title={UseFeatures.title}
        btn={UseFeatures.btn}
        img="Home--img-1"
        style={`md`}
      />
    </>
  );
};

export default index;
