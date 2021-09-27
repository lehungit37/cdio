import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./MenuAdmin.scss";
const MenuAdmin = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="logo-wrapper">
        <Link to = "/admin" className="logo__admin">
          <span>XOSS</span>Admin
        </Link>
      </div>
      <div className="side-menu-wrap active">
        <ul className="main-menu in">
          <li>
            <NavLink exact to = "/admin" >
              <span className = "icon__menu"><i class="fas fa-truck"></i></span>
              <span className = "name__menu">Order</span>
              </NavLink>
          </li>
          <li>
            <NavLink to  = '/admin/category'>
              <span className = "icon__menu"><i class="fas fa-list"></i></span>
              <span className = "name__menu">Category</span>
              </NavLink>
          </li>
          <li>
            <NavLink to = "/admin/product">
              <span className = "icon__menu"><ion-icon name="cube-outline"></ion-icon></span>
              <span className = "name__menu">Product</span>
              </NavLink>
          </li>
          <li>
            <a href="">
              <span className = "icon__menu"><ion-icon name="people-outline"></ion-icon></span>
              <span className = "name__menu">User</span>
              </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuAdmin;
