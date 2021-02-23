import React from "react";
import { ReactComponent as Lighting } from "../../../Assets/Svg/lighting.svg";
import { ReactComponent as Clock } from "../../../Assets/Svg/clock-dark.svg";
import { ReactComponent as Dollar } from "../../../Assets/Svg/dollar.svg";
import ListItem from "../ListItem/ListItem";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const TeacherSkills = ({data, img, teacherImg}) => {
  return (
    <div className="teacher-profile__teacher-skills">
      <h2 className="sub-title line-up">{data.title}</h2>

      <div className="main-container">
        <div className="container">
        <Zoom><div className="img" style={{backgroundImage:`url(${img})`}}></div></Zoom>
          <div className="right">
          <Fade top big cascade>
            <div className="course-data">
              <div className="single-course-data">
                <Lighting /> Online Course
              </div>
              <div className="single-course-data">
                <Clock /> 24/7 Available
              </div>
              <div className="single-course-data">
                <Dollar /> 120
              </div>
            </div>
            </Fade>
            <div className="teacher-data">
                <div className="teacher-skills">
                    {
                      data.skills.map((item, index) =>(
                        <ListItem key={index}>{item.skill}</ListItem>
                      ))
                    }
                   
                </div>
                <div className="teacher-profile">
                <Zoom><div className="teacher-img" style={{backgroundImage:`url(${teacherImg})`}}></div></Zoom>
                    <div className="teacher">
                        <h4 className="paragraph-3 font-bold">{data.name}</h4>
                        <p className="paragraph-3">{data.job}</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSkills;
