import React from "react";
import SignIn from "./../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import styles from "./signInUp.module.scss";

const SignInUp = () => {
  return (
    <div className={styles.signInUp}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInUp;
