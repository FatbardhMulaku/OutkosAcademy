import React from "react";
import Header from "../../../Components/Shared/Header/Header";
import HeroBanner from "../../Shared/Banner/HeroBanner";
import Img from "../../../Assets/About/banner.jpg";
import Section2 from "../About/SectionA2";
import Cards from "../About/SectionA3";
import Infos from "../../Shared/Courses/CoursesInfos";
import ApplicationForm from "../../Shared/Application/ApplicationForm";
import { Banner, Card, Info } from "./data";

const index = () => {
  return (
    <>
      <Header />
      <HeroBanner
        img={Img}
        style="md"
        title={Banner.title}
        desc={Banner.desc}
        btn={Banner.btn}
      />
      <Section2 />
      <Cards
        cards={Card.cards}
        style="sm About2btn"
        imgList="_imgB"
        title={Card.title}
        btn={Card.btn}
      />
      <ApplicationForm />
    </>
  );
};

export default index;
