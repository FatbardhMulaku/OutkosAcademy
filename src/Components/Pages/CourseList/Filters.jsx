import { Checkbox } from "@material-ui/core";
import React from "react";
import "./Styles/Filters.scss";

const filters = {
  courses: {
    title: "Courses",
    filters: [
      {
        label: "User Interface",
        count: 3,
      },
      {
        label: "User Experience",
        count: 2,
      },
      {
        label: "Frontend Developer",
        count: 6,
      },
      {
        label: "React Developer",
        count: 4,
      },
      {
        label: "Angular Developer",
        count: 5,
      },
      {
        label: "Backend Developer",
        count: 13,
      },
    ],
  },
  duration: {
    title: "Duration",
    filters: [
      {
        label: "Short(10 Hours at Max)",
        count: 6,
      },
      {
        label: "Medium (11-18 Hours)",
        count: 2,
      },
      {
        label: "Long(20+ Hours)",
        count: 3,
      },
    ],
  },
  location: {
    title: "Location",
    filters: [
      {
        label: "Prishtine",
        count: 13,
      },
      {
        label: "Podujeve",
        count: 2,
      },
      {
        label: "Prizren",
        count: 6,
      },
      {
        label: "Gjilan",
        count: 8,
      },
      {
        label: "Gjakove",
        count: 3,
      },
      {
        label: "Ferizaj",
        count: 5,
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
