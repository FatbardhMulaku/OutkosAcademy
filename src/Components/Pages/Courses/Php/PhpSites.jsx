import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

function PhpSites() {
	const images =[0,1,2,3,4,5];
	return (
		<div className="container PhpSites">
			<Link to="/">Popular PHP Sites</Link>
			<Fade bottom >
			<div className="PhpSites--box">
				{images.map((index) => (
					<div key={index} className={`PhpSites--box__img${index+1} BG my-auto`}/>
				))}
			</div>
			</Fade>
		</div>
	)
}

export default PhpSites
