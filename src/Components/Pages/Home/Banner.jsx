import React from "react";
import SharedBanner from "../../Shared/Banner/Banner";
import img from "../../../Assets/home-banner.jpg";
import StyledLink from "../../Shared/StyledLink/StyledLink";
const Banner = () => {
  return (
    <SharedBanner img={img}>
      <h1 className="main-title">Learn Valuable Skills from the World's Best</h1>
      <p className="paragraph-1">
        Say goodbye to generic instructions. Start learning practical skills that earn you raises and advance your career.
      </p>
      <StyledLink to="/" styles="sm bg-primary">
        Learn More
      </StyledLink>
    </SharedBanner>
  );
};

export default Banner;
