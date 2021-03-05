import React from 'react'
import {DataFiles} from "./data";

function RecentFiles() {
	return (
		<div className="RecentFiles">
			<div>
				<p>RECENT FILES</p>
				<div>

				</div>
			</div>
			<div>
				{DataFiles.map((item, index) => (
					<div key={index} className="RecentFiles__line">
						<div>
							<h6>{item.title}</h6>
							<p>{item.type}</p>
						</div>
						<div className="RecentFiles__img BG"/> 
					</div>
				))}
			</div>
		</div>
	)
}

export default RecentFiles
