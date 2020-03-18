import React from "react";
import styles from "./Directory.module.scss";
import MenuItem from "./../menu-item/MenuItem";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectoryCategories } from "./../../redux/directory/directory-selectors";

const Directory = ({ categories }) => {
  return (
    <div className={styles.directory__menu}>
      {categories.map(({ id, ...otherCategoryProps }) => (
        <MenuItem key={id} {...otherCategoryProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectDirectoryCategories
});

export default connect(mapStateToProps)(Directory);
