import React from 'react';
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

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   } else {
    //     setCurrentUser(userAuth);
    //   }
    //   // addCollectionAndDocuments(
    //   //   "collections",
    //   //   collectionsArrays.map(({ title, item }) => ({ title, item }))
    //   // );
    // });
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route
            path="/connect"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInUp />
            }
          />
          <Route path="/shop" component={Shop} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
