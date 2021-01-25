import React from "react";
import HeroBanner from "../../Shared/Banner/HeroBanner";
import Img from "../../../Assets/About/banner1.jpg";
import Header from "../../../Components/Shared/Header/Header";
import ApplicationForm from "../../Shared/Application/ApplicationForm";
import { Banner } from "./data";

const index = () => {
  return (
    <>
      <Header />
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
