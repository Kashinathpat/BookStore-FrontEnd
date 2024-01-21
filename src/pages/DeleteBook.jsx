import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Spinner";
import axios from "axios";

function DeleteBook() {
	const [loading, setLoading] = useState(false);
	const { id } = useParams();
	const [book, setBook] = useState([]);
	var url = `http://localhost:5555/books/${id}`;

	function handleDelete() {
		axios
			.delete(url)
			.then(response => {
				console.log("Book Deleted Successfully");
			})
			.catch(error => {
				console.log(error);
			});
	}

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
			<Container>
				{loading ? (
					<Loader />
				) : (
					<Card>
						<Card.Header>Delete Book</Card.Header>
						<Card.Body>
							<Card.Title>Book Title : {book.title}</Card.Title>
							<Card.Text>Author : {book.author}</Card.Text>
							<Card.Text>Publish Year : {book.publishYear}</Card.Text>
							<Button onClick={handleDelete}>Yes, Delete</Button>
						</Card.Body>
					</Card>
				)}
			</Container>
			<Footer />
		</Container>
	);
}

export default DeleteBook;
