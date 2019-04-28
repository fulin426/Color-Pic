import React, { Component } from "react";
import { connect } from "react-redux";
import { getColors } from "../actions/MyPaletteAPI";
import { logoutUser } from "../actions/authActions";
import EditModal from "./EditModal";
import EllipseMenu from "./EllipseMenu";
import "./css/myPalettes.css";
import { Header, Container, Grid, Image } from "semantic-ui-react";

class MyPallettes extends Component {
  componentDidMount() {
    this.props.getColors(this.props.email);
  }

  componentDidUpdate(prevProps) {
    // Email isn't always loaded right when component is mounted
    if (
      this.props.email !== prevProps.email &&
      this.props.email !== undefined
    ) {
      this.props.getColors(this.props.email);
    }
  }

  // Renders one set of 5 colors then insert into renderPalettes()
  renderOneColorSet(colors) {
    const colorSet = colors.map((color, index) => (
      <div className="color-square-container" key={color.hexColor + index}>
        <div
          className="color-square"
          style={{ backgroundColor: color.hexColor, opacity: color.alpha }}
        />
      </div>
    ));
    return <div style={{ margin: "0px auto" }}>{colorSet}</div>;
  }

  renderPalettes() {
    if (this.props.myPalettes !== undefined) {
      const Palettes = this.props.myPalettes.map((palette, index) => (
        <Grid.Column key={palette._id}>
          <div className="palette-container">
            <h5>
              {palette.title}
              {/* <EditModal
                title={palette.title}
                objectID={palette._id}
                colorPosition={index}
                selectedSet={palette.colors}
              /> */}
              <EllipseMenu
                title={palette.title}
                objectID={palette._id}
                colorPosition={index}
                selectedSet={palette.colors}
              />
            </h5>
            <Image src={palette.url} centered />
            {this.renderOneColorSet(palette.colors)}
          </div>
        </Grid.Column>
      ));
      return Palettes;
    }
  }

  render() {
    return (
      <Container>
        <Header as="h1" className="palette-header">
          My Color Palettes
        </Header>
        <Grid stackable columns={3}>
          {this.renderPalettes()}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    myPalettes: state.myPalettes.Data,
    addColor: state.myPalettes.AddColor,
    updateColor: state.myPalettes.UpdateColor,
    loading: state.myPalettes.loading,
    email: state.auth.user.email
  };
};

export default connect(
  mapStateToProps,
  { getColors, logoutUser }
)(MyPallettes);
