import { Checkbox } from "@material-ui/core";
import React from "react";
import "../CourseList/Styles/Filters.scss";

const filters = {
  courses: {
    title: "Categories",
    filters: [
      {
        label: "Business",
        count: 13,
      },
      {
        label: "Engeenering",
        count: 26,
      },
      {
        label: "Design",
        count: 47,
      },
      {
        label: "Programming",
        count: 39,
      },
      {
        label: "Marketing",
        count: 45,
      },
      {
        label: "Technology",
        count: 83,
      },
    ],
  },
  duration: {
    title: "Length",
    filters: [
      {
        label: "Short (1-50 Pages)",
        count: 76,
      },
      {
        label: "Medium (51-200 Pages)",
        count: 92,
      },
      {
        label: "Long (201+ Pages)",
        count: 61,
      },
    ],
  },
  location: {
    title: "Type",
    filters: [
      {
        label: "Hard Copy",
        count: 123,
      },
      {
        label: "Virtual Copy (PDF)",
        count: 342,
      },
      {
        label: "Audio",
        count: 96,
      },
    ],
  },
};
const Filters = () => {
  return (
    <div className="courses__filters">
      <FilterCategory {...filters.courses} />
      <div className="price-range">
        <h2 className="small-title">Price Range</h2>
        <input type="range" name="" min={0} max={350} step={10} id="" />
      </div>
      <FilterCategory {...filters.duration} />
      <FilterCategory {...filters.location} />
    </div>
  );
};

const FilterCategory = (props) => {
  return (
    <div className="filter-category">
      <h2 className="small-title">{props.title}</h2>
      {props.filters.map((f, i) => {
        return (
          <div className="filter" key={i}>
            <div className="checkbox-label">
              <Checkbox style={{ color: "gray" }} /> {f.label}
            </div>
            <span className="count">{f.count}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
