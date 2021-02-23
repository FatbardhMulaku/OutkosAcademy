import React from "react";
import Divider from "../../../Shared/Divider";
import { Img } from "./data";
import Zoom from 'react-reveal/Zoom';

const Graphics = () => {
  const nr = [1, 2, 3];
  return (
    <div className="Graphics container">
      <div className="Graphics_1">
        {nr.map((index) => {
          return <Zoom key={index}><div className={`Graphics_1--img${index} BG`} /></Zoom>;
        })}
      </div>
      <div className="Graphics_2">
        <Divider width="18%" />
        <Zoom top><h2>Regular Shapes are the key to a Good Logo</h2></Zoom>
        
        <div>
          {nr.map((index) => {
            return <Zoom key={index}><div key={index} className={`Graphics_2--img${index} BG`} /></Zoom>;
          })}
        </div>
      </div>
      <div className="Graphics_3">
        <Divider width="10%" />
        <Zoom top><h2>Color Harmony Rule</h2></Zoom>
        <div>
          {Img.map((item, index) => (
            <Zoom key={index}>
            <div key={index} className="Graphics_3--box">
              <div className={`Graphics_3--img${index+1} BG mx-auto`} />
              <h3>{item.title}</h3>
            </div>
            </Zoom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Graphics;
