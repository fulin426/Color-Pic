import React, { Component } from 'react'
import { Button, Modal, Input, Menu, Header } from 'semantic-ui-react'

class LoginModal extends Component {
  state = {
    open: false,
    activeItem: 'Log In',
    header: 'Log In to Color Pic',
    button: 'Log In',
    username: '',
    password: ''
   }

  showLogin = size => () => {
    this.setState({
      size,
      open: true,
      activeItem: 'Log In',
      header: 'Log In to Color Pic',
      button: 'Log In'
    })
  }

  showSignup = size => () => {
    this.setState({
      size,
      open: true,
      activeItem: 'Sign Up',
      header: 'Sign Up for Color Pic',
      button: 'Sign Up'
    })
  }

  close = () => this.setState({ open: false })

  handleLogInClick = (e, { name }) => {
    this.setState({
      activeItem: name,
      button: name,
      header: 'Log In to Color Pic'
    });
  }

  handleSignUpClick = (e, { name }) => {
    this.setState({
      activeItem: name,
      button: name,
      header: 'Sign Up for Color Pic'
    });
  }

  inputUsername(event) {
    this.setState({ username: event.target.value });
  }

  inputPassword(event) {
    this.setState({ password: event.target.value });
  }

  buttonSubmit(event) {
    event.preventDefault();
    console.log('submit that login');
  }
  render() {
    const {
      open,
      size,
      activeItem,
      button,
      header,
      username,
      password
    } = this.state

    return (
      <div>
        <Button onClick={this.showLogin('tiny')}>Log In</Button>
        <Button
          onClick={this.showSignup('tiny')}
          style={{ marginLeft: '0.5em' }}
        >
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
            <form>
              <label className="login-label">Username</label>
              <Input
                className="login-input"
                placeholder='Username'
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
              <div className="login-btn">
                <Button
                  color="blue"
                  onClick={event => this.buttonSubmit(event)}
                >
                  {button}
                </Button>
              </div>
            </form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default LoginModal;
