import React, { Component } from "react";

import { connect } from "react-redux";
import { updateIntegration, deleteIntegration } from "../../../actions/data/settings.action";
import PropTypes from "prop-types";

import { Button, Form, FormGroup, Label, Input } from "react-bootstrap";

import "./IntegrationEditModal.scss";

class IntegrationEditModal extends Component {
    state = {
        open: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        updateIntegration: PropTypes.func.isRequired,
        deleteIntegration: PropTypes.func.isRequired
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

        // pull data from state
        const { } = this.state;

        // create instance of updated data
        const updatedIntegration = {

        };

        // send updated data to /actions function
        this.props.updateIntegration(updatedIntegration);
    };

    handleCancel = () => {


        this.toggle();
    };

    handleDelete = id => {

        // pass id of integration to delete to the called action function
        this.props.deleteIntegration(id);
    }
    
    render() {
        const { open } = this.state;

        const { integration } = this.props;

        return (
            <Form onSubmit={this.handleSubmit}>
                <Button type="button" onClick={this.handleDelete.bind(this)}>Delete</Button>
                <Button type="button" onClick={this.handleCancel}>Cancel</Button>
                <Button type="submit">Save</Button>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { updateIntegration, deleteIntegration })(IntegrationEditModal);