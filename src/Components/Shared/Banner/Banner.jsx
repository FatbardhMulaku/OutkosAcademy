import React from "react";
import "./Banner.scss";
const Banner = (props) => {
  return (
    <div className={`banner ${props.styles}`}>
      <div className="banner-img" style={{ backgroundImage: `url(${props.img})` }}>
        <div className="content">{props.children}</div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Banner;
