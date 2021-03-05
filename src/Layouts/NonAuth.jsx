import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Header from "../Components/Shared/Header/Header";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const NonAuth = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
      </Switch>
      <Footer />
    </div>
  );
};

export default NonAuth;
