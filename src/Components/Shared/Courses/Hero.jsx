import React from "react";
import StyledLink from "../StyledLink/StyledLink";
import Fade from "react-reveal/Fade";

function Hero({ data, BGimg }) {
  return (
    <div className={`${BGimg} Course-Hero BG`}>
      <div className="Hero__wrapper container">
        <Fade top big>
          <h2>{data.title}</h2>
        </Fade>
        <Fade right>
          <p>{data.desc}</p>
        </Fade>
        <Fade bottom big>
          <StyledLink to="/" styles="sm bg-primary">
            {data.btn}
          </StyledLink>
        </Fade>
      </div>
    </div>
  );
}

export default Hero;
