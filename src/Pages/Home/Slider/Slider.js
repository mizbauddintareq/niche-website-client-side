import React from "react";
import "./Slider.css";
import { Button, ButtonGroup, Carousel } from "react-bootstrap";
import slider1 from "../../../images/slider1.jpg";
import slider2 from "../../../images/slider2.jpg";
import slider3 from "../../../images/slider3.jpg";

const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item className="slider-item">
        <img className="d-block w-100" src={slider1} alt="First slide" />
        <Carousel.Caption className="text-end">
          <h3 style={{ color: "#e0fbfc", fontWeight: "bold" }}>MAVIC MINI</h3>
          <p className="fw-bold">
            Made in Sweden, Hasselblad cameras are renowned for their iconic
            ergonomic design.
          </p>
          <Button style={{ backgroundColor: "#ee6c4d" }} className="px-5">
            See More
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider-item">
        <img className="d-block w-100" src={slider2} alt="Second slide" />

        <Carousel.Caption className="text-start">
          <h3 style={{ color: "#e0fbfc", fontWeight: "bold" }}>MAVIC 2 PRO</h3>
          <p className="fw-bold">
            Laws and regulations regarding UAVs can vary widely depending on
            location. To help users fly more responsibly.
          </p>
          <Button style={{ backgroundColor: "#ee6c4d" }} className="px-5">
            See More
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slider-item">
        <img className="d-block w-100" src={slider3} alt="Third slide" />

        <Carousel.Caption>
          <h3 style={{ color: "#e0fbfc", fontWeight: "bold" }}>
            SEIZE THE MOMENT
          </h3>
          <p className="fw-bold">
            Weighing just 249 grams, Mavic Mini offers a 30-minute flight time,
            4km HD video transmission, and a 3-axis gimbal with 2.7K camera
          </p>
          <Button style={{ backgroundColor: "#ee6c4d" }} className="px-5">
            See More
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
