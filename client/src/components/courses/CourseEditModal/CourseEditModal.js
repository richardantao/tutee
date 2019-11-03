import React, { Component } from "react";

import { connect } from "react-redux";
import { updateCourse, deleteCourse } from "../../../actions/data/courses.action";
import PropTypes from "prop-types";

import { Form, FormGroup, Label, Input } from "react-bootstrap";

import "./CourseEditModal.scss";

class CourseEditModal extends Component {
    state = {
        open: false
    };
    
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        updateCourse: PropTypes.func.isRequired,
        deleteCourse: PropTypes.func.isRequired
    };
    
    componentDidMount() {

        this.props.getUserTerms(); // yet to define
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
            [e.target.name]: [e.target.value]
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { } = this.state;
        
        const updatedCourse = {

        };

        this.props.updateCourse(updatedCourse);
    };

    handleCancel = () => {

    };

    handleDelete = id => {


        this.props.deleteCourse(id);
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="">
                <FormGroup>

                </FormGroup>
                <FormGroup className="form-actions">
                    <Button type="button" onClick={this.handleDelete}>Delete</Button>
                    <Button type="button" onClick={this.handleCancel}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </FormGroup>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { updateCourse, deleteCourse })(CourseEditModal);

