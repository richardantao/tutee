import React, { Component } from "react";
import axios from "axios";
import { Col, Row} from "react-bootstrap"
import LoadingColumn from "../../molecules/LoadingColumn";
import ButtonReact from "../../atoms/Button";
import SelectReact from "../../atoms/Select";
import "./Profile.scss";

export default class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true
		}
	}

	componentDidMount() {
		axios.get("http://localhost:3000/settings/profile/")
		.then(res =>{
			this.setState({
				isLoading: false
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
			return LoadingColumn;
		} else {
			return(
				<form method="PUT" action="/:UserId/settings/profile/FILLME/update">
					<Row>
						<Col>
							<label for="UserFirstName">First Name</label>
							<input name="UserFirstName" type="text"/>
						</Col>
						<Col>
							<label for="UserLastName">Last Name</label>
							<input name="UserLastName" type="text"/>
						</Col>
					</Row>
					<Row>
						<Col>
							<label>Email</label>
							<input type="email" name="UserEmail" value=""/>
						</Col>
					</Row>
					<Row>
						<Col>
							<label for="UserCountry">Country</label>
							<input name="UserCountry" type="text"/>
						</Col>
						<Col>
							<label for="UserRegion">Province/State</label>				
							<input name="UserRegion" type="text"/>
						</Col>
					</Row>
					<Row>
						<Col>
							<label for="UserInstitution">Institution</label>
							<SelectReact name="UserInstitution"/>
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

