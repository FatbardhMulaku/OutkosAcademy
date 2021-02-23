import React from "react";
import Divider from "../../Shared/Divider";
import TeacherInfo from "../../Shared/TeacherProfile/TeacherInfo";
import { TeacherData } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from "react-intl";
import Zoom from "react-reveal/Zoom";
import Fade from 'react-reveal/Fade';

function Teachers() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="HomeTeachers container">
      <Divider width="12%" />
      <Fade top big>
      <h1>
        <FormattedMessage
          id="home.teachers.122"
          defaultMessage="Our Best Teachers"
        />
      </h1>
      </Fade>
      <div className="HomeCourses-area">
        <Slider {...settings}>
          {TeacherData.map((c, i) => {
            return <Zoom key={i}><TeacherInfo {...c} key={i} /></Zoom>
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Teachers;
