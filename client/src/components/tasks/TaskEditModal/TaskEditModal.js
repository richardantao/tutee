import React, { Component } from "react";

import { connect } from "react-redux";
import { updateTask, deleteTask } from "../../../actions/data/tasks.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import PropTypes from "prop-types";

import { Button, Col, Row, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Select from "../../global/Select"; 

import "./TaskEditModal.scss";

class TaskEditModal extends Component {
    state = {
        open: false,
        title: "",
        course: "",
        type: "",
        deadline: "",
        completion: 0,
        note: ""
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired
    };

    componentDidMount() {
        this.fetchCourses();
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

        const { title, course, type, deadline, completion, note } = this.state;

        const updatedTask = { title, course, type, deadline, completion, note };

        this.props.updateTask(updatedTask);

        // close modal
        this.toggle();
    };

    handleCancel = () => {

        // reset state and clear errors

        // close modal
        this.toggle();
    };

    handleDelete = id => {

        this.props.deleteTask(id);

        // close modal onDelete
        this.props.toggle();
    };

    fetchCourses = () => {
        
    };

    render() {
        const courses = courses.map(({ _id, course }) => (
            <option key={_id} value={course}>{course}</option>
        ));

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <h3>Edit Task</h3>
                </FormGroup>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" placeholder="" value=""/>

                    <Label for="course">Course</Label>
                    <Select value="">
                        {courses}
                    </Select>

                    <Label for="type"></Label>
                    <Input type="text" name="type" placeholder="Enter task type"/>

                    <Label for="deadline"></Label>
                    <Input type="date" name="deadline" placeholder="Enter task deadline"/>

                    <Label for="completion">Completion</Label>
                    <Input type="range" name="completion" value=""/>

                    <Label for="note">Description</Label>
                    <Input type="textarea" name="note" placeholder="Enter description" value=""/>
                </FormGroup>
                <FormGroup>
                    <Button type="button" onClick={this.handleDelete.bind(this)}>Delete</Button>
                    <Button type="button" onClick={this.handleCancel}>Cancel</Button>
                    <Button type="submit">Update</Button>
                </FormGroup>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { updateTask, deleteTask })(TaskEditModal);