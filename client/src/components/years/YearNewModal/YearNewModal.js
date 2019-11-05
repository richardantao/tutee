import React, { Component } from "react";

import { connect } from "react-redux";
import { newYear, createYear } from "../../../actions/data/years.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import PropTypes from "prop-types";

import { Button, Col, Row } from "react-bootstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "./YearNewModal.scss";

class YearNewModal extends Component {
    state = {
        open: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        newYear: PropTypes.func.isRequired,
        createYear: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.setState({
            open: true
        });

        this.props.newYear();
    };

    componentDidUpdate(prevProps) {
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

        const newYear = {

        };

        this.props.createYear(newYear);
    };

    handleCancel = () => {
        this.setState({
            
        });

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
                    <Button type="submit">Add New Year</Button>
                </FormGroup>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

const mapDispatchToProps = { newYear, createYear, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(YearNewModal);