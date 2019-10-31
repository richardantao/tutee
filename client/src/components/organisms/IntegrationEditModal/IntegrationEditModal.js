import React, { Component } from "react";

import { connect } from "react-redux";
import { updateIntegration, deleteIntegration } from "../../../actions/data/settings.action";
import PropTypes from "prop-types";

import { Form, FormGroup, Label, Input } from "react-bootstrap";

import "./IntegrationEditModal.scss"

class IntegrationEditModal extends Component {
    state = {
        open: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired
    };
    
    componentDidMount() {

    };

    componentDidUpdate() {

    };

    toggle = () => {

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

export default connect(mapStateToProps, { updateIntegration, deleteIntegration })(IntegrationEditModal);