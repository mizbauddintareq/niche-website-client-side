import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import drone from "../../../images/drone.jpg";
import Loading from "../../Loading/Loading";
const MainProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://sleepy-bastion-40732.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 6));
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return Loading();
  }
  return (
    <div>
      <div className="bg-dark text-white my-5">
        <Container fluid>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <img
                style={{ height: "300px" }}
                src={drone}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <h1 className="text-center">DJI FPV DRONE COMBO</h1>
              <p>
                Fly through the sky in ways that seem impossible. We never lost
                our passion for flying, and with DJI FPV, those passions have
                turned imagination into reality. With this immersive and
                intuitive aerial platform, get ready to go into the beyond.
              </p>
              <p>
                Immersive Flight Experience | 4K/60fps Super-Wide 150° FOV |
                Emergency Brake and Hover | 10km HD Low-Latency Video
                Transmission
              </p>
              <Button>Shop Now</Button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
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
    </div>
  );
};

export default MainProducts;
