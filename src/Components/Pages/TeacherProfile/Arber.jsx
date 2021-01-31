import React from "react";
// import { useParams } from "react-router-dom";
import img from "../../../Assets/Teachers/arber.jpg";
import Banner from "./Banner";
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
import Contact from "../../Shared/Contact/Contact";
import { TeacherData } from "./data";

const Arber = () => {
  // const params = useParams();
  const subProjects = [projectLogo1, projectLogo2, projectLogo3, projectLogo4];
  const data = TeacherData.arber;
  return (
    <div>
      <Banner
        img={img}
        title={data.name}
        paragraph={data.desc}
        gender="male"
      />
      <TeacherSkills
        img={whyimg}
        teacherImg={img}
        skills={data.skills}
        name={data.name}
        job={data.job}
        title={data.title}
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

export default Arber;
