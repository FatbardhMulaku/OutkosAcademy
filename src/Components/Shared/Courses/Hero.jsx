import React from 'react';
import StyledLink from "../StyledLink/StyledLink";

function Hero({data, BGimg}) {
	return (
		<div className={`${BGimg} Course-Hero BG`}>
			<div className="Hero__wrapper container">
				<h2>
					{data.title}
				</h2>
				<p>{data.desc}</p>
				<StyledLink to="/" styles="sm bg-primary">
					{data.btn}
				</StyledLink>
			</div>
		</div>
	)
}

export default Hero;
