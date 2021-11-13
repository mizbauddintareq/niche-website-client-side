import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
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
            title: "Order has been shipped",
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
    <Container fluid className="mt-5">
      <div>
        <Table striped bordered hover className="text-white">
          <thead>
            <tr className="text-center">
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Customer Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <tbody key={order._id}>
              <tr>
                <td>
                  <img
                    style={{ height: "auto", width: "100px" }}
                    src={order.thumb}
                    alt=""
                  />
                </td>
                <td style={{ color: "#3d5a80", fontWeight: "bold" }}>
                  {order.pName}
                </td>
                <td style={{ color: "#3d5a80", fontWeight: "bold" }}>
                  {order.name}
                </td>
                <td style={{ color: "#3d5a80", fontWeight: "bold" }}>
                  {order.price}
                </td>
                <td>
                  <div className="d-flex justify-content-between">
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
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </Container>
  );
};

export default AllOrders;
