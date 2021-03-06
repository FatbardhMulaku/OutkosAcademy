import React from "react";
import "./Banner.scss";
import SharedBanner from "../../Shared/Banner/BannerContent";
import img1 from "../../../Assets/register-banner.jpg";
import Register from "../../Shared/Form/Register";
import { ReactComponent as Clock } from "../../../Assets/Svg/clock.svg";
import { ReactComponent as Flower } from "../../../Assets/Svg/flower.svg";
import { ReactComponent as Graph } from "../../../Assets/Svg/graph.svg";
import { ReactComponent as Cube } from "../../../Assets/Svg/cube-line.svg";
import { FormattedMessage } from "react-intl";
import Fade from "react-reveal/Fade";

const Banner = () => {
  return (
    <div>
      <SharedBanner img={img1} content={BannerContent}>
        <Register />
      </SharedBanner>
    </div>
  );
};

const BannerContent = () => {
  return (
    <div className="register__banner-content">
      <Fade top big>
        <h1 className="sub-title">
          <FormattedMessage
            id="register.title.1"
            defaultMessage="Register Now and get these Advantages"
          />
        </h1>
      </Fade>
      <Fade left cascade>
        <div className="advantages">
          <article className="single-advantage">
            <Clock />{" "}
            <p className="paragraph-2">
              <FormattedMessage
                id="register.item.1"
                defaultMessage="Learn valuable skills that will be useful in your future."
              />
            </p>
          </article>
          <article className="single-advantage">
            <Flower />{" "}
            <p className="paragraph-2">
              <FormattedMessage
                id="register.item.2"
                defaultMessage="Develop your Creative Thinking and Problem Solving abilities."
              />
            </p>
          </article>
          <article className="single-advantage">
            <Graph />{" "}
            <p className="paragraph-2">
              <FormattedMessage
                id="register.item.3"
                defaultMessage="Benefit from the best opportunity to prepare you for your Career."
              />
            </p>
          </article>
          <article className="single-advantage">
            <Cube />{" "}
            <p className="paragraph-2">
              <FormattedMessage
                id="register.item.4"
                defaultMessage="Perfect place to be for your Next Occupation/Project"
              />
            </p>
          </article>
        </div>
      </Fade>
    </div>
  );
};

export default Banner;
