import React from "react";
import Banneri from "./Banner";
import { Banner } from "./data";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Hero = () => {
  const properties = {
    duration: 5000,
    indicators: true,
    transitionDuration: 500,
    infinite: false,
    prevArrow: (
      <div
        style={{
          width: "42px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13.329"
          height="24.581"
          viewBox="0 0 13.329 24.581"
        >
          <path
            id="Path_6810"
            data-name="Path 6810"
            d="M18.932,0,9.466,8.5,0,0"
            transform="translate(10.505 2.824) rotate(90)"
            fill="none"
            stroke="#333"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
        </svg>
      </div>
    ),
    nextArrow: (
      <div
        style={{
          width: "42px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          borderRadius: "50%",
		  cursor: "pointer",
		  transform: "rotate(180deg)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13.329"
          height="24.581"
          viewBox="0 0 13.329 24.581"
        >
          <path
            id="Path_6810"
            data-name="Path 6810"
            d="M18.932,0,9.466,8.5,0,0"
            transform="translate(10.505 2.824) rotate(90)"
            fill="none"
            stroke="#333"
            strokeMiterlimit="10"
            strokeWidth="4"
          />
        </svg>
      </div>
    ),
  };
  return (
    <div className="HomeHero newHero HomeBG White-Hero">
      <div className="container">
        <div className="HomeHero__line">
          {Banner.lists.map((item, index) => (
            <div>
              <div className={`HomeHero__icon${index + 1} BG`}></div>
              <p>{item.list}</p>
            </div>
          ))}
        </div>
        <Slide {...properties} easing="ease">
          <div key={1}>
            <Banneri data={Banner} style={`md`} />
          </div>
          <div key={2}>
            <Banneri data={Banner} style={`md`} />
          </div>
          <div key={3}>
            <Banneri data={Banner} style={`md`} />
          </div>
        </Slide>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,128L60,117.3C120,107,240,85,360,112C480,139,600,213,720,213.3C840,213,960,139,1080,117.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
