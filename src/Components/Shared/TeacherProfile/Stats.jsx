import React from "react";

const Stats = (props) => {
  return (
    <div className="Stats">
        <h1>{props.statsName}</h1>
        <div className="Stats--wrapper">
			<div className={`progress-circle over50 ${props.fill}`}>
				<span>{props.value}</span>
				<div className="left-half-clipper">
					<div className="first50-bar"></div>
					<div className="value-bar"></div>
				</div>
			</div>
			<div>
				<h1>Next Goal:</h1>
				<p>{props.nextValue}</p>
			</div>
		</div>
    </div>
  );
};

export default Stats;
