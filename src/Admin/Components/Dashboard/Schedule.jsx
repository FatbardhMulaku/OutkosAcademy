import React from "react";
import Button from "../Shared/UI/Button";
import { ScheduleDate } from "./data";

const Schedule = () => {
  return (
    <div className="Dash-Schedule">
      <div>
        <p>Schedule</p>
        <p>Progress</p>
      </div>
      <div>
        <div>
          {ScheduleDate.map(({ date, desc, info }, index) => (
            <div key={index}>
              <h4>{date}</h4>
              <div>
                <p>{desc}</p>
                <p>{info}</p>
              </div>
            </div>
          ))}
        </div>
        <Button
          to="#"
          name="See full Schedule"
          icon={`Dash-ScheduleBtn__icon BG`}
          style={`Dash-ScheduleBtn`}
        />
      </div>
    </div>
  );
};

export default Schedule;
