import React from "react";
import GraphicDesign from "./GraphicDesign";
import DatePicker from "react-horizontal-datepicker";
import { NewApplications } from "./data";
import NewApplicationss from "./NewApplications";
import Schedule from "./Schedule";
import LineChart from "./LineChart";
import DashChat from "./DashChat";
import RecentFiles from "./RecentFiles";

const index = () => {
  const selectedDay = (val) => {
    console.log(val);
  };
  return (
    <div className="Dashboard">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <GraphicDesign Progress={65} />
          <div className="flex flex-col">
            <h2 className="text-xl xs:text-2xl font-medium ml-2 mt-2">
              New Applications
            </h2>
            <div className="flex flex-col lg:flex-row justify-center w-99">
              {NewApplications.map((item, index) => (
                <NewApplicationss
                  item={item}
                  key={index} 
                  img={`avatar${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 w-98">
          <div className="py-3 px-1 pb-8">
            <DatePicker
              getSelectedDay={selectedDay}
              labelFormat={"MMMM yyyy"}
              color={"#EB8341"}
            />
          </div>
		  <div>
		  <Schedule />
		  </div>
        </div>
      </div>
      <div className="Dashboard__2line">
        <LineChart />
        <DashChat />
        <RecentFiles />
      </div>
    </div>
  );
};

export default index;
