import React, { Component } from "react";

import { connect } from "react-redux";
import { updateTask, deleteTask } from "../../../actions/data/tasks.action";
import PropTypes from "prop-types";

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

    handleDelete = id => {

        this.props.deleteTask(id);

        // close modal onDelete
        this.props.toggle();
    };

    render() {
        const courses = courses.map(_id, course => {
            <option key={_id} value={course}>{course}</option>
        });

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h3>Edit Task</h3>
                </div>
                <div>
                    <label for=""></label>
                    <input type="text" name="" placeholder=""/>

                    <label for="course"></label>
                    <select>
                        {courses}
                    </select>

                    <label for="type"></label>
                    <input type="text" name="type" placeholder=""/>

                    <label for="deadline"></label>
                    <input type="text" name="deadline" placeholder=""/>

                    <label for="completion"></label>
                    <input type="text" name="completion" placeholder=""/>

                    <label for="note"></label>
                    <textarea type="text" name="note" placeholder="Enter description"></textarea>
                </div>
                <div>
                    <Button type="button" onClick={this.handleDelete}>Delete</Button>
                    <Button type="button" onClick={this.handleCancel}>Cancel</Button>
                    <Button type="submit">Update</Button>
                </div>
            </form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

connect(mapStateToProps, { 
    updateTask, deleteTask 
})(TaskEditModal);