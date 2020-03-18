import React from "react";
import styles from "./CartItem.module.scss";

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className={styles.cartItem}>
      <img className={styles.img} src={imageUrl} alt="item" />
      <div className={styles.itemDetails}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
};
