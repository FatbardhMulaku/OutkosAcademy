import React from 'react';
import { FormattedMessage } from "react-intl";

function AboutTeacher(props) {
	return (
		<div className="AboutTeacher">
			<h1><FormattedMessage id="AboutTeacher.title" defaultMessage="About Me"/></h1>
			{props.aboutInfo.map(({item}, index) => (
				<p key={index+1}>{item}</p>
			))}
		</div>
	)
}

export default AboutTeacher;
