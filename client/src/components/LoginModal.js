import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Input, Menu } from 'semantic-ui-react';
import { registerUser } from '../actions/authActions';
import { loginUser } from '../actions/authActions';
const Isemail = require('isemail');
//possibly split into two components login and sign up
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
    this.resetDefaults();
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
    this.resetDefaults();
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

  handleInput(event, key) {
    this.setState({ [key]: event.target.value });
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

    // If either password is empty
    if (this.state.activeItem === 'Sign Up' && this.state.password === '') {
      this.setState({
        errorMsgPassword:'Password cannot be empty',
        errorStatusPassword: true
      });
      return
    }

    // If passwords do not match show error message
    if (this.state.activeItem === 'Sign Up' && this.state.password !== this.state.verifyPassword) {
      this.setState({
        errorMsgPassword:'Passwords do not match',
        errorStatusPassword: true
      });
      return
    }

    // Validate Email
    if(this.state.activeItem === 'Sign Up' && Isemail.validate(this.state.email) === false) {
      this.setState({
        errorStatusEmail: 'error',
        errorMsgEmail:'Not a valid email',
      });
      return
    }


    if(this.state.activeItem === 'Sign Up'){
      this.props.registerUser(this.state.email, this.state.password);
      this.close();
    }

    if(this.state.activeItem === 'Log In'){
      this.props.loginUser(this.state.email, this.state.password);
      this.close();
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
            onChange={event => this.handleInput(event, 'verifyPassword')}
            error={this.state.errorStatusPassword}
          />
        </div>
      );
    }
  }

  buttonTwoRender() {
    if (this.props.buttonTwo !== undefined) {
      return(
        <Button onClick={this.showSignup('tiny')} style={{ marginLeft: '0.5em', marginRight: '1rem' }}>
          {this.props.buttonTwo}
        </Button>
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
      userNamePlaceHolder,
      errorStatusPassword,
      errorStatusEmail,
      description,
      errorMsgEmail,
    } = this.state

    return (
      <div>
        <Button onClick={this.showLogin('tiny')}>
          {this.props.buttonOne}
        </Button>
        {this.buttonTwoRender()}
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
            <form onSubmit={event => this.buttonSubmit(event)}>
              <label className="login-label">Email</label>
              <Input
                className="login-input"
                placeholder={userNamePlaceHolder}
                value={email}
                autoComplete="on"
                onChange={event => this.handleInput(event, 'email')}
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
                onChange={event => this.handleInput(event, 'password')}
                error={errorStatusPassword}
              />
              <p style={{color: 'red'}}>{this.state.errorMsgPassword}</p>
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

export default connect( null, {registerUser, loginUser })(LoginModal);
