import React from "react";
// import { useParams } from "react-router-dom";
import Header from "../../../Components/Shared/Header/Header";
import img from "../../../Assets/Teachers/elvis-uncut.png";
import Banner from "../../../Components/Pages/TeacherProfile/Banner";
import TeacherSkills from "../../Shared/TeacherProfile/TeacherSkills";
import whyimg from "../../../Assets/Teachers-profile/why-img1.jpg";
import PreviousWork from "../../Shared/TeacherProfile/PreviousWork";
import project1 from "../../../Assets/Teachers-profile/projectA1.jpg";
import project2 from "../../../Assets/Teachers-profile/projectA2.jpg";
import project3 from "../../../Assets/Teachers-profile/projectA3.jpg";
import project4 from "../../../Assets/Teachers-profile/projectA4.jpg";

import projectLogo1 from "../../../Assets/soundto.png";
import projectLogo2 from "../../../Assets/hireseek.png";
import projectLogo3 from "../../../Assets/kosovadress.png";
import projectLogo4 from "../../../Assets/apkx.png";
import Contact from "../../../Components/Shared/Contact/Contact";
import { TeacherData } from "../../../Components/Pages/TeacherProfile/data";

const Elvis = () => {
  // const params = useParams();
  const subProjects = [projectLogo1, projectLogo2, projectLogo3, projectLogo4];

  return (
    <div>
      <Header />
      <Banner
        img={img}
        title={TeacherData.elvis.name}
        paragraph={TeacherData.elvis.desc}
        gender="male"
      />
      <TeacherSkills
        img={whyimg}
        teacherImg={img}
        skills={TeacherData.elvis.skills}
        name={TeacherData.elvis.name}
        job={TeacherData.elvis.job}
        title={TeacherData.elvis.title}
      />
      <PreviousWork
        p1={project1}
        p2={project2}
        p3={project3}
        p4={project4}
        subProjects={subProjects}
      />
      <Contact />
    </div>
  );
};

export default Elvis;
