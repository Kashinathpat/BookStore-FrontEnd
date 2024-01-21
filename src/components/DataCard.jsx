import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const DataCard = props => {
	const img =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfR6cXnDPUycyL1b3eg4QpsIAnmuJirXlqYQ&usqp=CAU";
	const { title, author, publishYear, id } = props;
	console.log(props);
	const navigate = useNavigate();

	return (
		<Card className="mx-auto my-3 p-3 " style={{ width: "18rem" }}>
			<Card.Img
				style={{ height: "200px", width: "auto" }}
				variant="top"
				src={img}
			/>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Title>{author}</Card.Title>
				<Card.Title>{publishYear}</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
				<ButtonGroup size="md">
					<Button onClick={e => navigate(`/view/${id}`)} variant="primary">
						Show
					</Button>
					<Button onClick={e => navigate(`/edit/${id}`)} variant="primary">
						Edit
					</Button>
					<Button onClick={e => navigate(`/delete/${id}`)} variant="primary">
						Delete
					</Button>
				</ButtonGroup>
			</Card.Body>
		</Card>
	);
};

export default DataCard;
