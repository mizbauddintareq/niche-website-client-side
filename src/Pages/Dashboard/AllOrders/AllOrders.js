import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loading from "../../Loading/Loading";
const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState(true);
  const [isDelete, setIsDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://sleepy-bastion-40732.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
        setStatus(false);
      });
  }, [status, isDelete]);

  const handleDelete = (id) => {
    const MySwal = withReactContent(Swal);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sleepy-bastion-40732.herokuapp.com/delOrder/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount) {
              setIsDelete(!isDelete);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  const handleStatus = (id) => {
    const updateStatus = orders.find((update) => update?._id === id);
    updateStatus.status = "shipped";
    const uri = `https://sleepy-bastion-40732.herokuapp.com/status/${id}`;
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
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order status approved",
            showConfirmButton: false,
            timer: 1500,
          });
          setStatus(true);
        }
      });
  };
  if (isLoading) {
    return Loading();
  }
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
