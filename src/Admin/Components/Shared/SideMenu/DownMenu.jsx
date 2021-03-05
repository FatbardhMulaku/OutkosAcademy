import React from 'react'
import { Link } from 'react-router-dom';
import {LinkItem} from "./data";

const DownMenu = ({drawerToggle}) => {
	
	return (
		<div className={`DownMenu ${drawerToggle ? "DownMenu__show": ""}`}>
			<div>
				<div className="DownMenu__avatar BG"/>
				<div>
					<h6>Bleart Kepuska</h6>
					<p>bleart.kepuska@gmail.com</p>
				</div>
			</div>
			<div>
				{LinkItem.map((item, index) => (
					<Link to={item.url} key={index}>
						{item.name}
					</Link>
				))}
			</div>
		</div>
	)
}

export default DownMenu;

