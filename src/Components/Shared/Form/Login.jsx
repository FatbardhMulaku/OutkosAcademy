import React, { useState } from "react";
import "./Styles/Auth.scss";
import {Link} from 'react-router-dom'
import { ReactComponent as Google } from "../../../Assets/Svg/google.svg";
import { ReactComponent as Facebook } from "../../../Assets/Svg/facebook.svg";
import { ReactComponent as Linkedin } from "../../../Assets/Svg/linkedin.svg";

import { ReactComponent as Mail } from "../../../Assets/Svg/mail.svg";
import { ReactComponent as Lock } from "../../../Assets/Svg/lock.svg";
import Input from "./Input";
import { Checkbox } from "@material-ui/core";
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
      <h2 className="sub-title">Welcome Back</h2>
      <div className="sign-up__social-icons">
        <Google className="google-icon" />
        <Facebook className="facebook-icon" />
        <Linkedin className="linkedin-icon" />
      </div>
      <div className="or-option">
        <div className="line"></div>
        <p className="paragraph-2">or use your email</p>
        <div className="line"></div>
      </div>

      <form>
     
        <Input
          type="email"
          label="Email Address"
          value={input.email}
          icon={<Mail className="fill-style"/>}
          name="email"
          id="email"
          onChange={(e) => handleChange(input, setInput, e)}
        />
        <Input
          type="password"
          label="Password"
          value={input.password}
          icon={<Lock className="stroke-style"/>}
          name="password"
          id="password"
          onChange={(e) => handleChange(input, setInput, e)}
        />
        <div className="extra">
            <div className="checkbox">
            <Checkbox color="primary" name="remember" id="remember"/> Remember Me
            </div>
            <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <button className="styled-link sm bg-primary" type="submit">
         Login
        </button>
      </form>
    </div>
  );
};

export default Register;
