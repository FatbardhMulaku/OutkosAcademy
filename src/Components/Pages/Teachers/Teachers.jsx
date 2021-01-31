import React, { useState } from "react";
import FilterButtons from "../../Shared/FilterButtons/FilterButtons";
import TeacherCard from "../../Shared/TeacherCard/TeacherCard";
import fatbardh from "../../../Assets/Teachers/fatbardh.jpg";
import arber from "../../../Assets/Teachers/arber2.jpg";
import albrim from "../../../Assets/Teachers/albrim.jpg";
import bleart from "../../../Assets/Teachers/bleart.jpg";
import rrezon from "../../../Assets/Teachers/rrezon.jpg";
import fjolla from "../../../Assets/Teachers/fjolla2.jpg";
import albion from "../../../Assets/Teachers/Albion2.jpg";

const data = {
  programming: [
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
    {
      name: "Fatbardh Mulaku",
      position: "Frontend developer",
      facebook: "http://www.facebook.com",
      instagram: "http://www.instagram.com",
      behance: "http://www.behance.com",
      linkedin: "http://www.linkedin.com",
      img: fatbardh,
      imgStyles:"large",
      id:"fatbardh-mulaku"
    },
    {
      name: "Arber Maksuti",
      position: "Frontend developer",
      facebook: "http://www.facebook.com",
      instagram: "http://www.instagram.com",
      behance: "http://www.behance.com",
      linkedin: "http://www.linkedin.com",
      img: arber,
      imgStyles:"large",
      id:"arber-maksuti"
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
      name: "Fjolla Sinanaj",
      position: "UI/UX Designer",
      facebook: "http://www.facebook.com",
      instagram: "http://www.instagram.com",
      behance: "http://www.behance.com",
      linkedin: "http://www.linkedin.com",
      img: fjolla,
      id: "fjolla-sinanaj",
    },

    {
      name: "Albion Metolli", 
      position: "UI/UX Designer",
      facebook: "http://www.facebook.com",
      instagram: "http://www.instagram.com",
      behance: "http://www.behance.com",
      linkedin: "http://www.linkedin.com",
      img: albion,
      id: "albion-metolli",
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
