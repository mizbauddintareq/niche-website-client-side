import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import AddReview from "../AddReview/AddReview";
import AllOrders from "../AllOrders/AllOrders";
import AllProducts from "../AllProducts/AllProducts";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  return (
    <Container fluid>
      <div className="row">
        <div className="col-md-2">
          <Nav justify variant="tabs" className="flex-column">
            <Nav.Link as={Link} to={`${url}/myOrders`}>
              My Orders
            </Nav.Link>
            <Nav.Link as={Link} to={`${url}/addReview`}>
              Review
            </Nav.Link>
            <Nav.Link as={Link} to={`${url}/pay`}>
              Pay
            </Nav.Link>
            <Nav.Link as={Link} to={`${url}/allOrders`}>
              Manage All Orders
            </Nav.Link>
            <Nav.Link as={Link} to={`${url}/addProduct`}>
              Add A Product
            </Nav.Link>
            <Nav.Link as={Link} to={`${url}/makeAdmin`}>
              Make An Admin
            </Nav.Link>
            <Nav.Link as={Link} to={`${url}/allProducts`}>
              Manage Products
            </Nav.Link>
            <Nav.Link>Logout</Nav.Link>
          </Nav>
        </div>
        <div className="col-md-10 mx-auto">
          <Switch>
            <Route exact path={path}></Route>
            <Route path={`${path}/myOrders`}>
              <MyOrders />
            </Route>
            <Route path={`${path}/addReview`}>
              <AddReview />
            </Route>
            <Route path={`${path}/pay`}>
              <Pay />
            </Route>
            <Route path={`${path}/allOrders`}>
              <AllOrders />
            </Route>
            <Route path={`${path}/addProduct`}>
              <AddProduct />
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </Route>
            <Route path={`${path}/allProducts`}>
              <AllProducts />
            </Route>
          </Switch>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
