import React from "react";
import { Item } from "../../Pages/TeacherProfile/data";
import Fade from "react-reveal/Fade";

const TeacherInfo = (props) => {
  return (
    <Fade left cascade>
      <div className="TeacherInfo">
        <div className="TeacherSkill_profile">
          <div className={props.img} />
          <div>
            <h4>{props.name}</h4>
            <div />
          </div>
          <p>{props.job}</p>
          <a href="/teachers">
            Follow <div />
          </a>
        </div>
        <div className="TeacherInfo__follow">
          <div>
            <h3>{props.Followers}</h3>
            <p>Followers</p>
          </div>
          <div>
            <h3>{props.Following}</h3>
            <p>Following</p>
          </div>
        </div>
        <div className="TeacherInfo__links">
          <a href={`https://${props.web}`}>{props.web}</a>
          <div>
            {Item.map((index) => (
              <div
                key={index + 1}
                className={`TeacherInfo__links--img${index} BG`}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default TeacherInfo;
