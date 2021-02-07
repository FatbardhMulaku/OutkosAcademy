import React from "react";
import Hero from "../../Shared/Banner/Hero";
import ApplicationForm from "../../Shared/Application/ApplicationForm";
import { Banner } from "./data";

const index = () => {
  return (
    <>
      <Hero
        img="ApplicationBG White-Hero"
        style={`sm`}
        data={Banner}
      />
      <div className="minus-top mb-16">
        <ApplicationForm />
      </div>
    </>
  );
};

export default index;
