import React, { Component } from "react";

import { login } from "../../../actions/auth.action";
import { clearErrors } from "../../../actions/errors.action";
import { connect } from "react-redux";
import PropTypes from "prop-types"; 

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
            <form>
                
            </form>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(mapStateToProps, { login, clearErrors })(LoginModal);