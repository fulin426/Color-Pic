import React, { Component } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { Dropdown, Icon } from "semantic-ui-react";

class DropdownExampleIcon extends Component {
  state = { open: false };

  openModal() {
    // Default padding cannot be overriden easily, closes dropdown by default
    // Set dropdown item onClick open just in case user clicks edges
    // Only set to true if open state is already false i.e closed
    if(this.state.open === true) {
      return
    } else {
      this.setState({ open: true });
    }
  }

  closeModal() {
    this.setState({ open: false });
  }
  render() {
    return (
      <Dropdown
        className="icon menu-styles"
        icon="ellipsis vertical"
        style={{ float: "right" }}
      >
        <Dropdown.Menu >
          <Dropdown.Item>
            <p className="item-style"><Icon name="edit" />Edit</p>
          </Dropdown.Item>
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
    );
  }
}

export default DropdownExampleIcon;
