import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
// import useToken from "../../../hooks/useToken";

const Login = () => {
  // const [signInUserEmail, setSignInUserEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [signInError, setSignInError] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const { signIn, googleSignIn, forgetPassword } = useContext(AuthContext);
  // const [token] = useToken(signInUserEmail);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  // console.log("testing", token, from);

  const handleLogin = (data) => {
    setSignInError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // setSignInUserEmail(data?.email);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const message = error?.message;
        setSignInError(message);
        console.error(error);
      });
  };

  const handleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  const handleUserEmail = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };

  const handleResetPassword = () => {
    //when email dose not exists then we can set a toast for user--
    if (!userEmail) {
      toast.custom(
        <p className="bg-black text-white p-2 rounded-lg">
          Please Enter your Email Address
        </p>
      );
      return;
    }
    forgetPassword(userEmail)
      .then(() => {
        toast.custom(
          <p className="bg-red-600 text-white p-2 rounded-lg">
            Please check Your Gmail and Update Password
          </p>
        );
        reset();
      })
      .catch((error) => console.error(error));
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
              onBlur={handleUserEmail}
            />
            {signInError && <p className="text-error">{signInError}</p>}
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
            {signInError && <p className="text-error">{signInError}</p>}
            <label className="label">
              <Link
                onClick={handleResetPassword}
                className="label-text-alt link link-hover"
              >
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
          <div className="divider">OR</div>
        </form>
        <div className="p-8 pt-0">
          <button
            onClick={handleGoogleSignin}
            className="btn btn-outline w-full"
          >
            Coutinue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
