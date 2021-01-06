import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./Pages/User/User";
import Register from "./Pages/Profile/Profile";
import Dashboard from "./Pages/Dashboard/Dashboard";
const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route path="/users">
        <Login />
      </Route>
      <Route path="/profile">
        <Register />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route path="*">
      </Route>
    </Switch>
  </Router>
);
export default Routes;