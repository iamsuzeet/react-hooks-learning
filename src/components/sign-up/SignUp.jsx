import React, { useState } from 'react';
import FormInput from './../form-input/FormInput';
import CustomButton from './../custom-button/CustomButton';

import styles from './signup.module.scss';
import { signUpStart } from './../../redux/user/user-action';
import { connect } from 'react-redux';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className={styles.signUp}>
      <h2 className={styles.title}>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className={styles.signUpForm} onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">Sign up </CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
