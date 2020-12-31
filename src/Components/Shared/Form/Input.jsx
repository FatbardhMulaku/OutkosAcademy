import React, { useRef } from "react";
import "./Styles/Input.scss";
import { ReactComponent as Eye } from "../../../Assets/Svg/eye.svg";
const Input = ({ label, styles, icon: Icon, ...props }) => {
  let ref = useRef();
  let iconCloned;
  if (Icon) iconCloned = React.cloneElement(Icon, { className: `${Icon.props.className} input-icon` });

  let handlePasswordVisible = () => {
    if (ref.current.type === "password") ref.current.type = "text";
    else ref.current.type = "password";
  };
  return (
    <div className={`form-item ${styles}`}>
      <label htmlFor={props.id}>{label}</label>
      <div className="input-group">
        {props.type === "password" && <Eye className="eye" onClick={handlePasswordVisible} />}
        <input {...props} ref={(el) => (ref.current = el)} />
        {iconCloned}
      </div>
    </div>
  );
};

export default Input;
