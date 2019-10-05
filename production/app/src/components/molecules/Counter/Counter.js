import React, { Component } from "react";
import "./Counter.scss";

export default class Counter extends Component{
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true
		}
	}
	
	componentDidMount() {
		this.setState({
			isLoading: false
		});
	}

	render() {
		return(
			<figure className="counter">
				<figcaption></figcaption>
				<img className="" src="" alt=""/>
				<svg width="100" height="100">
					<circle className="" cx="50" cy="50" r="50"/>
			<foreignObject width="100" height="100">
				<div className="counter-index">
					<h6>{this.props.count}</h6>
				</div>
			</foreignObject>
			<foreignObject width="100" height="100">
				<div className="counter-type">
					<h6>{this.props.type}</h6>
				</div>
			</foreignObject>
				</svg>
			</figure>
		)
	}	
}

