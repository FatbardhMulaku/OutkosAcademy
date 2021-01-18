import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../../Assets/Teachers/facebook.svg";
import { ReactComponent as Instagram } from "../../../Assets/Teachers/instagram.svg";
import { ReactComponent as Behance } from "../../../Assets/Teachers/behance.svg";
import { ReactComponent as LinkedIn } from "../../../Assets/Teachers/linkedin.svg";
const TeacherCard = (props) => {
  return (
    <div className="teacher-card">
      <div className={`img ${props.imgStyles}`} style={{ backgroundImage: `url(${props.img})` }}>
        <div className="showOnHover">
          <Link to={`/teacher-profile/${props.id}`}>View Profile</Link>
        </div>
      </div>
      <h2 className="small-title">{props.name}</h2>
      <h4 className="paragraph-2">{props.position}</h4>
      <div className="social-links flex">
        <a href={props.facebook} rel="noopener noreferrer" target="_blank">
          <Facebook />
        </a>
        <a href={props.instagram} rel="noopener noreferrer" target="_blank">
          <Instagram />
        </a>
        <a href={props.behance} rel="noopener noreferrer" target="_blank">
          <Behance />
        </a>
        <a href={props.linkedin} rel="noopener noreferrer" target="_blank">
          <LinkedIn />
        </a>
      </div>
    </div>
  );
};

export default TeacherCard;
