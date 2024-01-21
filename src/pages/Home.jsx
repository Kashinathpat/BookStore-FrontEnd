import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Loader from "../components/Spinner";
import DataCard from "../components/DataCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { useSnackbar } from "notistack";

function Home() {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const [loading, setLoading] = useState(false);
	const link = "http://localhost:5555/books/";
	const [books, setBooks] = useState([]);
	useEffect(() => {
		setLoading(true);
		axios
			.get(link)
			.then(response => {
				setBooks(response.data);
				setLoading(false);
			})
			.catch(error => {
				enqueueSnackbar(error.message);
				console.log(error.message);
				setLoading(false);
			});
	}, []);

	return (
		<>
			<Header />
			<Container className="bg-info py-3">
				<h1 className="text-center">All Books</h1>
				{loading ? (
					<div>
						<Loader />
					</div>
				) : (
					<div>
						{books.map(book => (
							<DataCard
								key={book._id}
								title={book.title}
								author={book.author}
								publishYear={book.publishYear}
								id={book._id}
							/>
						))}
					</div>
				)}
			</Container>
			<Footer />
		</>
	);
}

export default Home;
