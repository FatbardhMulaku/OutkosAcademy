import React from "react";
import Hero from "../../../Shared/Courses/Hero";
import EndHero from "../../../Shared/Courses/EndHero";
import CoursesCard from "../../../Shared/Courses/CoursesCard";
import CourseInfo from "../../../Shared/Courses/CourseInfo2";
import Syllabus from "../../../Shared/Courses/Syllabus";
import TeacherSkill from "../../../Shared/Courses/TeacherSkill";
import Editor from "../../../Shared/Courses/editor";
import { Banner, Card, SyllabusData, Skill, Info } from "./data";

const index = () => {
  return (
    <>
      <Hero
        BGimg="GoLangBG C-whiteHero"
        title={Banner.title}
        desc={Banner.desc}
        btn={Banner.btn}
      />
      <CourseInfo title={Info.title} desc={Info.desc} />
      <Editor />
      <TeacherSkill
        title={Skill.title}
        desc={Skill.desc}
        toLink={Skill.link}
        skills={Skill.skills}
        img="TeacherSkill_Albrim BG"
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
