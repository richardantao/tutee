import React, { Component } from "react";

import { connect } from "react-redux";
import { newEvaluation, createEvaluation } from "../../../actions/data/evaluations.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import PropTypes from "prop-types";

import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button } from "reactstrap";

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
        const { open } = this.state;
        return (
            <Modal isOpen={open} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>New Evaluation</ModalHeader>
                <ModalBody>
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
                </ModalBody>
            </Modal>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

const mapDispatchToProps = { newEvaluation, createEvaluation, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(EvalNewModal);


