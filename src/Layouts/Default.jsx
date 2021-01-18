import React from "react";
import { Route, Switch } from "react-router-dom";
import CourseList from "../Pages/CourseList";
import Home from "../Pages/Home";
import Teachers from "../Pages/Teachers";
import ReactJS from "../Pages/Courses/ReactJS"
import Php from "../Pages/Courses/Php";
import Flutter from "../Pages/Courses/Flutter";
import Java from "../Pages/Courses/Java";
import Angular from "../Pages/Courses/Angular";
import VueJs from "../Pages/Courses/VueJs";
import Python from "../Pages/Courses/Python";
import Wordpress from "../Pages/Courses/Wordpress";
import GoLang from "../Pages/Courses/GoLang";
import GraphicDesign from "../Pages/Courses/GraphicDesign";
import Elvis from "../Pages/Teachers/Elvis";
import Liberta from "../Pages/Teachers/Liberta";
import Elmedine from "../Pages/Teachers/Elmedine";

const Default = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teachers" component={Teachers} />
        <Route exact path="/courses" component={CourseList} />
        <Route exact path="/Courses/react" component={ReactJS} />
        <Route exact path="/Courses/php" component={Php}/>
        <Route exact path="/Courses/flutter" component={Flutter} />
        <Route exact path="/Courses/java" component={Java} />
        <Route exact path="/Courses/angular" component={Angular} />
        <Route exact path="/Courses/vue" component={VueJs} />
        <Route exact path="/Courses/python" component={Python} />
        <Route exact path="/Courses/wordpress" component={Wordpress} />
        <Route exact path="/Courses/GoLang" component={GoLang} />
        <Route exact path="/Courses/graphic-design" component={GraphicDesign} />
        <Route exact path="/teacher-profile/elvis-sylejmani" component={Elvis} />
        <Route exact path="/teacher-profile/liberta-shtimanji" component={Liberta} />
        <Route exact path="/teacher-profile/elmedine-ramushi" component={Elmedine} />
      </Switch>
    </div>
  );
};

export default Default;
