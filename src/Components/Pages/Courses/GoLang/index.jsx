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
        data={Banner}
      />
      <CourseInfo title={Info.title} desc={Info.desc} />
      <Editor />
      <TeacherSkill
        img="TeacherSkill_Albrim BG"
        data={Skill}
      />
      <CoursesCard cards={Card} />
      <Syllabus Syllabus={SyllabusData} />
      <EndHero />
    </>
  );
};

export default index;
