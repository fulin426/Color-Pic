import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/authActions";
import { clearColors } from "../actions/MyPaletteAPI";
import "./css/logout.css";

class Logout extends Component {
  componentDidMount() {
    // If token expired log out user
    if (this.props.email === undefined) {
      this.props.logoutUser();
    }
  }

  logout(event) {
    this.props.logoutUser();
    this.props.clearColors();
  }

  render() {
    return (
      <div>
        <p className="username">Welcome! {this.props.email}</p>
        <Link to="/">
          <Button
            color="blue"
            className="logout-btn"
            onClick={event => this.logout(event)}
          >
            Log Out
          </Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.user.email
  };
};

export default connect(
  mapStateToProps,
  { logoutUser, clearColors }
)(Logout);
