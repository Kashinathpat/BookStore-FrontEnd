import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import logo from "../assets/logo.png";

const Header = () => {
	return (
		<Navbar sticky="top" expand="md" className="bg-body-tertiary" data-bs-theme="dark">
			<Container>
				<Navbar.Brand href="/">
					<img
						alt=""
						src={logo}
						width="30"
						className="d-inline-block align-top"
					/>
					MERN BookStore
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/create">Create Book</Nav.Link>
						<Nav.Link href="#link">Contact Me</Nav.Link>
						<Nav.Link href="#link">About Me</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
