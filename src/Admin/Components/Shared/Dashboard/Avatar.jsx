import React from "react";

function Avatar({name, img, col}) {
  return (
    <div style={{flexDirection: `${col}`}}>
      <p>{name}</p>
      <div className={`GraphicDesign${img}`}></div>
    </div>
  );
}

export default Avatar;
