import React from "react";
import styles from "./Counter.css";

const Counter = (props) => {
	return(
		<figure className="counter">
			<figcaption></figcaption>
			<img className="" src=""/>
			<svg width="100" height="100">
				<circle className="" cx="50" cy="50" r="50"/>
		  <foreignObject width="100" height="100">
			<div className="counter-index">
				<h6>{props.count}</h6>
			</div>
		  </foreignObject>
		  <foreignObject width="100" height="100">
			<div className="counter-type">
				<h6>{props.type}</h6>
			</div>
		  </foreignObject>
			</svg>
		</figure>
	)
}

export default Counter;

