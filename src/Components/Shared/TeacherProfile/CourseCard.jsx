import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';

const CourseCard = (props) => {
	return (
		<Link to={props.link} className="CourseCard">
			<div className={`CourseCard__${props.img} BG`} />
			<h1>{props.title}</h1>
			<div>
				<p>{props.rating}</p>
				<Rating name="half-rating" defaultValue={props.rating} precision={0.2} readOnly />
				<h2>({props.NumberRating})</h2>
			</div>
			<div>
				{props.list.map(({item},index) => (
					<h3 key={index+1}>{item}</h3>
				))}
			</div>
			<h4>{props.prices}</h4>
		</Link>
	)
}

export default CourseCard;
