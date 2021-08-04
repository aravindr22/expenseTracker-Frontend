import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

import Landing from './components/landing/Landing';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import NavbarC from './components/landing/NavbarC';
import Alert from './components/Alert/Alert';
import Dashboard from './components/dashboard/Dashboard';
import Transaction from './components/transaction/Transaction';

import Privateroute from './components/routing/Privateroute';
import {loadUSer} from './action/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    loadUSer();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <NavbarC />
        <Alert />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Privateroute exact path="/dashboard" component={Dashboard} />
          <Privateroute exact path="/transaction" component={Transaction} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
