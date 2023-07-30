import React, { useState } from "react";
import { Link } from "react-router-dom";
import signUpImg from "../assets/images/login-img.png";
import mainLogo from "../assets/icons/mainLogo.png";
import "../assets/css/signup.css";

interface FormData {
  fullName: string;
  email: string;
  password: string;
}

const CustomerSignup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
    console.log(formData);
  };

  return (
    <div className="signUp">
      <div className="mainForm">
        <img src={mainLogo} alt="logo" />
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <br />
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Type full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Type email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Type password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <p className="terms">
            By signing up, you agree to campsite’s Terms of Service and Privacy
            policy
          </p>
          <button type="submit">Sign up</button>
          <div className="signup-options">
            <h6>OR</h6>
            <div>
              <button type="button"> Google</button>
              <button type="button"> Facebook</button>
            </div>
            <p>
              Have an account? <span>Login</span>
            </p>
          </div>
        </form>
      </div>
      <div className="main-img">
        <img src={signUpImg} alt="main img" />
      </div>
    </div>
  );
};

export default CustomerSignup;
