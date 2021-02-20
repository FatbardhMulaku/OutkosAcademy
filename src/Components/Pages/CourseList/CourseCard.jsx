import React from "react";
import "./Styles/CourseCard.scss";

import { ReactComponent as Lighting } from "../../../Assets/Courses/Path3603.svg";
import { ReactComponent as Clock } from "../../../Assets/Courses/clock.svg";
import { ReactComponent as Dollar } from "../../../Assets/Svg/dollar.svg";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  return (
    <div className="course-card">
      <Link to={props.link}>
      <div className="top">
        {props.svg}
        <h2 className="small-title">{props.name}</h2>
      </div>
      <div className="paragraph-3">{props.description}</div>

      <div className="bottom">
        <div className="single-course-info">
          <Lighting /> {props.type}
        </div>
        <div className="single-course-info">
          <Clock /> {props.availability}
        </div>
        <div className="single-course-info">
          <Dollar /> {props.price}
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CourseCard;
