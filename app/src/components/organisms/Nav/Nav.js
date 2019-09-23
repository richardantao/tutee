import React, { Component, Fragment }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTachometerAlt, faCalendarAlt, faTasks, faGraduationCap,
	faUniversity, faSearch, faCog, faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import "./Nav.scss";
import Logo from "../../atoms/Logo";

export default class Nav extends Component {
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

		if(isLoading) {
			return null;
		} else {
			return ( 
				<Fragment>
					<Logo/> 
					<nav role="navigation">
						<Button href="/dashboard">
							<FontAwesomeIcon icon={faTachometerAlt}/>
						</Button>
						<Button href="/calendar">
							<FontAwesomeIcon icon={faCalendarAlt}/>
						</Button>
						<Button href="/tasks">
							<FontAwesomeIcon icon={faTasks}/>
						</Button>
						<Button href="/evaluations" className="adjust">
							<FontAwesomeIcon icon={faGraduationCap}/>
						</Button>
						<Button href="/courses">
							<FontAwesomeIcon icon={faUniversity}/>
						</Button>
						<Button href="/search">
							<FontAwesomeIcon icon={faSearch}/>
						</Button>
						<Button href="/settings" className="secondary-nav-button">
							<FontAwesomeIcon icon={faCog}/>
						</Button>
						<Button href="/help" className="secondary-nav-button">
							<FontAwesomeIcon icon={faQuestionCircle}/>
						</Button>
					</nav>
				</Fragment>
			)
		}
	}	
}