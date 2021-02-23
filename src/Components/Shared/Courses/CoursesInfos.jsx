import React from "react";
import Divider from "../Divider";
import Fade from "react-reveal/Fade";

const CoursesInfos = (props) => {
  return (
    <div className="CoursesInfos container">
      {props.infos.map((item, index) => (
        <Fade bottom cascade key={index + 1}>
          <div className="CoursesInfos-wrapper">
            <Divider width="30%" />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default CoursesInfos;
