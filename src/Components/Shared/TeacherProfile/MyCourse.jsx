import React, { useState } from "react";
import { ReactComponent as Desc } from "../../../Assets/Svg/descending-sort.svg";
import Select from "../../Shared/Form/Select";
import CourseCard from "./CourseCard";
import {TeacherData} from "../../Pages/TeacherProfile/data";

const courses = TeacherData.bleart.courses;

const MyCourse = (props) => {
  const [state, setState] = useState({
    value: "best",
    label: "Best Rated",
  });

  const selectItems = [
    {
      value: "best",
      label: "Best Rated",
      onClick: setState.bind(null, { value: "best", label: "Best Rated" }),
    },
    {
      value: "new",
      label: "Newest",
      onClick: setState.bind(null, { value: "new", label: "Newest" }),
    },
    {
      value: "price",
      label: "Price",
      onClick: setState.bind(null, { value: "price", label: "Price" }),
    },
  ];
  return (
    <div className="MyCourse">
      <div className="MyCourse__head">
        <div>
          <h1>My Courses</h1>{" "}
          <a href="/courses">
            View All <div />
          </a>
        </div>

        <div>
          <div className="MyCourse__head--img1" />
          <div className="MyCourse__head--img2" />
          <Select icon={<Desc />} category="Sort by" handleChange={setState}>
            {selectItems.map((o, i) => {
              return (
                <div className="smth" value={o.value} key={i}>
                  {o.label}
                </div>
              );
            })}
          </Select>
        </div>
      </div>
	  <div className="MyCourse__body">

			{props.data.map((item, index) => (
				<CourseCard 
          key={index+1}
          link={item.item.link}
          title={item.item.name}
          list={item.item.list}
          rating={item.item.rating}
          NumberRating={item.item.NumberRating}
          prices={item.item.prices}
          img={item.item.img}
        />
			))}
			
	  </div>
    </div>
  );
};

export default MyCourse;
