import React, { Component } from "react";

import { connect } from "react-redux";
import { updatePreferences } from "../../../actions/data/settings.action";
import PropTypes from "prop-types";

import { Col, Row } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input } from "react-bootstrap";
import LoadingColumn from "../../molecules/LoadingColumn";

import "./Preference.scss";

class Preference extends Component {
    state = {

    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired
    };

    componentDidMount() {

    };
    
    componentDidUpdate() {

    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

    };

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Button type="submit">Save</Button>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated,
   error: state.error 
})  

export default connect(mapStateToProps, { updatePreferences })(Preference);
