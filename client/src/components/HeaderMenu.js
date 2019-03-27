import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class HeaderMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    // anchor tag is in semantic ui componnent, create seperate with CSS
    return (
      <Menu stackable>
        <Link to="/">
        <Menu.Item
          name='Color Pic'
          active={activeItem === 'Color Pic'}
          onClick={this.handleItemClick}
        >
          Color Pic
        </Menu.Item>
        </Link>
        <Link to="/MyPallettes">
        <Menu.Item
          name='My Palettes'
          active={activeItem === 'My Palettes'}
          onClick={this.handleItemClick}
        >
           My Palettes
        </Menu.Item>
        </Link>
        <Link to="/About">
          <Menu.Item
            name='About'
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
          >
            About
          </Menu.Item>
        </Link>
      </Menu>
    )
  }
}

export default HeaderMenu;
