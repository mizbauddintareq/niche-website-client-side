import React from "react";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
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
    <div>
      <div className="row">
        <div className="col-md-5 mx-auto text-center">
          <div className="card shadow-lg p-3 mb-5 bg-body rounded">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="p-2 mb-4 form-control"
                placeholder="Enter Email"
                type="email"
                {...register("email", { required: true })}
              />

              <input
                className="btn mb-3 btn-success px-5"
                type="submit"
                value="Make Admin"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
