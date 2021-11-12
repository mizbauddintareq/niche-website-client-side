import React, { useEffect, useState } from "react";
import { Card, Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://sleepy-bastion-40732.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return Loading();
  }
  return (
    <Container fluid className="mt-5">
      <div className="text-center">
        <h1 className="text-danger fw-bold text-uppercase">all our products</h1>
        <p style={{ color: "#3d5a80", fontWeight: "bold" }}>
          We have the largest pool of trained technical support personnel to
          assist your pilots as they operate their fleets. When your pilots face
          an unexpected challenge in the field, our support personnel are just a
          phone call away for advice and direction. Because of our scale, we
          have experience solving difficult and infrequent problems so that your
          pilots can get the right advice right away and get back in the air.
        </p>
      </div>
      <Row xs={1} md={4} className="g-4 mt-4">
        {products.map((pd) => (
          <Col key={pd._id}>
            <Card
              className="h-100 text-secondary shadow-lg mb-2 border border-secondary rounded"
              style={{ backgroundColor: "#000000" }}
            >
              <Card.Img variant="top" src={pd.thumb} />
              <Card.Body>
                <Card.Title
                  className="text-uppercase fw-bold"
                  style={{ color: "#6a040f" }}
                >
                  {pd.name}
                </Card.Title>
                <h6 style={{ color: "#9d0208" }}>Price: ${pd.price}</h6>
                <Card.Text style={{ color: "#3d5a80" }}>{pd.des}</Card.Text>
                <Button
                  style={{ backgroundColor: "#6a040f" }}
                  as={Link}
                  to={`/order/${pd._id}`}
                >
                  Purchase
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
