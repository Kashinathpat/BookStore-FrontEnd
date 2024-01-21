import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
function Loader() {
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Spinner variant="info" />
        </Container>
    );
}

export default Loader;
