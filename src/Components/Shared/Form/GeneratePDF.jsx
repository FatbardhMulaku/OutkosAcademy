import React, { useState, useRef } from "react";
import "./Styles/Contact.scss";
import Input from "./Input";
import Select from "./Select";
import { ReactComponent as ID } from "../../../Assets/Svg/id-card.svg";
import { ReactComponent as Mail } from "../../../Assets/Svg/mail2.svg";
import { ReactComponent as Phone } from "../../../Assets/Svg/phone.svg";
import { ReactComponent as CourseIcon } from "../../../Assets/Svg/online-course.svg";
import { ReactComponent as CVupload } from "../../../Assets/Svg/cvupload.svg";
import { selectCourse } from "./data";

const GeneratePDF = () => {
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [state, setState] = useState({
    value: "dsc",
    label: "Desceding",
  });

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  const inputFile = useRef(null);
  const onButtonClick2 = () => {
    inputFile.current.click();
  };
  return (
    <div className="contact-form label-in-border applicationF">
      <form action="">
        <div className="contact-form__row">
          <Input
            type="text"
            label="First Name"
            icon={<ID className="fill-style stroke-style" />}
            required
            id="fname"
            value={inputs.fname}
            onChange={handleChange}
          />
          <Input
            type="text"
            label="Last Name"
            icon={<ID className="fill-style stroke-style" />}
            required
            id="lname"
            value={inputs.lname}
            onChange={handleChange}
          />
        </div>
        <div className="contact-form__row">
		<Input
            type="text"
            label="Email"
            icon={<Mail className="fill-style" />}
            required
            id="email"
            value={inputs.email}
            onChange={handleChange}
          />

          <Input
            type="tel"
            label="Phone Number"
            icon={<Phone className="stroke-style" />}
            id="phone"
            value={inputs.phone}
            onChange={handleChange}
          />
        </div>
        <div className="contact-form__row">
          <Select
            icon={<CourseIcon />}
            category="Select Your Course..."
            handleChange={setState}
          >
            {selectCourse.map((o, i) => {
              return (
                <div className="smth" value={o.value} key={i}>
                  {o.label}
                </div>
              );
            })}
          </Select>
		  <input
            type="file"
            id="file"
            ref={inputFile}
            style={{ display: "none" }}
          />
          <button className="fileUploader" onClick={onButtonClick2}>
            {<CVupload className="fill-style stroke-style input-icon" />}Attach your Photo...<div className="uploadFileIcon BG"></div>
          </button>
        </div>

        <button type="submit" className="styled-link bg-primary sm inverse">
		GET TEST PDF
        </button>
		<p>With PHP you can generate PDF Documents from a web-filled form. *This is a test form, none of your information will be saved...</p>
      </form>
    </div>
  );
};


export default GeneratePDF;
