import React from "react";
import HeroBanner from "../../Shared/Banner/HeroBanner";
import Img from "../../../Assets/About/banner1.jpg";
import ApplicationForm from "../../Shared/Application/ApplicationForm";
import { Banner } from "./data";

const index = () => {
  return (
    <>
      <HeroBanner
        img={Img}
        style={`sm`}
        title={Banner.title}
        desc={Banner.desc}
        btn={Banner.btn}
      />
	  <ApplicationForm />
    </>
  );
};

export default index;
