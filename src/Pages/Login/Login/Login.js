import React from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../Context/useAuth";
const Login = () => {
  const { user, error, handleUserLogin, loading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    handleUserLogin(data.email, data.password, location, history);
    console.log(data);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-5 mx-auto text-center">
          <h2>Please Login</h2>
          {!loading && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="p-2 m-2 form-control"
                type="email"
                placeholder="Your Email"
                {...register("email")}
              />
              <input
                className="p-2 m-2 form-control"
                type="password"
                placeholder="Type Password"
                {...register("password")}
              />
              <input className="btn btn-success" type="submit" />
            </form>
          )}
          {loading && <Spinner animation="border" variant="info" />}
          {user?.email && <Alert variant="success">Login Successful</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
        </div>
      </div>
    </div>
  );
};

export default Login;
