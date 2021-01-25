import React from "react";
import Divider from "../../Shared/Divider";
import StyledLink from "../../Shared/StyledLink/StyledLink";
  

function SectionA3(props) {
  return (
    <div className="Courses_Card2">
      <div className="container">
        <Divider width="30%" />
        <h1>{props.title}</h1>
        <div className="Courses_Card2_wrapper">
          {props.cards.map((item, index) => (
            <div key={index + 1} className="Courses_Card2--Box">
              <h2>{index + 1}</h2>
              <div className={`Courses_Card2--Box${props.imgList}${index + 1} BG`} />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <StyledLink to="/" styles={`${props.style} bg-primary`}>
          {props.btn}
        </StyledLink>
      </div>
    </div>
  );
}

export default SectionA3;
