import React, { useState } from "react";
import { DoughnutData } from "./data";
import { Doughnut } from "react-chartjs-2";
import { MdKeyboardArrowDown } from "react-icons/md";

const DoughnutStats = () => {
  /* const nrdata  */

  const [data, setData] = useState({
    data1: DoughnutData[0].data1,
    data2: DoughnutData[0].data2,
    emri: DoughnutData[0].emri,
    adds1: DoughnutData[0].data1.datasets[0].data,
    adds2: DoughnutData[0].data2.datasets[0].data,
  });
  const [showMenu, setShowMenu] = useState(false);
 
  return (
    <div className="Doughnut">
      <div className="flex justify-between">
        <h2>Attendance</h2>

        <div className="relative">
          {/* <select id="lang" onChange={handleChange} value={data}>
			<option id="op1" value="drilon">Driloni</option>
			<option id="op2" value="bardhi">Bardhi</option>
		  </select> */}

          <div className="Doughnut__btn" onClick={() => setShowMenu(!showMenu)}>
            {data.emri}
            <MdKeyboardArrowDown size="23px" />
            <div className={`Doughnut__list`}>
              <a
                onClick={() =>
                  setData({
                    data1: DoughnutData[0].data1,
                    data2: DoughnutData[0].data2,
                    emri: DoughnutData[0].emri,
                    adds1: DoughnutData[0].data1.datasets[0].data,
                    adds2: DoughnutData[0].data2.datasets[0].data,
                  })
                }
              >
                Drilon
              </a>
              <a
                onClick={() =>
                  setData({
                    data1: DoughnutData[1].data1,
                    data2: DoughnutData[1].data2,
                    emri: DoughnutData[1].emri,
                    adds1: DoughnutData[1].data1.datasets[0].data,
                    adds2: DoughnutData[1].data2.datasets[0].data,
                  })
                }
              >
                Bardhi
              </a>
              <a
                onClick={() =>
                  setData({
                    data1: DoughnutData[2].data1,
                    data2: DoughnutData[2].data2,
                    emri: DoughnutData[2].emri,
                    adds1: DoughnutData[2].data1.datasets[0].data,
                    adds2: DoughnutData[2].data2.datasets[0].data,
                  })
                }
              >
                Filloreta
              </a>
              <a
                onClick={() =>
                  setData({
                    data1: DoughnutData[3].data1,
                    data2: DoughnutData[3].data2,
                    emri: DoughnutData[3].emri,
                    adds1: DoughnutData[3].data1.datasets[0].data,
                    adds2: DoughnutData[3].data2.datasets[0].data,
                  })
                }
              >
                Zana
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>
            {data.adds1.reduce(function (a, b) {
              return a + b;
            })}{" "}
             <span>LESSONS</span>
          </p>
          <Doughnut
            data={data.data1}
            height={190}
            width={230}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div>
          <p>
            {data.adds2.reduce(function (a, b) {
              return a + b;
            })}{" "}
            <span>TASKS</span>
          </p>
          <Doughnut
            data={data.data2}
            height={190}
            width={500}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DoughnutStats;
