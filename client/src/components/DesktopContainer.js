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
                <Menu.Item as={Link} to='/'>Color Pic</Menu.Item>
                <Menu.Item as={Link} to='/Generate'>Generate</Menu.Item>
                <Menu.Item as={Link} to='/MyPallettes'>My Palettes</Menu.Item>
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
