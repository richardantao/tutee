import React, { Component } from "react";

import { connect } from "react-redux";
import { newModule, createModule } from "../../../actions/data/modules.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "./ModuleNewModal.scss";

class ModuleNewModal extends Component {
    state = {
        open: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        newModule: PropTypes.func.isRequired, 
        createModule: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };
    
    componentDidMount() {
        this.setState({
            open: true
        });
        // load options for new Module
        this.props.newModule();
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

    handleSubmit = e => {
        e.preventDefault();

        const { } = this.state;

        const newModule = {

        };


        this.props.createModule(newModule);

        this.toggle();
    };

    handleCancel = () => {
        this.setState({

        });

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

const mapDispatchToProps = { newModule, createModule, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(ModuleNewModal);