import React from "react";

import styles from "./Collection.module.scss";

import CollectionItem from "../../components/collection-item/CollectionItem";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selectors";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className={styles.CollectionPage}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.items}>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
