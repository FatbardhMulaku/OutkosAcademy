import React from "react";
import "./FilterButtons.scss";
const FilterButtons = (props) => {
  return (
    <div className="filter-buttons">
      <div className="buttons-area">
        {props.items.map((b) => {
          return (
            <button key={b.type} className={`filter-button ${props.selected === b.type ? "selected" : ""}`} onClick={b.clickHandler}>
              {b.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterButtons;
