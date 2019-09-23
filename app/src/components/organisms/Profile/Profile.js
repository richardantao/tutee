import React, { Component } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap"
import LoadingColumn from "../../molecules/LoadingColumn";
import ButtonReact from "../../atoms/Button";
import SelectReact from "../../atoms/Select";
import "./Profile.scss";

export default class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			profile: []
		}
	}

	componentDidMount() {
		axios.get("http://localhost:3000/settings/profile/")
		.then(res => {
			this.setState({
				isLoading: false,
				profile: res.data.profile
			});
		})
		.catch(err => {
			this.setState({
				error: err,
				isLoading: false
			});
		});
	}
	
	render() {
		let { isLoading } = this.state;
		if (isLoading) {
			return <LoadingColumn/>;
		} else {
			return(
				<form method="PUT" action="">
					<Row>
						<Col>
							<label for="firstName">First Name</label>
							<input name="firstName" type="text"/>
						</Col>
						<Col>
							<label for="lastName">Last Name</label>
							<input name="lastName" type="text"/>
						</Col>
					</Row>
					<Row>
						<Col>
							<label>Email</label>
							<input type="email" name="email" value=""/>
						</Col>
					</Row>
					<Row>
						<Col>
							<label for="country">Country</label>
							<input name="country" type="text"/>
						</Col>
						<Col>
							<label for="region">Province/State</label>				
							<input name="region" type="text"/>
						</Col>
					</Row>
					<Row>
						<Col>
							<label for="institution">Institution</label>
							<SelectReact name="institution"/>
						</Col>
						<Col>
							<label for="school">School</label>
							<SelectReact name="school"/>
						</Col>
					</Row>
					<Row>
						<Col>
							<ButtonReact type="reset">Clear Changes</ButtonReact>
							<ButtonReact type="submit">Save Changes</ButtonReact>
						</Col>
					</Row>
				</form>
			)
		}
	}
}

