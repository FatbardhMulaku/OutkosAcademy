import React from "react";
import HeroBanner from "../../Shared/Banner/HeroBanner";
import Img from "../../../Assets/About/banner.jpg";
import Section2 from "./SectionA2";
import Cards from "./SectionA3";
import Infos from "../../Shared/Courses/CoursesInfos";
import { Banner, Card, Info } from "./data";

const index = () => {
  return (
    <>
      <HeroBanner
        img={Img}
        style={`md`}
        data={Banner}
      />
      <Section2 />
      <Cards
        cards={Card.cards}
        style={`sm About2btn`}
        imgList="_img"
        title={Card.title}
        btn={Card.btn}
      />
      <Infos infos={Info} />
      <div className="About--img" />
    </>
  );
};

export default index;
