import React from "react";
import Contact from "../../Shared/Contact/Contact";
import Header from "../../../Components/Shared/Header/Header";

const index = () => {
  return (
    <>
      <Header />
      <div className="pt-48 pb-20">
        <Contact />
      </div>
    </>
  );
};

export default index;
