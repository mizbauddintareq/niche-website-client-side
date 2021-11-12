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
      className="  pt-5 pb-4 border-top border-secondary"
      style={{
        color: "#3d5a80",
        marginTop: "80px",
      }}
    >
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          <div className="col-md-3 mx-auto mt-3">
            <h5
              className="text-uppercase mb-4 fw-bold"
              style={{ color: "#9d0208" }}
            >
              drones world
            </h5>
            <p>
              Drones World specializes in the supply of high-end drones for a
              variety of commercial, private, and recreational needs. A leading
              DJI-authorized service center, we’re able to deliver the highest
              quality drones at the highest quality service. Whether you require
              drones for aerial filming, videography, surveying, or anything
              else, we have the drones available to suit your needs. With an
              extensive product range as well as custom drone solutions
              available.
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5
              className="text-uppercase mb-4 fw-bold"
              style={{ color: "#9d0208" }}
            >
              offers
            </h5>
            <p>
              {" "}
              <p>Maldives Beaches</p>{" "}
            </p>
            <p>
              {" "}
              <p>Bali, Indonesia</p>{" "}
            </p>
            <p>
              {" "}
              <p>Pattaya Beach</p>{" "}
            </p>
            <p>
              {" "}
              <p>The Eiffel Tower</p>{" "}
            </p>
            <p>
              {" "}
              <p>Hawaii Islands</p>{" "}
            </p>
            <p>
              {" "}
              <p>Great Wall Of China</p>{" "}
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5
              className="text-uppercase mb-4 fw-bold"
              style={{ color: "#9d0208" }}
            >
              useful links
            </h5>
            <p>
              {" "}
              <p>Agents</p>{" "}
            </p>
            <p>
              {" "}
              <p>Login</p>{" "}
            </p>
            <p>
              {" "}
              <p>Privacy Policy</p>{" "}
            </p>
            <p>
              {" "}
              <p>Terms & Conditions</p>{" "}
            </p>
            <p>
              {" "}
              <p>Booking</p>{" "}
            </p>
            <p>
              {" "}
              <p>Developer</p>{" "}
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5
              className="text-uppercase mb-4 fw-bold"
              style={{ color: "#9d0208" }}
            >
              contact information
            </h5>
            <p>
              <FontAwesomeIcon icon={faLocationArrow} /> Kolatoli, Cox's Bazar,
              Bangladesh
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> 088 +880 1580541540
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              contact@breakthroughtravels.com
            </p>
            <p>
              <FontAwesomeIcon icon={faFirefoxBrowser} />{" "}
              www.breakthrough-travel.web.app
            </p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className=" col-md-7 ">
            <p>
              {" "}
              <span style={{ color: "#9d0208" }}>Mizba Uddin Tareq</span> © 2021
              All Right Reserved
            </p>
          </div>

          <div className="col-md-5">
            <div className="text-center text-md-end">
              <ul className="list-unstyled list-inline">
                <Link to="/">
                  <FontAwesomeIcon
                    style={{ color: "#3d5a80" }}
                    className="me-2"
                    icon={faFacebookSquare}
                    size="2x"
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    style={{ color: "#3d5a80" }}
                    className=" me-2"
                    icon={faTwitterSquare}
                    size="2x"
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    style={{ color: "#3d5a80" }}
                    className=" me-2"
                    icon={faYoutubeSquare}
                    size="2x"
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    style={{ color: "#3d5a80" }}
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
