import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const PublicNavbar = () => {
	return (
		<Navbar bg="dark" expand="lg">
			<Navbar.Brand className="mr-auto">
				<img src={logo} alt="CoderSchool" width="50px" />
			</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link as={Link} to="/" className="text-white">
					Home
				</Nav.Link>
				<Nav.Link as={Link} exact to="/test" className="text-white">
					Testing
				</Nav.Link>
                <Nav.Link as={Link} exact to="/login" className="text-white">
					Login
				</Nav.Link>
                <Nav.Link as={Link} exact to="/jobs" className="text-white">
					Job List
				</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default PublicNavbar;