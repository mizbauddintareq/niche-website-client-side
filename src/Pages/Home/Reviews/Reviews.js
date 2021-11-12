import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import Rating from "react-rating";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-bastion-40732.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container fluid>
      <div className="text-center" style={{ marginTop: "80px" }}>
        <h1 className="fw-bold" style={{ color: "#e63946" }}>
          CUSTOMER REVIEWS
        </h1>

        <p className="fw-bold" style={{ color: "#3d5a80" }}>
          With the consistent growth of drone technology with drones being
          utilized across a full spectrum of applications, the need for high
          quality, reliable drones is growing as well. We understand that our
          customers need drones that are truly reliable, which is why we are
          confident you’ll find our vast inventory suitable. Our drones
          encompass superior quality, innovation, and utility. From aerial
          photography and videography to inspection solutions and more, we have
          drones that are optimal for every application.
        </p>
      </div>
      <Row xs={1} md={4} className="g-4 mt-4">
        {reviews.map((review) => (
          <Col>
            <Card
              className="h-100 text-secondary shadow-lg border border-secondary rounded"
              style={{ backgroundColor: "#000000" }}
            >
              <Card.Header className="text-center fw-bold">
                <Rating
                  className="text-warning"
                  initialRating={review.rating}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  readonly
                />
              </Card.Header>
              <Card.Body>
                <Card.Text>{review.comment}</Card.Text>
                <div
                  className="d-flex justify-content-between fw-bold"
                  style={{ fontSize: "12px", color: "#3d5a80" }}
                >
                  <Card.Text>{review.name}</Card.Text>
                  <Card.Text>{review.email}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
