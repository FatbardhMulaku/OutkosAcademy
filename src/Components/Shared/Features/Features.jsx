import React from "react";
import StyledLink from "../StyledLink/StyledLink";
import "./Features.scss";
import Fade from "react-reveal/Fade";

const Features = (props) => {
  return (
    <div className={`features ${props.styles}`}>
      <h2 className="sub-title">{props.title}</h2>
      <div className="container">
        <Fade left>
          <div
            className="img"
            style={{ backgroundImage: `url(${props.img})` }}
          ></div>
        </Fade>
        <Fade right> 
          <div className="content">
            <h2 className="sub-title">{props.title2}</h2>
            <p className="paragraph-2">{props.paragraph}</p>
            <StyledLink to={props.to} styles="sm bg-primary">
              {props.link}
            </StyledLink>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Features;
