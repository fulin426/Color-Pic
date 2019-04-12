import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Menu, Responsive, Segment, Visibility } from 'semantic-ui-react'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    // const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            style={{ minHeight: 80, padding: '1em 0em' }}
            vertical
          >
            <Menu size='large'>
              <Container>
                <Link to="/">
                  <Menu.Item as='a'>Color Pic</Menu.Item>
                </Link>
                <Link to="/Generate">
                  <Menu.Item as='a'>Generate</Menu.Item>
                </Link>
                <Link to="/MyPallettes">
                  <Menu.Item as='a'>My Palettes</Menu.Item>
                </Link>
                <Menu.Item position='right'>
                  <Button as='a'>
                    Log in
                  </Button>
                  <Button as='a' style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer;
