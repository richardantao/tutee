import React, { Component, Fragment } from "react";

import { login } from "../../../actions/auth/auth.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import { connect } from "react-redux";
import PropTypes from "prop-types"; 

import { Button, Container, Form } from "react-bootstrap";

import "./LoginModal.scss";

class LoginModal extends Component {
    state = {
        open: false,
        email: "",
        password: "",
        message: null
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
          // Check for register error
            if (error.id === "LOGIN_FAILED") {
                this.setState({ message: error.message.message });
            } else {
                this.setState({ message: null });
            }
        }
    
        // If authenticated, close modal
        if (this.state.open && isAuthenticated) {
            this.toggle();
        }
    }

    toggle = () => {
        // Clear errors
        this.props.clearErrors();
        this.setState({
            open: !this.state.open
        });
    }

    onChange = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;

        const user = {
            email,
            password
        };

         // Attempt to login
        this.props.login(user);
    }

    render() {
        return (
            <Container>
                <div id="login">
                    <Form action="/signin" method="POST">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" ></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" className="submit">Sign In</Button>
                        <a href="#" className="forgot">Forgot password?</a>
                    </Form.Group>
                    </Form>
                    <div className="create">
                        <span>Don't have an account?</span>
                        <Button href="/register">Create</Button>
                    </div>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);