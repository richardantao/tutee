import React, { Component } from "react";

import { connect } from "react-redux";
import { createIntegration } from "../../../actions/data/settings.action";
import PropTypes from "prop-types";

import { Form, FormGroup, Label, Input } from "react-bootstrap";

import "./IntegrationNewModal";

class IntegrationNewModal extends Component {
    state = {
        open: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
    };

    componentDidMount() {

    };

    componentDidUpdate() {

    };

    toggle = () => {
        this.setState({
            open: !this.state.open
        });
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

            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { createIntegration })(IntegrationNewModal);