import React from "react";
import StyledLink from "../../Shared/StyledLink/StyledLink";

const Hero = ({ data, style }) => {
  return (
    <div className="newHero">
      
        <h1>{data.title}</h1>
        <p>{data.title}</p>
        <div>
          <StyledLink to="/" styles={`${style} bg-primary`}>
            {data.btn}
          </StyledLink>
        </div>
      
      
    </div>
  );
};

export default Hero;
