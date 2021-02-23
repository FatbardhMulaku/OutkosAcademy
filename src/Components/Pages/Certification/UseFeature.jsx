import React from "react";
import StyledLink from "../../Shared/StyledLink/StyledLink";
import Bounce from "react-reveal/Bounce";

function UseFeature(props) {
  return (
    <div className={`UseFeature ${props.img} `}>
      <div className="container">
        <Bounce left>
          <h2>{props.title}</h2>
        </Bounce>
        <Bounce right>
          <StyledLink to="/" styles={`${props.style} bg-primary`}>
            {props.btn}
          </StyledLink>
        </Bounce>
      </div>
    </div>
  );
}

export default UseFeature;
