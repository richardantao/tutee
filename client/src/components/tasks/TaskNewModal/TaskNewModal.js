import React, { Component } from "react";

import { connect } from "react-redux";
import { newTask, createTask } from "../../../actions/data/tasks.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import PropTypes from "prop-types";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./TaskNewModal.scss";

class TaskNewModal extends Component {
    state = {
        open: false,
        title: "",
        course: "",
        type: "",
        deadline: "",
        completion: "",
        note: ""
    }

    static propTypes = {
        error: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool,
        newTask: PropTypes.func.isRequired,
        createTask: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidMount() {

        // Get courses for selection upon rendering of modal
        this.props.newTask();
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

    handleCancel = e => {
        this.props.toggle();
    };

    handleSubmit = e => {
        e.preventDefault();

        const { title, course, type, deadline, completion, note } = this.state;

        const newTask = { title, course, type, deadline, completion, note };
      
        // Add item via createTask action
        this.props.createTask(newTask);
      
        // Close modal
        this.toggle();
    };
    
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup className="modal-header">
                    <h3>New Task</h3>
                </FormGroup>
                <FormGroup className="modal-body">
                    <Label for=""></Label>
                    <Input 
                    type="" 
                    name=""
                    onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup className="modal-action">
                    <Button type="button" onCancel={this.handleCancel}>Cancel</Button>
                    <Button type="submit">Add New Task</Button>
                </FormGroup>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    tasks: state.tasks
});

const mapDispatchToProps = { newTask, createTask, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(TaskNewModal);