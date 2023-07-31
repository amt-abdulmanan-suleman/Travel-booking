// // Login.tsx
// import React from "react";

// const Login: React.FC = () => {
//   // Your component logic here
//   return (
//     <div>I am Login</div>
//   )
// };

// export default Login;

// export {}; 

import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/icons/mainLogo.png";
import signupimage from "../assets/images/login-img.png";
import facebook from "../assets/icons/facebook-icon.png"
import google from "../assets/icons/google-logo.png"
import Button from "../components/Buttons/Buttons";
import "../assets/css/auth.scss";

interface FormData {
  fullName: string;
  email: string;
  password: string;
}

const Login: React.FC = () => {
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
    // Handle form submission here,
    console.log(formData);
  };

  return (
    <div className="wrapper">
      <div className="form">
        <div className="form__inner">
          <img src={mainLogo} alt="logo" />
          <h2 className="form__title">Log in</h2>
          <form onSubmit={handleSubmit}>
            <div className="form__input">
              <label htmlFor="email" className="label">
                Email address
              </label>
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
            <div className="form__input">
              <label htmlFor="password" className="label">
                Password
              </label>
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
            <p className="forgot-password">Forgot your password?</p>
            <p className="terms">
              By signing up, you agree to campsite’s Terms of Service and
              Privacy policy
            </p>
            <Button type="submit" block>
            Log in
            </Button>
            <h6 className="or">OR</h6>
            <Button type="button" block outline>
              <img src={google} alt="google icon" />
              Google
            </Button>
            <Button type="button" block outline>
            <img src={facebook} alt="google icon" />

              Facebook
            </Button>
            <div className="login">
              Have an account? <Link to="/customer-signup">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={signupimage} alt="img" />
      </div>
    </div>
  );
};

export default Login;
