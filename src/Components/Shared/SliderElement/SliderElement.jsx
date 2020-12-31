import React from "react";
import ListItem from "../ListItem/ListItem";
import "./SliderElement.scss";
const SliderElement = (props) => {
  return (
    <div className="slider-element">
      <div className="left">
        <SliderSideData {...props.left} />
      </div>
      <div className="vertical-line"></div>
      <div className="right">
        <SliderSideData {...props.right} />
      </div>
    </div>
  );
};

const SliderSideData = (props) => {
  return (
    <div className="slider-side-data">
      <div className="top">
        <div className="img" style={{ backgroundImage: `url(${props.img})` }}></div>
        <div className="sub-title">{props.title}</div>
      </div>
      <div className="middle">
        <div className="paragraph-1">{props.paragraph}</div>
      </div>
      <div className="bottom">
        <div className="grid-content">
          {props.items.map((it, i) => {
            return <ListItem key={i}>{it}</ListItem>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SliderElement;
