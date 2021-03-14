import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const drilon = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "hours",
      data: [2.4, 3, 4.5, 4, 4.5, 6, 5.5],
      fill: false,
      backgroundColor: "#EB8341",
      borderColor: "#EB8341",
    },
  ],
  emri: "Drilon",
};
const bardhi = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "hours",
      data: [2.4, 3, 3.7, 4, 4.5, 5, 4.4],
      fill: false,
      backgroundColor: "#EB8341",
      borderColor: "#EB8341",
    },
  ],
  emri: "Bardhi",
};

const Filloreta = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "hours",
      data: [2.9, 3.4, 3, 4, 4.2, 4.6, 4.4],
      fill: false,
      backgroundColor: "#EB8341",
      borderColor: "#EB8341",
    },
  ],
  emri: "Filloreta",
};

const Zana = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "hours",
      data: [2.4, 3.2, 3, 4, 4.1, 4.6, 4],
      fill: false,
      backgroundColor: "#EB8341",
      borderColor: "#EB8341",
    },
  ],
  emri: "Zana",
};

const LineChart = () => {
  const [data, setData] = useState(bardhi);
  const [showMenu, setShowMenu] = useState(false);

  /* 	const handleChange = (event) => {
		if(event === "drilon"){
			setData(drilon)
			console.log(drilon)
		} 
		if(event === "bardhi"){
			setData(bardhi)
			console.log(bardhi)
		}
	}; */

  console.log(data);
  return (
    <div className="LineChart">
      <div className="flex justify-between">
        <h2>Student's Productivity</h2>

        <div className="relative">
          {/* <select id="lang" onChange={handleChange} value={data}>
          <option id="op1" value="drilon">Driloni</option>
          <option id="op2" value="bardhi">Bardhi</option>
        </select> */}
          <div
            className={`LineChart__list ${
              showMenu ? "" : "LineChart__listHide"
            }`}
          >
            <a onClick={() => setData(drilon)}>Drilon</a>
            <a onClick={() => setData(bardhi)}>Bardhi</a>
            <a onClick={() => setData(Filloreta)}>Filloreta</a>
            <a onClick={() => setData(Zana)}>Zana</a>
          </div>

          <p className="LineChart__btn" onClick={() => setShowMenu(!showMenu)}>
            {data.emri}
            {showMenu ? (
              <MdKeyboardArrowUp size="23px" />
            ) : (
              <MdKeyboardArrowDown size="23px" />
            )}
          </p>
        </div>
      </div>
      <Line
        data={data}
        height={350}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default LineChart;
