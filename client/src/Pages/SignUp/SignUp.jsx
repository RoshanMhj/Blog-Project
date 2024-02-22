import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="signup">
      <div className="singup-brand">
        <div className="brand">
          <p>VERVE</p>
        </div>
        <p>
          Join our diverse blog community, where voices thrive. Whether a
          seasoned writer or novice, share ideas, connect, and embark on
          inspiration together.
        </p>
      </div>
      <div className="signup-info">
        <form>
          <p>Your Username: </p>
          <input type="text" placeholder="Username" id="username" />
          <p>Your Email:</p>
          <input type="email" placeholder="name@company.com" id="email" />
          <p>Your Password</p>
          <input type="password" placeholder="Your Password" id="password" />

          <button type="submit">Sign Up</button>
        </form>
      </div>
      <span>Already have an account?</span>
      <Link to="/sign-up">SignUp</Link>
    </div>
  );
};
