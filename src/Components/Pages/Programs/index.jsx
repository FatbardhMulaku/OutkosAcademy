import React from "react";
import Hero from "../../Shared/Banner/Hero";
import Features from "../Certification/Features";
import ApplicationForm from "../../Shared/Application/ApplicationForm";
import WhyOutkos from "../About/SectionA2";
import { Banner, FeaturesData } from "./data";

const index = () => {
  return (
    <div className="Programs">
      <Hero
        img="ProgramsBG White-Hero"
        style={"md"}
        data={Banner}
      />
      <div className="minus-top mb-16">
          <Features data={FeaturesData} />
      </div>
      <ApplicationForm />
      <WhyOutkos />
    </div>
  );
};

export default index;
