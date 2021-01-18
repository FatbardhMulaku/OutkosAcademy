import React from "react";
import Hero from "../../../Shared/Courses/Hero";
import Header from "../../../../Components/Shared/Header/Header";
import EndHero from "../../../Shared/Courses/EndHero";
import CoursesCard from "../../../Shared/Courses/CoursesCard";
import CourseInfo from "../../../Shared/Courses/CourseInfo2";
import { Banner, Card } from "./data";

const index = () => {
  return (
    <>
      <Header />
      <Hero
        BGimg="GraphicDesignBG C-whiteHero"
        title={Banner.title}
        desc={Banner.desc}
        btn={Banner.btn}
      />
      <CourseInfo />
      <CoursesCard cards={Card} />
      <EndHero />
    </>
  );
};

export default index;
