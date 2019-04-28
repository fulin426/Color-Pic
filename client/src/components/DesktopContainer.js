import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import Logout from "./Logout";
import { logoutUser } from "../actions/authActions";
import {
  Menu,
  Responsive,
  Segment,
  Visibility,
  Dimmer,
  Loader
} from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => {
    this.setState({ fixed: false });
  };
  showFixedMenu = () => {
    this.setState({ fixed: true });
  };

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

  myPalettesRender() {
    if (this.props.Authenticated === true) {
      return (
        <Menu.Item as={Link} to="/MyPallettes">
          <h5>My Palettes</h5>
        </Menu.Item>
      );
    }
  }

  renderLoader() {
    if (this.props.isLoading === true) {
      return (
        <Dimmer active inverted>
          <Loader size="small" inverted />
        </Dimmer>
      );
    } else {
      return null;
    }
  }

  render() {
    const { children } = this.props;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment className="menu-container" textAlign="center" vertical>
            <Menu className="menu-small" size="small" borderless>
              <Menu.Item as={Link} to="/">
                <h5>Color Pic</h5>
              </Menu.Item>
              <Menu.Item as={Link} to="/Generate">
                <h5>Generate</h5>
              </Menu.Item>
              {this.myPalettesRender()}
              <Menu.Item position="right">
                {this.loginRender()}
                {this.renderLoader()}
              </Menu.Item>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

const mapStateToProps = state => {
  return {
    Authenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading
  };
};

export default connect(
  mapStateToProps,
  { logoutUser }
)(DesktopContainer);
