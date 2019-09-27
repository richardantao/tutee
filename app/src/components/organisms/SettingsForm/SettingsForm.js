import React, { Component } from "react";
import LoadingColumn from "../../molecules/LoadingColumn";
import Profile from "../Profile";
import Password from "../Password";
import Preference from "../Preference";
import Integration from "../Integration";

export default class SettingsForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            error: false,
            activeForm: []
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: false,
            activeForm: "profile"
        });
    }

    render() {
        let { isLoading, activeForm } = this.state;

        if(isLoading) {
            return <LoadingColumn/>
        } else if(activeForm === "profile") {
            return <Profile/>
        }  else if(activeForm === "password") {
            return <Password/>
        } else if(activeForm === "preferences") {
            return <Preference/>
        } else {
            return <Integration/>
        }
    }
}