import React from "react";
import SharedBanner from "../../Shared/Banner/Banner";
import StyledLink from "../../Shared/StyledLink/StyledLink";
import Fade from "react-reveal/Fade";

const Banner = (props) => {
  return (
    <SharedBanner img={props.img}>
      <Fade top big>
        <h1 className="main-title">{props.title}</h1>
      </Fade>
      <Fade >
        <p className="paragraph-1">{props.paragraph}</p>
      </Fade>

      <Fade bottom big>
        <StyledLink to="#here" styles="sm bg-primary">
          {props.gender === "male" ? "Contact Him" : "Contact Her"}
        </StyledLink>
      </Fade>
    </SharedBanner>
  );
};

export default Banner;
