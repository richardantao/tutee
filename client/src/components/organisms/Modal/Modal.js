import React, { Component } from "react";
// import axios from "axios";
import Button from "../../atoms/Button";
import "./Modal.scss";

export default class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            active: false
        }
    }
    
    componentDidMount() {
        this.setState({
            isLoading: false,
            active: false
        });
    }

    // toggleDisplay = () => {
    //     this.setState((prevState) => {
    //         active: !prevState.active
    //     });
    // }

    render() {
        let { isLoading, active } = this.state;

        return(
            <form method="" action="" className="modal">
                <div className="modal-header">
                    <h3>{this.props.header}</h3>
                </div>
                <div className="modal-body">
                    <div>
                        <label for=""></label>
                        <input type="" name=""/>
                    </div>
                </div>
                <div className="modal-action">
                    <Button onClick="">Cancel</Button>
                    <Button onClick="">{this.props.action}</Button>
                </div>
            </form>
        )
    }
}