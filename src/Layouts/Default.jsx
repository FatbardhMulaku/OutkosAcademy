import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../Components/Shared/Footer/Footer";
import Header from "../Components/Shared/Header/Header";
import CourseList from "../Pages/CourseList";
import Home from "../Pages/Home";
import About from "../Pages/About";
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
import Arber from "../Pages/Teachers/Arber";
import Albion from "../Pages/Teachers/Albion";
import Fjolla from "../Pages/Teachers/Fjolla";
import BecomeTeacher from "../Pages/BecomeTeacher";
import Application from "../Pages/Application";
import Certification from "../Pages/Certification";
import Contact from "../Pages/Contact";
import Successes from "../Pages/Successes";
import Programs from "../Pages/Programs";
import Bleart from "../Pages/Teachers/Bleart";
import Albrim from "../Pages/Teachers/Albrim";
import Fatbardh from "../Pages/Teachers/Fatbardh";
import Rrezon from "../Pages/Teachers/Rrezon";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import SingleItem from "../Pages/SingleBookItem";

const Default = ({ current }) => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/teachers" component={Teachers} />
        <Route exact path="/courses" component={CourseList} />
        <Route exact path="/about-us" component={About} />
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
        <Route exact path="/teacher-profile/arber-maksuti" component={Arber} />
        <Route exact path="/teacher-profile/albion-metolli" component={Albion} />
        <Route exact path="/teacher-profile/fjolla-sinanaj" component={Fjolla} />
        <Route exact path="/job-opportunities" component={BecomeTeacher} />
        <Route exact path="/application" component={Application} />
        <Route exact path="/certifications" component={Certification} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/success-stories" component={Successes} />
        <Route exact path="/programs" component={Programs} />
        <Route exact path="/teacher-profile/bleart-kepuska" component={Bleart} />
        <Route exact path="/teacher-profile/albrim-paqarizi" component={Albrim} />
        <Route exact path="/teacher-profile/fatbardh-mulaku" component={Fatbardh} />
        <Route exact path="/teacher-profile/rrezon-orllati" component={Rrezon} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        {!current ? (
            <Redirect to="/shop" />
          ) : (
            <Route exact path="/book/:id" component={SingleItem} />
        )}
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(Default);
