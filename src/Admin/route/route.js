import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "../Components/Dashboard/index";
import Layout from "../layout/DefaultLayout";

const route = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/dashboard" exact render={() => <Dashboard />} />

          {/* <Route path="/404" render={() => <PageNotFound />} />
          <Redirect to="/404" /> */}
        </Switch>
      </Layout>
    </Router>
  );
}

export default route;
