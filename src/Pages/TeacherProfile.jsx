import React from "react";
// import { useParams } from "react-router-dom";
import Header from "../Components/Shared/Header/Header";
import img from "../Assets/Teachers/elvis-uncut.png";
import Banner from "../Components/Pages/TeacherProfile/Banner";
import TeacherSkills from "../Components/Pages/TeacherProfile/TeacherSkills";
import whyimg from "../Assets/why-img.jpg";
import PreviousWork from "../Components/Pages/TeacherProfile/PreviousWork";
import project1 from "../Assets/project1.jpg";
import project2 from "../Assets/project2.jpg";
import project3 from "../Assets/project3.jpg";
import project4 from "../Assets/project4.jpg";

import projectLogo1 from "../Assets/soundto.png";
import projectLogo2 from "../Assets/hireseek.png";
import projectLogo3 from "../Assets/kosovadress.png";
import projectLogo4 from "../Assets/apkx.png";
import Contact from "../Components/Shared/Contact/Contact";

const TeacherProfile = () => {
  // const params = useParams();
  const subProjects = [projectLogo1, projectLogo2, projectLogo3, projectLogo4];
  return (
    <div>
      <Header />
      <Banner
        img={img}
        title="Elvis Sylejmani"
        paragraph="He is a Backend Developer with 6 years of experience and a lot of huge projects with International Companies..."
        gender="male"
      />
      <TeacherSkills img={whyimg} teacherImg={img} />
      <PreviousWork p1={project1} p2={project2} p3={project3} p4={project4} subProjects={subProjects} />
      <Contact/>
    </div>
  );
};

export default TeacherProfile;
