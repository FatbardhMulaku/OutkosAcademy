import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, name, icon,style, rotate }) => {
  return (
    <div className="ButtonBtn">
      <Link to={to} style={{flexDirection: `${rotate} !important`}} className={style}>
        <div className={`${icon} BG`} />
        {name}
      </Link>
    </div>
  );
};

export default Button;
