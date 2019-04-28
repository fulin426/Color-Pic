import React, { Component } from "react";
import { Link } from "react-router-dom";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { Dropdown, Icon, Menu } from "semantic-ui-react";

class DropdownExampleIcon extends Component {
  state = { open: false };

  openModal() {
    // Default padding cannot be overriden easily, closes dropdown by default
    // Set dropdown item onClick open just in case user clicks edges
    // Only set to true if open state is already false i.e closed
    if (this.state.open === true) {
      return;
    } else {
      this.setState({ open: true });
    }
  }

  closeModal() {
    this.setState({ open: false });
  }
  render() {
    return (
      <Menu className="menu-parent">
        <Menu.Menu position="right">
          <Dropdown
            simple
            direction="right"
            className="icon menu-styles"
            icon="ellipsis vertical"
          >
            <Dropdown.Menu>
              {/* <Link to="/Edit">
                  <Dropdown.Item>
                    <p className="edit-item-style">
                      <Icon name="edit" />
                      Edit
                    </p>
                  </Dropdown.Item>
                </Link> */}
              <Dropdown.Item onClick={() => this.openModal()}>
                <ConfirmDeleteModal
                  title={this.props.title}
                  objectID={this.props.objectID}
                  open={this.state.open}
                  openModal={() => this.openModal()}
                  close={() => this.closeModal()}
                />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default DropdownExampleIcon;
