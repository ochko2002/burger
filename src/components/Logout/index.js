import React from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/signupActions";
import { Redirect } from "react-router-dom";
import { logout } from "../../redux/actions/signupActions";
class Logout extends React.Component {
  componentDidMount = () => {
    this.props.logout();
  };
  render() {
    return <Redirect to="/"></Redirect>;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};
export default connect(null, mapDispatchToProps)(Logout);
