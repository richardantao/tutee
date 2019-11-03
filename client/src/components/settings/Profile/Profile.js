import React, { Component } from "react";

import { connect } from "react-redux";
import { updateProfile } from "../../../actions/data/settings.action";
import PropTypes from "prop-types";

import { Col, Row } from "react-bootstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";

import Button from "../../global/Button";
import SelectReact from "../../global/Select";
import "./Profile.scss";

class Profile extends Component {
	state = {

	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		error: PropTypes.object.isRequired,
		updateProfile: PropTypes.func.isRequired
	};

	componentDidMount() {
		
	};

	componentWillUpdate() {

	};
	
	handleChange = e => {
		this.setState({
			[e.target.name]: [e.target.value]
		});
	};

	handleSubmit = e => {
		e.preventDefault();

		const { } = this.state;

		const updatedProfile = {

		};

		this.props.updateProfile(updatedProfile);
	};

	render() {
		return(
			<Form onSubmit={this.handleSubmit}>
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
						<Button type="reset">Clear Changes</Button>
						<Button type="submit">Save Changes</Button>
					</Col>
				</Row>
			</Form>
		);
	};
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	error: state.error
});

export default connect(mapStateToProps, { updateProfile })(Profile);

