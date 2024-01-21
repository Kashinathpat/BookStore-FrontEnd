import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

function ViewBook() {
	const [loading, setLoading] = useState(false);
	const { id } = useParams();
	const [book, setBook] = useState([]);
	var url = `http://localhost:5555/books/${id}`;

	useEffect(() => {
		setLoading(true);
		axios
			.get(url)
			.then(response => {
				setBook(response.data);
				setLoading(false);
			})
			.catch(error => {
				console.log(error.message);
				setLoading(false);
			});
	}, []);

	return (
		<Container fluid>
			<Header />
			<Container className="justify-content-center">
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src="holder.js/100px180" />
					<Card.Body>
						<Card.Title>Book Title : {book.title}</Card.Title>
						<Card.Text>Book Author : {book.author}</Card.Text>
						<Card.Text>Book Publish Year : {book.publishYear}</Card.Text>
					</Card.Body>
				</Card>
			</Container>
			<Footer />
		</Container>
	);
}

export default ViewBook;
