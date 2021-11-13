import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import useAuth from "../../Context/useAuth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loading from "../../Loading/Loading";
const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://sleepy-bastion-40732.herokuapp.com/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
      });
  }, [user.email, isDelete]);

  const handleDelete = (id) => {
    const MySwal = withReactContent(Swal);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
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
  if (isLoading) {
    return Loading();
  }
  return (
    <Container fluid className="mt-5">
      <Table striped bordered hover className="text-white">
        <thead>
          <tr className="text-center">
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Your Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Price</th>
            <th>Status</th>
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
                {order.phone}
              </td>
              <td style={{ color: "#3d5a80", fontWeight: "bold" }}>
                {order.address}
              </td>
              <td style={{ color: "#3d5a80", fontWeight: "bold" }}>
                $ {order.price}
              </td>
              <td style={{ color: "#3d5a80", fontWeight: "bold" }}>
                {order.status}
              </td>
              <td>
                <Button
                  onClick={() => handleDelete(order._id)}
                  variant="danger"
                >
                  DELETE
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default MyOrders;
