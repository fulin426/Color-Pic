import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

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
          Color Pic
        </Menu.Item>
        <Menu.Item
          name='My Palettes'
          active={activeItem === 'My Palettes'}
          onClick={this.handleItemClick}
        >
          My Palettes
        </Menu.Item>

        <Menu.Item
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        >
          About
        </Menu.Item>
      </Menu>
    )
  }
}

export default HeaderMenu;
