import React from "react";
import Hero from "../../Shared/Banner/Hero";
import ApplicationForm from "../../Shared/Application/ApplicationForm";
import { Banner } from "./data";
/* import axios from "axios"; */

const index = () => {
  /* axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  axios.get("https://cors-anywhere.herokuapp.com/localhost:8000/login",{
    headers:{
      Authorization: "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvcmVnaXN0ZXIiLCJpYXQiOjE2MTA3MTEzNzksImV4cCI6MTYxMDcxNDk3OSwibmJmIjoxNjEwNzExMzc5LCJqdGkiOiJYeUVaTWprSUxUSllLOTJFIiwic3ViIjoxLCJwcnYiOiI0Y2ZjNWNlMzhjNzE5YWJjM2NkODhmODY4NjExNTA5NTI2YzAxZDNmIn0.XSRT2JDKHy4wRBE7Pi8OmdtKiAFCVmcHFO-PiD_9nio",
      "Access-Control-Allow-Origin" : "*",
      Allow: "GET",
    }
  }).then(
    res => {console.log(res)}
  ) */
  return (
    <>
      <Hero
        img="ApplicationBG White-Hero"
        style={`sm`}
        data={Banner}
      />
      <div className="minus-top mb-16">
        <ApplicationForm />
      </div>



    </>
  );
};

export default index;
