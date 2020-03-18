import React, { useState } from 'react';
import styles from './signin.module.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user-action';
import { connect } from 'react-redux';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className={styles.signIn}>
      <h2 className={styles.title}>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          type="text"
          name="email"
          value={email}
          handleChange={handleChange}
          required
        />

        <FormInput
          label="password"
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div className={styles.buttons}>
          <CustomButton type="submit">sign in</CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            sign in with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
