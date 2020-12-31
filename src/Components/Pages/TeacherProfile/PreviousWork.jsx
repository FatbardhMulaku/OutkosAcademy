import React from "react";
import "./Styles/PreviousWork.scss";
const PreviousWork = (props) => {
  return (
    <div className="teacher-profile__previous-work">
      <h2 className="sub-title line-up">Previous Work</h2>
      <div className="main-container">
        <div className="container">
          <div className="row">
            <div className="landscape project-1" style={{ backgroundImage: `url(${props.p1})` }}></div>
            <div className="portrait project-2" style={{ backgroundImage: `url(${props.p3}) ` }}></div>
          </div>
          <div className="row start">
            <div className="portrait project-4" style={{ backgroundImage: `url(${props.p2})` }}></div>
            <div className="landscape project-3" style={{ backgroundImage: `url(${props.p4})` }}></div>
          </div>
          <div className="center">
            {props.subProjects.map((p, i) => {
              return <div key={i} className="subproject-img" style={{ backgroundImage: `url(${p})` }}></div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousWork;
