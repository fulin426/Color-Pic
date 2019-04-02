import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Container } from 'semantic-ui-react';
import { getColors } from '../actions';
import ConfirmDelete from './ConfirmDeleteModal';

class MyPallettes extends Component {
  componentDidMount() {
    // get colors from database
    this.props.getColors();
  }

  //Renders one set of 5 colors then insert into renderPalettes()
  renderOneColorSet(colors) {
    const colorSet = colors.map(color =>
      <div
        key={color.hexColor}
        className="my-palette"
        style={{
          backgroundColor: color.hexColor,
          opacity: color.alpha
        }}
      />
     );
     return colorSet;
  }

  renderPalettes() {
    if (this.props.myPalettes !== undefined) {
      console.log(this.props.myPalettes[0].colors[0].hexColor);

      const Palettes = this.props.myPalettes.map(palette =>
        <div className="palette-container" key={palette._id}>
          <p>{palette.title} <ConfirmDelete /></p>
          {this.renderOneColorSet(palette.colors)}
        </div>
      );
      return Palettes;
    }
  }

  render() {
    return(
      <Container>
        <Header as="h1" className="header">
          My Color Palettes
        </Header>
        {this.renderPalettes()}
      </Container>

    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    myPalettes: state.myPalettes.Data
  };
};

export default connect (mapStateToProps, { getColors })(MyPallettes);
