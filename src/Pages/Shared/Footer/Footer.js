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
            <h5 className="text-uppercase mb-4 text-white">drones world</h5>
            <p style={{ lineHeight: "1.7" }}>
              Drones World specializes in the supply of high-end drones for a
              variety of commercial, private, and recreational needs. A leading
              DJI-authorized service center, we’re able to deliver the highest
              quality drones at the highest quality service. Whether you require
              drones for aerial filming.
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 text-white">
              drones collections
            </h5>
            <p>
              {" "}
              <p>SANROCK U52 DRONE</p>{" "}
            </p>
            <p>
              {" "}
              <p>FOLDABLE GPS DRONE</p>{" "}
            </p>
            <p>
              {" "}
              <p>DJI MAVIC 3 FLY</p>{" "}
            </p>
            <p>
              {" "}
              <p>POTENSIC ELFIN 2K DRONES</p>{" "}
            </p>
            <p>
              {" "}
              <p>HR Q1 DRONE</p>{" "}
            </p>
            <p>
              {" "}
              <p>RUKO U11 PRO DRONE</p>{" "}
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 text-white">useful links</h5>
            <p>
              {" "}
              <p>Tech Team</p>{" "}
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
              <p>Support</p>{" "}
            </p>
            <p>
              {" "}
              <p>Developer</p>{" "}
            </p>
          </div>

          <div className="col-md-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 text-white">
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
              <FontAwesomeIcon icon={faEnvelope} /> info@dronesworld.com
            </p>
            <p>
              <FontAwesomeIcon icon={faFirefoxBrowser} />{" "}
              www.drones-world-811b7.web.app
            </p>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className=" col-md-7 ">
            <p>
              {" "}
              <span style={{ color: "white" }}>Mizba Uddin Tareq</span> © 2021
              All Right Reserved
            </p>
          </div>

          <div className="col-md-5">
            <div className="text-center text-md-end">
              <ul className="list-unstyled list-inline">
                <Link to="/">
                  <FontAwesomeIcon
                    style={{ color: "white" }}
                    className="me-2"
                    icon={faFacebookSquare}
                    size="2x"
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    style={{ color: "white" }}
                    className=" me-2"
                    icon={faTwitterSquare}
                    size="2x"
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    style={{ color: "white" }}
                    className=" me-2"
                    icon={faYoutubeSquare}
                    size="2x"
                  />
                </Link>
                <Link to="/">
                  <FontAwesomeIcon
                    style={{ color: "white" }}
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
