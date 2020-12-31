import React, { useState } from "react";
import './Styles/Contact.scss'
import Input from "./Input";
import TextArea from "./TextArea";
import { ReactComponent as ID } from "../../../Assets/Svg/id-card.svg";
import { ReactComponent as Mail } from "../../../Assets/Svg/mail.svg";
import { ReactComponent as Phone } from "../../../Assets/Svg/phone.svg";
import { ReactComponent as Chat } from "../../../Assets/Svg/chat.svg";
const Contact = () => {
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <div className="contact-form label-in-border">
      <form action="">
        <div className="form-row">
          <Input type="text" label="First Name" icon={<ID className="fill-style stroke-style" />} required id="fname" value={inputs.fname} onChange={handleChange} />
          <Input type="text" label="Last Name" icon={<ID  className="fill-style stroke-style"/>} required id="lname" value={inputs.lname} onChange={handleChange} />
        </div>
        <div className="form-row">
          <Input type="text" label="Email" icon={<Mail className="fill-style" />} required id="email" value={inputs.email} onChange={handleChange} />
          <Input type="tel" label="Phone Number" icon={<Phone className="stroke-style" />} id="phone" value={inputs.phone} onChange={handleChange} />
        </div>
        <TextArea rows="10" id="message" value={inputs.message} label="Your Message" icon={<Chat className="fill-style stroke-style" />} onChange={handleChange} />
        <button type="submit" className="styled-link bg-primary sm inverse">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
