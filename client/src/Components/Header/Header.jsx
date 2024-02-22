import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

export const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <Link to="/" className="link link-brand">
          <span className="main-tag">Whimsy</span>
        </Link>
        <div className="search">
          <input className="header-input" type="text" placeholder="Search..." />
          <CiSearch className="search" />
        </div>
        <div className="links">
          <NavLink to="/" className="link-second">
            <span className="link-items">Home</span>
          </NavLink>

          <NavLink to="/about" className="link-second">
            <span className="link-items">About</span>
          </NavLink>
          <NavLink to="/projects" className="link-second">
            <span className="link-items">Projects</span>
          </NavLink>
        </div>

        <button className="sign-in">
          <Link className="link" to="/sign-in">
            Sign In
          </Link>
        </button>
      </nav>
    </div>
  );
};
