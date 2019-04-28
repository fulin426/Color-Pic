import React, { Component } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import EditModal from "./EditModal";
import { Dropdown, Icon } from "semantic-ui-react";

class DropdownExampleIcon extends Component {
  state = { open: false };

  openModal() {
    this.setState({ open: true });
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
          <Dropdown.Item style={{ padding: '0px'}}>
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
