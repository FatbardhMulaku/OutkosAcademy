import React from "react";
import StyledLink from "../StyledLink/StyledLink";

const Hero = ({data ,img, style}) => {
  return (
    <div className={`newHero ${img}`}>
      <div className="container">
        <h1>{data.title}</h1>
        <p>{data.title}</p>
        <div>
		<StyledLink to="/" styles={`${style} bg-primary`}>
          {data.btn}
        </StyledLink>
		</div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,128L60,117.3C120,107,240,85,360,112C480,139,600,213,720,213.3C840,213,960,139,1080,117.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
