import React from "react";
import { MessagesList } from "./data";

const Message = () => {
  return (
    <div className="CoursesDashboard-Message">
      <div>
        <p>Message</p>
        <div className="CoursesDashboard-Message__img BG" />
      </div>
      <div className="CoursesDashboard-Message__box">
		  {MessagesList.map((item, index) => (
			  <div key={index}>
				<div className={`CoursesDashboard-Message__box-img${index+1} BG `}/>
				<p>{item.message}</p>
			  </div>
		  ))}
	  </div>
    </div>
  );
};

export default Message;
