import React from "react";
import StyledLink from "../StyledLink/StyledLink";
import ListItem from "../ListItem/ListItem";

const TeacherSkill = ({data, img}) => {
  return (
    <div className="TeacherSkill container">
      <div className="TeacherSkill_txt">
        <h2>{data.title}</h2>
        <p>{data.desc}</p>
        <StyledLink to={`/${data.toLink}`} styles="sm bg-primary TeacherSkill--btn">
		View Profile
        </StyledLink>
      </div>
      <div className="TeacherSkill_info">
        {data.skills.map((item, index) => (
          <ListItem key={index}>{item.skill}</ListItem>
        ))}
      </div>
      <div className="TeacherSkill_profile">
        <div className={img} />
        <div>
          <h4>{data.name}</h4>
          <div />
        </div>
        <p>{data.job}</p>
        <a href="/teachers">
          Follow <div />
        </a>
      </div>
    </div>
  );
};

export default TeacherSkill;
