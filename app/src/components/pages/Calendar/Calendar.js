import React, { Component, Fragment } from "react";
import Nav from "../../organisms/Nav";
import Header from "../../organisms/Header";
import { Container, Row, Col} from "reactstrap";
import { Button } from "react-bootstrap"
import "./Calendar.scss";
import axios from "axios";

export default class Calendar extends Component {
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

		axios({
			method: "GET",
			url: ""
		});
	}

	render() {
		return (
			<Fragment>
				<Nav />
				<Container id="calendar">
					<Row className="header">
						<Col>
							<Header header="Calendar"/> 
						</Col>
						<Col>
						
						</Col>
					</Row>
					<Row className="body">
						
					</Row>
				</Container>
			</Fragment>
		)
	}
}
