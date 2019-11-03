import React, { Component } from "react";

import { connect } from "react-redux";
import { createCourse } from "../../../actions/data/courses.action";
import PropTypes from "prop-types";

import { Button } from "reactstrap";
import { Form, FormGroup, Label, Input } from "react-bootstrap";

import "./CourseNewModal.scss";

class CourseNewModal extends Component {
    state = {
        open: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        createCourse: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getUserTerms();
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
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: [e.target.value]
        });
    };

    handleCancel = () => {

    };

    handleSubmit = e => {

        const { } = this.state;

        const newCourse = {
            
        };

        // attempt to create new course
        this.props.createCourse(newCourse);
    };
    
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>

                </FormGroup>
                <FormGroup>
                    <Button type="button" onClick={this.handleCancel}>Cancel</Button>
                    <Button type="submit">Add New Course</Button>
                </FormGroup>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { createCourse })(CourseNewModal);
