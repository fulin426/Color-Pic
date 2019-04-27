import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import { loginUser } from "../actions/authActions";
import { openModal } from "../actions/authActions";
import { closeModal } from "../actions/authActions";
import { clearErrors } from "../actions/authActions";
import { Button, Modal, Input, Menu, Dimmer, Loader } from "semantic-ui-react";

const Isemail = require("isemail");
//possibly split into two components login and sign up
class LoginModal extends Component {
  state = {
    activeItem: "Log In",
    header: "Log In to Color Pic",
    button: "Log In",
    verifyPassword: "",
    email: "",
    userNamePlaceHolder: "",
    passWordPlaceHolder: "",
    description: "",
    errorStatusPassword: false,
    errorMsgPassword: "",
    errorStatusEmail: false,
    errorMsgEmail: ""
  };

  showLogin = size => () => {
    this.setState({
      activeItem: "Log In",
      header: "Log In to Color Pic",
      button: "Log In",
      userNamePlaceHolder: "Demo Email: demo@demo.com",
      passWordPlaceHolder: "Demo Password: demo",
      description: ""
    });
    this.props.openModal();
    this.props.clearErrors();
  };

  showSignup = size => () => {
    this.setState({
      activeItem: "Sign Up",
      header: "Join Color Pic",
      button: "Sign Up",
      userNamePlaceHolder: "Register new user",
      passWordPlaceHolder: "Password",
      description: "Register to access more features"
    });
    this.props.openModal();
    this.props.clearErrors();
  };

  close = () => {
    this.resetDefaults();
    // clear all inputs when modal closes
    this.setState({
      username: "",
      password: "",
      verifyPassword: "",
      email: ""
    });
    this.props.closeModal();
    this.props.clearErrors();
  };

  handleLogInClick = (e, { name }) => {
    this.setState({
      activeItem: name,
      button: name,
      header: "Log In to Color Pic",
      username: "",
      password: "",
      verifyPassword: "",
      email: "",
      userNamePlaceHolder: "Demo Email: demo@demo.com",
      passWordPlaceHolder: "Demo Password: demo",
      description: ""
    });
    this.resetDefaults();
    this.props.clearErrors();
  };

  handleSignUpClick = (e, { name }) => {
    this.setState({
      activeItem: name,
      button: name,
      header: "Join Color Pic Today",
      username: "",
      password: "",
      verifyPassword: "",
      email: "",
      userNamePlaceHolder: "Register New User",
      passWordPlaceHolder: "Password",
      description: "Register to access more features"
    });
    this.resetDefaults();
    this.props.clearErrors();
  };

  // clear all error messages
  resetDefaults() {
    this.setState({
      errorStatusPassword: false,
      errorStatusEmail: false,
      errorMsgEmail: "",
      errorMsgPassword: ""
    });
  }

  handleInput(event, key) {
    this.setState({ [key]: event.target.value });
    this.resetDefaults();
  }

  buttonSubmit(event) {
    event.preventDefault();
    // If all fields are empty
    if (
      this.state.email === "" &&
      this.state.password === "" &&
      this.state.verifyPassword === ""
    ) {
      this.setState({
        errorStatusEmail: true,
        errorStatusPassword: true,
        errorMsgEmail: "Email cannot be empty",
        errorMsgPassword: "Passwords cannot be empty"
      });
      return;
    }

    // If email is empty
    if (this.state.email === "") {
      this.setState({
        errorMsgEmail: "Email cannot be empty",
        errorStatusEmail: true
      });
      return;
    }

    // If either password is empty on Sign Up
    if (this.state.activeItem === "Sign Up" && this.state.password === "") {
      this.setState({
        errorMsgPassword: "Password cannot be empty",
        errorStatusPassword: true
      });
      return;
    }

    // If Login Password is empty
    if (this.state.activeItem === "Log In" && this.state.password === "") {
      this.setState({
        errorMsgPassword: "Please enter password",
        errorStatusPassword: true
      });
      return;
    }

    // If passwords do not match show error message
    if (
      this.state.activeItem === "Sign Up" &&
      this.state.password !== this.state.verifyPassword
    ) {
      this.setState({
        errorMsgPassword: "Passwords do not match",
        errorStatusPassword: true
      });
      return;
    }

    // Validate Email
    if (
      this.state.activeItem === "Sign Up" &&
      Isemail.validate(this.state.email) === false
    ) {
      this.setState({
        errorStatusEmail: "error",
        errorMsgEmail: "Not a valid email"
      });
      return;
    }

    // If Sign Up and No errors statuses
    if (this.state.activeItem === "Sign Up") {
      this.props.registerUser(this.state.email, this.state.password);
    }

    // If Log In and No errors statuses
    if (this.state.activeItem === "Log In") {
      this.props.loginUser(this.state.email, this.state.password);
    }
  }

  // Only verifyPassword for Sign Up
  verifyPasswordRender() {
    if (this.state.activeItem === "Sign Up") {
      return (
        <div>
          <label className="login-label">Verify Password</label>
          <Input
            type="password"
            className="login-input"
            placeholder="Password"
            autoComplete="on"
            value={this.state.verifyPassword}
            onChange={event => this.handleInput(event, "verifyPassword")}
            error={this.state.errorStatusPassword}
          />
        </div>
      );
    }
  }

  buttonTwoRender() {
    if (this.props.buttonTwo !== undefined) {
      return (
        <Button
          color="blue"
          onClick={this.showSignup()}
          style={{ marginLeft: "0.5em", marginRight: "1rem" }}
        >
          {this.props.buttonTwo}
        </Button>
      );
    }
  }

  renderLoader() {
    if (this.props.isLoading === true) {
      return (
        <Dimmer active inverted>
          <Loader size="big" inverted />
        </Dimmer>
      );
    }
  }

  render() {
    const {
      activeItem,
      button,
      header,
      email,
      password,
      userNamePlaceHolder,
      passWordPlaceHolder,
      errorStatusPassword,
      errorStatusEmail,
      description,
      errorMsgEmail
    } = this.state;

    return (
      <div>
        <Button color="blue" onClick={this.showLogin()}>
          {this.props.buttonOne}
        </Button>
        {this.buttonTwoRender()}
        <Modal
          size="tiny"
          open={this.props.modal}
          onClose={this.close}
          closeIcon
        >
          <div className="login-header">
            <h2>{header}</h2>
          </div>
          <Menu className="menu-overide" pointing secondary>
            <Menu.Item
              name="Log In"
              active={activeItem === "Log In"}
              onClick={this.handleLogInClick}
            />
            <Menu.Item
              name="Sign Up"
              active={activeItem === "Sign Up"}
              onClick={this.handleSignUpClick}
            />
          </Menu>
          <Modal.Content>
            <div className="login-description">
              <h5>{description}</h5>
              <h5 style={{ color: "red" }}>{this.props.errorMessage}</h5>
            </div>
            <form onSubmit={event => this.buttonSubmit(event)}>
              <label className="login-label">Email</label>
              <Input
                className="login-input"
                placeholder={userNamePlaceHolder}
                value={email}
                autoComplete="on"
                onChange={event => this.handleInput(event, "email")}
                error={errorStatusEmail}
              />
              <p style={{ color: "red" }}>{errorMsgEmail}</p>
              <label className="login-label">Password</label>
              <Input
                type="password"
                className="login-input"
                placeholder={passWordPlaceHolder}
                autoComplete="on"
                value={password}
                onChange={event => this.handleInput(event, "password")}
                error={errorStatusPassword}
              />
              <p style={{ color: "red" }}>{this.state.errorMsgPassword}</p>
              {this.verifyPasswordRender()}
              <Button
                className="login-btn"
                color="blue"
                onClick={event => this.buttonSubmit(event)}
              >
                {button}
              </Button>
            </form>
            {this.renderLoader()}
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.errors.message,
    modal: state.auth.modal,
    isLoading: state.auth.isLoading
  };
};

export default connect(
  mapStateToProps,
  {
    registerUser,
    loginUser,
    openModal,
    closeModal,
    clearErrors
  }
)(LoginModal);
