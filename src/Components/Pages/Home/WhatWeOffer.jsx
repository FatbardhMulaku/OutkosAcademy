import React from "react";
import Slider from "../../Shared/Slider/Slider";
import SliderElement from "../../Shared/SliderElement/SliderElement";
import "./Styles/WhatWeOffer.scss";
import "../../../Assets/Home/City.png";
import img1 from "../../../Assets/web-programming.png";
import img2 from "../../../Assets/networking.png";
import { FormattedMessage } from "react-intl";

const data = {
  left: {
    img: img1,
    title: (
      <FormattedMessage
        id="home.WhatWeOffer.titleA1"
        defaultMessage="Web and Mobile App Developer"
      />
    ),
    paragraph: (
      <FormattedMessage
        id="home.WhatWeOffer.descA1"
        defaultMessage="Learn to build your own websites and applications from the best creators out there."
      />
    ),
    items: [
      <FormattedMessage id="home.WhatWeOffer.itemsA1" defaultMessage="Database" />,
      <FormattedMessage
        id="home.WhatWeOffer.itemsA2"
        defaultMessage="Programming"
      />,
      <FormattedMessage
        id="home.WhatWeOffer.itemsA3"
        defaultMessage="E-commerce"
      />,
      <FormattedMessage
        id="home.WhatWeOffer.itemsA4"
        defaultMessage="Web Analytics"
      />,
    ],
  },
  right: {
    img: img2,
    title: (
      <FormattedMessage
        id="home.WhatWeOffer.titleB1"
        defaultMessage="Network Administrator"
      />
    ),
    paragraph: (
      <FormattedMessage
        id="home.WhatWeOffer.paragraphB1"
        defaultMessage="Learn Professional Network knowledge to give you a huge advantage on the future."
      />
    ),
    items: [
      <FormattedMessage
        id="home.WhatWeOffer.itemsB1"
        defaultMessage="Network Engineering"
      />,
      <FormattedMessage
        id="home.WhatWeOffer.itemsB2"
        defaultMessage="System Analysis"
      />,
      <FormattedMessage
        id="home.WhatWeOffer.itemsB3"
        defaultMessage="System Integration"
      />,
      <FormattedMessage
        id="home.WhatWeOffer.itemsB4"
        defaultMessage="Cyber-Security"
      />,
    ],
  },
};

const WhatWeOffer = () => {
  return (
    <div className="home__what-we-offer">
      <div className="main-container">
        <div className="title-group">
          <div className="line"></div>
          <h2 className="sub-title">
            <FormattedMessage
              id="home.WhatWeOffer.asdf1"
              defaultMessage="What we offer"
            />
          </h2>
          <div className="line"></div>
        </div>
        <div className="content">
          <div className="img"></div>
          <Slider>
            <SliderElement {...data} />
            <SliderElement {...data} />
            <SliderElement {...data} />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
