import React from "react";
import Divider from "../Divider";
import Fade from 'react-reveal/Fade';

const CourseInfo2 = (props) => {
  return (
    <div className="CourseInfo2 container">
      <Divider width="20%" />
      <Fade top big ><h4>{props.title}</h4></Fade>
      <p>
        {props.desc}
      </p>
    </div>
  );
};

export default CourseInfo2;
