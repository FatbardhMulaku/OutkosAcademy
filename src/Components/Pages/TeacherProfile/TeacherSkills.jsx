import React from "react";
import './Styles/TeacherSkills.scss'
import { ReactComponent as Lighting } from "../../../Assets/Svg/lighting.svg";
import { ReactComponent as Clock } from "../../../Assets/Svg/clock-dark.svg";
import { ReactComponent as Dollar } from "../../../Assets/Svg/dollar.svg";
import ListItem from "../../Shared/ListItem/ListItem";
const TeacherSkills = (props) => {
  return (
    <div className="teacher-profile__teacher-skills">
      <h2 className="sub-title line-up">Why Him?</h2>

      <div className="main-container">
        <div className="container">
          <div className="img" style={{backgroundImage:`url(${props.img})`}}></div>
          <div className="right">
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
            <div className="teacher-data">
                <div className="teacher-skills">
                    <ListItem>Structuring</ListItem>
                    <ListItem>Programming</ListItem>
                    <ListItem>Complex Functions</ListItem>
                    <ListItem>Efficient Experience</ListItem>
                </div>
                <div className="teacher-profile">
                    <div className="teacher-img" style={{backgroundImage:`url(${props.teacherImg})`}}></div>
                    <div className="teacher">
                        <h4 className="paragraph-3">Elvis Sylejmani</h4>
                        <p className="paragraph-3">Backend Developer</p>
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
