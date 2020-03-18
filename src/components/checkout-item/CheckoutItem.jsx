import React from "react";
import styles from "./CheckoutItem.module.scss";

import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "./../../redux/cart/cart-action";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className={styles.CheckoutItem}>
      <div className={styles.ImageContainer}>
        <img src={imageUrl} alt="item" />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.quantity}>
        <div onClick={() => removeItem(cartItem)} className={styles.arrow}>
          &#10094;
        </div>
        <span className={styles.value}>{quantity}</span>
        <div onClick={() => addItem(cartItem)} className={styles.arrow}>
          &#10095;
        </div>
      </div>
      <div className={styles.price}>{price}</div>
      <div onClick={() => clearItem(cartItem)} className={styles.RemoveButton}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
