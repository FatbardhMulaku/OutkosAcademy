import React, { useState } from "react";
import { QuestionList } from "../data";

function Questions() {
  const [selectedOption, setSelectedOption] = useState("Questions1");

  const onValueChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="Stepper__Questions">
      <h3>How much time can you spend weekly in your Course?</h3>
      <p>
        If you can't think of a name now, no worries, you can change it later...
      </p>
      <div className="Stepper__Questions--list">
        {QuestionList.map((item, index) => (
          <label key={index}>
            <input
              type="radio"
              value={`Questions${index + 1}`}
              name="Questions"
              checked={selectedOption === `Questions${index + 1}`}
              onChange={onValueChange}
            />
            {item.item}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Questions;
