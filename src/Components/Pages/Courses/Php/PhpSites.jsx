import React from 'react'
import { Link } from 'react-router-dom'

function PhpSites() {
	const images =[0,1,2,3,4,5];
	return (
		<div className="container PhpSites">
			<Link to="/">Popular PHP Sites</Link>
			
			<div className="PhpSites--box">
				{images.map((index) => (
					<div key={index} className={`PhpSites--box__img${index+1} BG my-auto`}/>
				))}
			</div>
		</div>
	)
}

export default PhpSites
