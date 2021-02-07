import React from "react";
import SharedBanner from "../../Shared/Banner/Banner";
import StyledLink from "../../Shared/StyledLink/StyledLink";

const Banner = ({img, style, data}) => {
  return (
    <SharedBanner img={img}>
      <h1 className="main-title">{data.title}</h1>
      <p className="paragraph-1">
       {data.desc}
      </p>
      <StyledLink to="/" styles={`${style} bg-primary`}>
        {data.btn}
      </StyledLink>
    </SharedBanner>
  );
};

export default Banner;
