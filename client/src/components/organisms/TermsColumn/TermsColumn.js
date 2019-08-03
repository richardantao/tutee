import React, { Component } from "react";
import { Col } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import styles from "./TermsColumn.css";

export default class TermsColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			data: []
		}
	}
	
componentDidMount() {
	this.setState({
		isLoading: true
	});
}

	render() {
		const terms = this.props;
		let isLoading = this.state.isLoading;

		if(isLoading) {
			return (
				<Col id="terms-list">
					<LoadingColumn/>
				</Col>
			)
		} else if(!isLoading && terms && terms.length > 0) {
			return(
				<Col id="terms-list">
				
				</Col>
			)
		} else {
			return null;
		}
	}
}

