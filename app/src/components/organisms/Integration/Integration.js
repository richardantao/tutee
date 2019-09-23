import React, { Component } from "react";
import axios from "axios";
import LoadingColumn from "../../molecules/LoadingColumn";

export default class Integration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            integrations: []
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
                integrations: res.data.integrations
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
        let { isLoading, integrations } = this.state;
        if(isLoading) {
            return <LoadingColumn/>;
        } else {
            return(
                <div>
    
                </div>
            )
        }
    }
}