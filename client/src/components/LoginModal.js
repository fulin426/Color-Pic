import React, { Component } from 'react';
import { Button, Modal, Input, Menu, Header } from 'semantic-ui-react';

class LoginModal extends Component {
  state = {
    open: false,
    activeItem: 'Log In',
    header: 'Log In to Color Pic',
    button: 'Log In',
    username: '',
    password: '',
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
      userNamePlaceHolder:'Username',
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

  inputUsername(event) {
    this.setState({ username: event.target.value });
  }

  inputPassword(event) {
    this.setState({ password: event.target.value });
  }

  inputEmail(event) {
    this.setState({ email: event.target.value });
  }

  buttonSubmit(event) {
    event.preventDefault();
    console.log('submit that login');
  }

  emailRender() {
    // Only show email for sign up
    if(this.state.activeItem === 'Sign Up') {
      return(
        <div>
          <label className="login-label">Email</label>
          <Input
            type='email'
            className="login-input"
            placeholder='email@example.com'
            value={this.state.email}
            onChange={event => this.inputEmail(event)}
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
      username,
      password,
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
              <label className="login-label">Username</label>
              <Input
                className="login-input"
                placeholder={userNamePlaceHolder}
                value={username}
                onChange={event => this.inputUsername(event)}
              />
              <label className="login-label">Password</label>
              <Input
                type='password'
                className="login-input"
                placeholder='Password'
                value={password}
                onChange={event => this.inputPassword(event)}
              />
              {this.emailRender()}
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
