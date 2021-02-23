import React from "react";
import SharedBanner from "../../Shared/Banner/Banner";
import img from "../../../Assets/teachers-banner.jpg";
import StyledLink from "../../Shared/StyledLink/StyledLink";
import { FormattedMessage } from "react-intl";
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';

const Banner = () => {
  return (
    <SharedBanner img={img}>
      <Fade top big>
        <h1 className="main-title">
          <FormattedMessage
            id="teachers.banner.title.1"
            defaultMessage="Carefully Hand-Picked Teachers"
          />
        </h1>
      </Fade>
      <Zoom >
        <p className="paragraph-1">
          <FormattedMessage
            id="teachers.banner.desc.1"
            defaultMessage="We always select our teachers at a professional Level, to maximaze your learning experience with OutKos Academy."
          />
        </p>
      </Zoom>
      <Fade bottom big>
        <StyledLink to="/" styles="sm bg-primary">
          <FormattedMessage
            id="teachers.banner.btn.1"
            defaultMessage="Learn More"
          />
        </StyledLink>
      </Fade>
    </SharedBanner>
  );
};

export default Banner;
