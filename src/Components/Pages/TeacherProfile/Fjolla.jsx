import React from "react";
// import { useParams } from "react-router-dom";
import img from "../../../Assets/Teachers/FjollaSinanaj.jpg";
import Banner from "./Banner";
import TeacherSkills from "../../Shared/TeacherProfile/TeacherSkills";
import whyimg from "../../../Assets/Teachers-profile/why-img2.jpg";
import PreviousWork from "../../Shared/TeacherProfile/PreviousWork";
import project1 from "../../../Assets/Teachers-profile/projectC1.jpg";
import project2 from "../../../Assets/Teachers-profile/projectC2.jpg";
import project3 from "../../../Assets/Teachers-profile/projectC3.jpg";
import project4 from "../../../Assets/Teachers-profile/projectC4.jpg";

import projectLogo1 from "../../../Assets/soundto.png";
import projectLogo2 from "../../../Assets/hireseek.png";
import projectLogo3 from "../../../Assets/kosovadress.png";
import projectLogo4 from "../../../Assets/apkx.png";
import Contact from "../../Shared/Contact/Contact";
import { TeacherData } from "./data";

const Fjolla = () => {
  // const params = useParams();
  const subProjects = [projectLogo1, projectLogo2, projectLogo3, projectLogo4];
  const data = TeacherData.fjolla;
  return (
    <div>
      <Banner
        img={img}
        title={data.name}
        paragraph={data.desc}
        gender="female"
      />
      <TeacherSkills
        img={whyimg}
        teacherImg={img}
        data={data}
      />
      <PreviousWork
        p1={project1}
        p2={project2}
        p3={project3}
		p4={project4}
		work="ElmedineWorks"
        subProjects={subProjects}
      />
      <Contact />
    </div>
  );
};

export default Fjolla;
