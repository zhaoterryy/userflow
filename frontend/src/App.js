// import Login from "./components/Login/Login";
import NavbarPage from "./components/layout/Navbar";
import LandingPage from "./components/layout/Landing";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Registration from "./Components/Registration/Registration";
import React, { Fragment } from "react";

function App() {
  return (
    <Router>
      <Fragment>
        <NavbarPage />
        <Route exact path="/" component={LandingPage} />
      </Fragment>
    </Router>
  );
}

export default App;
