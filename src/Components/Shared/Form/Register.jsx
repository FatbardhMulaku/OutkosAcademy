import React, { useState } from "react";
import "./Styles/Auth.scss";
import { ReactComponent as Google } from "../../../Assets/Svg/google.svg";
import { ReactComponent as Facebook } from "../../../Assets/Svg/facebook.svg";
import { ReactComponent as Linkedin } from "../../../Assets/Svg/linkedin.svg";
import { ReactComponent as User } from "../../../Assets/Svg/user.svg";
import { ReactComponent as Mail } from "../../../Assets/Svg/mail.svg";
import { ReactComponent as Lock } from "../../../Assets/Svg/lock.svg";
import Input from "./Input";
import { FormattedMessage } from "react-intl";
import Fade from "react-reveal/Fade";
import Zoom from 'react-reveal/Zoom';

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (input, setInput, event) => {
    event.persist();
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div className="register-form">
      <Fade top big>
        <h2 className="sub-title">
          <FormattedMessage
            id="register.form.title.1"
            defaultMessage="Register"
          />
        </h2>
      </Fade>
      <Fade top big cascade>
        <div className="sign-up__social-icons flex">
          <Google className="google-icon" />
          <Facebook className="facebook-icon" />
          <Linkedin className="linkedin-icon" />
        </div>
      </Fade>
      <div className="or-option">
        <div className="line"></div>
        <p className="paragraph-2">
          <FormattedMessage
            id="register.form.subtitle.1"
            defaultMessage="or use your email"
          />
        </p>
        <div className="line"></div>
      </div>
      <Zoom> 
      <form>
        <Input
          type="text"
          label="Full Name"
          value={input.name}
          icon={<User className="stroke-style" />}
          name="name"
          id="name"
          onChange={(e) => handleChange(input, setInput, e)}
        />
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
        <Input
          type="password"
          label="Confirm Password"
          value={input.confirm_password}
          icon={<Lock className="stroke-style" />}
          name="confirm_password"
          id="confirm_password"
          onChange={(e) => handleChange(input, setInput, e)}
        />
        <Fade bottom big>
        <button className="styled-link sm bg-primary" type="submit">
          <FormattedMessage
            id="register.form.btn.1"
            defaultMessage="Create Account"
          />
        </button>
        </Fade>
      </form>
     </Zoom>
    </div>
  );
};

export default Register;
