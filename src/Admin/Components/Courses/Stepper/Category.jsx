import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {CadegoryList}  from "../data";

const Category = () => {
	/* const [category, setCategory] = useState("");

	const handleClick = (e) => {
		setCategory(e);
		console.log(setCategory);
	} */
	return (
		<div className="Stepper__Category">
			<h3>First, Let's choose a Category for your Course</h3>

			<div className="Stepper__Category--box">
				{CadegoryList.map((item, index) => (
					<Link to="#" key={index} >
						{item.item}
					</Link>
				))}
			</div>
		</div>
	)
}

export default Category
