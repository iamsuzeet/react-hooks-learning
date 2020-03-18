import React from "react";
import styles from "./previewcollection.module.scss";
import CollectionItem from "./../collection-item/CollectionItem";
import { withRouter } from "react-router-dom";

const PreviewCollection = ({ title, items, routeName, history, match }) => {
  return (
    <div className={styles.CollectionPreview}>
      <h1
        onClick={() => history.push(`${match.url}${routeName}`)}
        className={styles.title}
      >
        {title.toUpperCase()}
      </h1>
      <div className={styles.preview}>
        {items
          .filter((item, id) => id < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(PreviewCollection);
