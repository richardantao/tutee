import React, { Component } from "react";
import axios from "axios";
import LoadingColumn from "../../molecules/LoadingColumn";

export default class Integration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        });
        axios.get("http://localhost:3000/settings/integrations/")
        .then(res => {
            this.setState({
                isLoading: false,
                preferences: res.data.UserPreferences
            });
        })
        .catch(err => {
            this.setState({
                errors: err,
                isLoading: false
            });
        });
    }

    render() {
        let { isLoading } = this.state;
        if(isLoading) {
            return LoadingColumn;
        } else {
            return(
                <div>
    
                </div>
            )
        }
    }
}