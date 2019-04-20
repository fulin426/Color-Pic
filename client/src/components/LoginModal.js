import React, { Component } from 'react';
import { Button, Modal, Input, Menu } from 'semantic-ui-react';

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
    description:''
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
    this.setState({
      open: false,
      username: '',
      password: '',
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
      email: '',
      userNamePlaceHolder: 'Register New User',
      description:'Register to access more features'
    });
  }

  inputPassword(event) {
    this.setState({ password: event.target.value });
  }

  inputVerifyPassword(event) {
    this.setState({ verifyPassword: event.target.value });
  }

  inputEmail(event) {
    this.setState({ email: event.target.value });
  }

  buttonSubmit(event) {
    event.preventDefault();
    console.log('submit that login');
  }

  verifyPasswordRender() {
    // Only show email for sign up
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
          />
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
      description
    } = this.state

    return (
      <div>
        <Button onClick={this.showLogin('tiny')}>
          Log In
        </Button>
        <Button onClick={this.showSignup('tiny')} style={{ marginLeft: '0.5em', marginRight: '1rem' }}>
          Sign Up
        </Button>
        <Modal size={size} open={open} onClose={this.close}>
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
              />
              <label className="login-label">Password</label>
              <Input
                type="password"
                className="login-input"
                placeholder="Password"
                autoComplete="on"
                value={password}
                onChange={event => this.inputPassword(event)}
              />
              {this.verifyPasswordRender()}
              <Button className="login-btn" color="blue" onClick={event => this.buttonSubmit(event)}>
                {button}
              </Button>
            </form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default LoginModal;
