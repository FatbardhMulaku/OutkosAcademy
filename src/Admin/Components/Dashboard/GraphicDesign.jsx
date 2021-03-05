import React from 'react';
import Avatar from "../Shared/Dashboard/Avatar";
import { studentsUp, studentsDown } from "./data";

function GraphicDesign({Progress}) {
	return (
		<div className="GraphicDesign">
			<div>
				<h5>Graphic Design</h5>
				<div>
					{studentsUp.map((item, index) => (
						<Avatar name={item.name} key={index} img={`__up${index+1} BG`} col="column"/>
					))}
				</div>
			</div>
			<div><div style={{width:`${Progress}%`}}/></div>
			<div>
				<p>Average Progress: {Progress}%</p>
				<div>
					{studentsDown.map((item, index) => (
						<Avatar name={item.name} key={index} img={`__down${index+1} BG`} col="column-reverse"/>
					))}
				</div>
			</div>
		</div>
	)
}

export default GraphicDesign;
