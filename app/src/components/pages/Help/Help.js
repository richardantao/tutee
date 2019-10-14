import React, { Component, Fragment } from "react";
import axios from "axios";
import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import Accordion from "../../molecules/Accordion";
import { Col, Row } from "reactstrap";
import "./Help.scss";

export default class Help extends Component {
	constructor(props) {
		super(props);

		this.state= {
			isLoading: true
		}
	}

	componentDidMount() {
		this.setState({
			isLoading: false
		});

		axios.get("/help")
		.then(res => {
			this.setState({
				isLoading: false
			})
		})
		.catch(err => {
			this.setState({
				isLoading: false,
				error: err
			});
		})
	}

	componentWillUnmount() {
		
	}

	render() {
		let { isLoading } = this.state;
		
		if(isLoading) {
			return null;
		} else {
			return (
				<Fragment>
					<Nav />
					<div id="help">
						<Row className="header">
							<Col>
								<Header header="Help"/> 
							</Col>
							<Col>
								
							</Col>
						</Row>
						<Row className="body">
							<Col>
								<div>
									<h2>Frequently Asked Questions</h2>
									<Accordion/>
								</div>
							</Col>
						</Row>
					</div>
				</Fragment>
			)
		}
	}
}