import React, { Component } from "react";
import Divider from "../../Shared/Divider";
import CourseCard from "../CourseList/CourseCard";
import { courses } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FormattedMessage } from "react-intl";

export class Courses extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
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
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: true,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            infinite: true,
          },
        },
      ],
    };
    return (
      <div className="HomeCourses container">
        <Divider width="12%" />
        <h1>
          <FormattedMessage
            id="home.WhatWeOffer.Course.12"
            defaultMessage="Recommended Courses"
          />
        </h1>
        <div className="HomeCourses-area">
          <Slider {...settings}>
            {courses.map((c, i) => {
              return <CourseCard {...c} key={i} />;
            })}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Courses;
