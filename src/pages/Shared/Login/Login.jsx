import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const location = useLocation()
   const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        console.log("login-successfully")
        navigate(location?.state ? location.state : "/") 
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-center text-4xl">Please Login Here</h2>
      <form className="mx-auto lg:w-1/2 md:mt-12" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mt-4">
        Dont’t Have An Account ?{" "}
        <Link className="text-blue-600 " to="/register">
          Register
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
