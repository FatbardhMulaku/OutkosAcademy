import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";
const Logo = (props) => {
  return <Link className={`logo ${props.footer ? "white" : ""}`} to="/"></Link>;
};

export default Logo;
