import React, { useState } from "react";
import ChatLine from "../Shared/Dashboard/ChatLine";
import { ChatData } from "./data";
import Button from "../Shared/UI/Button";
import Input from "../../../Components/Shared/Form/Input";
import { ReactComponent as Message } from "../../../Assets/Admin/dashboard/msg.svg";

// chatline css
const DashChat = () => {
  const [input, setInput] = useState({
    message: "",
  });

  const handleChange = (input, setInput, event) => {
    event.persist();
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  return (
    <div className="DashChat">
      {ChatData.map((item, index) => (
        <ChatLine key={index} data={item} img={`img${index + 1}`} />
      ))}
      <div>
        <form>
          <Input
            type="text"
            value={input.message}
            icon={<Message className="stroke-style" />}
            name="message"
            id="message"
            onChange={(e) => handleChange(input, setInput, e)}
            placeholder="Enter your message here..."
          />
        </form>
        <Button
          to="#"
          name="Send"
          icon="DashChat__icon"
          style="DashChat__btn"
        />
      </div>
    </div>
  );
};

export default DashChat;
