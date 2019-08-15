import React, { Component } from "react";
import { Col } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";
import Empty from "../../molecules/Empty";
import styles from "./TermsColumn.scss";
import axios from "axios";

export default class TermsColumn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			terms: []
		}
	}
	
componentDidMount() {
	this.setState({
		isLoading: false
	});

	axios({
		method: "GET",
		url: "https://tutee.io/courses/:userId"
	})
	.then((req, res) => {
		this.setState({
			isLoading: false,
			userId: req.body.userId,
			terms: res.data.terms
		});
	})
	.catch(err => {
		this.setState({
			errors: err,
			isLoading: false
		});
	});
}

	render() {
		const terms = this.props;
		let { isLoading } = this.state;

		if(isLoading) {
			return (
				<Col id="terms-list">
					<LoadingColumn/>
				</Col>
			)
		} else if(!isLoading && terms && terms.length > 0) {
			return (
				<Col id="terms-list">
					
				</Col>
			)
		} else {
			return (
				<Col id="terms-list">
					<Empty/>
				</Col>
			)
		}
	}
}

