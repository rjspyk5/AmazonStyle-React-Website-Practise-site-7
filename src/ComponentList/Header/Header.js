import React from "react";
import logo from "../../logo.png";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="logo text-center">
        <img src={logo} alt="" />
      </div>
      <div className=" bg-dark justify-content-center    d-flex text-light headermenu">
        <NavLink
          to="/"
          className="text-decoration-none text-light mx-auto mx-lg-3 px-2 "
        >
          Shop
        </NavLink>

        <NavLink
          to="/ordersummery"
          className="text-decoration-none text-light mx-auto mx-lg-3 px-2 "
        >
          Order Summery
        </NavLink>

        <NavLink
          to="/manage"
          className="text-decoration-none text-light mx-auto mx-lg-3 px-2 "
        >
          Manage Inventory
        </NavLink>
      </div>
    </>
  );
}
