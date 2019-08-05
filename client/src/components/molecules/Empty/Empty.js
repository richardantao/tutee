import React, { Component } from "react";

export default class Empty extends Component {
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
}

    render() {
        return(
            <svg>

            </svg>
        )
    }
}