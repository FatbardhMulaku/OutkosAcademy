import React from "react";
import { FormattedMessage } from "react-intl";
import Fade from "react-reveal/Fade";

function AboutTeacher(props) {
  return (
    <Fade top big cascade>
      <div className="AboutTeacher">
        <h1>
          <FormattedMessage id="AboutTeacher.title" defaultMessage="About Me" />
        </h1>
        {props.aboutInfo.map(({ item }, index) => (
          <p key={index + 1}>{item}</p>
        ))}
      </div>
    </Fade>
  );
}

export default AboutTeacher;
