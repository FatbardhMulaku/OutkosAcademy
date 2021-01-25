import React from 'react'

const CoursesCard = (props) => {
	return (
		<div className="Courses_Card container">
			{props.cards.map((item, index) => (
				<div key={index+1} className="Courses_Card--wrapper ">
					<div className={`Courses_Card--wrapper_img${index+1} BG`}/>
					<h4>{item.title}</h4>
					<p>{item.desc}</p>
				</div>
			))}
		</div>
	);
}

export default CoursesCard;
