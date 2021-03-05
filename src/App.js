import { Route, Switch } from "react-router-dom";
import "./Styles/App.css";
import Default from "./Layouts/Default";
import NonAuth from "./Layouts/NonAuth";
import AdminRoute from "./Admin/route/route";

function App() {
  return (
    <div className="App">
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
        <Route exact path="/shop" component={Default} />
        <Route exact path="/cart" component={Default} />
        <Route exact path="/checkout" component={Default} />
        <Route exact path="/book/:id" component={Default} />

        <AdminRoute />
      </Switch>
    </div>
  );
}

export default App;
