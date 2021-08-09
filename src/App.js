import React, {useEffect, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import {Provider} from 'react-redux';
import store from './store';

import Landing from './components/landing/Landing';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import NavbarC from './components/landing/NavbarC';
import Alert from './components/Alert/Alert';
import Dashboard from './components/dashboard/Dashboard';
import Transaction from './components/transaction/Transaction';
import Incomecategory from './components/categories/Incomecategory';
import Expensecategory from './components/categories/Expensecategory';
import AddTransaction from './components/transaction/AddTransaction';
import Account from './components/account/Account';

import {loadUSer} from './action/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = ({loadUSer}) => {

  useEffect(() => {
    loadUSer();
  }, [loadUSer]);

  return (
    <Fragment>
      <Router>
        <NavbarC />
        <Alert />
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/transaction" component={Transaction} />
          <Route exact path="/incomeCategory" component={Incomecategory} />
          <Route exact path="/expenseCategory" component={Expensecategory} />
          <Route exact path="/addtransaction" component={AddTransaction} />
          <Route exact path="/accountStatement" component={Account} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default connect(null, {loadUSer})(App);
