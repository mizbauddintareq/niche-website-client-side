import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Context/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#000000" }}>
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            className="text-danger"
            style={{
              fontFamily: "Yuji Boku",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            Drones World
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/products" className="text-danger">
                Explore
              </Nav.Link>
              {user?.email && (
                <Nav.Link className="text-danger">
                  Hello! {user.displayName}
                </Nav.Link>
              )}
              {user?.email && (
                <Nav.Link as={Link} to="/dashboard" className="text-danger">
                  DashBoard
                </Nav.Link>
              )}
              {user?.email ? (
                <Button style={{ backgroundColor: "#ee6c4d" }} onClick={logOut}>
                  Logout
                </Button>
              ) : (
                <Nav.Link as={Link} to="/login" className="text-danger">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
