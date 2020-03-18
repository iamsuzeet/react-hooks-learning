import React from "react";
import { connect } from "react-redux";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/user/user-selectors";
import { selectCurrentUser } from "./../../redux/user/user-selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "./../cart-icon/CartIcon";
import CartDropdown from "./../cart-dropdown/CartDropdown";
import { signOutStart } from "../../redux/user/user-action";

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>

        <OptionLink to="/contact">CONTACT</OptionLink>

        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/connect">SIGN IN</OptionLink>
        )}

        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
