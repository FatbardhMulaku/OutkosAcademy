import React from "react";
import SharedBanner from "../../Shared/Banner/Banner";
import StyledLink from "../../Shared/StyledLink/StyledLink";
const Banner = (props) => {
  return (
    <SharedBanner img={props.img}>
      <h1 className="main-title">{props.title}</h1>
      <p className="paragraph-1">{props.paragraph}</p>
      <StyledLink to="#here" styles="sm bg-primary">
        {props.gender === "male" ? "Contact Him" : "Contact Her"}
      </StyledLink>
    </SharedBanner>
  );
};

export default Banner;
