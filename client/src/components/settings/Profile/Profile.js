import React, { Component } from "react";

import { connect } from "react-redux";
import { updateProfile } from "../../../actions/data/settings.action";
import PropTypes from "prop-types";

import { Col, Row } from "react-bootstrap"
import LoadingColumn from "../../molecules/LoadingColumn";
import ButtonReact from "../../atoms/Button";
import SelectReact from "../../atoms/Select";
import "./Profile.scss";

class Profile extends Component {
	state = {

	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired
	};

	componentDidMount() {
		
	};

	componentWillUpdate() {

	};
	
	render() {
		return(
			<form method="PUT" action="">
				<Row>
					<Col>
						<label for="firstName">First Name</label>
						<input name="firstName" type="text" value=""/>
					</Col>
					<Col>
						<label for="lastName">Last Name</label>
						<input name="lastName" type="text" value=""/>
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
						<SelectReact name="country" value=""/>
					</Col>
					<Col>
						<label for="region">Province/State</label>				
						<SelectReact name="region" value=""/>
					</Col>
				</Row>
				<Row>
					<Col>
						<label for="institution">Institution</label>
						<SelectReact name="institution" value=""/>
					</Col>
					<Col>
						<label for="school">School</label>
						<SelectReact name="school" value=""/>
					</Col>
				</Row>
				<Row>
					<Col>
						<ButtonReact type="reset">Clear Changes</ButtonReact>
						<ButtonReact type="submit">Save Changes</ButtonReact>
					</Col>
				</Row>
			</form>
		);
	};
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
});

export default connect(mapStateToProps, { updateProfile })(Profile);

