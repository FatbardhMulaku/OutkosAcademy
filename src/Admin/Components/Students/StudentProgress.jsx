import React from "react";
import { studentsData } from "./data";

const StudentProgress = () => {
  return (
    <div className="StudentProgress">
      <h4>Student Progress</h4>
      <div>
        {studentsData.map((item, index) => (
          <div key={index}>
            <div className={`StudentProgress__img${index + 1} BG`} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentProgress;
