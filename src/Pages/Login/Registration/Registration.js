import React from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Context/useAuth";
const Registration = () => {
  const { error, user, loading, handleUserRegister } = useAuth();
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    handleUserRegister(data.email, data.password, data.name, history);
    console.log(data);
  };
  return (
    <Container className="my-5">
      <div className="row">
        <div className="col-md-5 mx-auto text-center">
          {!loading && (
            <div
              className="card shadow-lg p-3 mb-5 rounded"
              style={{ backgroundColor: "#0d2c54" }}
            >
              <p className="text-white">
                Already Registered? <Link to="/login">Please Login</Link>
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="p-2 mb-2 form-control"
                  type="text"
                  placeholder="Your Name"
                  {...register("name")}
                />
                <input
                  className="p-2 mb-2 form-control"
                  type="email"
                  placeholder="Your Email"
                  {...register("email")}
                />
                <input
                  className="p-2 mb-3 form-control"
                  type="password"
                  placeholder="Type Password"
                  {...register("password")}
                />
                <input
                  style={{ backgroundColor: "#ee6c4d" }}
                  className="btn mb-3 text-white px-5"
                  type="submit"
                  value="Register"
                />
              </form>
              {error && <Alert variant="danger">{error}</Alert>}
            </div>
          )}
          {loading && <Spinner animation="border" variant="info" />}
        </div>
      </div>
    </Container>
  );
};

export default Registration;
