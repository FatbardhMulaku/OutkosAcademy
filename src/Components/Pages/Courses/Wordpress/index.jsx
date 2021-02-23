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
import { Banner, Teacher, Card, Info, SyllabusData, Infos } from "./data";
import Zoom from "react-reveal/Zoom";

const index = () => {
  return (
    <>
      <Hero BGimg="WordpressBG C-whiteHero" data={Banner} />
      <CourseInfo title={Infos.title} desc={Infos.desc} />
      <Zoom>
        <div className="wordpress__img2 BG" />
      </Zoom>
      <TeacherSkills img={whyimg} teacherImg={img} data={Teacher} />
      <CoursesCard cards={Card} />
      <CoursesInfos infos={Info} />
      <Syllabus Syllabus={SyllabusData} />
      <EndHero />
    </>
  );
};

export default index;
