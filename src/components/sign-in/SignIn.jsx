import React, { Component } from "react";
import styles from "./signin.module.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user-action";
import { connect } from "react-redux";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className={styles.signIn}>
        <h2 className={styles.title}>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="email"
            type="text"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />

          <FormInput
            label="password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
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
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
