import React, { Component } from "react";

import { connect } from "react-redux";
import { newCourse, createCourse } from "../../../actions/data/courses.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import PropTypes from "prop-types";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./CourseNewModal.scss";

class CourseNewModal extends Component {
    state = {
        open: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        newCourse: PropTypes.func.isRequired,
        createCourse: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.setState({
            open: true
        });

        this.props.newCourse();
    };

    componentDidUpdate() {
        const { error, isAuthenticated } = this.props;

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

        const newCourse = {
            
        };

        // attempt to create new course
        this.props.createCourse(newCourse);

        this.toggle();
    };
    
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label></Label>
                    <Input
                    type=""
                    name=""
                    onChange={this.handleChange}
                    />
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

const mapDispatchToProps = { newCourse, createCourse, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(CourseNewModal);
