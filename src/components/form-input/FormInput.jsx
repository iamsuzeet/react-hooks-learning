import React from "react";
import styles from "./forminput.module.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className={styles.group}>
      <input
        className={styles.formInput}
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${otherProps.value.length ? styles.shrink : ""} ${
            styles.formInput__Label
          }`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
