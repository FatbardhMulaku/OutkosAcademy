import React from "react";
import whyimg from "../../../../Assets/Courses/sec2.jpg";
import img from "../../../../Assets/Teachers/albrim-uncut.png";
import Hero from "../../../Shared/Courses/Hero";
import EndHero from "../../../Shared/Courses/EndHero";
import TeacherSkills from "../../../Shared/TeacherProfile/TeacherSkills";
import CoursesCard from "../../../Shared/Courses/CoursesCard";
import CoursesInfos from "../../../Shared/Courses/CoursesInfos";
import Syllabus from "../../../Shared/Courses/Syllabus";
import { Banner, Teacher, Card, Info, SyllabusData } from "./data";

const index = () => {
  return (
    <>
      <Hero
        BGimg="FlutterBG C-whiteHero"
        title={Banner.title}
        desc={Banner.desc}
        btn={Banner.btn}
      />
      <TeacherSkills
        img={whyimg}
        teacherImg={img}
        skills={Teacher.skills}
        name={Teacher.name}
        job={Teacher.job}
        title={Teacher.title}
      />
      <CoursesCard cards={Card} />
      <CoursesInfos infos={Info} />
      <Syllabus Syllabus={SyllabusData}/>
      <EndHero />
    </>
  );
};

export default index;
