import React from "react";
import HeroBanner from "../../Shared/Banner/HeroBanner";
import Img from "../../../Assets/Certification/banerPorgram.jpg";
import Header from "../../../Components/Shared/Header/Header";
import Features from "../Certification/Features";
import ApplicationForm from "../../Shared/Application/ApplicationForm";
import WhyOutkos from "../About/SectionA2";
import { Banner, FeaturesData } from "./data";

const index = () => {
  return (
    <div className="Programs">
      <Header />
      <HeroBanner
        img={Img}
        style={`md`}
        title={Banner.title}
        desc={Banner.desc}
        btn={Banner.btn}
      />
      <Features data={FeaturesData} />
      <ApplicationForm />
      <WhyOutkos />
    </div>
  );
};

export default index;
