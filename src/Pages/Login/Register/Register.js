import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <div className="hero min-h-screen">
      <div className="card w-96 shadow-xl">
        <div>
          <h2 className="text-4xl text-center font-bold">Register</h2>
        </div>
        <form onSubmit={handleSubmit(handleRegister)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              placeholder="your name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              {...register("photoURL")}
              type="text"
              name="photoURL"
              placeholder="photoURL"
              className="input input-bordered"
            />
          </div>
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
          <select
            {...register("userType")}
            name="userType"
            className="select select-bordered w-full max-w-xs"
          >
            <option selected>user</option>
            <option>seller</option>
          </select>
          <div className="form-control mt-6">
            <input type="submit" className="btn" value="Register" />
          </div>
          <p>
            <small>
              Already have an account?{" "}
              <Link className="font-semibold link link-hover" to="/login">
                Login now
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
