import React from "react";
import SharedBanner from "../../Shared/Banner/Banner";
import StyledLink from "../../Shared/StyledLink/StyledLink";
import Fade from "react-reveal/Fade";

const Banner = ({ img, style, data }) => {
  return (
    <SharedBanner img={img}>
      <Fade top big>
        <h1 className="main-title">{data.title}</h1>
      </Fade>
      <Fade>
        <p className="paragraph-1">{data.desc}</p>
      </Fade>
      <Fade bottom big>
        <StyledLink to="/" styles={`${style} bg-primary`}>
          {data.btn}
        </StyledLink>
      </Fade>
    </SharedBanner>
  );
};

export default Banner;
