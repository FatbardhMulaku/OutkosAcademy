import React from "react";
import PopperBox from "../PopperBox";
import PopperItem from "../PopperItem";
/* import "./About.css";
import "../index.css"; */

import {Career} from "../data";

const About = (props) => {
  
  return (
    <PopperBox
      name="Career"
      trigger={props.trigger}
      width="630px"
    >
      <div className="about_popper_container">
        <ul className="about_popper_list">
          {Career.map((item, index) => (
            <PopperItem
              key={index}
              link={item.link}
              name={item.name}
              icon={`about_popper_icon${index + 1}`}
            />
          ))}
        </ul>
      </div>
    </PopperBox>
  );
};

export default About;
