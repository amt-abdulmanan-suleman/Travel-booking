import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mainLogo from "../assets/icons/mainLogo.png";
import signupimage from "../assets/images/login-img.png";
import facebook from "../assets/icons/facebook-icon.png";
import google from "../assets/icons/google-logo.png";
import Button from "../components/Buttons/Buttons";
import "../assets/css/auth.scss";
import { postRequest } from "../api/request";

interface FormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });

  const navigate = useNavigate();

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
    postRequest("/customer-auth/login", formData).then((response: { accessToken: any; formData: any; }) => {
      const { accessToken, formData } = response;
      localStorage.setItem("accessToken", accessToken);
      navigate("/");
    });
  };

  return (
    <div className="wrapper">
      <div className="form">
        <div className="form__inner">
          <img src={mainLogo} alt="logo" />
          <h2 className="form__title">Forgot Password</h2>
          <p className="terms">
            No worries, we will send you reset instructions
          </p>
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

            <Button type="submit" block>
              Send link
            </Button>
          </form>
        </div>
      </div>
      <div className="image-wrapper">
        <img src={signupimage} alt="img" />
      </div>
    </div>
  );
};

export default ForgotPassword;
