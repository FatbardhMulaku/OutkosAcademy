import React, {  useState } from "react";
import "./Slider.scss";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
const Slider = (props) => {
  const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState("");
  const handleArrows = (next) => {
    let check = current + next;
    // if (next === -1) setDirection("from-left");
    // else setDirection("from-right");
    if (check >= props.children.length) setCurrent(0);
    else if (check < 0) setCurrent(props.children.length - 1);
    else {
      setCurrent(current + next);
    }

  };

  return (
    <div className="slider">
      <div className="content">
        <button className="left-arrow" onClick={() => handleArrows(-1)}>
          <ArrowBackIos />
        </button>
        <button className="right-arrow" onClick={() => handleArrows(1)}>
          <ArrowForwardIos />
        </button>
        {props.children[current]}
      </div>
      <div className="bullets">
        {props.children.map((c, i) => {
          return <button key={i} className={`bullet ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)}></button>;
        })}
      </div>
    </div>
  );
};

export default Slider;
