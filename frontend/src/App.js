// import Login from "./components/Login/Login";
import NavbarPage from "./components/layout/Navbar";
import LandingPage from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Registration from "./Components/Registration/Registration";
import React, { Fragment } from "react";

//below is redux

function App() {
  return (
    <Router>
      <Fragment>
        <NavbarPage />
        <Route exact path="/" component={LandingPage} />
        <section className="container">
          <Switch>
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Login" component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
