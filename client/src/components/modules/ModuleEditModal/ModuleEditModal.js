import React, { Component } from "react";

import { connect } from "react-redux";
import { editModule, updateModule, deleteModule } from "../../../actions/data/modules.action";
import { clearErrors } from "../../../actions/auth/errors.action";
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
        editModule: PropTypes.func.isRequired,
        updateModule: PropTypes.func.isRequired, 
        deleteModule: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        // set modal to open
        this.setState({
            open: true
        });
        // get data for modal
        this.props.editModule();
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

        this.props.clearErrors();
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: [e.target.value]
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { } = this.state;

        const revisedModule = {

        };

        this.props.updateModule(revisedModule);
    };

    handleCancel = () => {
        this.setState({

        });

        this.toggle();
    };
    
    handleDelete = id => {
        this.props.deleteModule(id);

        this.toggle();
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
                    <Button type="button" onClick={this.handleDelete.bind(this)}>Delete Module</Button>
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

const mapDispatchToProps = { editModule, updateModule, deleteModule, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(ModuleEditModal);

