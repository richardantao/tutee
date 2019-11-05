import React, { Component } from "react";

import { connect } from "react-redux";
import { newIntegration, createIntegration } from "../../../actions/data/settings.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import PropTypes from "prop-types";

import { Button, Form, FormGroup, Label, Input } from "react-bootstrap";

import "./IntegrationNewModal";

class IntegrationNewModal extends Component {
    state = {
        open: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        newIntegration: PropTypes.func.isRequired,
        createIntegration: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidMount() {

        this.props.newIntegration();
    };

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;


    };

    toggle = () => {
        this.setState({
            open: !this.state.open
        });

        this.props.clearErrors();
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { } = this.state;

        const newIntegration = {

        };

        // 
        this.props.createIntegration(newIntegration);

        this.toggle();
    };

    handleCancel = () => {
        this.setState({

        });

        this.toggle();
    };

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>

                </FormGroup>
                <FormGroup>
                    <Button type="button" onClick={this.handleCancel}>Cancel</Button>
                    <Button type="submit">Add New Integration</Button>
                </FormGroup>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

const mapDispatchToProps = { newIntegration, createIntegration, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(IntegrationNewModal);