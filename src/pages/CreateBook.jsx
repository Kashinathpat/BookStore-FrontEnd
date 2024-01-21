import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import axios from "axios";

const CreateBook = () => {
	var [title, setTitle] = useState("");
	var [author, setAuthor] = useState("");
	var [publishYear, setPublishYear] = useState("");

	function handleCreate() {
		const newBook = {
			title: title,
			author: author,
			publishYear: publishYear
		};

		axios
			.post("http://localhost:5555/books", newBook)
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	}

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
						<Button className="mt-4" size="lg" onClick={handleCreate}>
							Submit
						</Button>
					</Form.Group>
				</Form>
			</Container>
			<Footer />
		</div>
	);
};

export default CreateBook;
