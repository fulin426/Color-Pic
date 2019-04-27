import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { newColorPalette } from "../actions/MyPaletteAPI";
import { Button, Modal, Input, Header, Icon } from "semantic-ui-react";

class SavePalette extends Component {
  state = {
    input: "",
    open: false,
    error: false,
    placeHolder: "New Palette Name..."
  };

  handleInput(event) {
    // set error to false as long as there's user input
    this.setState({
      input: event.target.value,
      error: false,
      placeHolder: "New Palette Name..."
    });
  }

  // Modal Settings
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true });
  };

  close = () => {
    // reset to default state on close
    this.setState({
      input: "",
      open: false,
      error: false
    });
  };

  // Send new color set to database
  handleConfirmClick() {
    this.props.newColorPalette(
      {
        url: this.props.url,
        email: this.props.email,
        title: this.state.input,
        colors: this.props.colors
      },
      this.props.token
    );
    this.close();
  }

  setError() {
    if (this.state.input === "") {
      this.setState({
        error: true,
        placeHolder: "Title Required..."
      });
    }

    if (this.state.input.length >= 40) {
      this.setState({
        error: true,
        placeHolder: "Over Max Characters Allowed"
      });
    }
  }

  renderConfirmButton() {
    // set error to true if empty title input
    if (this.state.input === "" || this.state.input.length >= 40) {
      return (
        <Button
          onClick={() => this.setError()}
          color="blue"
          style={{ opacity: 0.7 }}
        >
          Create New
        </Button>
      );
    } else {
      return (
        <Link to="/MyPallettes">
          <Button
            color="blue"
            style={{ marginLeft: 0.75 + "em" }}
            onClick={() => this.handleConfirmClick()}
          >
            Create New
          </Button>
        </Link>
      );
    }
  }

  colorsRender() {
    const ColorsList = this.props.colors.map((color, index) => (
      <div key={color.hexColor + index} className="color-square-container">
        <div
          className="color-square"
          style={{
            backgroundColor: color.hexColor,
            opacity: color.alpha
          }}
        />
        <p>{color.hexColor}</p>
      </div>
    ));
    return ColorsList;
  }

  render() {
    const {
      open,
      closeOnEscape,
      closeOnDimmerClick,
      error,
      placeHolder
    } = this.state;

    return (
      <div>
        <Button
          onClick={this.closeConfigShow(true, false)}
          className="save-pallette"
          icon
        >
          <Icon name="save" /> Save Palette
        </Button>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
          closeIcon
        >
          <Modal.Content>
            <Header as="h2">Save Palette</Header>
            <Input
              className="savepalette-modal-input"
              label="Title"
              value={this.state.input}
              onChange={event => this.handleInput(event)}
              placeholder={placeHolder}
              error={error}
            />
            <div className="colors-render">{this.colorsRender()}</div>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => this.close()}>Cancel</Button>
            {this.renderConfirmButton()}
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    url: state.url.url,
    email: state.auth.user.email,
    colors: state.colors.colors,
    token: state.auth.token
  };
};

export default connect(
  mapStateToProps,
  { newColorPalette }
)(SavePalette);
