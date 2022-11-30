import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {user?.uid ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Sign Out</button>
                </li>
                <li className="hidden lg:block">
                  {/* set user avater user image or user fontAwesome Icon */}
                  {user?.uid && (
                    <div className="avatar">
                      {user?.photoURL ? (
                        <div className="w-12 rounded-full">
                          <img src={user?.photoURL} alt="" />
                        </div>
                      ) : (
                        <>
                          <FaUser></FaUser>
                        </>
                      )}
                    </div>
                  )}
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="uppercase md:block md:text-2xl text-primary font-bold"
        >
          Resale <span className="text-black">Mobile</span> Phone
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          {user?.uid ? (
            <>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <button onClick={handleLogout}>Sign Out</button>
              </li>
              <li className="hidden lg:block">
                {/* set user avater user image or user fontAwesome Icon */}
                {user?.uid && (
                  <div className="avatar">
                    {user?.photoURL ? (
                      <div className="w-12 rounded-full">
                        <img src={user?.photoURL} alt="" />
                      </div>
                    ) : (
                      <>
                        <FaUser></FaUser>
                      </>
                    )}
                  </div>
                )}
              </li>
            </>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end lg:hidden">
        <label
          tabIndex={2}
          htmlFor="dashboard-drawer"
          className="btn btn-ghost "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
