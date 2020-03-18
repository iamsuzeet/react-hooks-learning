import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      className={`${styles.MenuItem} ${size ? styles.large : ""}`}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles.background__image}
      />
      <div className={styles.content}>
        <div className={styles.title}>{title.toUpperCase()}</div>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
