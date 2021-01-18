import React from "react";
import Header from "../../../../Components/Shared/Header/Header";
import Hero from "../../../Shared/Courses/Hero";
import EndHero from "../../../Shared/Courses/EndHero";
import CoursesCard from "../../../Shared/Courses/CoursesCard";
import CourseInfo from "../../../Shared/Courses/CourseInfo2";
import Syllabus from "../../../Shared/Courses/Syllabus";
import { Banner, Card, SyllabusData } from "./data";

const index = () => {
  return (
    <>
      <Header />
      <Hero
        BGimg="GoLangBG C-whiteHero"
        title={Banner.title}
        desc={Banner.desc}
        btn={Banner.btn}
      />
      <CourseInfo />
      <CoursesCard cards={Card} />
      <Syllabus Syllabus={SyllabusData}/>
      <EndHero />
    </>
  );
};

export default index;
