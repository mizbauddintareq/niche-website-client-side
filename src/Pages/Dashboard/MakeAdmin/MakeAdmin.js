import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          reset();
        }
      });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-5 mx-auto text-center">
          <div className="card shadow-lg p-3 mb-5 bg-body rounded">
            {success && (
              <Alert variant="success">Successfully Make An Admin</Alert>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="p-2 mb-4 form-control"
                placeholder="Enter Email"
                type="email"
                {...register("email")}
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
