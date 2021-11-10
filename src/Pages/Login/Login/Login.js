import React from "react";
import { Alert, Container, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
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
    <Container className="my-5">
      <div className="row">
        <div className="col-md-5 mx-auto text-center">
          {!loading && (
            <div className="card shadow-lg p-3 mb-5 bg-body rounded">
              <p>
                Don't have an account?{" "}
                <Link to="/register">Please Register</Link>
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                  className="btn mb-3 btn-success px-5"
                  type="submit"
                  value="Login"
                />
              </form>
              {error && <Alert variant="danger">{error}</Alert>}
            </div>
          )}
          {loading && <Spinner animation="border" variant="info" />}
          {user?.email && <Alert variant="success">Login Successful</Alert>}
        </div>
      </div>
    </Container>
  );
};

export default Login;
