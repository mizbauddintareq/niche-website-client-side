import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        // setIsLoading(false);
      });
  }, [orders, isDelete]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Want to delete data??");
    if (proceed) {
      fetch(`http://localhost:5000/delOrder/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            setIsDelete(!isDelete);
          }
        });
    }
  };
  const handleStatus = (id) => {
    const updateStatus = orders.find((update) => update?._id === id);
    updateStatus.status = "approved";
    const uri = `http://localhost:5000/status/${id}`;
    fetch(uri, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("updated successfully");
        }
      });
  };
  // if (isLoading) {
  //   return Loading();
  // }
  return (
    <Container fluid>
      <div className="row g-4">
        {orders.map((order) => (
          <div key={order._id} className="col-md-4">
            <div
              className="card mb-3 h-100"
              style={{ backgroundColor: "#a8dadc", color: "#1d3557" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={order.thumb}
                    className="img-fluid rounded-start h-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-uppercase">{order.pName}</h5>
                    <p className="card-text text-muted">User: {order.name}</p>
                    <p className="card-text">Address: {order.address}</p>
                    <p className="card-text">Phone: {order.phone}</p>
                    <p className="card-text">Price: {order.price} USD</p>
                    <p className="card-text">Status: {order.status}</p>

                    <Button
                      onClick={() => handleDelete(order._id)}
                      variant="danger"
                    >
                      DELETE
                    </Button>
                    <Button
                      style={{ backgroundColor: "#1d3557", color: "white" }}
                      onClick={() => handleStatus(order._id)}
                    >
                      {order.status}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default AllOrders;
