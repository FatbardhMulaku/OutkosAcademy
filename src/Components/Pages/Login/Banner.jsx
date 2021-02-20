import React from "react";
import './Banner.scss'
import SharedBanner from "../../Shared/Banner/BannerContent";
import img1 from "../../../Assets/login-banner.jpg";
import Login from "../../Shared/Form/Login";
import { ReactComponent as Check } from "../../../Assets/Svg/check-rounded.svg";
import { ReactComponent as Squares } from "../../../Assets/Svg/squares.svg";
import { ReactComponent as User } from "../../../Assets/Svg/user-check.svg";
import { FormattedMessage } from "react-intl";

const Banner = () => {
  return (
    <div >
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
      
      <h1 className="sub-title">
      <FormattedMessage id="login.title.1" defaultMessage="What do we offer"/>
        </h1>

      <div className="offers">
        <article className="single-offer">
          <Check />
          <div className="text">
            <h3 className="paragraph-1"><FormattedMessage id="login.item.title.1" defaultMessage="Quality"/></h3>
            <p className="paragraph-3"><FormattedMessage id="login.item.desc.1" defaultMessage="Learn valuable skills that will be useful in your future."/></p>
          </div>
        </article>
        <article className="single-offer">
          <Squares />
          <div className="text">
            <h3 className="paragraph-1"><FormattedMessage id="login.item.title.2" defaultMessage="Variety"/></h3>
            <p className="paragraph-3"><FormattedMessage id="login.item.desc.2" defaultMessage="We offer a huge number of different Courses you can select for your own preferences"/></p>
          </div>
        </article>
        <article className="single-offer">
          <User />
          <div className="text">
            <h3 className="paragraph-1"><FormattedMessage id="login.item.title.3" defaultMessage="Certified Teachers"/></h3>
            <p className="paragraph-3"><FormattedMessage id="login.item.desc.3" defaultMessage="The Teachers here are all professionals at their Courses and do this as a Daily Job."/></p>
          </div>
        </article>
      </div>
    </div>
    </div>
  );
};

export default Banner;
