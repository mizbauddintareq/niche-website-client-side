import React from "react";
import { Card, Carousel, Col, Container, Image, Row } from "react-bootstrap";

const Reviews = () => {
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
            <Col>
              <Card
                className="shadow p-3 rounded h-100"
                style={{ backgroundColor: "#1d3557", color: "#f1faee" }}
              >
                <Card.Body>
                  <Card.Title>Ilya Strebulaev, CA, USA</Card.Title>
                  <Card.Text>
                    We had the most remarkable family tour with Peter Sommer
                    Travels. Not only everything was perfect, but we felt, in
                    every instance, that our guides and our gulet crew truly
                    cared about us, both the kids and adults, and did their best
                    to make this trip memorable.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="shadow p-3 rounded h-100"
                style={{ backgroundColor: "#1d3557", color: "#f1faee" }}
              >
                <Card.Body>
                  <Card.Title>Suzy Lautze, Oregon, USA</Card.Title>
                  <Card.Text>
                    The holiday of a life time - our gulet adventure in the
                    Dodecanese Greek Islands was without a doubt our favourite
                    family trip. The comfort and beauty of the gulet, the
                    incredibly caring crew, the delicious food, the history we
                    learned from our competent and friendly leader, along with
                    the stunning beauty of the islands
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={1} md={2} className="g-4 text-center">
            <Col>
              <Card
                className="shadow p-3 rounded h-100"
                style={{ backgroundColor: "#1d3557", color: "#f1faee" }}
              >
                <Card.Body>
                  <Card.Title>Brian Thiel, United Kingdom</Card.Title>
                  <Card.Text>
                    Our gulet cruise from Kos to Patmos was everything and more
                    than expected. It lived up to the Peter Sommer Travels'
                    emphasis on culture, history, archaeology, comfort and
                    camaraderie. Exceptional guides attended to each guest's
                    interests and needs and were exceptional hosts.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="shadow p-3 rounded h-100"
                style={{ backgroundColor: "#1d3557", color: "#f1faee" }}
              >
                <Card.Body>
                  <Card.Title>Janet Callaghan, WA, Australia</Card.Title>
                  <Card.Text>
                    What a wonderful experience! The two tour leaders who were
                    archaeologists enthralled us with the history of the
                    Islands. The food was bountiful. On the boat the meals were
                    wholesome and delicious. We were treated to wonderful meals
                    on the the Islands that let us sample each Island's
                    speciality.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row xs={1} md={2} className="g-4 text-center">
            <Col>
              <Card
                className="shadow p-3 rounded h-100"
                style={{ backgroundColor: "#1d3557", color: "#f1faee" }}
              >
                <Card.Body>
                  <Card.Title>
                    Adrien Gordon, Christchurch, New Zealand
                  </Card.Title>
                  <Card.Text>
                    Mizba runs a a highly professional organization. From his
                    brochure to drop off at the airport to fly home his
                    attention to detail and his consideration for his clients is
                    superb. The archaeologists he uses as guides are erudite but
                    highly personable and have an ability to turn a pile of
                    stones into a recreation of the lives of the people who
                    lived there over two millennia ago. Excellent.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                className="shadow p-3 rounded h-100"
                style={{ backgroundColor: "#1d3557", color: "#f1faee" }}
              >
                <Card.Body>
                  <Card.Title>Jordana Wilson, DC, USA</Card.Title>
                  <Card.Text>
                    This was our fourth trip with Peter Sommer Travels and it
                    lived up to our very high expectations. It was a wonderfully
                    organized trip with beautiful cruising and swimming spots,
                    great hikes, and fascinating lectures on the region and
                    history. The ship was beautiful, comfortable, and
                    excellently crewed.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Reviews;
