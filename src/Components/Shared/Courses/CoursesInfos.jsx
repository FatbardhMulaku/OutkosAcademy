import React from 'react';
import Divider from "../Divider";

const CoursesInfos = (props) => {
	return (
		<div className="CoursesInfos container">
			{props.infos.map((item, index) => (
				<div key={index+1} className="CoursesInfos-wrapper hover:shadow-lg">
					<Divider width="30%"/>
					<h4>{item.title}</h4>
					<p>{item.desc}</p>
				</div>
			))}
		</div>
	)
}

export default CoursesInfos
