import React from "react";
import StyledLink from "../../Shared/StyledLink/StyledLink";
import Zoom from 'react-reveal/Zoom';

const Hero = ({ data, style }) => {
  return (
    <div className="newHero">
      <Zoom >
        <h1>{data.title}</h1>
        <p>{data.title}</p>
        <div>
          <StyledLink to="/" styles={`${style} bg-primary`}>
            {data.btn}
          </StyledLink>
        </div>
        </Zoom>
      
    </div>
  );
};

export default Hero;
