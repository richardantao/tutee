import React, { Component } from "react";

import { connect } from "react-redux";
import { newTerm, createTerm } from "../../../actions/data/terms.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import PropTypes from "prop-types";

import { Button, Col, Row } from "react-bootstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "./TermNewModal.scss";

class TermNewModal extends Component {
    state = {
        open: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        newTerm: PropTypes.func.isRequired,
        createTerm: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };
    
    componentDidMount() {

        this.props.newTerm();
    };

    componentDidUpdate() {
        const { error, isAuthenticated } = this.props;

        if(error) {
            if(!isAuthenticated) {
                this.setState({

                });
            } else {
                this.setState({

                });
            };
        } else {
            this.setState({

            });
        };
    };

    toggle = () => {
        this.setState({
            open: !this.state.open
        });

        this.props.clearErrors();
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: [e.target.value]
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { } = this.state;

        const newTerm = {

        };

        this.props.createTerm(newTerm);

        this.toggle();
    };

    handleCancel = () => {
        // reset state
        this.setState({
            
        }); 

        // close modal
        this.toggle();
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for=""></Label>
                    <Input
                    name=""
                    onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Button type="button" onClick={this.handleCancel}>Cancel</Button>
                    <Button type="submit">Add New Term</Button>
                </FormGroup>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

const mapDispatchToProps = { newTerm, createTerm, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(TermNewModal);