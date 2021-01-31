import React from 'react'

function AboutTeacher(props) {
	return (
		<div className="AboutTeacher">
			<h1>About Me</h1>
			{props.aboutInfo.map(({item}, index) => (
				<p key={index+1}>{item}</p>
			))}
		</div>
	)
}

export default AboutTeacher
