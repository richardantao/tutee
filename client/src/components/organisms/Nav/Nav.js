import React, { Fragment }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTachometerAlt, faCalendarAlt, faTasks, faGraduationCap, faUniversity,
	faSearch, faCog, faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import styles from "./Nav.scss";
import Logo from "../../atoms/Logo";


// vertical navigation for all views/pages
const Nav = () => {
	return ( // pull logo and vertical navbar with navigation buttons/links
		<Fragment>
			<Logo /> 
			<nav>
				<Button href="/dashboard"><FontAwesomeIcon icon={faTachometerAlt} /></Button>
				<Button href="/calendar"><FontAwesomeIcon icon={faCalendarAlt} /></Button>
				<Button href="/tasks"><FontAwesomeIcon icon={faTasks} /></Button>
				<Button href="/evaluations" className="adjust"><FontAwesomeIcon icon={faGraduationCap} /></Button>
				<Button href="/courses"><FontAwesomeIcon icon={faUniversity} /></Button>
				<Button href="/search"><FontAwesomeIcon icon={faSearch} /></Button>
				<Button href="/settings" className="secondary-nav-button"><FontAwesomeIcon icon={faCog} /></Button>
				<Button href="/help" className="secondary-nav-button"><FontAwesomeIcon icon={faQuestionCircle} /></Button>
			</nav>
		</Fragment>
	)
}

export default Nav;