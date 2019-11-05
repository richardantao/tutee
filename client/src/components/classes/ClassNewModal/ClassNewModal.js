import React, { Component } from "react";

import { connect } from "react-redux";
import { newClass, createClass } from "../../../actions/data/classes.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import PropTypes from "prop-types";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./ClassNewModal.scss";

class ClassNewModal extends Component {
    state = {
        open: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        newClass: PropTypes.func.isRequired,
        createClass: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.setState({
            open: true
        }); 

        this.props.newClass();
    };

    componentDidUpdate() {
        const { error } = this.props;

        if(error) {
            this.setState({

            });
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
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { } = this.state;

        const newClass = {

        };

        this.props.createClass(newClass);

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
                    <Label for=""></Label>
                    <Input 
                        type="text"
                        name=""
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Button type="button" onClick={this.handleCancel}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </FormGroup>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
});

const mapDispatchToProps = { newClass, createClass, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(ClassNewModal);