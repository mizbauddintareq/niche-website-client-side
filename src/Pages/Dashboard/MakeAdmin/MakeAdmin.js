import React from "react";
import { Spinner } from "react-bootstrap";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Context/useAuth";
const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const { loading } = useAuth();
  const onSubmit = (data) => {
    fetch("https://sleepy-bastion-40732.herokuapp.com/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "An admin is added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };
  return (
    <div className="mt-5">
      <div className="row">
        <h1 className="text-danger text-uppercase text-center fw-bold">
          make a new admin here
        </h1>
        {!loading && (
          <div className="col-md-5 mx-auto text-center mt-4">
            <div
              className="card shadow-lg p-3 mb-5 rounded"
              style={{ backgroundColor: "#0d2c54" }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="p-2 mb-4 form-control"
                  placeholder="Enter Email"
                  type="email"
                  {...register("email", { required: true })}
                />

                <input
                  style={{ backgroundColor: "#ee6c4d" }}
                  className="btn mb-3 text-white px-5"
                  type="submit"
                  value="Make Admin"
                />
              </form>
            </div>
          </div>
        )}
        {loading && <Spinner animation="border" variant="info" />}
      </div>
    </div>
  );
};

export default MakeAdmin;
