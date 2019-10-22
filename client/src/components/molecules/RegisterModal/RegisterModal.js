import React, { Component } from "react";

import { register } from "../../../actions/auth/auth.action";
import { clearErrors } from "../../../actions/auth/errors.action";
import { connect } from "react-redux"; 
import PropTypes from "prop-types";

import "./RegisterModal.scss";

class RegisterModal extends Component {
    state = {
        open: false,
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === "REGISTER_FAILEL") {
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
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

        const { firstName, lastName, email, password } = this.state;

        const newUser = {
            firstName,
            lastName,
            email,
            password
        };

        // Attempt to register user
        this.props.register(newUser);
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error   
})

export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);