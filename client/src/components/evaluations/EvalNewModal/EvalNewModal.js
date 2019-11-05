import React, { Component } from "react";

import { connect } from "react-redux";
import { newEvaluation, createEvaluation } from "../../../actions/data/evaluations.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import PropTypes from "prop-types";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./EvalNewModal.scss";

class EvalNewModal extends Component {
    state = {
        open: false
    };
    
    static propTypes = {
        isAuthenticated: PropTypes.func,
        error: PropTypes.object.isRequired,
        newEvaluation: PropTypes.func.isRequired,
        createEvaluation: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.setState({
            open: true
        });

        this.props.newEvaluation();
    };

    componentDidUpdate (prevProps) {
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
    
    handleCancel = () => {
        this.setState({

        });

        this.toggle();
    };

    handleSubmit = e => {
        e.preventDefault();

        const { } = this.state;

        const newEval = {

        };

        this.props.createEvaluation(newEval);

        this.toggle();
    };  

    render() {
        return (
            <Form onSubmit={this.hanleSubmit}>
                <FormGroup>
                    <Label for=""></Label>
                    <Input
                    type=""
                    name=""
                    onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Button type="button" onClick={this.handleCancel}>Cancel</Button>
                    <Button type="submit">Add New Evaluation</Button>
                </FormGroup>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

const mapDispatchToProps = { newEvaluation, createEvaluation, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(EvalNewModal);


