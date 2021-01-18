import { Route, Switch } from "react-router-dom";
import "./Styles/App.css";
import Footer from "./Components/Shared/Footer/Footer";
import Default from "./Layouts/Default";
import NonAuth from "./Layouts/NonAuth";
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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
