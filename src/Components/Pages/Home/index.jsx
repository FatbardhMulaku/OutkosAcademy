import React from "react";
import Banner from "./Banner";
import Features from "./Features";
import WhatWeOffer from "./WhatWeOffer";
import UseFeature from "../Certification/UseFeature";
import { UseFeatures } from "./data";

const index = () => {
  return (
    <>
      <Banner />
      <Features />
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
