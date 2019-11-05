import React, { Component } from "react";

import { connect } from "react-redux";
import { editEvaluation, updateEvaluation, deleteEvaluation } from "../../../actions/data/evaluations.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import PropTypes from "prop-types";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./EvalEditModal.scss";

class EvalEditModal extends Component {
    state = {
        open: false
    };
    
    static propTypes = {
        isAuthenticated: PropTypes.func,
        error: PropTypes.object.isRequired,
        editEvaluation: PropTypes.func.isRequired,
        updateEvaluation: PropTypes.func.isRequired,
        deleteEvaluation: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.setState({
            open: true
        });

        this.props.editEvaluation();
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

        const { } = this.state;

        const revisedEval = {

        };

        // pass updated object to action function
        this.props.updateEvaluation(revisedEval);

        this.toggle();
    };

    handleCancel = () => {
        this.setState({
            
        });

        this.toggle();
    };

    handleDelete = id => {
        this.props.deleteEvaluation(id);

        this.toggle();
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for=""></Label>
                    <Input
                    type=""
                    name=""
                    onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Button type="button" onClick={this.handleDelete.bind(this)}>Delete Evaluation</Button>
                    <Button type="button" onClick={this.handleCancel}>Cancel</Button>
                    <Button type="submit">Save Evaluation</Button>
                </FormGroup>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

const mapDispatchToProps = { editEvaluation, updateEvaluation, deleteEvaluation, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(EvalEditModal);
