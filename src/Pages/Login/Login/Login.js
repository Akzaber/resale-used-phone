import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="card w-96 shadow-2xl">
        <div>
          <h2 className="text-4xl text-center font-bold">Login</h2>
        </div>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input type="submit" className="btn" value="Login" />
          </div>
          <p>
            <small>
              Are you new in this site?{" "}
              <Link className="font-semibold underline" to="/register">
                Please Register
              </Link>
            </small>
          </p>
        </form>
        <button className="btn btn-outline w-full">Coutinue With Google</button>
      </div>
    </div>
  );
};

export default Login;
