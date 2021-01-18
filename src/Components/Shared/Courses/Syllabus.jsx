import React from "react";
import Divider from "../Divider";

const Syllabus = (props) => {
  return (
    <div className="Syllabus container">
      <Divider width="20%" />
      <h4>Syllabus</h4>

      <div className="Syllabus--slider">
        <div className="Syllabus--slider__2">28%</div>
      </div>
      <div className="Syllabus--footer">
        {props.Syllabus.map((item, index) => (
          <div
            key={index + 1}
            className="Syllabus--wrapper"
          >
            <div className="Syllabus__arrow BG" />
            <h5>{item.title}</h5>
            <div className={`Syllabus__icon${index+1} BG`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syllabus;
