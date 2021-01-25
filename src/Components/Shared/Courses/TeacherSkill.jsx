import React from "react";
import StyledLink from "../StyledLink/StyledLink";
import ListItem from "../ListItem/ListItem";

const TeacherSkill = (props) => {
  return (
    <div className="TeacherSkill container">
      <div className="TeacherSkill_txt">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <StyledLink to={`/${props.toLink}`} styles="sm bg-primary TeacherSkill--btn">
		View Profile
        </StyledLink>
      </div>
      <div className="TeacherSkill_info">
        {props.skills.map((item, index) => (
          <ListItem key={index}>{item.skill}</ListItem>
        ))}
      </div>
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
    </div>
  );
};

export default TeacherSkill;
