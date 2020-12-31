import React from "react";
import Courses from "./Courses";
import Filters from "./Filters";
import "./Styles/CoursesAndFilters.scss";
const CoursesAndFilters = () => {
  return (
    <div className="courses-and-filters">
      <div className="main-container">
        <div className="container">
          <div className="left">
            <Filters />
          </div>

          <div className="right">
            <Courses/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesAndFilters;
