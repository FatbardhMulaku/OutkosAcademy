import React from "react";
import { Link } from "react-router-dom";
/* import "./index.css";
import "./Industries/Industries.css";
import "./Career/About.css"; */
import { MenuItem } from "@material-ui/core";
const PopperItem = (props) => {
  return (
    <MenuItem>
      <Link to={`/${props.link}`}>
        <div className={`popper_item_icon ${props.icon}`}></div>
        {props.name}
      </Link>
    </MenuItem>
  );
};

export default PopperItem;
