import React from "react";
import { useSearchParams } from "react-router-dom";
import mainLogo from "../assets/icons/mainLogo.png";
import signupimage from "../assets/images/login-img.png";
import Button from "../components/Buttons/Buttons";
import "../assets/css/auth.scss";
import { postRequest } from "../api/request";
import { toast } from "react-toastify";

const CheckEmail: React.FC = () => {
  const [searchParams] = useSearchParams();

  const resendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here,
    const response = await postRequest("/check-email", {
      email: searchParams.get("email"),
    });

    if (response) {
      toast("Email sent", { type: "success" });
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <div className="form__inner">
          <img className="form__logo" src={mainLogo} alt="logo" />
          <h2 className="form__title centered">Check your email</h2>
          <p className="terms centered">
            We sent a password reset link
          </p>
          <p className="terms centered"> amaboateng3@gmail.com</p>
          <form>
            <Button type="submit" block>
              Open email
            </Button>
            <div className="login">
              Didn’t receive the email?
              <a href="!#" onClick={resendEmail}>
                Click to resend
              </a>
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

export default CheckEmail;
