import React, { Component } from "react";

import { createClass } from "../../../actions/data/classes.action";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";

import "./NewClassModal.scss";

class NewClassModal extends Component {
    state = {
        open: false
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        createClass: PropTypes.func.isRequired,
    };
    
    componentDidMount() {
        
        // load options for selecting parent
        this.props.fetchParents();
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

        const newClass = {

        };

        this.props.createClass(newClass);
    };

    handleCancel = e => {

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

export default connect(mapStateToProps, { createClass })(NewClassModal);