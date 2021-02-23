import React from "react";
import Zoom from "react-reveal/Zoom";

const CoursesCard = (props) => {
  return (
    <div className="Courses_Card container">
      {props.cards.map((item, index) => (
        <Zoom  key={index + 1}>
          <div key={index + 1} className="Courses_Card--wrapper ">
            <div className={`Courses_Card--wrapper_img${index + 1} BG`} />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        </Zoom>
      ))}
    </div>
  );
};

export default CoursesCard;
