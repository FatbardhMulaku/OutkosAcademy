import React from "react";
import { Route, Switch } from "react-router-dom";
import Course from "../Pages/Course";
import CourseList from "../Pages/CourseList";
import Home from "../Pages/Home";
import ReactJs from "../Pages/ReactJs";
import TeacherProfile from "../Pages/TeacherProfile";
import Teachers from "../Pages/Teachers";

const Default = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teachers" component={Teachers} />
        <Route exact path="/teacher-profile/:id" component={TeacherProfile} />
        <Route exact path="/course/reactjs" component={ReactJs} />
        <Route exact path="/course/:id" component={Course} />
        <Route exact path="/courses" component={CourseList} />
      </Switch>
    </div>
  );
};

export default Default;
