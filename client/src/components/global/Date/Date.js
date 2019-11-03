import React, { Component } from "react";
import Moment from "react-moment";
import "./Date.scss";

export default class DateDisplay extends Component {
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
	    return <h4><Moment format="dddd, MMMM Do">{this.props.dateToFormat}</Moment></h4>
    }
}