import React from 'react'
import LineChart from "../Dashboard/LineChart"
import { NewApplications } from "../Dashboard/data";
import NewApplicationss from "../Dashboard/NewApplications";
import Message from "../Courses/Message";
import Task from "../Courses/Task";
import DoughnutStats from "../Courses/DoughnutStats";
import StudentProgress from "./StudentProgress";

const index = () => {
	return (
		<div className="Students">
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-1/2 flex items-center">
					<StudentProgress />
				</div>
				<div className="w-full lg:w-1/2">
					<DoughnutStats />
				</div>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-7/12">
					<Task />
				</div>
				<div className="w-full lg:w-5/12">
				<Message />
				</div>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-5/12">
					<LineChart />
				</div>
				<div className="w-full lg:w-7/12">
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
		</div>
	)
}

export default index
