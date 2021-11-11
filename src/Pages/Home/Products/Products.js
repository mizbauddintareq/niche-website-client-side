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
    <Container fluid>
      <h1>This is products</h1>
      <Row xs={1} md={3} className="g-4">
        {products.map((pd) => (
          <Col key={pd._id}>
            <Card className="h-100">
              <Card.Img variant="top" src={pd.thumb} />
              <Card.Body>
                <Card.Title>{pd.name}</Card.Title>
                <h6>Price: ${pd.price}</h6>
                <Card.Text>{pd.des}</Card.Text>
                <Button as={Link} to={`/order/${pd._id}`}>
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
