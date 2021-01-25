import React from "react";
import StyledLink from "../../Shared/StyledLink/StyledLink";

function UseFeature(props) {
  return (
    <div className={`UseFeature ${props.img} `}>
      <div className="container">
        <h2>{props.title}</h2>
        <StyledLink to="/" styles={`${props.style} bg-primary`}>
          {props.btn}
        </StyledLink>
      </div>
    </div>
  );
}

export default UseFeature;
