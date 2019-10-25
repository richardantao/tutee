import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../../actions/auth/auth.action";
import { clearErrors } from "../../../actions/auth/errors.action";

import { Container } from "react-bootstrap";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Alert
  } from 'reactstrap';

import "./Register.scss";

class Register extends Component {
    state = {
        fname: "",
        lname: "",
        email: "",
        password: "",
        message: null
    }
    
    static propTypes = {
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === "REGISTER_FAILED") {
                this.setState({ message: error.message });
            } else {
                this.setState({ message: null });
            }
        }   
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const { fname, lname, email, password } = this.state;

        const newUser = {
            name: {
                first: fname,
                last: lname
            },
            email,
            password
        };

        // Attempt to register user
        this.props.register(newUser);
    }

    render() {
        return(
            <Container>
                <div id="register">
                        {
                            this.message ? 
                            <Alert className="form-message">{this.message}</Alert> 
                            : null
                        }
                    <Form>
                        <FormGroup>
                            <Label for="fname">First Name</Label>
                            <Input
                                type="text"
                                name="fname"
                                id="fname"
                                placeholder="Enter first name"
                                className="mb-3"
                                onChange={this.onChange}
                            />

                            <Label for="lname">Last Name</Label>
                            <Input
                                type="text"
                                name="lname"
                                id="lname"
                                placeholder="Enter last name"
                                className="mb-3"
                                onChange={this.onChange}
                            />

                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email"
                                className="mb-3"
                                onChange={this.onChange}
                            />

                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter password"
                                className= "mb-3"
                                onChange={this.onChange}
                            />
                            <Button onSubmit={this.onSubmit} color="primary" style={{ marginTop: "2rem" }} block>
                                Register
                            </Button>
                        </FormGroup>
                    </Form>
                </div>
            </Container>
        );
    };
};

const mapStateToProps = state => ({
    error: state.error   
});

export default connect(
    mapStateToProps,
    { register, clearErrors }
)
(Register);