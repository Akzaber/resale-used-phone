import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
// import useToken from "../../../hooks/useToken";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  // const [registerUserEmail, setRegisterUserEmail] = useState("");
  // const [token] = useToken(registerUserEmail);
  const navgate = useNavigate();

  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userUpdate(data);

        // reset();
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.acknowledged === true) {
              toast.success("New user created successfully");
              reset();
              navgate("/");
            }
          });
      })
      .catch((error) => console.error(error));
    // setRegisterUserEmail(data.email);
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
              {...register("name", { required: "Name is required" })}
              type="text"
              name="name"
              placeholder="your name"
              className="input input-bordered"
            />
            {errors.name && (
              <p className="text-error">{errors.name?.message}</p>
            )}
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
            {errors.photoURL && (
              <p className="text-error">{errors.photoURL?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-error">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password must be 6 character or long",
              })}
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}
          </div>
          <select
            {...register("userType")}
            name="userType"
            className="select select-bordered w-full max-w-xs"
          >
            <option defaultValue="user">user</option>
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
