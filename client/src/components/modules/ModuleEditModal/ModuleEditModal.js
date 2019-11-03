import React, { Component } from "react";

import { connect } from "react-redux";
import { updateModule, deleteModule } from "../../../actions/data/modules.action";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "./ModuleEditModal.scss";

class ModuleEditModal extends Component {
    state = {
        open: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        updateModule: PropTypes.func.isRequired, 
        deleteModule: PropTypes.func.isRequired
    };
    
    componentDidMount() {

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

    handleSubmit = e => {
        e.preventDefault();

        const { } = this.state;

        const updatedModule = {

        };


        this.props.updateModule(updatedModule);
    };

    handleCancel = () => {

    };
    
    handleDelete = id => {

        this.props.deleteModule(id);
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for=""></Label>
                    <Input
                        name=""
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Button type="button" onClick={this.handleDelete}>Delete Module</Button>
                    <Button type="button" onClick={this.handleCancel}>Cancel</Button>
                    <Button type="submit">Save Module</Button>
                </FormGroup>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error 
});

export default connect(mapStateToProps, { updateModule, deleteModule })(ModuleEditModal);

