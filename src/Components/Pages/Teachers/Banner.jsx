import React from "react";
import SharedBanner from "../../Shared/Banner/Banner";
import img from "../../../Assets/teachers-banner.jpg";
import StyledLink from "../../Shared/StyledLink/StyledLink";
const Banner = () => {
  return (
    <SharedBanner img={img}>
      <h1 className="main-title">Carefully Hand-Picked Teachers</h1>
      <p className="paragraph-1">We always select our teachers at a professional Level, to maximaze your learning experience with OutKos Academy.</p>
      <StyledLink to="/" styles="sm bg-primary">
        Learn More
      </StyledLink>
    </SharedBanner>
  );
};

export default Banner;
