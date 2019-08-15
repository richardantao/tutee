import React, { Component } from "react";
import LoadingColumn from "../../molecules/LoadingColumn";
import styles from "./NotFound.scss";


export default class NotFound extends Component {
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
        let { isLoading } = this.state;

        if (isLoading) {
            return LoadingColumn;
        } else {
            return (
                <div>

                </div>
            )
        }
    }
}