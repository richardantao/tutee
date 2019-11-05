import React, { Component } from "react";

import { connect } from "react-redux";
import { editClass, updateClass, deleteClass } from "../../../actions/data/classes.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import PropTypes from "prop-types";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./ClassEditModal.scss";

class ClassEditModal extends Component {
    state = {
        open: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        editClass: PropTypes.func.isRequired,
        updateClass: PropTypes.func.isRequired,
        deleteClass: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.setState({
            open: true
        });

        this.editClass();
    };

    componentDidUpdate() {
        const { error, isAuthenticated } = this.props;

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

        const revisedClass = {

        };

        this.props.updateClass(revisedClass);

        this.toggle();
    };

    handleCancel = e => {
        this.setState({

        });

        this.toggle();
    };

    handleDelete = id => {

        this.props.deleteClass(id);

        this.toggle();
    };

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for=""></Label>
                    <Input 
                        type="text"
                        name=""
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Button type="button" onClick={this.handleDelete.bind(this)}>Delete</Button>
                    <Button type="button" onClick={this.handleCancel}>Cancel</Button>
                    <Button type="submit">Save</Button>
                </FormGroup>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
});

const mapDispatchToProps = { editClass, updateClass, deleteClass, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(ClassEditModal);

