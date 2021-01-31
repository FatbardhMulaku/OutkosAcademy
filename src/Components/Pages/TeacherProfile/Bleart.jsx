import React from "react";
import TeacherInfo from "../../Shared/TeacherProfile/TeacherInfo";
import AboutTeacher from "../../Shared/TeacherProfile/AboutTeacher";
import Stats from "../../Shared/TeacherProfile/Stats";
import MyCourse from "../../Shared/TeacherProfile/MyCourse";
import { TeacherData } from "./data";

const Bleart = () => {
  const data = TeacherData.bleart;
  const stats = TeacherData.bleart.stats;
  
  return (
    <div className="Profile container">
      <div className="Profile__wrapper">
        <div className="Profile__info">
          <TeacherInfo
            name={data.name}
            job={data.job}
            img="TeacherSkill_Bleart BG"
            Followers={data.Followers}
            web={data.web}
            Following={data.Following}
          />
        </div>
        <div className="Profile__about">
          <AboutTeacher aboutInfo={data.aboutInfo} />
          <MyCourse data={data.courses}/>
        </div>
        <div className="Profile__stats">
          <Stats
            statsName={stats.total.name}
            fill="p90"
            value={stats.total.value}
            nextValue={stats.total.nextValue}
          />
          <Stats
            statsName={stats.rate.name}
            fill="p70"
            value={stats.rate.value}
            nextValue={stats.rate.nextValue}
          />
        </div>
      </div>
    </div>
  );
};

export default Bleart;
