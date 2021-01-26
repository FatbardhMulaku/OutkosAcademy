import React from "react";
import './Banner.scss'
import SharedBanner from "../../Shared/Banner/BannerContent";
import img1 from "../../../Assets/login-banner.jpg";
import Login from "../../Shared/Form/Login";
import { ReactComponent as Check } from "../../../Assets/Svg/check-rounded.svg";
import { ReactComponent as Squares } from "../../../Assets/Svg/squares.svg";
import { ReactComponent as User } from "../../../Assets/Svg/user-check.svg";
import Header from "../../Shared/Header/Header"

const Banner = () => {
  return (
    <div >
      <Header />
      <SharedBanner img={img1} content={BannerContent}>
     
       <Login/>
      </SharedBanner>
    </div>
  );
};

const BannerContent = () => {
  return (
    <div>
      
    <div className="login__banner-content">
      
      <h1 className="sub-title">What do we offer</h1>

      <div className="offers">
        <article className="single-offer">
          <Check />
          <div className="text">
            <h3 className="paragraph-1">Quality</h3>
            <p className="paragraph-3">Learn valuable skills that will be useful in your future.</p>
          </div>
        </article>
        <article className="single-offer">
          <Squares />
          <div className="text">
            <h3 className="paragraph-1">Variety</h3>
            <p className="paragraph-3">We offer a huge number of different Courses you can select for your own preferences</p>
          </div>
        </article>
        <article className="single-offer">
          <User />
          <div className="text">
            <h3 className="paragraph-1">Certified Teachers</h3>
            <p className="paragraph-3">The Teachers here are all professionals at their Courses and do this as a Daily Job.</p>
          </div>
        </article>
      </div>
    </div>
    </div>
  );
};

export default Banner;
