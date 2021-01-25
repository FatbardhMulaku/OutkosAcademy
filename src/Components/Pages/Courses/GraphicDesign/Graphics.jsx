import React from "react";
import Divider from "../../../Shared/Divider";
import { Img } from "./data";

const Graphics = () => {
  const nr = [1, 2, 3];
  return (
    <div className="Graphics container">
      <div className="Graphics_1">
        {nr.map((index) => {
          return <div key={index} className={`Graphics_1--img${index} BG`} />;
        })}
      </div>
      <div className="Graphics_2">
        <Divider width="18%" />
        <h2>Regular Shapes are the key to a Good Logo</h2>
        <div>
          {nr.map((index) => {
            return <div key={index} className={`Graphics_2--img${index} BG`} />;
          })}
        </div>
      </div>
      <div className="Graphics_3">
        <Divider width="10%" />
        <h2>Color Harmony Rule</h2>
        <div>
          {Img.map((item, index) => (
            <div key={index} className="Graphics_3--box">
              <div className={`Graphics_3--img${index+1} BG mx-auto`} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graphics;
