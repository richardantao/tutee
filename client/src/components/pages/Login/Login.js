import React, { Component } from "react";

import { login } from "../../../actions/auth.action";
import { clearErrors } from "../../../actions/errors.action";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LoginModal from "../../molecules/LoginModal";

import "./Login.scss";

class Login extends Component {
    state = {

    };

    static propTypes = {

    };
    
    render() {
        return null
    };
};

const mapStateToProps = state => ({
    
});

export default connect(mapStateToProps, { login, clearErrors })(Login);