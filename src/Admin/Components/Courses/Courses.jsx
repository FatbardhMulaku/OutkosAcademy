import React from 'react'
import GraphicDesign from "../Dashboard/GraphicDesign";
import Message from "./Message";
import DoughnutStats from "./DoughnutStats";
import Task from "./Task";
import Table from "./Table";

const Courses = () => {
	return (
		<div className="CoursesDashboard">
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-2/3">
					<GraphicDesign Progress={65} />
				</div>
				<div className="w-full md:w-1/3 ">
					<Message />
				</div>
			</div>
			<div className="w-98">
				<Table />
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-7/12">
					<DoughnutStats />
				</div>
				<div className="w-full lg:w-5/12">
					<Task />
				</div>
			</div>
		</div>
	)
}

export default Courses
