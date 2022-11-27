import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <Navbar></Navbar>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  to="/dashboard/myorders"
                >
                  My Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addproduct">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myproducts">My Products</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allsellers">All Sellers</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allbyers">All Byers</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
