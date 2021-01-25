import { Route, Switch } from "react-router-dom";
import "./Styles/App.css";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import Default from "./Layouts/Default";
import NonAuth from "./Layouts/NonAuth";
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Default} />
        <Route exact path="/teachers" component={Default} />
        <Route exact path="/teacher-profile/:id" component={Default} />
        <Route exact path="/courses" component={Default} />
        <Route exact path="/courses/:id" component={Default} />
        <Route exact path="/signup" component={NonAuth} />
        <Route exact path="/login" component={NonAuth} />
        <Route exact path="/about-us" component={Default} />
        <Route exact path="/job-opportunities" component={Default} />
        <Route exact path="/application" component={Default} />
        <Route exact path="/certifications" component={Default} />
        <Route exact path="/contact-us" component={Default} />
        <Route exact path="/success-stories" component={Default} />
        <Route exact path="/programs" component={Default} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
