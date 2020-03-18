import React from "react";
import styles from "./CollectionOverview.module.scss";
import { connect } from "react-redux";
import PreviewCollection from "./../preview-collection/PreviewCollection";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "./../../redux/shop/shop-selectors";

const CollectionOverview = ({ collections }) => {
  return (
    <div className={styles.CollectionOverview}>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
