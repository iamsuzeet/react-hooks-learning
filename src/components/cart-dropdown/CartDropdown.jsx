import React from "react";
import { CartItem } from "./../cart-item/CartItem";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  CartDropdownContainer,
  CartItemsContainer,
  CheckoutBtn,
  EmptyContainer
} from "./cart-dropdown.styles";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "./../../redux/cart/cart-selectors";
import { toggleCartHidden } from "./../../redux/cart/cart-action";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyContainer>Your cart is empty</EmptyContainer>
        )}
      </CartItemsContainer>
      <CheckoutBtn
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CheckoutBtn>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
