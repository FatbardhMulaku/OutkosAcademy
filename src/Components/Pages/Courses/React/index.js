import React from "react";
import Hero from "../../../Shared/Courses/Hero";
import TeacherSkills from "../../../Shared/TeacherProfile/TeacherSkills";
import { Banner, Teacher, Card, Infos, SyllabusData, Info} from "./data";
import CourseInfo from "../../../Shared/Courses/CourseInfo2";
import whyimg from "../../../../Assets/Courses/sec2.jpg";
import img from "../../../../Assets/Teachers/fatbardh2.jpg";
import EndHero from "../../../Shared/Courses/EndHero";
import CoursesCard from "../../../Shared/Courses/CoursesCard";
import CoursesInfos from "../../../Shared/Courses/CoursesInfos";
import Syllabus from "../../../Shared/Courses/Syllabus";
import Editor from "../../../Shared/Courses/editor";

const index = () => {
  return (
    <>
      <Hero
        BGimg="ReactBG C-blackHero"
        data={Banner}
      />
      <CourseInfo 
        title={Info.title}
        desc={Info.desc}
      />
      <TeacherSkills
        img={whyimg}
        teacherImg={img}
        data={Teacher}
      />

      <CoursesCard cards={Card} />
      <Editor />
      <CoursesInfos infos={Infos} />
      <Syllabus Syllabus={SyllabusData}/>
      <EndHero />
    </>
  );
};

export default index;
