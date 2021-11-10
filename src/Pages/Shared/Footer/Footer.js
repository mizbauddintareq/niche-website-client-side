import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faFirefoxBrowser,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div
      className="  pt-5 pb-4"
      style={{
        backgroundColor: "#457b9d",
        color: "#f1faee",
        marginTop: "80px",
      }}
    >
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          <div className="col-md-3 mx-auto mt-3">
            <h5
              className="text-uppercase mb-4 fw-bold"
              style={{ color: "#a8dadc" }}
            >
              Breakthrough travels
            </h5>
            <p>
              The success of any tour depends on logistics. These basic, behind
              the scenes, practical arrangements are the very necessary nuts and
              bolts of making a trip a success – from making sure a vehicle
              arrives at the right location, to the crucial matter of timing.
              Meticulous planning is all very well, but actually making it
              happen is key. We depend on our local partners to ensure our
              escorted trips run smoothly.
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5
              className="text-uppercase mb-4 fw-bold"
              style={{ color: "#a8dadc" }}
            >
              offers
            </h5>
            <p>
              {" "}
              <p style={{ color: "#f1faee" }}>Maldives Beaches</p>{" "}
            </p>
            <p>
              {" "}
              <p style={{ color: "#f1faee" }}>Bali, Indonesia</p>{" "}
            </p>
            <p>
              {" "}
              <p style={{ color: "#f1faee" }}>Pattaya Beach</p>{" "}
            </p>
            <p>
              {" "}
              <p style={{ color: "#f1faee" }}>The Eiffel Tower</p>{" "}
            </p>
            <p>
              {" "}
              <p style={{ color: "#f1faee" }}>Hawaii Islands</p>{" "}
            </p>
            <p>
              {" "}
              <p style={{ color: "#f1faee" }}>Great Wall Of China</p>{" "}
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5
              className="text-uppercase mb-4 fw-bold"
              style={{ color: "#a8dadc" }}
            >
              useful links
            </h5>
            <p>
              {" "}
              <p style={{ color: "#f1faee" }}>Agents</p>{" "}
            </p>
            <p>
              {" "}
              <p style={{ color: "#f1faee" }}>Login</p>{" "}
            </p>
            <p>
              {" "}
              <p style={{ color: "#f1faee" }}>Privacy Policy</p>{" "}
            </p>
            <p>
              {" "}
              <p style={{ color: "#f1faee" }}>Terms & Conditions</p>{" "}
            </p>
            <p>
              {" "}
              <p style={{ color: "#f1faee" }}>Booking</p>{" "}
            </p>
            <p>
              {" "}
              <p style={{ color: "#f1faee" }}>Developer</p>{" "}
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5
              className="text-uppercase mb-4 fw-bold"
              style={{ color: "#a8dadc" }}
            >
              contact information
            </h5>
            <p>
              <FontAwesomeIcon
                style={{ color: "#f1faee" }}
                icon={faLocationArrow}
              />{" "}
              Kolatoli, Cox's Bazar, Bangladesh
            </p>
            <p>
              <FontAwesomeIcon style={{ color: "#f1faee" }} icon={faPhone} />{" "}
              088 +880 1580541540
            </p>
            <p>
              <FontAwesomeIcon style={{ color: "#f1faee" }} icon={faEnvelope} />{" "}
              contact@breakthroughtravels.com
            </p>
            <p>
              <FontAwesomeIcon
                style={{ color: "#f1faee" }}
                icon={faFirefoxBrowser}
              />{" "}
              www.breakthrough-travel.web.app
            </p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className=" col-md-7 ">
            <p>
              {" "}
              <span style={{ color: "#a8dadc" }}>Mizba Uddin Tareq</span> © 2021
              All Right Reserved
            </p>
          </div>

          <div className="col-md-5">
            <div className="text-center text-md-end">
              <ul className="list-unstyled list-inline">
                <Link to="/">
                  <FontAwesomeIcon
                    style={{ color: "#f1faee" }}
                    className="me-2"
                    icon={faFacebookSquare}
                    size="2x"
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    style={{ color: "#f1faee" }}
                    className=" me-2"
                    icon={faTwitterSquare}
                    size="2x"
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    style={{ color: "#f1faee" }}
                    className=" me-2"
                    icon={faYoutubeSquare}
                    size="2x"
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    style={{ color: "#f1faee" }}
                    icon={faInstagramSquare}
                    size="2x"
                  />
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
