import React from "react";
import Divider from "../Divider";

const CourseInfo2 = (props) => {
  return (
    <div className="CourseInfo2 container">
      <Divider width="20%" />
      <h4>{props.title}</h4>
      <p>
        {props.desc}
      </p>
    </div>
  );
};

export default CourseInfo2;
