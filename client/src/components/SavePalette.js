import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Modal, Input, Header } from 'semantic-ui-react'

class SavePalette extends Component {
  state = { input: ''};

  handleInput (event) {
    console.log(event.target.value);
    this.setState({
      input: event.target.value
    });
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
    return (
      <Modal trigger={<Button>Save Palette</Button>} closeIcon>
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
          <Button color='green'>
            <Icon name='checkmark' /> Save
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    colors: state.colors.colors,
  };
};

export default connect(mapStateToProps, { })(SavePalette);
