import React, { Component } from "react";
// import axios from "axios";
import Button from "../../atoms/Button";
import "./Modal.scss";

export default class Modal extends Component {
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

        return(
            <div className="modal">
                <div className="modal-header">
                    <h3>{this.props.header}</h3>
                </div>
                <div className="modal-body">
                    
                </div>
                <div className="modal-action">
                    <Button onClick="">Cancel</Button>
                    <Button>{this.props.action}</Button>
                </div>
            </div>
        )
    }
}