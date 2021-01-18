import React from 'react';
import StyledLink from "../StyledLink/StyledLink";

function Hero(props) {
	return (
		<div className={`${props.BGimg} Course-Hero BG`}>
			<div className="Hero__wrapper container">
				<h2>
					{props.title}
				</h2>
				<p>{props.desc}</p>
				<StyledLink to="/" styles="sm bg-primary">
					{props.btn}
				</StyledLink>
			</div>
		</div>
	)
}

export default Hero;
