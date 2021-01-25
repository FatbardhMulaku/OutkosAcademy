import React from "react";
import Feature from "../../Shared/Features/Features";
import "../Home/Styles/Features.scss";

function Features(props) {
  return (
    <div className="home__features">
      <div className="main-container">
        {props.data.map((d, i) => {
          return <Feature {...d} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Features;
