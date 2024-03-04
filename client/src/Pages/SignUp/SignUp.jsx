import React, { useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields");
    }
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <p>Username: </p>
          <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
          />
          <p>Email:</p>
          <input
            type="email"
            placeholder="name@company.com"
            id="email"
            onChange={handleChange}
          />
          <p>Password</p>
          <input
            type="password"
            placeholder="Your Password"
            id="password"
            onChange={handleChange}
          />

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
