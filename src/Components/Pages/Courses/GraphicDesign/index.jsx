import React from "react";
import Hero from "../../../Shared/Courses/Hero";
import Header from "../../../Shared/Header/Header";
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
      <Header />
      <Hero
        BGimg="GraphicDesignBG C-whiteHero"
        title={Banner.title}
        desc={Banner.desc}
        btn={Banner.btn}
      />
      <CourseInfo 
        title={Info.title}
        desc={Info.desc}
      />
      <Graphics />
      <TeacherSkill 
        title={Skill.title}
        desc={Skill.desc}
        toLink={Skill.link}
        skills={Skill.skills}
        img="TeacherSkill_Bleart BG"
        name={Skill.name}
        job={Skill.job}
      />
      <CoursesCard cards={Card} />
      <Syllabus Syllabus={SyllabusData} />
      <EndHero />
    </>
  );
};

export default index;
