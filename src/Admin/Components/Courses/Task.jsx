import React, { useState } from "react";
import TextArea from "../../../Components/Shared/Form/TextArea";
import Input from "../../../Components/Shared/Form/Input";
import { ReactComponent as ID } from "../../../Assets/Svg/id-card.svg";
import { ReactComponent as Chat } from "../../../Assets/Svg/chat.svg";
import Button from "../Shared/UI/Button";

const Task = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });
  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };
  return (
    <div className="Task">
      <div className="w-full sm:w-7/12 pr-4">
        <p>Post a Task</p>
        <form>
          <Input
            type="text"
            /*  label="Title" */
            required
            id="title"
            value={inputs.title}
            onChange={handleChange}
            placeholder="Title"
            icon={<ID className="fill-style stroke-style" />}
          />
          <TextArea
            rows="10"
            id="description"
            value={inputs.description}
            /* label="Description" */
            onChange={handleChange}
            placeholder="Description"
            icon={<Chat className="fill-style stroke-style" />}
          />
        </form>
      </div>
      <div className="w-full sm:w-5/12 flex flex-col">
        <div>
          <div className="flex justify-between">
            <div className="flex">
              <div className="Task__imgUpload BG" />
              <p>UPLOAD</p>
            </div>
            <div className="flex">
              <div className="Task__imgAddLink BG" />
              <p>ADD LINK</p>
            </div>
          </div>
          <div className="or-option">
            <div className="line"></div>
            <p className="paragraph-2"> or </p>
            <div className="line"></div>
          </div>
          <div>
            <div className="Task__imgDrag BG" />
            <h5>Drag and Drop a file...</h5>
          </div>
        </div>
        <div className="Task__buttons">
          <Button
            to="#"
            name="Post"
            icon={`Task__buttons__icon1 BG`}
            style={`Task__buttons`}
          />
          <Button
            to="#"
            name="Schedule"
            icon={`Task__buttons__icon2 BG`}
            style={`Task__buttons`}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
