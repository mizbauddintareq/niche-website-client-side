import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../Context/useAuth";
import Swal from "sweetalert2";
const AddProduct = () => {
  const { loading } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addProduct", {
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
            title: "Product added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      });
  };
  return (
    <Container className="my-5">
      <div className="row">
        <h1 className="text-center mb-5">Please Add An Order</h1>
        <div className="col-md-5 mx-auto text-center">
          {!loading && (
            <div className="card shadow-lg p-3 mb-5 bg-body rounded">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="p-2 mb-2 form-control"
                  type="text"
                  placeholder="Drone Name"
                  {...register("name", { required: true })}
                />
                <input
                  className="p-2 mb-2 form-control"
                  type="text"
                  placeholder="Price"
                  {...register("price", { required: true })}
                />
                <input
                  className="p-2 mb-2 form-control"
                  type="text"
                  placeholder="Image URL"
                  {...register("thumb", { required: true })}
                />
                <textarea
                  className="p-2 mb-2 form-control"
                  type="text"
                  placeholder="Description"
                  {...register("des", { required: true })}
                />

                <input
                  className="btn mb-3 btn-success px-5"
                  type="submit"
                  value="Add Product"
                />
              </form>
            </div>
          )}
          {loading && <Spinner animation="border" variant="info" />}
        </div>
      </div>
    </Container>
  );
};

export default AddProduct;
