import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import PropTypes from "prop-types";
import "./Styles/Select.scss";
const Select = (props) => {
  const [selected, setSelected] = useState({
    value: null,
    label: null,
  });
  const [openDropdown, setOpenDropdown] = useState(false);

  const clonedChildren = [];
  props.children.forEach((child) => {
    clonedChildren.push(
      React.cloneElement(child, {
        onClick: () => {
          props.handleChange({ value: child.props.value, label: child.props.children });
          setSelected({ value: child.props.value, label: child.props.children });
          setOpenDropdown(false);
        },
        className: `select-option ${child.props.className}`,
      })
    );
  });
  let arrow = <ArrowDropDown className="arrow" />;
  if (props.styles === "drop-up") arrow = <ArrowDropUp className="arrow" />;
  return (
    <OutsideClickHandler onOutsideClick={setOpenDropdown.bind(null, false)} disabled={!openDropdown}>
      <div className={`select  ${props.styles? props.styles:''} ${openDropdown ? "show" : ""}`}>
        <div
          className="selected"
          onClick={() => {
            if (openDropdown) setOpenDropdown(false);
            else setOpenDropdown(true);
          }}
        >
          {props.icon}
          {selected.label ? <span>{selected.label}</span> : props.category} {arrow}
        </div>

        <div className="select-dropdown">
          <div className="category select-option">{props.category}</div>
          {clonedChildren}
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Select;

Select.propTypes = {
  category: PropTypes.string,
  styles: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  icon: PropTypes.element,
};
// props:

// styles: drop-up for dropdown appear on top
