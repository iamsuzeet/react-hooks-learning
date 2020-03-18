import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import { connect } from 'react-redux';

import Header from './components/header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import Shop from './pages/shop/Shop';
import SignInUp from './pages/sign-in-up/SignInUp';
import Checkout from './pages/checkout/Checkout';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selectors';
import { checkUserSession } from './redux/user/user-action';

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path='/checkout' component={Checkout} />
        <Route
          path='/connect'
          render={() => (currentUser ? <Redirect to='/' /> : <SignInUp />)}
        />
        <Route path='/shop' component={Shop} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
