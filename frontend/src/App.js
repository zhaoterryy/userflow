import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarPage from './components/layout/Navbar';
import LandingPage from './components/layout/Landing';
import Routes from './components/routing/Routes';
import { LOGOUT } from './actions/types';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

//below is redux



const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
    <Router>
      <Fragment>
        <NavbarPage />
        <Route exact path="/" component={LandingPage} />
        <section className="container">
          <Switch>
          <Route component={Routes} />
          </Switch>
        </section>
      </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
