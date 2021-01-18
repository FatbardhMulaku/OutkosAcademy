import React, { useState } from "react";
import "./Styles/Courses.scss";
import { ReactComponent as Filter } from "../../../Assets/Svg/filter.svg";
import { ReactComponent as Desc } from "../../../Assets/Svg/descending-sort.svg";
import { ReactComponent as Calendar } from "../../../Assets/Svg/calendar.svg";
import { ReactComponent as Search } from "../../../Assets/Svg/search.svg";
import Input from "../../Shared/Form/Input";
import Select from "../../Shared/Form/Select";
import { courses } from "./CourseData";
import CourseCard from "./CourseCard";
const CoursesFilters = () => {
  const [state, setState] = useState({
    value: "dsc",
    label: "Desceding",
  });

  const selectItems = [
    {
      value: "dsc",
      label: "Desceding",
      onClick: setState.bind(null, { value: "dsc", label: "Descending" }),
    },
    {
      value: "asc",
      label: "Asceding",
      onClick: setState.bind(null, { value: "asc", label: "Ascending" }),
    },
  ];
  return (
    <div className="courses__courses">
      <div className="filters">
        <Filter />
        <Select icon={<Desc />} category="Sort by" handleChange={setState}>
          {selectItems.map((o, i) => {
            return (
              <div className="smth" value={o.value} key={i}>
                {o.label}
              </div>
            );
          })}
        </Select>
        <div className="row">
          <Calendar /> <Input type="date" label="Start Date" id="start-date" styles="date-input" />
        </div>
      </div>
      <Input type="text" icon={<Search />} id="search-course" name="search-course" placeholder="Search Courses..." styles="search-input" />
      <div className="courses-area">
        {courses.map((c, i) => {
          return <CourseCard {...c} key={i} />;
        })}
      </div>
    </div>
  );
};

export default CoursesFilters;
