import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Input, Menu } from 'semantic-ui-react';
import { registerUser } from '../actions/authActions';
const Isemail = require('isemail');

class LoginModal extends Component {
  state = {
    open: false,
    activeItem: 'Log In',
    header: 'Log In to Color Pic',
    button: 'Log In',
    password: '',
    verifyPassword: '',
    email: '',
    userNamePlaceHolder: '',
    description:'',
    errorStatusPassword: false,
    errorMsgPassword:'',
    errorStatusEmail: false,
    errorMsgEmail:''
   }

  showLogin = size => () => {
    this.setState({
      size,
      open: true,
      activeItem: 'Log In',
      header: 'Log In to Color Pic',
      button: 'Log In',
      userNamePlaceHolder:'email@email.com',
      description: ''
    })
  }

  showSignup = size => () => {
    this.setState({
      size,
      open: true,
      activeItem: 'Sign Up',
      header: 'Join Color Pic Today',
      button: 'Sign Up',
      userNamePlaceHolder: 'Register new user',
      description:'Register to access more features'
    })
  }

  close = () => {
    this.resetDefaults();
    // clear all inputs when modal closes
    this.setState({
      open: false,
      username: '',
      password: '',
      verifyPassword: '',
      email: ''
    });
  }

  handleLogInClick = (e, { name }) => {
    this.setState({
      activeItem: name,
      button: name,
      header: 'Log In to Color Pic',
      username: '',
      password: '',
      verifyPassword: '',
      email: '',
      userNamePlaceHolder:'Username',
      description:''
    });
  }

  handleSignUpClick = (e, { name }) => {
    this.setState({
      activeItem: name,
      button: name,
      header: 'Sign Up for Color Pic',
      username: '',
      password: '',
      verifyPassword: '',
      email: '',
      userNamePlaceHolder: 'Register New User',
      description:'Register to access more features'
    });
  }

  // clear all error messages
  resetDefaults() {
    if (this.state.activeItem === 'Sign Up') {
      this.setState({ description:'Register to access more features' });
    }

    this.setState({
      errorStatusPassword: false,
      errorStatusEmail: false,
      errorMsgEmail: '',
      errorMsgPassword: ''
    });
  }

  inputPassword(event) {
    this.setState({ password: event.target.value });
    this.resetDefaults();
  }

  inputVerifyPassword(event) {
    this.setState({ verifyPassword: event.target.value });
    this.resetDefaults();
  }

  inputEmail(event) {
    this.setState({ email: event.target.value });
    this.resetDefaults();
  }

  buttonSubmit(event) {
    event.preventDefault();
    // If all fields are empty
    if (this.state.email === '' && this.state.password === '' && this.state.verifyPassword === '' ) {
      this.setState({
        errorStatusEmail: true,
        errorStatusPassword: true,
        errorMsgEmail:'Email cannot be empty',
        errorMsgPassword:'Passwords cannot be empty',
      });
      return
    }

    // If email is empty
    if (this.state.email === '') {
      this.setState({
        errorMsgEmail:'Email cannot be empty',
        errorStatusEmail: true
      });
      return
    }

    // // Validate Email
    // if(Isemail.validate(this.state.email) === false) {
    //   this.setState({
    //     errorStatusEmail: 'error',
    //     errorMsgEmail:'Not a valid email',
    //   });
    //   return
    // }

    // If either password is empty
    if (this.state.password === '' || this.state.verifyPassword === '') {
      this.setState({
        errorMsgPassword:'Passwords cannot be empty',
        errorStatusPassword: true
      });
      return
    }

    // If passwords do not match show error message
    if (this.state.password !== this.state.verifyPassword) {
      this.setState({
        errorMsgPassword:'Passwords do not match',
        errorStatusPassword: true
      });
      return
    }

    if(this.state.activeItem === 'Sign Up'){
      this.props.registerUser(this.state.email, this.state.password);
    }

    if(this.state.activeItem === 'Log In'){
      console.log('log me in');
    }
  }

  // Only verifyPassword for Sign Up
  verifyPasswordRender() {
    if(this.state.activeItem === 'Sign Up') {
      return(
        <div>
          <label className="login-label">Verify Password</label>
          <Input
            type="password"
            className="login-input"
            placeholder="Password"
            autoComplete="on"
            value={this.state.verifyPassword}
            onChange={event => this.inputVerifyPassword(event)}
            error={this.state.errorStatusPassword}
          />
          <p style={{color: 'red'}}>{this.state.errorMsgPassword}</p>
        </div>
      );
    }
  }

  render() {
    const {
      open,
      size,
      activeItem,
      button,
      header,
      email,
      password,
      verifyPassword,
      userNamePlaceHolder,
      errorStatusPassword,
      errorStatusEmail,
      description,
      errorMsgEmail,
      errorMsgPassword,
      descriptionColor
    } = this.state

    return (
      <div>
        <Button onClick={this.showLogin('tiny')}>
          Log In
        </Button>
        <Button onClick={this.showSignup('tiny')} style={{ marginLeft: '0.5em', marginRight: '1rem' }}>
          Sign Up
        </Button>
        <Modal size={size} open={open} onClose={this.close} closeIcon>
          <div className="login-header">
            <h2>{header}</h2>
          </div>
          <Menu className="menu-overide" pointing secondary>
            <Menu.Item
              name='Log In'
              active={activeItem === 'Log In'}
              onClick={this.handleLogInClick}
            />
            <Menu.Item
              name='Sign Up'
              active={activeItem === 'Sign Up'}
              onClick={this.handleSignUpClick}
            />
          </Menu>
          <Modal.Content>
            <div className="login-description">
              <p>{description}</p>
            </div>
            <form>
              <label className="login-label">Email</label>
              <Input
                className="login-input"
                placeholder={userNamePlaceHolder}
                value={email}
                autoComplete="on"
                onChange={event => this.inputEmail(event)}
                error={errorStatusEmail}
              />
              <p style={{"color": "red"}}>{errorMsgEmail}</p>
              <label className="login-label">Password</label>
              <Input
                type="password"
                className="login-input"
                placeholder="Password"
                autoComplete="on"
                value={password}
                onChange={event => this.inputPassword(event)}
                error={errorStatusPassword}
              />
              {this.verifyPasswordRender()}
              <Button
                className="login-btn"
                color="blue"
                onClick={event => this.buttonSubmit(event)}
              >
                {button}
              </Button>
            </form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default connect( null, {registerUser })(LoginModal);
