import React, { useContext } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const email = form.get("email");
    const passowrd = form.get("password");
    console.log(name, email, passowrd);

    createUser(email, passowrd)
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-center text-4xl">Please Register Here</h2>
      <form className="mx-auto lg:w-1/2 md:mt-12" onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center">
        Already Have An Account ?{" "}
        <Link to="/login" className="text-blue-600 font-bold">
          {" "}
          Login
        </Link>{" "}
      </p>
    </div>
  );
};

export default Register;
