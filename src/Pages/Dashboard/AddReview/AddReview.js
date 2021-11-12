import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Context/useAuth";
import Swal from "sweetalert2";
const AddReview = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://sleepy-bastion-40732.herokuapp.com/review", {
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
            position: "top",
            icon: "success",
            title: "Your review has been saved",
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
        <h1 className="fw-bold text-uppercase text-danger text-center">
          if you like our service you can write a review here
        </h1>
        <div className="col-md-6 mx-auto text-center">
          <div
            className="card shadow-lg p-3 mb-5 mt-4 rounded"
            style={{ backgroundColor: "#0d2c54" }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="p-2 mb-2 form-control"
                defaultValue={user?.displayName}
                {...register("name")}
              />
              <input
                className="p-2 mb-2 form-control"
                defaultValue={user?.email}
                {...register("email")}
              />
              <input
                className="p-2 mb-2 form-control"
                type="number"
                placeholder="Give Rating 0-5"
                {...register("rating")}
              />
              <textarea
                className="p-2 mb-4 form-control"
                type="text"
                placeholder="Write Review Here"
                {...register("comment")}
              />
              <input
                style={{ backgroundColor: "#ee6c4d" }}
                className="btn mb-3 text-white px-5"
                type="submit"
                value="Add Review"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
