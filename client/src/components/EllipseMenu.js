import React, { Component } from "react";
import { Link } from "react-router-dom";
import EditModal from "./EditModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import { Dropdown, Icon, Menu } from "semantic-ui-react";

class DropdownExampleIcon extends Component {
  state = {
    open: false,
    openEdit: false,
  };

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

  openEdit() {
    if (this.state.openEdit === true) {
      return;
    } else {
      this.setState({ openEdit: true });
    }
  }

  closeEdit() {
    this.setState({ openEdit: false });
  }

  render() {
    return (
      <Menu className="menu-parent">
        <Menu.Menu position="right">
          <Dropdown
            simple
            className="icon menu-styles"
            icon="ellipsis vertical"
          >
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => this.openEdit()}>
                <EditModal
                  open={this.state.openEdit}
                  openEdit={() => this.openEdit()}
                  closeEdit={() => this.closeEdit()}
                  title={this.props.title}
                  objectID={this.props.objectID}
                  colorPosition={this.props.colorPosition}
                  selectedSet={this.props.selectedSet}
                />
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
        </Menu.Menu>
      </Menu>
    );
  }
}

export default DropdownExampleIcon;

{/* <Link to="/Edit">
  <Dropdown.Item style={{ padding: "0px" }}>
    <p className="edit-item-style">
      <Icon name="edit" />
      <div className="edit-text">Edit</div>
    </p>
  </Dropdown.Item>
</Link> */}
