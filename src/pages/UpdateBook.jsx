import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";
import { useSnackbar } from "notistack";

const UpdateBook = () => {
	function handleUpdate() {
		var newBook = {
			title: title,
			author: author,
			publishYear: publishYear
		};
		axios
			.put(url, newBook)
			.then(response => {
				console.log(response);
				enqueueSnackbar(response.data.mesaage);
			})
			.catch(error => {
				console.log(error);
				enqueueSnackbar(error.message);
			});
	}
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const [loading, setLoading] = useState(false);
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [publishYear, setPublishYear] = useState("");

	const { id } = useParams();
	const url = `http://localhost:5555/books/${id}`;
	const [book, setbook] = useState([]);
	
	useEffect(() => {
		setLoading(true);
		axios
			.get(url)
			.then(response => {
				setbook(response.data);
				setTitle(response.data.title);
				setAuthor(response.data.author);
				setPublishYear(response.data.publishYear);
				setLoading(false);
			})
			.catch(error => {
				enqueueSnackbar(error.message);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<Header />
			<Container className="bg-info p-5">
				<h1 className="text-center mb-5">Create New Book</h1>
				<Form>
					<Form.Group className="mb-3">
						<Form.Label>Enter Book Name</Form.Label>
						<Form.Control
							value={title}
							onChange={e => setTitle(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Enter Author Name</Form.Label>
						<Form.Control
							value={author}
							onChange={e => setAuthor(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group>
						<Form.Label>Enter Publish Year </Form.Label>
						<Form.Control
							type="number"
							value={publishYear}
							onChange={e => setPublishYear(e.target.value)}
						></Form.Control>
					</Form.Group>

					<Form.Group className="text-center">
						<Button className="mt-4" size="lg" onClick={handleUpdate}>
							Submit
						</Button>
					</Form.Group>
				</Form>
			</Container>
			<Footer />
		</div>
	);
};

export default UpdateBook;
