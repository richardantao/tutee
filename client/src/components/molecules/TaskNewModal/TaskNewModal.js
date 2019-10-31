import React, { Component } from "react";

import { createTask } from "../../../actions/data/tasks.action";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import "./TaskModal.scss";

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
        isAuthenticated: PropTypes.bool
    }

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

    handleCancel = e => {
        
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
        return(
            <form className="modal">
                <div className="modal-header">
                    <h3>New Task</h3>
                </div>
                <div className="modal-body">
                    <div>
                        <label for=""></label>
                        <input type="" name=""/>
                    </div>
                </div>
                <div className="modal-action">
                    <Button onCancel={this.handleCancel}>Cancel</Button>
                    <Button onSubmit={this.handleSubmit}>{this.props.action}</Button>
                </div>
            </form>
        );
    };
};

const mapStateToProps = state => ({
    tasks: state.tasks,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { createTask })(TaskNewModal);