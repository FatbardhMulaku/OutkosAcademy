import React from "react";
import './UseFeature.scss';
import StyledLink from "../StyledLink/StyledLink";

const UseFeature = (props) => {
  return (
    <div className="use-feature" style={{ backgroundImage: `url(${props.img})` }}>
      <h2 className="main-title">{props.title}</h2>
      <StyledLink to={props.to} styles={props.styles}>{props.link}</StyledLink>
    </div>
  );
};

export default UseFeature;
