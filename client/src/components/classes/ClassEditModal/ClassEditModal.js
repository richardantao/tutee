import React, { Component } from "react";

import { updateClass, deleteClass } from "../../../actions/data/classes.action";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "./ClassEditModal.scss";

class ClassEditModal extends Component {
    state = {
        open: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        updateClass: PropTypes.func.isRequired,
        deleteClass: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.loadOptions();
    };

    componentDidUpdate() {
        const { error } = this.props;
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

        this.props.updateClass();
    };

    handleCancel = e => {

    };

    handleDelete = e => {

        this.props.deleteClass();
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
    error: state.error,
});

export default connect(mapStateToProps, { updateClass, deleteClass })(ClassEditModal);

