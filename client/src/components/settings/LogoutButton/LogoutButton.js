import React, { Component } from "react";

import { logout } from "../../../actions/auth.action";
import { connect } from "react-redux"; 
import PropTypes from "prop-types";

import ButtonReact from "../Button";

import "./LogoutButton.scss";

class LogoutButton extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    }
    
    render() {
        return <ButtonReact href="#" onClick={this.props.logout}>Sign Out</ButtonReact>
    }
}

export default connect(null, { logout })(LogoutButton);

