import React from 'react';
import Button from "../Shared/UI/Button";

const NewApplications = ({item, img}) => {
	return (
		<div className="NewApplications">
			<div>
				<div className="flex flex-col">
					<div className={`NewApplications__${img} BG`}/>
					<div>
						<div className="NewApplications__doc"/>
						<div className="NewApplications__cv"/>
					</div>
				</div>
				<div>
					<h5>{item.name}</h5>
					<p>{item.desc}</p>
				</div>
			</div>
			<div className="pt-4">
				<Button 
					to="#"
					name={item.btn1}
					icon={`NewApplications__btn1 BG`}
					style={`NewApplicationsB1`}
				/>
				<Button 
					to="#"
					name={item.btn2}
					icon={`NewApplications__btn2 BG`}
					style={`NewApplicationsB2`}
				/>
				<Button 
					to="#"
					name={item.btn3}
					icon={`NewApplications__btn3 BG`}
					style={`NewApplicationsB3`}
				/>
			</div>
		</div>
	)
}

export default NewApplications;
