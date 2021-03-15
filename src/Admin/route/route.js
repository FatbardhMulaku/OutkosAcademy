import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Dashboard from "../Components/Dashboard/index";
import Layout from "../layout/DefaultLayout";
import Courses from "../pages/Courses";
import CoursesDashboard from "../pages/CoursesDashboard";
import Students from "../pages/Students";

const route = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/dashboard" exact render={() => <Dashboard />} />
          <Route path="/dashboard/course" exact render={() => <Courses />} />
          <Route path="/dashboard/course-dashboard" exact render={() => <CoursesDashboard />} />
          <Route path="/dashboard/students" exact render={() => <Students />} />

          {/* <Route path="/404" render={() => <PageNotFound />} />
          <Redirect to="/404" /> */}
        </Switch>
      </Layout>
    </Router>
  );
}

export default route;
