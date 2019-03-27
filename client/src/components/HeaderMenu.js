import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class HeaderMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <Menu.Item
          name='Color Pic'
          active={activeItem === 'Color Pic'}
          onClick={this.handleItemClick}
        >
          <Link to="/">
            Color Pic
          </Link>
        </Menu.Item>
        <Menu.Item
          name='My Palettes'
          active={activeItem === 'My Palettes'}
          onClick={this.handleItemClick}
        >
          <Link to="/MyPallettes">
           My Palettes
          </Link>
        </Menu.Item>

        <Menu.Item
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        >
          <Link to="/About">
            About
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

export default HeaderMenu;
