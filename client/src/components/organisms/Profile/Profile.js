import React, { Component } from "react";
import axios from "axios";
import { Col, Row} from "react-bootstrap"
import ButtonReact from "../../atoms/Button";
import "./Profile.scss";

export default class Profile extends Component {
	constructor(props) {

	}

	componentDidMount() {
		axios.get()
		.then(res =>{

		})
		.catch(err => {

		})
	}
	
	render() {
		return(
			<form>
				<Row>
					<Col>
						<label for="UserFirstName">First Name</label>
					</Col>
					<Col>
						<input name="UserFirstName" type="text"/>
					</Col>
				</Row>
				<Row>
					<Col>
						<label>Email</label>
					</Col>
				</Row>
				<Row>
					<Col>
					
					</Col>
				</Row>
				<Row>
					<Col>
					
					</Col>
				</Row>
				<Row>
					<Col>
						<ButtonReact type="reset">Clear Changes</ButtonReact>
						<ButtonReact type="submit">Save</ButtonReact>
					</Col>
				</Row>
			</form>
		)
	}
}

