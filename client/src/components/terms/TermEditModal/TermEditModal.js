import React, { Component } from "react";

import { connect } from "react-redux";
import { editTerm, updateTerm, deleteTerm } from "../../../actions/data/terms.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import PropTypes from "prop-types";

import { Button, Col, Row } from "react-bootstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "./TermEditModal.scss";

class TermEditModal extends Component {
    state = {
        open: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        editTerm: PropTypes.func.isRequired,
        updateTerm: PropTypes.func.isRequired,
        deleteTerm: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };
    
    componentDidMount() {

    };

    componentDidUpdate() {
        const { error, isAuthenticated } = this.props;

        if(error) {
            if(!isAuthenticated) {
                this.setState({

                });
            } else {
                this.setState({

                });
            };
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

        const updatedTerm = {

        };

        this.props.updateTerm(updatedTerm);
    };

    handleCancel = () => {

    };

    handleDelete = id => {
        
        this.props.deleteTerm(id);
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
                    <Button type="button" onClick={this.handleDelete}>Delete Term</Button>
                    <Button type="button" onClick={this.handleCancel}>Cancel</Button>
                    <Button type="submit">Update Term</Button>
                </FormGroup>
            </Form>
        );
    };
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

const mapDispatchToProps = { editTerm, updatedTerm, deleteTerm, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(TermEditModal);

