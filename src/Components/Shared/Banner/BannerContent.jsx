import React from "react";
import "./BannerContent.scss";
const Banner = (props) => {
  return (
    <div className={`banner-content ${props.styles}`}>
      <div className="banner-img" style={{ backgroundImage: `url(${props.img})` }}>
        <div className="content">{<props.content />}</div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Banner;
