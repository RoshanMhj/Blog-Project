import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup-brand">
        <span className="brand">WELCOME!</span>
        <p>
          Join our diverse blog community,where voices thrive. <br /> Whether a
          seasoned writer or novice,
          <br /> share ideas, connect, and embark on inspiration together.
        </p>
      </div>
      <div className="signup-info">
        <form>
          <p>Username: </p>
          <input type="text" placeholder="Username" id="username" />
          <p>Email:</p>
          <input type="email" placeholder="name@company.com" id="email" />
          <p>Password</p>
          <input type="password" placeholder="Your Password" id="password" />

          <button type="submit" className="form-submit">
            Sign Up
          </button>
        </form>
        <span className="signup-text">Already have an account?</span>
        <Link className="signup-link" to="/sign-up">
          Sign In
        </Link>
      </div>
    </div>
  );
};
