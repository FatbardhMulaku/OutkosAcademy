import React from "react";
import StyledLink from "../StyledLink/StyledLink";
import Flash from "react-reveal/Flash";

const EndHero = () => {
  return (
    <div className="EndHero BG">
      <Flash>
        <StyledLink to="/" styles="sm bg-primary">
          Enroll Now
        </StyledLink>
      </Flash>
    </div>
  );
};

export default EndHero;
