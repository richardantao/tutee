import React, { Component } from "react";

import { createTask } from "../../../actions/data/tasks.action";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Button from "../../atoms/Button";
import "./TaskModal.scss";

class TaskModal extends Component {
    state = {
        open: false,
        title: ""
        // add rest of task inputs
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            open: !this.state.open
        });
    };

    onChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    };

    onSubmit = e => {
        e.preventDefault();

        const newTask = {
            title: this.state.title,
            // add task inputs
        };
      
        // Add item via createTask action
        this.props.createTask(newTask);
      
        // Close modal
        this.toggle();
    };
    
    render() {
        return(
            <form method="" action="" className="modal">
                <div className="modal-header">
                    <h3>{this.props.header}</h3>
                </div>
                <div className="modal-body">
                    <div>
                        <label for=""></label>
                        <input type="" name=""/>
                    </div>
                </div>
                <div className="modal-action">
                    <Button onClick="">Cancel</Button>
                    <Button onClick="">{this.props.action}</Button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { createTask })(TaskModal);