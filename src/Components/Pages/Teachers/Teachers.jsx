import React, { useState } from "react";
import FilterButtons from "../../Shared/FilterButtons/FilterButtons";
import TeacherCard from "../../Shared/TeacherCard/TeacherCard";
import endrit from "../../../Assets/Teachers/endrit.jpg";
import elvis from "../../../Assets/Teachers/elvis.jpg";
import albrim from "../../../Assets/Teachers/albrim.jpg";
import bleart from "../../../Assets/Teachers/bleart.jpg";
import rrezon from "../../../Assets/Teachers/rrezon.jpg";
import elmedine from "../../../Assets/Teachers/elmedine.jpg";
import liberta from "../../../Assets/Teachers/liberta.jpg";

const data = {
  programming: [
    {
      name: "Endrit Shabani",
      position: "Frontend developer",
      facebook: "http://www.facebook.com",
      instagram: "http://www.instagram.com",
      behance: "http://www.behance.com",
      linkedin: "http://www.linkedin.com",
      img: endrit,
      imgStyles:"large",
      id:"endrit-shabani"
    },
    {
      name: "Elvis Sylejmani",
      position: "Backend developer",
      facebook: "http://www.facebook.com",
      instagram: "http://www.instagram.com",
      behance: "http://www.behance.com",
      linkedin: "http://www.linkedin.com",
      img: elvis,
      imgStyles:"large",
      id:"elvis-sylejmani"
    },
    {
      name: "Albrim Paqarizi",
      position: "Frontend developer",
      facebook: "http://www.facebook.com",
      instagram: "http://www.instagram.com",
      behance: "http://www.behance.com",
      linkedin: "http://www.linkedin.com",
      img: albrim,
      id:"albrim-paqarizi"
    },
  ],
  design: [
    {
      name: "Bleart Kepuska",
      position: "Graphic Designer",
      facebook: "http://www.facebook.com",
      instagram: "http://www.instagram.com",
      behance: "http://www.behance.com",
      linkedin: "http://www.linkedin.com",
      img: bleart,
      id: "bleart-kepuska",
    },
    {
      name: "Rrezon Orllati",
      position: "UI/UX Designer",
      facebook: "http://www.facebook.com",
      instagram: "http://www.instagram.com",
      behance: "http://www.behance.com",
      linkedin: "http://www.linkedin.com",
      img: rrezon,
      id: "rrezon-orllati",
    },
    {
      name: "Elmedine Ramushi",
      position: "UI/UX Designer",
      facebook: "http://www.facebook.com",
      instagram: "http://www.instagram.com",
      behance: "http://www.behance.com",
      linkedin: "http://www.linkedin.com",
      img: elmedine,
      id: "elmedine-ramushi",
    },

    {
      name: "Liberta Shtimanji",
      position: "UI/UX Designer",
      facebook: "http://www.facebook.com",
      instagram: "http://www.instagram.com",
      behance: "http://www.behance.com",
      linkedin: "http://www.linkedin.com",
      img: liberta,
      id: "liberta-shtimanji",
    },
  ],
  marketing: [],
};

const Teachers = () => {
  const [selected, setSelected] = useState("all");
  const clickHandler = (type) => {
    setSelected(type);
  };
  const buttons = [
    {
      type: "all",
      name: "All",
      clickHandler: clickHandler.bind(null, "all"),
    },
    {
      type: "programming",
      name: "Programming",
      clickHandler: clickHandler.bind(null, "programming"),
    },
    {
      type: "design",
      name: "Design",
      clickHandler: clickHandler.bind(null, "design"),
    },
    {
      type: "marketing",
      name: "Marketing",
      clickHandler: clickHandler.bind(null, "marketing"),
    },
  ];
  const renderTeachers = () => {
    let content = [];
    if (selected === "all") {
      for (let key in data) {
        data[key].forEach((teacher, i) => {
          content.push(<TeacherCard key={teacher.name} {...teacher} />);
        });
      }
    } else {
      data[selected].forEach((teacher, i) => {
        content.push(<TeacherCard key={teacher.name} {...teacher} />);
      });
    }

    return content;
  };
  return (
    <div className="teachers__teachers">
      <div className="main-container">
        <FilterButtons items={buttons} selected={selected} />
      </div>

      <div className="teachers__teachers-area">{renderTeachers()}</div>
    </div>
  );
};

export default Teachers;
