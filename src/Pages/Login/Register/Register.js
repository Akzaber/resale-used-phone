import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);

  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userUpdate(data);
        reset();
      })
      .catch((error) => console.error(error));
  };

  const userUpdate = (data) => {
    const userInfo = {
      displayName: data.name,
      photoURL: data.photoURL,
    };
    updateUser(userInfo)
      .then(() => {})
      .catch((err) => console.error(err));
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
