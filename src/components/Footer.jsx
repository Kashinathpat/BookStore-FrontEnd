import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Footer = () => {
	return (
		<Navbar sticky="bottom" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand>Created in 2024</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default Footer;
