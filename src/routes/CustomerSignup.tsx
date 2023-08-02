import React, { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "../assets/icons/mainLogo.png";
import signupimage from "../assets/images/login-img.png";
import visibility from "../assets/icons/visibility-icon-13.jpg";
import visibilityOff from "../assets/icons/visibility_off.svg";
import facebook from "../assets/icons/facebook-icon.png";
import google from "../assets/icons/google-logo.png";
import Button from "../components/Buttons/Buttons";
import "../assets/css/auth.scss";
import { postRequest } from "../api/request";

interface FormData {
  fullname: string;
  email: string;
  password: string;
}

const CustomerSignup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullname: "",
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
    postRequest("/customer-auth/signup", formData).then((response) => {
      alert(response.message);
    });
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="wrapper">
      <div className="form">
        <div className="form__inner">
          <img src={mainLogo} alt="logo" />
          <h2 className="form__title">Sign up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form__input">
              <label htmlFor="fullname" className="label">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Type full name"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>
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
              <div className="form__input__box">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Type password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="form__input__box__password"
                />
                {showPassword ? (
                  <img
                    src={visibility}
                    alt="show password"
                    onClick={handleTogglePassword}
                    className="toggle-icon"
                  />
                ) : (
                  <img
                    src={visibilityOff}
                    alt="hide password"
                    onClick={handleTogglePassword}
                    className="toggle-icon"
                  />
                )}
              </div>
            </div>
            <p className="terms">
              By signing up, you agree to campsite’s Terms of Service and
              Privacy policy
            </p>
            <Button type="submit" block>
              Sign up
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
              Have an account? <Link to="/Login">Login</Link>
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

export default CustomerSignup;
