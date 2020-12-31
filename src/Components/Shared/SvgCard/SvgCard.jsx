import React from "react";
import './SvgCard.scss'
const SvgCard = (props) => {

    const cloned = React.cloneElement(props.svg,{className:`${props.svg.props.className} svg`})
  return (
    <div className={`svg-card ${props.styles}`}>
      {cloned}
      <h3 className="paragraph-1">{props.title}</h3>
      <p className={props.paragraphClass}>{props.paragraph}</p>
      {props.children}
    </div>
  );
};

export default SvgCard;
