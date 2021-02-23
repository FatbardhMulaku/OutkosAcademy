import React from "react";
import Divider from "../Divider";
import Application from "../Form/Application";
import { Benefits } from "./data";
import { FormattedMessage } from "react-intl";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function ApplicationForm() {
  return (
    <div className="ApplicationForm container">
      <Divider width="20%" />
      <Fade top big>
      <h3>
        <FormattedMessage
          id="ApplicationForm.title.1"
          defaultMessage="Application form"
        />{" "}
      </h3>
      </Fade>
      <div className="ApplicationForm__wrapper">
        <div className="w-full lg:w-1/2 m-auto">
        <Zoom>
          <div className="ApplicationForm__wrapper--img BG m-auto">
            <div>
              <h4>{Benefits.title}</h4>
              {Benefits.items.map(({ item }, index) => (
                <div key={index} className="ApplicationForm__items">
                  <div
                    className={`ApplicationForm__items--icon${index + 1} BG`}
                  />
                  <h3>{item}</h3>
                </div>
              ))}
            </div>
          </div>
          </Zoom>
        </div>
        <div className="w-full lg:w-1/2">
          <Application />
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;
