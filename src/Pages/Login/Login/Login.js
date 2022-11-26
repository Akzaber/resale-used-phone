import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="hero min-h-screen">
      <div className="card w-96 shadow-xl">
        <div>
          <h2 className="text-4xl text-center font-bold">Login</h2>
        </div>
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <Link className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <input type="submit" className="btn" value="Login" />
          </div>
          <p>
            <small>
              Are you new in this site?{" "}
              <Link className="font-semibold link link-hover" to="/register">
                Please Register
              </Link>
            </small>
          </p>
        </form>
        <div>
          <button className="btn w-full">Coutinue With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
