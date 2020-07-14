import React, { Component } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import * as actions from "../../redux/actions/signupActions";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  state = {
    email: "",
    password: "",
    passwordConfirm: "",
    error: "",
  };
  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  changePasswordConfirm = (e) => {
    this.setState({ passwordConfirm: e.target.value });
  };
  signup = () => {
    if (this.state.password === this.state.passwordConfirm) {
      this.props.signupUser(this.state.email, this.state.password);
    } else {
      this.setState({ error: "Нууц үгнүүд хоорондоо таарахгүй байна!" });
    }
  };
  render() {
    return (
      <div className={css.Signup}>
        {this.props.userId && <Redirect to="/" />}
        <h1>Бүртгэлийн хуудас</h1>
        <div>Та өөрийн мэдээллээ оруулна уу!...</div>
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="И-мэйл хаяг"
        />
        <input
          onChange={this.changePassword}
          type="password"
          placeholder="Нууц үгээ оруулна уу"
        />
        <input
          onChange={this.changePasswordConfirm}
          type="password"
          placeholder="Нууц үгээ давтан оруулна уу"
        />
        {this.state.error && (
          <div style={{ color: "red" }}>{this.state.error}</div>
        )}
        {this.props.firebaseError && (
          <div style={{ color: "red" }}>{this.props.firebaseError}</div>
        )}
        {this.props.saving && <Spinner />}
        <Button text="БҮРТГҮҮЛЭХ" btnType="Success" clicked={this.signup} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    saving: state.signupReducer.saving,
    firebaseError: state.signupReducer.firebaseError,
    userId: state.signupReducer.userId,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
