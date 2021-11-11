import React, { useEffect, useState } from "react";
import { Card, Carousel, Col, Container, Image, Row } from "react-bootstrap";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container fluid>
      <div className="text-center" style={{ marginTop: "80px" }}>
        <h1 className="fw-bold text-uppercase" style={{ color: "#e63946" }}>
          Testimonials
        </h1>

        <p className="text-muted">
          Our clients come from very different walks of life and age groups.
          We’re delighted that many come back to travel on our escorted
          historical tours and small group cruises again and again. We feel that
          their testimonials describe who we are and what we do far better than
          we ever could. Here’s a small selection.
        </p>
      </div>
      <Carousel className="mt-4">
        <Carousel.Item>
          <Row xs={1} md={2} className="g-4 text-center">
            {reviews.map((review) => (
              <Col key={review._id}>
                <Card
                  className="shadow p-3 rounded h-100"
                  style={{ backgroundColor: "#1d3557", color: "#f1faee" }}
                >
                  <Card.Body>
                    <Card.Title>{review.name}</Card.Title>
                    <Card.Text>
                      <h6>{review.email}</h6>
                      <p>{review.comment}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Reviews;
