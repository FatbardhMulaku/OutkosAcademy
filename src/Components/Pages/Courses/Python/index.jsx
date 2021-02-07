import React from "react";
import whyimg from "../../../../Assets/Courses/sec2.jpg";
import img from "../../../../Assets/Teachers/arber.jpg";
import Hero from "../../../Shared/Courses/Hero";
import TeacherSkills from "../../../Shared/TeacherProfile/TeacherSkills";
import EndHero from "../../../Shared/Courses/EndHero";
import CoursesCard from "../../../Shared/Courses/CoursesCard";
import CoursesInfos from "../../../Shared/Courses/CoursesInfos";
import Syllabus from "../../../Shared/Courses/Syllabus";
import { Banner, Teacher, Card, Info, SyllabusData } from "./data";

const index = () => {
  return (
    <>
      <Hero
        BGimg="PythonBG C-whiteHero"
        data={Banner}
      />
      <TeacherSkills
        img={whyimg}
        teacherImg={img}
        data={Teacher}
      />
      <CoursesCard cards={Card} />
      <CoursesInfos infos={Info} />
      <Syllabus Syllabus={SyllabusData}/>
      <EndHero />
    </>
  );
};

export default index;
