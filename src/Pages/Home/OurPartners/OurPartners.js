import React from "react";
import { Carousel, Container } from "react-bootstrap";

const OurPartners = () => {
  return (
    <Container fluid style={{ marginTop: "80px" }}>
      <div>
        <h1 className="text-danger text-center fw-bold">
          OUR STRATEGIC PARTNERS
        </h1>
        <p
          className="text-center fw-bold"
          style={{ color: "#3d5a80", lineHeight: "1.7" }}
        >
          To be the most reliable retailer and wholesaler brand of drones,
          serving national and international clients alike, catering to their
          specific drone technology needs.Our team is one of the most
          experienced in the industry. Together, we have more than 25 years of
          comprehensive knowledge of everything from hardware platforms and
          sensors to software solutions and integration options.Whether you are
          just getting started, in the process of scaling your operations, or
          seeking a more efficient model to manage your drone program; we are
          your best option to provide hardware, sensors, service and support.
          Partner with the leader in scaling drone programs to kit your fleet,
          support your operations, and keep your team flying.
        </p>
      </div>
      <div className="text-center mt-5">
        <Carousel>
          <Carousel.Item interval={1500}>
            <div className="row logo g-4">
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/zJTMRWk/logo1.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/TwQ2TY4/logo3.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/TRjGctx/logo4.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/KbyxVKx/logo5.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/zGQbT7n/logo6.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/hMCtYB1/logo7.jpg"
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <div className="row logo g-4 text-center">
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/9TkDJym/logo8.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/pbZZC8w/logo9.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/8cGcpwm/logo10.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/Yk7ybpf/logo11.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/WBgmFfH/logo12.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/3mBbF7G/logo13.jpg"
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <div className="row logo g-4 text-center">
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/jvDxYsg/hprclogo.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/jyFbSw6/tbs.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/fNn9FTC/enegren224.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/LdNK9Vd/olympus224.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/cvVvWs0/hoodman.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md-2">
                <img
                  className="d-block img-fluid mx-auto"
                  src="https://i.ibb.co/PN3dk9r/cps224.jpg"
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};

export default OurPartners;
