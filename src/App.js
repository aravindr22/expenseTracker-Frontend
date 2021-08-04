import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

import Landing from './components/landing/Landing';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import NavbarC from './components/landing/NavbarC';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavbarC />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
