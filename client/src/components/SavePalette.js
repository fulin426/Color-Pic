import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newColorPalette } from '../actions';
import { Button, Icon, Modal, Input, Header } from 'semantic-ui-react'

class SavePalette extends Component {
  state = {
    input: '',
    open: false
  };
  // Controled Component for Input
  handleInput (event) {
    this.setState({
      input: event.target.value
    });
  }
  // Modal Settings
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
  this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }
  // Close Modal
  close() {
    this.setState({
      open: false
    });
  }
  // Send new color set to database
  handleConfirmClick() {
    this.props.newColorPalette({
      title: this.state.input,
      colors: this.props.colors
    })
    this.close();
  }

  colorsRender() {
    const ColorsList = this.props.colors.map((color,index) =>
      <div key={color.hexColor} className="color-square-container">
        <div
          className="color-square"
          style={{
            backgroundColor: color.hexColor,
            opacity: color.alpha
          }}
        />
        <p>{color.hexColor}</p>
      </div>
    );
    return(ColorsList);
  }

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state

    return (
      <div>
        <Button onClick={this.closeConfigShow(true, false)}>Save Palette</Button>
        <Modal
          open={open}
          closeOnEscape={closeOnEscape}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Content>
            <Header as="h2">
              Save Palette
            </Header>
            <Input
              label="Title"
              value={this.state.input}
              onChange={event => this.handleInput(event)}
              placeholder='Insert Palette Name'/>
            <div>
              {this.colorsRender()}
            </div>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color='red'
              onClick={() => this.close()}
            >
              Cancel
            </Button>
            <Button
              color='green'
              onClick={() => this.handleConfirmClick()}
            >
              Create New
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    colors: state.colors.colors,
  };
};

export default connect(mapStateToProps, { newColorPalette })(SavePalette);
