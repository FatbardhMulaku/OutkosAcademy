import React from "react";
import whyimg from "../../../../Assets/Courses/sec2.jpg";
import img from "../../../../Assets/Teachers/bleart.jpg";
import Hero from "../../../Shared/Courses/Hero";
import TeacherSkills from "../../../Shared/TeacherProfile/TeacherSkills";
import EndHero from "../../../Shared/Courses/EndHero";
import CoursesCard from "../../../Shared/Courses/CoursesCard";
import CoursesInfos from "../../../Shared/Courses/CoursesInfos";
import Syllabus from "../../../Shared/Courses/Syllabus";
import CourseInfo from "../../../Shared/Courses/CourseInfo2";
import { Banner, Teacher, Card, Info, SyllabusData } from "./data";

const index = () => {
  return (
    <>
      <Hero
        BGimg="WordpressBG C-whiteHero"
        title={Banner.title}
        desc={Banner.desc}
        btn={Banner.btn}
      />
      <CourseInfo />
      <div className="wordpress__img2 BG" />
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
      <Syllabus Syllabus={SyllabusData} />
      <EndHero />
    </>
  );
};

export default index;
