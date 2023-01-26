import React from "react";
import "./css/Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ size }) => {
  return (
    <nav>
      <div className="nav_box">
        <NavLink to="/"><span className="my_shop">Deliciousard</span></NavLink>

        <div>
          <Link to="/about"><span className="others p-4">About</span></Link>

          <NavLink to="/customercare"><span className="others p-4">Customer Care</span></NavLink>

          <NavLink to="/store" ><span className="others p-4">store</span></NavLink>
        </div>

        <div className="cart">
          <Link to="/cart"><span><i className="fas fa-cart-plus"></i></span></Link>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
