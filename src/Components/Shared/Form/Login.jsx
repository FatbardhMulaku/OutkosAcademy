import React, { useState } from "react";
import "./Styles/Auth.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Google } from "../../../Assets/Svg/google.svg";
import { ReactComponent as Facebook } from "../../../Assets/Svg/facebook.svg";
import { ReactComponent as Linkedin } from "../../../Assets/Svg/linkedin.svg";
import Fade from 'react-reveal/Fade';
import { ReactComponent as Mail } from "../../../Assets/Svg/mail.svg";
import { ReactComponent as Lock } from "../../../Assets/Svg/lock.svg";
import Input from "./Input";
import { Checkbox } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

const Register = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (input, setInput, event) => {
    event.persist();
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div className="register-form">
      <h2 className="sub-title">
        <FormattedMessage
          id="register.form.title1"
          defaultMessage="Welcome Back"
        />
      </h2>
      <div className="sign-up__social-icons flex">
        <Google className="google-icon" />
        <Facebook className="facebook-icon" />
        <Linkedin className="linkedin-icon" />
      </div>
      <div className="or-option">
        <div className="line"></div>
        <p className="paragraph-2">
          <FormattedMessage
            id="register.form.desc1"
            defaultMessage="or use your email"
          />
        </p>
        <div className="line"></div>
      </div>

      <form>
        <Input
          type="email"
          label="Email Address"
          value={input.email}
          icon={<Mail className="fill-style" />}
          name="email"
          id="email"
          onChange={(e) => handleChange(input, setInput, e)}
        />
        <Input
          type="password"
          label="Password"
          value={input.password}
          icon={<Lock className="stroke-style" />}
          name="password"
          id="password"
          onChange={(e) => handleChange(input, setInput, e)}
        />
        <div className="extra">
          <div className="checkbox">
            <Checkbox color="primary" name="remember" id="remember" />
            <FormattedMessage
              id="register.form.Remember"
              defaultMessage="Remember Me"
            />
          </div>
          <Link to="/forgot-password">
            <FormattedMessage
              id="register.form.Forgot"
              defaultMessage="Forgot Password?"
            />
          </Link>
        </div>
        <Fade bottom big>
        <button className="styled-link sm bg-primary" type="submit">
          <FormattedMessage id="register.form.Login" defaultMessage="Login" />
        </button>
        </Fade>
      </form>
    </div>
  );
};

export default Register;
