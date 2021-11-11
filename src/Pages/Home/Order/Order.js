import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Card, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from "react-router";
import useAuth from "../../Context/useAuth";
const Order = () => {
  const history = useHistory();
  const location = useLocation();
  const redirect_Uri = location.state?.from || "/dashboard/myOrders";
  const { id } = useParams();
  const { user } = useAuth();
  const [pd, setPd] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your order has been confirmed",
            showConfirmButton: false,
            timer: 1500,
          });
          history.push(redirect_Uri);
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setPd(data));
  }, []);

  useEffect(() => {
    reset();
  }, [pd]);
  return (
    <Container>
      <div className="row d-flex justify-content-around align-items-center">
        <div className="col-md-5">
          <Card className="bg-dark text-white">
            <Card.Img src={pd.thumb} className="img-fluid" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>{pd.name}</Card.Title>
              <Card.Text>{pd.des}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-md-6 mx-auto text-center">
          <div className="card shadow-lg p-3 mb-5 bg-body rounded">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue={user.displayName}
                className="p-2 mb-2 form-control"
                {...register("name")}
              />
              <input
                defaultValue={user.email}
                className="p-2 mb-2 form-control"
                {...register("email")}
              />
              <input
                placeholder="Your Phone Number"
                className="p-2 mb-2 form-control"
                {...register("phone")}
              />
              <input
                placeholder="Your Address"
                className="p-2 mb-2 form-control"
                {...register("address")}
              />
              <input
                defaultValue={pd.name}
                className="p-2 mb-2 form-control"
                {...register("pName")}
              />
              <input
                defaultValue={pd.price}
                className="p-2 mb-2 form-control"
                {...register("price")}
              />
              <input
                defaultValue={pd.thumb}
                className="p-2 mb-2 form-control"
                {...register("thumb")}
              />
              <input
                defaultValue={pd.des}
                className="p-2 mb-2 form-control"
                {...register("des")}
              />

              <input
                type="submit"
                className="btn mb-3 btn-success px-4"
                value="Confirm Order"
              />
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Order;
