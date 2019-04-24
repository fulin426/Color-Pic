import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import Logout from './Logout';
import { logoutUser } from '../actions/authActions';
import {
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar
} from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  loginRender() {
    if (this.props.Authenticated === true) {
      return <Logout />;
    } else {
      return (
        // Pass down button name depending on modal is used
        <LoginModal buttonOne="Log In" buttonTwo="Sign up" />
      );
    }
  }

  myPalettesMenuItemRender() {
    if (this.props.Authenticated === true) {
      return(
        <Menu.Item as={Link} to='/MyPallettes'>My Palettes</Menu.Item>
      );
    }
  }

  sideBarStyles() {
    if (this.props.Authenticated === true) {
      return({ minHeight: 122, padding: '1em 0em' });
    }
    else {
      return({ minHeight: 82, padding: '0em 0em' })
    }
  }
  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as={Link} to='/'>Color Pic</Menu.Item>
          <Menu.Item as={Link} to='/Generate'>Generate</Menu.Item>
          {this.myPalettesMenuItemRender()}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            textAlign='center'
            style={this.sideBarStyles()}
            vertical
          >
            <Container>
              <Menu
                pointing
                secondary
                className="menu-small "
                size='large'
              >
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  {this.loginRender()}
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

const mapStateToProps = state => {
  return {
    Authenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps, { logoutUser })(MobileContainer);
