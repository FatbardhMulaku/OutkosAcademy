import React from "react";
import Hero from "../../../Shared/Courses/Hero";
import EndHero from "../../../Shared/Courses/EndHero";
import CoursesCard from "../../../Shared/Courses/CoursesCard";
import CourseInfo from "../../../Shared/Courses/CourseInfo2";
import TeacherSkill from "../../../Shared/Courses/TeacherSkill";
import Syllabus from "../../../Shared/Courses/Syllabus";
import Graphics from "./Graphics";
import { Banner, Card, Skill,Info, SyllabusData } from "./data";

const index = () => {
  return (
    <>
      <Hero
        BGimg="GraphicDesignBG C-whiteHero"
        data={Banner}
      />
      <CourseInfo 
        title={Info.title}
        desc={Info.desc}
      />
      <Graphics />
      <TeacherSkill 
        img="TeacherSkill_Bleart BG"
        data={Skill}
      />
      <CoursesCard cards={Card} />
      <Syllabus Syllabus={SyllabusData} />
      <EndHero />
    </>
  );
};

export default index;
