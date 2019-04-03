import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Container, Grid } from 'semantic-ui-react';
import { getColors } from '../actions/MyPaletteAPI';
import ConfirmDelete from './ConfirmDeleteModal';

class MyPallettes extends Component {
  componentDidMount() {
    this.props.getColors();
  }

  //Renders one set of 5 colors then insert into renderPalettes()
  renderOneColorSet(colors) {
    const colorSet = colors.map(color =>
      <div className="color-square-container" key={color.hexColor}>
        <div
          className="color-square"
          style={{
            backgroundColor: color.hexColor,
            opacity: color.alpha
          }}
        />
      </div>
     );
     return colorSet;
  }

  renderPalettes() {
    if (this.props.myPalettes !== undefined) {
      const Palettes = this.props.myPalettes.map(palette =>
        <Grid.Column
          key={palette._id}
          mobile={16}
          computer={8}
        >
          <div className="palette-container">
            <p>
              {palette.title}
              <ConfirmDelete objectID={palette._id}/>
            </p>
            {this.renderOneColorSet(palette.colors)}
          </div>
        </Grid.Column>
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
        <Grid>
          {this.renderPalettes()}
        </Grid>
      </Container>

    );
  }
}

const mapStateToProps = state => {
  return {
    myPalettes: state.myPalettes.Data,
    addColor: state.myPalettes.AddColor
  };
};

export default connect (mapStateToProps, { getColors })(MyPallettes);
