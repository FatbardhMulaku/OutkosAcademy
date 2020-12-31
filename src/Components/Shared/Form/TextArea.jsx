import React from "react";
import "./Styles/Input.scss";
const TextArea = ({ label, icon: Icon, ...props }) => {
  let iconCloned = React.cloneElement(Icon, { className: `${Icon.props.className} input-icon` });

  return (
    <div className="form-item text-area">
      <label htmlFor={props.id}>{label}</label>
      <div className="input-group">
        <textarea {...props} />
        {iconCloned}
      </div>
    </div>
  );
};

export default TextArea;
