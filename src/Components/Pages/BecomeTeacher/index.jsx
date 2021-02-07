import React from "react";
import HeroBanner from "../../Shared/Banner/HeroBanner";
import Img from "../../../Assets/Home/teacher.jpg";
import Section2 from "../About/SectionA2";
import Cards from "../About/SectionA3";
import ApplicationForm from "../../Shared/Application/ApplicationForm";
import { Banner, Card } from "./data";

const index = () => {
  return (
    <>
      <HeroBanner
        img={Img}
        style={"md"}
        data={Banner}
      />
      <Section2 />
      <Cards
        cards={Card.cards}
        style={"sm About2btn"}
        imgList={"_imgB"}
        title={Card.title}
        btn={Card.btn}
      />
      <ApplicationForm />
    </>
  );
};

export default index;
