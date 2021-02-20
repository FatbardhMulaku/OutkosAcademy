import React from "react";
import SharedBanner from "../../Shared/Banner/Banner";
import img from "../../../Assets/teachers-banner.jpg";
import StyledLink from "../../Shared/StyledLink/StyledLink";
import { FormattedMessage } from "react-intl";
  
const Banner = () => {
  return (
    <SharedBanner img={img}>
      <h1 className="main-title">
        <FormattedMessage
          id="teachers.banner.title.1"
          defaultMessage="Carefully Hand-Picked Teachers"
        />
      </h1>
      <p className="paragraph-1">
        <FormattedMessage
          id="teachers.banner.desc.1"
          defaultMessage="We always select our teachers at a professional Level, to maximaze your learning experience with OutKos Academy."
        />
      </p>
      <StyledLink to="/" styles="sm bg-primary">
        <FormattedMessage
          id="teachers.banner.btn.1"
          defaultMessage="Learn More"
        />
      </StyledLink>
    </SharedBanner>
  );
};

export default Banner;
