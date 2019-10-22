import React, { Component, Fragment } from "react";

// import {  } from "../../../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTachometerAlt, faCalendarAlt, faTasks, faGraduationCap,
	faUniversity, faSearch, faCog, faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Logo from "../../atoms/Logo";

import "./Nav.scss";

class Nav extends Component {
	state = {

	};
	
	static propTypes = {

	};
	
	render() {
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
		);
	};
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { })(Nav);